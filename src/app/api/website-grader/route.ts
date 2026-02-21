import { NextRequest, NextResponse } from "next/server";

type CheckStatus = "pass" | "fail" | "warn";
type Check = { label: string; status: CheckStatus; note: string };

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL required" }, { status: 400 });
    }

    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    let html = "";
    let fetchOk = false;
    let isHttps = false;
    let responseTime = 0;
    let statusCode = 0;

    // Actually fetch the website
    try {
      const start = Date.now();
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(fullUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; OnlyPlumbingSitesGrader/1.0)",
        },
        redirect: "follow",
      });

      clearTimeout(timeout);
      responseTime = Date.now() - start;
      statusCode = res.status;
      isHttps = res.url.startsWith("https://");
      html = await res.text();
      fetchOk = res.ok;
    } catch (fetchErr: unknown) {
      // Try http:// fallback if https:// failed
      if (fullUrl.startsWith("https://")) {
        try {
          const httpUrl = fullUrl.replace("https://", "http://");
          const start = Date.now();
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(httpUrl, {
            signal: controller.signal,
            headers: {
              "User-Agent":
                "Mozilla/5.0 (compatible; OnlyPlumbingSitesGrader/1.0)",
            },
            redirect: "follow",
          });

          clearTimeout(timeout);
          responseTime = Date.now() - start;
          statusCode = res.status;
          isHttps = res.url.startsWith("https://");
          html = await res.text();
          fetchOk = res.ok;
        } catch {
          return NextResponse.json({
            error:
              "We couldn't reach that website. Please check the URL and make sure the site is live.",
          });
        }
      } else {
        return NextResponse.json({
          error:
            "We couldn't reach that website. Please check the URL and make sure the site is live.",
        });
      }
    }

    if (!fetchOk || !html) {
      return NextResponse.json({
        error: `We reached the server but got an error (HTTP ${statusCode}). Make sure the URL is correct.`,
      });
    }

    const lower = html.toLowerCase();
    const checks: Check[] = [];

    // 1. HTTPS
    checks.push({
      label: "HTTPS (SSL Certificate)",
      status: isHttps ? "pass" : "fail",
      note: isHttps
        ? "Your site uses HTTPS — good for security and Google rankings."
        : "Your site is not using HTTPS. Google flags non-secure sites and ranks them lower. This is critical to fix.",
    });

    // 2. Mobile viewport meta tag
    const hasViewport = lower.includes('name="viewport"') || lower.includes("name='viewport'");
    checks.push({
      label: "Mobile Viewport Tag",
      status: hasViewport ? "pass" : "fail",
      note: hasViewport
        ? "Your site has a mobile viewport tag — it should render correctly on phones."
        : "No mobile viewport meta tag found. Your site may not display properly on phones, where 60%+ of plumbing searches happen.",
    });

    // 3. Phone number detection
    const phoneRegex = /(?:tel:|href="tel:)[\d\-+().]+/gi;
    const hasClickToCall = phoneRegex.test(html);
    const hasPhoneNumber = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(html);
    checks.push({
      label: "Click-to-Call Phone Link",
      status: hasClickToCall ? "pass" : hasPhoneNumber ? "warn" : "fail",
      note: hasClickToCall
        ? "Your site has a clickable phone link (tel: link) — mobile users can tap to call."
        : hasPhoneNumber
        ? "We found a phone number on your site, but it's not a clickable tel: link. Mobile users can't tap to call directly."
        : "No phone number or click-to-call link detected. For a plumbing company, this is the #1 conversion element you need.",
    });

    // 4. Title tag
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";
    const hasGoodTitle = title.length > 10 && title.length < 70;
    const titleHasPlumbing = /plumb/i.test(title);
    checks.push({
      label: "SEO Title Tag",
      status: hasGoodTitle && titleHasPlumbing ? "pass" : hasGoodTitle ? "warn" : "fail",
      note: !title
        ? "No title tag found. This is one of the most important SEO elements — Google uses it as your search result headline."
        : !hasGoodTitle
        ? `Your title tag is ${title.length < 10 ? "too short" : "too long"} (${title.length} characters). Ideal length is 30-60 characters.`
        : !titleHasPlumbing
        ? `Title found: "${title.substring(0, 60)}..." but it doesn't mention plumbing. Including your core service in the title is critical for ranking.`
        : `Good title tag found with plumbing keywords: "${title.substring(0, 60)}${title.length > 60 ? "..." : ""}"`,
    });

    // 5. Meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : "";
    checks.push({
      label: "Meta Description",
      status: desc.length >= 50 && desc.length <= 160 ? "pass" : desc ? "warn" : "fail",
      note: !desc
        ? "No meta description found. Google may generate one automatically, but you lose control of your search result snippet."
        : desc.length < 50
        ? `Meta description is too short (${desc.length} chars). Aim for 120-155 characters to maximize your search result real estate.`
        : desc.length > 160
        ? `Meta description is too long (${desc.length} chars) and will get truncated in search results. Aim for 120-155 characters.`
        : "Good meta description found with appropriate length.",
    });

    // 6. Schema / structured data
    const hasJsonLd = lower.includes("application/ld+json");
    const hasLocalBusiness = /localbusiness|plumb|homeandconstructionbusiness/i.test(html) && hasJsonLd;
    checks.push({
      label: "Schema Markup (Structured Data)",
      status: hasLocalBusiness ? "pass" : hasJsonLd ? "warn" : "fail",
      note: hasLocalBusiness
        ? "LocalBusiness or plumbing-related schema markup detected — this helps Google understand your business and can enable rich results."
        : hasJsonLd
        ? "Some structured data found, but we didn't detect LocalBusiness or plumbing-specific schema. Adding this helps you stand out in search results."
        : "No structured data (JSON-LD) detected. Schema markup helps Google understand your business type, services, and service area — critical for local SEO.",
    });

    // 7. Page speed (based on response time + HTML size)
    const htmlSizeKb = Math.round(html.length / 1024);
    const speedGood = responseTime < 2000;
    const speedOk = responseTime < 4000;
    checks.push({
      label: "Server Response Speed",
      status: speedGood ? "pass" : speedOk ? "warn" : "fail",
      note: speedGood
        ? `Server responded in ${responseTime}ms (${htmlSizeKb}KB HTML) — fast initial response.`
        : speedOk
        ? `Server responded in ${responseTime}ms — acceptable but could be faster. Slow sites lose 40% of visitors.`
        : `Server took ${responseTime}ms to respond — this is too slow. Visitors will leave before your site loads.`,
    });

    // 8. Heading structure
    const hasH1 = /<h1[\s>]/i.test(html);
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";
    checks.push({
      label: "H1 Heading Tag",
      status: hasH1 ? "pass" : "fail",
      note: hasH1
        ? `H1 heading found: "${h1Text.substring(0, 80)}${h1Text.length > 80 ? "..." : ""}". This is your page's main headline for SEO.`
        : "No H1 heading tag found. Every page needs exactly one H1 that includes your primary keyword.",
    });

    // 9. Images with alt text
    const imgTags = html.match(/<img[^>]+>/gi) || [];
    const imgsWithAlt = imgTags.filter((img) => /alt=["'][^"']+["']/i.test(img));
    const altRatio = imgTags.length > 0 ? imgsWithAlt.length / imgTags.length : 1;
    checks.push({
      label: "Image Alt Text",
      status: imgTags.length === 0 ? "warn" : altRatio >= 0.8 ? "pass" : altRatio >= 0.5 ? "warn" : "fail",
      note: imgTags.length === 0
        ? "No images detected on your homepage. Images with descriptive alt text help with SEO and accessibility."
        : altRatio >= 0.8
        ? `${imgsWithAlt.length} of ${imgTags.length} images have alt text — good for SEO and accessibility.`
        : `Only ${imgsWithAlt.length} of ${imgTags.length} images have alt text. Alt text helps Google index your images and is important for accessibility.`,
    });

    // 10. Social proof / reviews
    const hasReviews = /review|testimonial|5[\s-]star|google review|★|⭐/i.test(html);
    checks.push({
      label: "Reviews / Social Proof",
      status: hasReviews ? "pass" : "fail",
      note: hasReviews
        ? "Review or testimonial content detected on your site — social proof increases conversion rates by 20-30%."
        : "No reviews or testimonials detected on your homepage. Displaying Google reviews on your website is one of the easiest ways to increase conversions.",
    });

    // Calculate score
    const passCount = checks.filter((c) => c.status === "pass").length;
    const warnCount = checks.filter((c) => c.status === "warn").length;
    const score = Math.round(((passCount * 10 + warnCount * 5) / (checks.length * 10)) * 100);

    let grade = "F";
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C+";
    else if (score >= 60) grade = "C";
    else if (score >= 45) grade = "D";

    return NextResponse.json({ score, grade, checks });
  } catch (error) {
    console.error("Website grader error:", error);
    return NextResponse.json(
      { error: "Something went wrong analyzing that website. Please try again." },
      { status: 500 }
    );
  }
}
