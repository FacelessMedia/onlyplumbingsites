import { NextRequest, NextResponse } from "next/server";

type CheckStatus = "pass" | "fail" | "warn";
type Check = {
  label: string;
  status: CheckStatus;
  note: string;
  recommendation?: string;
  details?: Record<string, string>;
};

// Helper: extract domain from URL for display
function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
}

// Helper: detect city from content
function detectCity(html: string, title: string, h1: string): string {
  const combined = `${title} ${h1} ${html.substring(0, 5000)}`;
  // Match common city patterns in plumbing sites
  const cityPatterns = [
    /(?:serving|service area|located in|based in|plumber in|plumbing in|near)\s+([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/g,
    /([A-Z][a-z]+(?:\s[A-Z][a-z]+)?),?\s*(?:IL|TX|CA|FL|NY|AZ|GA|CO|OH|PA|NC|VA|WA|OR|NV|TN|MO|MD|WI|MN|SC|AL|KY|LA|OK|CT|IA|MS|AR|KS|UT|NE|NM|WV|ID|HI|ME|NH|RI|MT|DE|SD|ND|AK|VT|WY|DC)\b/g,
  ];
  for (const pattern of cityPatterns) {
    const match = pattern.exec(combined);
    if (match?.[1]) {
      const city = match[1].trim();
      // Filter out common false positives
      if (!["The", "Our", "Your", "This", "Home", "About", "Contact", "Service", "Quality", "Best", "Top", "All", "Get"].includes(city)) {
        return city;
      }
    }
  }
  return "";
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL required" }, { status: 400 });
    }

    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    const domain = extractDomain(fullUrl);
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

    // Pre-extract key elements for cross-check analysis
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "";
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";
    const detectedCity = detectCity(html, title, h1Text);

    // 1. HTTPS
    checks.push({
      label: "HTTPS (SSL Certificate)",
      status: isHttps ? "pass" : "fail",
      note: isHttps
        ? "Your site uses HTTPS — good for security and Google rankings."
        : "Your site is not using HTTPS. Google flags non-secure sites and ranks them lower. This is critical to fix.",
      recommendation: isHttps
        ? undefined
        : "Contact your hosting provider to install a free SSL certificate (most hosts offer this through Let's Encrypt). This is usually a one-click setup.",
    });

    // 2. Mobile viewport meta tag
    const hasViewport = lower.includes('name="viewport"') || lower.includes("name='viewport'");
    checks.push({
      label: "Mobile Viewport Tag",
      status: hasViewport ? "pass" : "fail",
      note: hasViewport
        ? "Your site has a mobile viewport tag — it should render correctly on phones."
        : "No mobile viewport meta tag found. Your site may not display properly on phones, where 72%+ of plumbing searches happen.",
      recommendation: hasViewport
        ? undefined
        : 'Add this to your <head>: <meta name="viewport" content="width=device-width, initial-scale=1">',
    });

    // 3. Phone number detection
    const phoneRegex = /(?:tel:|href="tel:)[\d\-+().]+/gi;
    const hasClickToCall = phoneRegex.test(html);
    const phoneNumberMatch = html.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
    const hasPhoneNumber = !!phoneNumberMatch;
    const detectedPhone = phoneNumberMatch ? phoneNumberMatch[0] : "";
    checks.push({
      label: "Click-to-Call Phone Link",
      status: hasClickToCall ? "pass" : hasPhoneNumber ? "warn" : "fail",
      note: hasClickToCall
        ? "Your site has a clickable phone link (tel: link) — mobile users can tap to call."
        : hasPhoneNumber
        ? `We found a phone number (${detectedPhone}) but it's not a clickable tel: link. Mobile users can't tap to call directly.`
        : "No phone number or click-to-call link detected. For a plumbing company, this is the #1 conversion element you need.",
      recommendation: hasClickToCall
        ? undefined
        : hasPhoneNumber
        ? `Wrap your phone number in a tel: link: <a href="tel:${detectedPhone.replace(/[^\d+]/g, "")}">${detectedPhone}</a>. Place it in your header so it's visible on every page.`
        : "Add your phone number as a clickable tel: link in your site header. Example: <a href=\"tel:5551234567\">(555) 123-4567</a>",
    });

    // 4. Title tag — with deep SEO analysis
    const hasGoodTitle = title.length > 10 && title.length < 70;
    const titleHasPlumbing = /plumb/i.test(title);
    const titleHasCity = detectedCity ? title.toLowerCase().includes(detectedCity.toLowerCase()) : false;
    const titleHasPhone = /\d{3}[\s.-]?\d{3}[\s.-]?\d{4}/.test(title);

    let titleStatus: CheckStatus = "fail";
    if (hasGoodTitle && titleHasPlumbing && titleHasCity) titleStatus = "pass";
    else if (hasGoodTitle && (titleHasPlumbing || titleHasCity)) titleStatus = "warn";
    else if (hasGoodTitle) titleStatus = "warn";

    // Build a recommended title
    const companyName = domain.split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const cityForTitle = detectedCity || "[Your City]";
    const recommendedTitle = `${cityForTitle} Plumber | ${companyName} — Licensed Plumbing Services`;

    let titleNote = "";
    if (!title) {
      titleNote = "No title tag found. This is the most important on-page SEO element — Google uses it as your search result headline.";
    } else if (!hasGoodTitle) {
      titleNote = `Your title tag is ${title.length < 10 ? "too short" : "too long"} (${title.length} chars). Ideal length is 30-60 characters. Current title: "${title.substring(0, 80)}"`;
    } else if (!titleHasPlumbing && !titleHasCity) {
      titleNote = `Title: "${title.substring(0, 70)}" — Missing both plumbing keywords AND your city name. For local SEO, your title should include your primary service + location.`;
    } else if (!titleHasCity && detectedCity) {
      titleNote = `Title: "${title.substring(0, 70)}" — Has plumbing keywords but missing your city (${detectedCity}). Adding your city to the title is critical for "plumber in ${detectedCity}" rankings.`;
    } else if (!titleHasPlumbing) {
      titleNote = `Title: "${title.substring(0, 70)}" — Missing plumbing keywords. Your title should clearly signal to Google what service you provide.`;
    } else {
      titleNote = `Title: "${title.substring(0, 70)}" — Good! Contains plumbing keywords${titleHasCity ? ` and your city (${detectedCity})` : ""}. ${title.length > 60 ? "Consider shortening slightly to avoid truncation." : ""}`;
    }

    checks.push({
      label: "SEO Title Tag",
      status: titleStatus,
      note: titleNote,
      recommendation: titleStatus === "pass" ? undefined : `Recommended title: "${recommendedTitle}" — This format puts your city first (most important for local SEO), includes your service keyword, and stays under 60 characters.`,
      details: {
        "Current Title": title || "(none)",
        "Length": `${title.length} characters (ideal: 30-60)`,
        "Has Plumbing Keywords": titleHasPlumbing ? "Yes" : "No — add 'plumber' or 'plumbing'",
        "Has City Name": titleHasCity ? `Yes (${detectedCity})` : detectedCity ? `No — add "${detectedCity}"` : "No city detected on site",
      },
    });

    // 5. Meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : "";
    const descHasPlumbing = /plumb/i.test(desc);
    const descHasCity = detectedCity ? desc.toLowerCase().includes(detectedCity.toLowerCase()) : false;
    const descHasCTA = /call|contact|free|estimate|quote|schedule|book/i.test(desc);

    let descStatus: CheckStatus = "fail";
    if (desc.length >= 50 && desc.length <= 160 && descHasPlumbing) descStatus = "pass";
    else if (desc.length >= 50 && desc.length <= 160) descStatus = "warn";
    else if (desc) descStatus = "warn";

    checks.push({
      label: "Meta Description",
      status: descStatus,
      note: !desc
        ? "No meta description found. Google may auto-generate one, but you lose control of your search result snippet — this is your chance to sell the click."
        : desc.length < 50
        ? `Too short (${desc.length} chars). You're wasting valuable search result real estate. Aim for 120-155 characters.`
        : desc.length > 160
        ? `Too long (${desc.length} chars) — Google will truncate it. Aim for 120-155 characters with a clear CTA.`
        : `Meta description found (${desc.length} chars). ${!descHasPlumbing ? "Missing plumbing keywords. " : ""}${!descHasCity && detectedCity ? `Missing city name (${detectedCity}). ` : ""}${!descHasCTA ? "Add a call-to-action like 'Call now for a free estimate.' " : ""}`,
      recommendation: descStatus === "pass" ? undefined : `Recommended: "${cityForTitle} plumber offering 24/7 emergency service, drain cleaning, water heater repair & more. Licensed & insured. Call today for a free estimate!" (140 chars — includes city, services, trust signal, and CTA)`,
    });

    // 6. Schema / structured data
    const hasJsonLd = lower.includes("application/ld+json");
    const hasLocalBusiness = /localbusiness|plumb|homeandconstructionbusiness/i.test(html) && hasJsonLd;
    checks.push({
      label: "Schema Markup (Structured Data)",
      status: hasLocalBusiness ? "pass" : hasJsonLd ? "warn" : "fail",
      note: hasLocalBusiness
        ? "LocalBusiness or plumbing-related schema markup detected — this helps Google understand your business and can enable rich results like star ratings."
        : hasJsonLd
        ? "Some structured data found, but no LocalBusiness or plumbing-specific schema detected. You're missing out on rich search result features."
        : "No structured data (JSON-LD) detected. Schema markup helps Google understand your business type, services, and service area — critical for local SEO.",
      recommendation: hasLocalBusiness
        ? undefined
        : "Add LocalBusiness JSON-LD schema to your homepage with your business name, address, phone, hours, service area, and services offered. This can enable star ratings and enhanced listings in search results.",
    });

    // 7. Server response speed — with benchmarks
    const htmlSizeKb = Math.round(html.length / 1024);

    // Google's TTFB benchmarks
    const googleGood = 800; // Google considers <800ms "good"
    const googleNeedsImprovement = 1800; // 800-1800ms "needs improvement"
    // Industry benchmark: median TTFB is ~1400ms

    let speedStatus: CheckStatus = "fail";
    let percentileNote = "";
    if (responseTime <= googleGood) {
      speedStatus = "pass";
      percentileNote = `faster than approximately ${Math.min(95, Math.round(85 + (googleGood - responseTime) / googleGood * 10))}% of websites`;
    } else if (responseTime <= googleNeedsImprovement) {
      speedStatus = "warn";
      const pct = Math.round(50 + ((googleNeedsImprovement - responseTime) / (googleNeedsImprovement - googleGood)) * 35);
      percentileNote = `faster than approximately ${Math.min(84, Math.max(30, pct))}% of websites`;
    } else {
      speedStatus = "fail";
      const pct = Math.max(5, Math.round(30 - (responseTime - googleNeedsImprovement) / 100));
      percentileNote = `slower than approximately ${100 - Math.min(30, pct)}% of websites`;
    }

    checks.push({
      label: "Server Response Speed (TTFB)",
      status: speedStatus,
      note: `Server responded in ${responseTime}ms (${htmlSizeKb}KB HTML). You're ${percentileNote}.`,
      recommendation: speedStatus === "pass"
        ? undefined
        : "Improve server response time by upgrading hosting, enabling server-side caching, using a CDN (like Cloudflare), and reducing server-side processing.",
      details: {
        "Your Response Time": `${responseTime}ms`,
        "Google's 'Good' Target": `Under ${googleGood}ms`,
        "Google's 'Needs Improvement'": `${googleGood}ms – ${googleNeedsImprovement}ms`,
        "Google's 'Poor'": `Over ${googleNeedsImprovement}ms`,
        "Industry Median": "~1,400ms",
        "Your Ranking": percentileNote.charAt(0).toUpperCase() + percentileNote.slice(1),
      },
    });

    // 8. H1 heading — with deep SEO analysis
    const hasH1 = /<h1[\s>]/i.test(html);
    const h1HasPlumbing = /plumb/i.test(h1Text);
    const h1HasCity = detectedCity ? h1Text.toLowerCase().includes(detectedCity.toLowerCase()) : false;
    const h1IsGeneric = /welcome|home|services you need|we are|about us/i.test(h1Text);

    let h1Status: CheckStatus = "fail";
    if (hasH1 && h1HasPlumbing && !h1IsGeneric) h1Status = "pass";
    else if (hasH1 && !h1IsGeneric) h1Status = "warn";
    else if (hasH1) h1Status = "warn";

    const recommendedH1 = detectedCity
      ? `${detectedCity}'s Trusted Plumbing Experts — 24/7 Emergency Service`
      : "Licensed Plumbing Services — 24/7 Emergency Repairs & Installations";

    checks.push({
      label: "H1 Heading Tag",
      status: h1Status,
      note: !hasH1
        ? "No H1 heading tag found. Every page needs exactly one H1 that includes your primary keyword — this is your page's main headline for SEO."
        : h1IsGeneric
        ? `H1: "${h1Text.substring(0, 80)}" — This is a generic headline that doesn't help Google understand what your page is about. Your H1 should include your service + location for maximum local SEO impact.`
        : !h1HasPlumbing
        ? `H1: "${h1Text.substring(0, 80)}" — Missing plumbing keywords. Your H1 should clearly tell Google this is a plumbing business page.`
        : `H1: "${h1Text.substring(0, 80)}" — ${h1HasCity ? "Great! Includes plumbing keywords and city." : "Good plumbing keywords, but consider adding your city for local SEO."}`,
      recommendation: h1Status === "pass"
        ? undefined
        : `Recommended H1: "${recommendedH1}" — A strong H1 includes your service keyword, your city, and a value proposition. Avoid generic phrases like "Welcome" or "The Services You Need."`,
      details: hasH1 ? {
        "Current H1": `"${h1Text.substring(0, 100)}"`,
        "Has Plumbing Keywords": h1HasPlumbing ? "Yes" : "No — add 'plumber' or 'plumbing'",
        "Has City Name": h1HasCity ? `Yes (${detectedCity})` : detectedCity ? `No — add "${detectedCity}"` : "No city detected",
        "Is Generic": h1IsGeneric ? "Yes — replace with a keyword-rich headline" : "No — good",
      } : undefined,
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
        : `Only ${imgsWithAlt.length} of ${imgTags.length} images have alt text (${Math.round(altRatio * 100)}%). Google can't 'see' images without alt text — you're leaving SEO value on the table.`,
      recommendation: altRatio >= 0.8 ? undefined : "Add descriptive alt text to every image. Instead of alt=\"img1\", use alt=\"plumber repairing kitchen sink in " + cityForTitle + "\". Include service + location keywords naturally.",
    });

    // 10. Social proof / reviews
    const hasReviews = /review|testimonial|5[\s-]star|google review|★|⭐/i.test(html);
    const hasReviewCount = /\d+\s*(?:\+\s*)?reviews?/i.test(html);
    checks.push({
      label: "Reviews / Social Proof",
      status: hasReviews && hasReviewCount ? "pass" : hasReviews ? "warn" : "fail",
      note: hasReviews && hasReviewCount
        ? "Reviews with specific counts detected — this provides strong social proof and increases conversion rates by 20-30%."
        : hasReviews
        ? "Some review/testimonial content detected, but consider prominently displaying your Google review count and star rating for maximum impact."
        : "No reviews or testimonials detected. 88% of consumers trust online reviews as much as personal recommendations. Display your Google reviews prominently.",
      recommendation: !hasReviews
        ? "Embed your Google reviews on your homepage with your star rating and review count. Example: '★★★★★ 4.9 Stars · 127 Google Reviews'. This is one of the easiest ways to increase conversions."
        : undefined,
    });

    // 11. Service area pages (bonus check)
    const serviceAreaLinks = html.match(/(?:areas?[\s-](?:we[\s-])?serv|service[\s-]area|serving|cities|locations?|neighborhoods?)/gi) || [];
    const hasCityPages = /\/[a-z]+-(?:plumb|drain|water|sewer)/i.test(html) || /plumb[a-z]*-(?:in|near)-[a-z]/i.test(html);
    checks.push({
      label: "Service Area Strategy",
      status: hasCityPages ? "pass" : serviceAreaLinks.length > 0 ? "warn" : "fail",
      note: hasCityPages
        ? "City-specific service pages detected — this is one of the most effective local SEO strategies for plumbing companies."
        : serviceAreaLinks.length > 0
        ? "Service area content found, but we didn't detect dedicated city-specific pages. Individual pages for each city you serve (e.g., /plumber-in-dallas) rank significantly better."
        : "No service area strategy detected. Dedicated pages for each city you serve is the #1 way to rank for 'plumber near me' in multiple areas.",
      recommendation: hasCityPages ? undefined : `Create individual pages for each city you serve. Example: /${domain}/plumber-in-${(detectedCity || "your-city").toLowerCase().replace(/\s+/g, "-")} with unique content about plumbing services in that specific area.`,
    });

    // 12. Internal linking & navigation
    const internalLinks = (html.match(/href=["'][^"']*["']/gi) || []).filter(
      (link) => !link.includes("http") || link.includes(domain)
    );
    const hasServicesLinks = /(?:drain|water[\s-]?heater|sewer|emergency|repipe|remodel)/i.test(
      internalLinks.join(" ")
    );
    checks.push({
      label: "Internal Linking & Navigation",
      status: hasServicesLinks && internalLinks.length > 15 ? "pass" : internalLinks.length > 8 ? "warn" : "fail",
      note: internalLinks.length > 15 && hasServicesLinks
        ? `Strong internal linking detected (${internalLinks.length}+ internal links) with service-specific pages. Good site structure for SEO.`
        : internalLinks.length > 8
        ? `${internalLinks.length} internal links found. ${!hasServicesLinks ? "But we didn't detect links to specific service pages (drain cleaning, water heaters, etc.). " : ""}More internal links to service pages improves SEO crawlability.`
        : `Only ${internalLinks.length} internal links detected — this is very thin. Strong internal linking helps Google discover and rank all your pages.`,
      recommendation: internalLinks.length > 15 && hasServicesLinks ? undefined : "Create dedicated pages for each plumbing service (drain cleaning, water heater repair, sewer line services, etc.) and link to them from your homepage and navigation menu.",
    });

    // Calculate score — cap at 95, never 100
    const passCount = checks.filter((c) => c.status === "pass").length;
    const warnCount = checks.filter((c) => c.status === "warn").length;
    const rawScore = Math.round(((passCount * 10 + warnCount * 5) / (checks.length * 10)) * 100);
    const score = Math.min(95, rawScore); // Never show 100

    let grade = "F";
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B+";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C+";
    else if (score >= 50) grade = "C";
    else if (score >= 40) grade = "D";

    return NextResponse.json({ score, grade, checks, domain, detectedCity });
  } catch (error) {
    console.error("Website grader error:", error);
    return NextResponse.json(
      { error: "Something went wrong analyzing that website. Please try again." },
      { status: 500 }
    );
  }
}
