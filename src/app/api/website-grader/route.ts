import { NextRequest, NextResponse } from "next/server";

type CheckStatus = "pass" | "fail" | "warn";
type CheckCategory = "security" | "mobile" | "seo_onpage" | "local_seo" | "content" | "technical" | "conversion" | "social" | "performance" | "trust" | "advanced";

type Check = {
  label: string;
  status: CheckStatus;
  note: string;
  recommendation?: string;
  details?: Record<string, string>;
  category: CheckCategory;
};

const CATEGORY_LABELS: Record<CheckCategory, string> = {
  security: "Security & SSL",
  mobile: "Mobile & Responsiveness",
  seo_onpage: "On-Page SEO",
  local_seo: "Local SEO",
  content: "Content & Structure",
  technical: "Technical SEO",
  conversion: "Conversion Elements",
  social: "Social Media & Presence",
  performance: "Performance & Speed",
  trust: "Trust & Credibility",
  advanced: "Advanced Optimization",
};

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0]; }
}

function detectCity(html: string, title: string, h1: string): string {
  const combined = `${title} ${h1} ${html.substring(0, 5000)}`;
  const patterns = [
    /(?:serving|service area|located in|based in|plumber in|plumbing in|near)\s+([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/g,
    /([A-Z][a-z]+(?:\s[A-Z][a-z]+)?),?\s*(?:IL|TX|CA|FL|NY|AZ|GA|CO|OH|PA|NC|VA|WA|OR|NV|TN|MO|MD|WI|MN|SC|AL|KY|LA|OK|CT|IA|MS|AR|KS|UT|NE|NM|WV|ID|HI|ME|NH|RI|MT|DE|SD|ND|AK|VT|WY|DC)\b/g,
  ];
  const skip = ["The","Our","Your","This","Home","About","Contact","Service","Quality","Best","Top","All","Get"];
  for (const p of patterns) { const m = p.exec(combined); if (m?.[1] && !skip.includes(m[1].trim())) return m[1].trim(); }
  return "";
}

function cnt(str: string, pattern: RegExp): number { return (str.match(pattern) || []).length; }

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") return NextResponse.json({ error: "URL required" }, { status: 400 });

    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    const domain = extractDomain(fullUrl);
    let html = "", fetchOk = false, isHttps = false, responseTime = 0, statusCode = 0;

    const doFetch = async (u: string) => {
      const start = Date.now();
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), 10000);
      const r = await fetch(u, { signal: ac.signal, headers: { "User-Agent": "Mozilla/5.0 (compatible; OnlyPlumbingSitesGrader/1.0)" }, redirect: "follow" });
      clearTimeout(t);
      responseTime = Date.now() - start;
      statusCode = r.status; isHttps = r.url.startsWith("https://"); html = await r.text(); fetchOk = r.ok;
    };

    try { await doFetch(fullUrl); } catch {
      if (fullUrl.startsWith("https://")) { try { await doFetch(fullUrl.replace("https://","http://")); } catch { return NextResponse.json({ error: "We couldn't reach that website. Please check the URL and make sure the site is live." }); } }
      else return NextResponse.json({ error: "We couldn't reach that website. Please check the URL and make sure the site is live." });
    }
    if (!fetchOk || !html) return NextResponse.json({ error: `Server returned HTTP ${statusCode}. Make sure the URL is correct.` });

    const lower = html.toLowerCase();
    const checks: Check[] = [];
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "";
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";
    const h1Count = cnt(html, /<h1[\s>]/gi);
    const h2Count = cnt(html, /<h2[\s>]/gi);
    const h3Count = cnt(html, /<h3[\s>]/gi);
    const detectedCity = detectCity(html, title, h1Text);
    const companyName = domain.split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
    const cityForTitle = detectedCity || "[Your City]";
    const htmlSizeKb = Math.round(html.length / 1024);
    const imgTags = html.match(/<img[^>]+>/gi) || [];
    const allLinks = html.match(/href=["'][^"']*["']/gi) || [];
    const internalLinks = allLinks.filter(l => !l.includes("http") || l.includes(domain));
    const textContent = html.replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
    const wordCount = textContent.split(" ").filter(w => w.length > 2).length;

    // ═══ SECURITY (1-3) ═══
    checks.push({ label: "HTTPS (SSL Certificate)", status: isHttps ? "pass" : "fail", note: isHttps ? "Your site uses HTTPS — secure and Google-approved." : "No HTTPS. Google flags non-secure sites and ranks them lower.", recommendation: isHttps ? undefined : "Install a free SSL certificate via Let's Encrypt through your hosting provider.", category: "security" });

    const hasMixedContent = isHttps && /src=["']http:\/\//i.test(html);
    checks.push({ label: "Mixed Content Check", status: hasMixedContent ? "warn" : "pass", note: hasMixedContent ? "Your HTTPS site loads some resources over insecure HTTP." : "No mixed content issues — all resources load securely.", recommendation: hasMixedContent ? "Update all resource URLs to use https://." : undefined, category: "security" });

    const hasCSP = lower.includes("content-security-policy");
    checks.push({ label: "Security Headers", status: hasCSP ? "pass" : "warn", note: hasCSP ? "Security headers detected." : "No security headers found. Not critical for plumbing sites but improves protection.", recommendation: hasCSP ? undefined : "Ask your developer to add Content-Security-Policy and X-Frame-Options headers.", category: "security" });

    // ═══ MOBILE (4-8) ═══
    const hasViewport = lower.includes('name="viewport"') || lower.includes("name='viewport'");
    checks.push({ label: "Mobile Viewport Tag", status: hasViewport ? "pass" : "fail", note: hasViewport ? "Mobile viewport tag found — renders correctly on phones." : "No viewport tag. 72%+ of plumbing searches are on mobile.", recommendation: hasViewport ? undefined : 'Add: <meta name="viewport" content="width=device-width, initial-scale=1">', category: "mobile" });

    const hasMediaQueries = /@media/i.test(html);
    const hasRespFramework = /bootstrap|tailwind|foundation/i.test(html);
    checks.push({ label: "Responsive Design", status: hasMediaQueries || hasRespFramework ? "pass" : "warn", note: hasRespFramework ? "Responsive CSS framework detected." : hasMediaQueries ? "CSS media queries detected." : "No responsive design indicators found.", recommendation: !hasMediaQueries && !hasRespFramework ? "Ensure your site uses responsive design that adapts to all screen sizes." : undefined, category: "mobile" });

    const hasButtons = /btn|button|cta/i.test(html);
    checks.push({ label: "Touch-Friendly Tap Targets", status: hasButtons ? "pass" : "warn", note: hasButtons ? "Button/CTA elements detected for touch interaction." : "Can't confirm touch-friendly buttons. Google requires 48x48px minimum tap targets.", recommendation: hasButtons ? undefined : "Ensure all buttons are at least 48x48px with 8px spacing.", category: "mobile" });

    const hasTinyFonts = (html.match(/font-size\s*:\s*(\d+)/g) || []).some(f => { const n = parseInt(f.replace(/\D/g,"")); return n > 0 && n < 12; });
    checks.push({ label: "Mobile Font Readability", status: hasTinyFonts ? "warn" : "pass", note: hasTinyFonts ? "Some fonts appear below 12px — hard to read on mobile." : "No excessively small fonts detected.", recommendation: hasTinyFonts ? "Set base font size to at least 16px for body text." : undefined, category: "mobile" });

    const hasWideFixed = /width\s*:\s*\d{4,}px/i.test(html);
    checks.push({ label: "No Horizontal Scroll", status: hasWideFixed ? "fail" : "pass", note: hasWideFixed ? "Fixed-width elements causing horizontal scroll on mobile." : "No horizontal scroll issues detected.", recommendation: hasWideFixed ? "Replace fixed-width elements with max-width: 100%." : undefined, category: "mobile" });

    // ═══ ON-PAGE SEO (9-18) ═══
    const hasGoodTitle = title.length > 10 && title.length < 70;
    const titleHasPlumbing = /plumb/i.test(title);
    const titleHasCity = detectedCity ? title.toLowerCase().includes(detectedCity.toLowerCase()) : false;
    let titleStatus: CheckStatus = "fail";
    if (hasGoodTitle && titleHasPlumbing && titleHasCity) titleStatus = "pass";
    else if (hasGoodTitle && (titleHasPlumbing || titleHasCity)) titleStatus = "warn";
    else if (hasGoodTitle) titleStatus = "warn";
    checks.push({ label: "SEO Title Tag", status: titleStatus, note: !title ? "No title tag found." : `Title: "${title.substring(0,70)}" (${title.length} chars). ${!titleHasPlumbing ? "Missing plumbing keywords. " : ""}${!titleHasCity && detectedCity ? `Missing city (${detectedCity}). ` : ""}`, recommendation: titleStatus === "pass" ? undefined : `Recommended: "${cityForTitle} Plumber | ${companyName} — Licensed Plumbing Services"`, details: { "Current Title": title || "(none)", "Length": `${title.length} chars`, "Has Plumbing Keywords": titleHasPlumbing ? "Yes" : "No", "Has City": titleHasCity ? "Yes" : detectedCity ? `No — add "${detectedCity}"` : "No city detected" }, category: "seo_onpage" });

    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : "";
    let descStatus: CheckStatus = "fail";
    if (desc.length >= 50 && desc.length <= 160 && /plumb/i.test(desc)) descStatus = "pass";
    else if (desc.length >= 50 && desc.length <= 160) descStatus = "warn";
    else if (desc) descStatus = "warn";
    checks.push({ label: "Meta Description", status: descStatus, note: !desc ? "No meta description. You lose control of your search snippet." : `${desc.length} chars. ${/plumb/i.test(desc) ? "" : "Missing plumbing keywords. "}${/call|contact|free|estimate|book/i.test(desc) ? "" : "No CTA. "}`, recommendation: descStatus === "pass" ? undefined : `Recommended: "${cityForTitle} plumber — 24/7 emergency service, drain cleaning, water heater repair. Licensed & insured. Call for a free estimate!"`, category: "seo_onpage" });

    const h1HasPlumbing = /plumb/i.test(h1Text);
    const h1IsGeneric = /welcome|home|services you need|we are|about us/i.test(h1Text);
    let h1Status: CheckStatus = "fail";
    if (h1Count === 1 && h1HasPlumbing && !h1IsGeneric) h1Status = "pass";
    else if (h1Count >= 1 && !h1IsGeneric) h1Status = "warn";
    else if (h1Count >= 1) h1Status = "warn";
    checks.push({ label: "H1 Heading Tag", status: h1Status, note: h1Count === 0 ? "No H1 found." : `H1: "${h1Text.substring(0,80)}" ${h1IsGeneric ? "— Generic, not SEO-optimized." : h1HasPlumbing ? "— Good keywords." : "— Missing plumbing keywords."}`, recommendation: h1Status === "pass" ? undefined : `Recommended: "${detectedCity ? detectedCity+"'s" : "Your City's"} Trusted Plumbing Experts — 24/7 Emergency Service"`, category: "seo_onpage" });

    checks.push({ label: "Single H1 Tag", status: h1Count === 1 ? "pass" : h1Count === 0 ? "fail" : "warn", note: h1Count === 1 ? "Exactly one H1 — correct structure." : h1Count === 0 ? "No H1 tag." : `${h1Count} H1 tags. Use exactly one.`, recommendation: h1Count !== 1 ? "Use exactly one H1 per page. Use H2/H3 for subheadings." : undefined, category: "seo_onpage" });

    checks.push({ label: "Heading Hierarchy (H2/H3)", status: h2Count >= 3 ? "pass" : h2Count >= 1 ? "warn" : "fail", note: `${h2Count} H2 and ${h3Count} H3 tags. ${h2Count >= 3 ? "Good structure." : "Need more subheadings."}`, recommendation: h2Count < 3 ? "Add H2s for major sections: 'Our Services', 'Service Areas', 'Why Choose Us'." : undefined, category: "seo_onpage" });

    const hasCanonical = /<link[^>]*rel=["']canonical["']/i.test(html);
    checks.push({ label: "Canonical URL Tag", status: hasCanonical ? "pass" : "warn", note: hasCanonical ? "Canonical tag found — prevents duplicate content." : "No canonical tag. Can cause duplicate content issues.", recommendation: hasCanonical ? undefined : 'Add <link rel="canonical" href="your-page-url"> to every page.', category: "seo_onpage" });

    const hasOG = /<meta[^>]*property=["']og:/i.test(html);
    checks.push({ label: "Open Graph Tags", status: hasOG ? "pass" : "warn", note: hasOG ? "OG tags detected — rich previews when shared on social media." : "No Open Graph tags. Shared links will look plain on social media.", recommendation: hasOG ? undefined : "Add og:title, og:description, og:image tags for rich social sharing.", category: "seo_onpage" });

    const hasNoIndex = /noindex/i.test(html.match(/<meta[^>]*name=["']robots["'][^>]*>/i)?.[0] || "");
    checks.push({ label: "Search Engine Indexing", status: hasNoIndex ? "fail" : "pass", note: hasNoIndex ? "CRITICAL: noindex tag found — Google CANNOT index your site!" : "No blocking directives. Google can index normally.", recommendation: hasNoIndex ? "Remove the noindex tag IMMEDIATELY. Your site is invisible to Google." : undefined, category: "seo_onpage" });

    const plumbMentions = cnt(lower, /plumb/gi);
    checks.push({ label: "Primary Keyword Usage", status: plumbMentions >= 5 ? "pass" : plumbMentions >= 2 ? "warn" : "fail", note: `"Plumb*" appears ${plumbMentions} times. ${plumbMentions >= 5 ? "Good natural usage." : "Use plumbing keywords more throughout your content."}`, recommendation: plumbMentions < 5 ? "Naturally include 'plumber' and 'plumbing' throughout your content." : undefined, category: "seo_onpage" });

    // ═══ LOCAL SEO (19-26) ═══
    const hasJsonLd = lower.includes("application/ld+json");
    const hasLocalBiz = /localbusiness|plumb|homeandconstructionbusiness/i.test(html) && hasJsonLd;
    checks.push({ label: "LocalBusiness Schema", status: hasLocalBiz ? "pass" : hasJsonLd ? "warn" : "fail", note: hasLocalBiz ? "LocalBusiness schema detected." : hasJsonLd ? "Structured data found but no LocalBusiness schema." : "No JSON-LD structured data found.", recommendation: hasLocalBiz ? undefined : "Add LocalBusiness JSON-LD schema with NAP, hours, services.", category: "local_seo" });

    const phoneRx = /(?:tel:|href="tel:)[\d\-+().]+/gi;
    const hasClickToCall = phoneRx.test(html);
    const phoneMatch = html.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
    const detectedPhone = phoneMatch ? phoneMatch[0] : "";
    checks.push({ label: "Click-to-Call Link", status: hasClickToCall ? "pass" : phoneMatch ? "warn" : "fail", note: hasClickToCall ? "Clickable tel: link detected." : phoneMatch ? `Phone (${detectedPhone}) found but not clickable.` : "No phone number detected.", recommendation: hasClickToCall ? undefined : "Wrap your number in a tel: link in the header.", category: "local_seo" });

    const hasAddress = /\d+\s+[\w\s]+(?:st|street|ave|avenue|blvd|dr|drive|rd|road|ln|way|ct|pl)\b/i.test(html);
    checks.push({ label: "Physical Address on Site", status: hasAddress ? "pass" : "warn", note: hasAddress ? "Physical address detected on your site." : "No clear address found. Add your full business address to your footer.", recommendation: hasAddress ? undefined : "Add your full address (matching GBP exactly) to your footer on every page.", category: "local_seo" });

    const hasCityPages = /\/[a-z]+-(?:plumb|drain|water|sewer)/i.test(html) || /plumb[a-z]*-(?:in|near)-[a-z]/i.test(html);
    const svcAreaMentions = cnt(html, /(?:areas?[\s-](?:we[\s-])?serv|service[\s-]area|serving)/gi);
    checks.push({ label: "Service Area Pages", status: hasCityPages ? "pass" : svcAreaMentions > 0 ? "warn" : "fail", note: hasCityPages ? "City-specific service pages detected." : svcAreaMentions > 0 ? "Service area content found but no dedicated city pages." : "No service area strategy detected.", recommendation: hasCityPages ? undefined : "Create individual pages for each city you serve.", category: "local_seo" });

    const locPageLinks = cnt(html, /\/(?:locations?|areas?|cities|service-area)/gi);
    checks.push({ label: "Multi-Location Strategy", status: locPageLinks >= 3 ? "pass" : locPageLinks >= 1 ? "warn" : "fail", note: locPageLinks >= 3 ? `${locPageLinks}+ location page links detected.` : "Few or no multi-location pages.", recommendation: locPageLinks < 3 ? "Create unique pages for each city/neighborhood you serve with 500+ words each." : undefined, category: "local_seo" });

    const hasSvcLocCombos = /(?:drain|water-?heater|sewer|emergency).*(?:in|near)\s*[A-Z]/i.test(html);
    checks.push({ label: "Service + Location Combo Pages", status: hasSvcLocCombos ? "pass" : "warn", note: hasSvcLocCombos ? "Service-location combos detected (e.g., 'drain cleaning in Dallas')." : "No service+location combo pages. These capture high-intent searches.", recommendation: hasSvcLocCombos ? undefined : "Create pages like '/drain-cleaning-dallas' for top services in your primary city.", category: "local_seo" });

    const hasMap = /google\.com\/maps|maps\.googleapis|iframe[^>]*map/i.test(html);
    checks.push({ label: "Google Maps Embed", status: hasMap ? "pass" : "warn", note: hasMap ? "Google Maps embed detected." : "No map embed found.", recommendation: hasMap ? undefined : "Embed a Google Map on your contact page showing your location.", category: "local_seo" });

    const hasGBPLink = /google\.com\/maps\/place|maps\.app\.goo\.gl|g\.page/i.test(html);
    checks.push({ label: "Google Business Profile Link", status: hasGBPLink ? "pass" : "warn", note: hasGBPLink ? "GBP link detected." : "No GBP link found on your site.", recommendation: hasGBPLink ? undefined : "Add a link to your Google Business Profile to make reviews easy.", category: "local_seo" });

    // ═══ CONTENT & STRUCTURE (27-34) ═══
    const svcPageLinks = cnt(html, /href=["'][^"']*(?:drain|water-?heater|sewer|emergency|repipe|remodel|leak|toilet|faucet|garbage|gas-?line|trenchless|hydro|backflow|sump|slab|camera|inspection)/gi);
    const hasBulletList = /<(?:ul|ol)[^>]*>[\s\S]{0,500}(?:drain|water heater|sewer)/i.test(html) && svcPageLinks < 3;
    checks.push({ label: "Dedicated Service Pages", status: svcPageLinks >= 5 ? "pass" : svcPageLinks >= 2 ? "warn" : "fail", note: svcPageLinks >= 5 ? `${svcPageLinks} service page links found.` : hasBulletList ? "Services appear as a bulleted list instead of dedicated pages." : `Only ${svcPageLinks} service page links.`, recommendation: svcPageLinks < 5 ? "Create a dedicated page for each service (drain cleaning, water heaters, sewer, emergency, etc.) with 500+ unique words each." : undefined, details: { "Service Pages Found": `${svcPageLinks}`, "Recommended": "8-12 dedicated pages", "Bulleted List Instead": hasBulletList ? "Yes — convert to pages" : "No" }, category: "content" });

    const hasBlog = /\/blog|\/news|\/articles|\/resources|\/tips/i.test(html);
    checks.push({ label: "Blog / Content Section", status: hasBlog ? "pass" : "fail", note: hasBlog ? "Blog/content section detected." : "No blog. A blog ranks for informational queries that bring potential customers.", recommendation: hasBlog ? undefined : "Start a blog: 'how to unclog a drain,' 'signs you need a new water heater,' etc.", category: "content" });

    const hasAbout = /\/about|about us|our team|meet the team|our story/i.test(html);
    checks.push({ label: "About / Team Page", status: hasAbout ? "pass" : "warn", note: hasAbout ? "About/team content detected." : "No about page link. Homeowners want to know who's entering their home.", recommendation: hasAbout ? undefined : "Create an About page with your story, team photos, and licensing info.", category: "content" });

    const hasFAQ = /faq|frequently asked|common questions/i.test(html);
    const hasFAQSchema = /FAQPage/i.test(html);
    checks.push({ label: "FAQ Section", status: hasFAQ && hasFAQSchema ? "pass" : hasFAQ ? "warn" : "fail", note: hasFAQ && hasFAQSchema ? "FAQ with schema — can show in Google rich results." : hasFAQ ? "FAQ found but no FAQPage schema." : "No FAQ section.", recommendation: !hasFAQ ? "Add 8-15 FAQ questions with FAQPage schema for rich Google results." : !hasFAQSchema ? "Add FAQPage schema markup to your existing FAQ." : undefined, category: "content" });

    checks.push({ label: "Content Depth", status: wordCount >= 600 ? "pass" : wordCount >= 300 ? "warn" : "fail", note: `~${wordCount} words. ${wordCount >= 600 ? "Good depth." : "Thin content — Google favors 600+ words."}`, recommendation: wordCount < 600 ? "Add more content about services, process, and service area. Aim for 800-1500 words on homepage." : undefined, details: { "Word Count": `~${wordCount}`, "Recommended": "600-1,500 words" }, category: "content" });

    const imgsWithAlt = imgTags.filter(img => /alt=["'][^"']+["']/i.test(img));
    const altRatio = imgTags.length > 0 ? imgsWithAlt.length / imgTags.length : 1;
    checks.push({ label: "Image Alt Text", status: imgTags.length === 0 ? "warn" : altRatio >= 0.8 ? "pass" : altRatio >= 0.5 ? "warn" : "fail", note: imgTags.length === 0 ? "No images detected." : `${imgsWithAlt.length}/${imgTags.length} images have alt text (${Math.round(altRatio*100)}%).`, recommendation: altRatio < 0.8 ? `Add descriptive alt text: alt="plumber fixing sink in ${cityForTitle}".` : undefined, category: "content" });

    const lazyImgs = cnt(html, /loading=["']lazy["']/gi);
    checks.push({ label: "Image Lazy Loading", status: lazyImgs >= 3 || imgTags.length <= 5 ? "pass" : "warn", note: lazyImgs >= 3 ? `${lazyImgs} lazy-loaded images.` : imgTags.length > 5 ? "No lazy loading detected." : "Few images — lazy loading not critical.", recommendation: imgTags.length > 5 && lazyImgs === 0 ? 'Add loading="lazy" to images below the fold.' : undefined, category: "content" });

    const hasWebP = /\.webp/i.test(html);
    checks.push({ label: "Next-Gen Images (WebP)", status: hasWebP ? "pass" : imgTags.length > 0 ? "warn" : "pass", note: hasWebP ? "WebP images detected — 25-50% smaller than JPEG/PNG." : imgTags.length > 0 ? "No WebP images. Convert for faster loading." : "No images to evaluate.", recommendation: !hasWebP && imgTags.length > 0 ? "Convert images to WebP format for smaller file sizes." : undefined, category: "content" });

    // ═══ TECHNICAL (35-40) ═══
    const hasSvcLinks = /(?:drain|water[\s-]?heater|sewer|emergency|repipe|remodel)/i.test(internalLinks.join(" "));
    checks.push({ label: "Internal Linking", status: hasSvcLinks && internalLinks.length > 15 ? "pass" : internalLinks.length > 8 ? "warn" : "fail", note: `${internalLinks.length} internal links. ${hasSvcLinks ? "Service page links found." : "No service page links."}`, recommendation: internalLinks.length <= 15 ? "Link to every service and location page from your homepage." : undefined, category: "technical" });

    checks.push({ label: "XML Sitemap Reference", status: /sitemap\.xml/i.test(html) ? "pass" : "warn", note: /sitemap\.xml/i.test(html) ? "Sitemap reference found." : "No sitemap.xml reference in HTML.", recommendation: !/sitemap\.xml/i.test(html) ? "Create sitemap.xml and submit to Google Search Console." : undefined, category: "technical" });

    checks.push({ label: "HTML Lang Attribute", status: /<html[^>]*lang=/i.test(html) ? "pass" : "warn", note: /<html[^>]*lang=/i.test(html) ? "Lang attribute set." : "No lang attribute on <html>.", recommendation: !/<html[^>]*lang=/i.test(html) ? "Add lang='en' to your <html> tag." : undefined, category: "technical" });

    checks.push({ label: "UTF-8 Charset", status: /charset=["']?utf-?8/i.test(html) ? "pass" : "warn", note: /charset=["']?utf-?8/i.test(html) ? "UTF-8 encoding declared." : "No charset declaration found.", recommendation: !/charset=["']?utf-?8/i.test(html) ? 'Add <meta charset="UTF-8"> to <head>.' : undefined, category: "technical" });

    checks.push({ label: "Page Size", status: htmlSizeKb < 100 ? "pass" : htmlSizeKb < 250 ? "warn" : "fail", note: `${htmlSizeKb}KB HTML. ${htmlSizeKb < 100 ? "Lightweight." : htmlSizeKb < 250 ? "Moderate — consider reducing." : "Very large — slows mobile rendering."}`, recommendation: htmlSizeKb >= 100 ? "Reduce page size: remove inline CSS/JS, defer scripts, minify HTML." : undefined, category: "technical" });

    const hasMinifiedCSS = /\.min\.css|\.min\.js/i.test(html);
    checks.push({ label: "Minified Assets", status: hasMinifiedCSS ? "pass" : "warn", note: hasMinifiedCSS ? "Minified CSS/JS files detected." : "No minified asset references found. Minification reduces file sizes.", recommendation: hasMinifiedCSS ? undefined : "Minify your CSS and JavaScript files for faster loading.", category: "technical" });

    // ═══ CONVERSION (41-47) ═══
    const ctaCount = cnt(html, /(?:call\s*(?:us|now|today)|get\s*(?:a\s*)?(?:free\s*)?(?:quote|estimate)|schedule|book\s*(?:now|online|a)|contact\s*us|request)/gi);
    checks.push({ label: "Call-to-Action Buttons", status: ctaCount >= 3 ? "pass" : ctaCount >= 1 ? "warn" : "fail", note: `${ctaCount} CTAs found. ${ctaCount >= 3 ? "Multiple conversion points." : "Need more CTAs at every scroll point."}`, recommendation: ctaCount < 3 ? "Add CTAs in hero, after services, sticky header/footer, and page bottom." : undefined, category: "conversion" });

    const hasForm = /<form/i.test(html);
    const hasContactForm = hasForm && /(?:name|email|phone|message)/i.test(html.match(/<form[\s\S]*?<\/form>/i)?.[0] || "");
    checks.push({ label: "Contact / Lead Form", status: hasContactForm ? "pass" : hasForm ? "warn" : "fail", note: hasContactForm ? "Contact form detected." : "No contact form. Some customers prefer forms over calling.", recommendation: !hasContactForm ? "Add a contact form with Name, Phone, Email, Service Needed." : undefined, category: "conversion" });

    const hasChat = /chat|intercom|drift|tawk|livechat|hubspot|zendesk|crisp|olark|tidio/i.test(html);
    checks.push({ label: "Live Chat / Chatbot", status: hasChat ? "pass" : "warn", note: hasChat ? "Chat widget detected — 10-30% more leads on average." : "No chat widget. Chat captures leads from visitors not ready to call.", recommendation: hasChat ? undefined : "Add a chat widget (Tawk.to is free). 10-30% more leads.", category: "conversion" });

    const hasEmergency = /emergency|24\s*\/?\s*7|24\s*hour|after[\s-]?hours|same[\s-]?day/i.test(html);
    checks.push({ label: "Emergency / 24-7 Messaging", status: hasEmergency ? "pass" : "warn", note: hasEmergency ? "Emergency/24-7 messaging detected." : "No emergency messaging. These searches have highest conversion rates.", recommendation: hasEmergency ? undefined : "If you offer emergency service, make '24/7 Emergency Plumber' prominent.", category: "conversion" });

    const hasFreeEst = /free\s*(?:estimate|quote|consultation|inspection)/i.test(html);
    checks.push({ label: "Free Estimate Offer", status: hasFreeEst ? "pass" : "warn", note: hasFreeEst ? "'Free estimate' offer detected." : "No free estimate offer. This is the #1 conversion phrase for plumbers.", recommendation: hasFreeEst ? undefined : "Add 'Free Estimate' prominently — reduces friction to contact.", category: "conversion" });

    const hasFinancing = /financ|payment plan|pay over time|affirm|greensky|synchrony|0%/i.test(html);
    checks.push({ label: "Financing Options", status: hasFinancing ? "pass" : "warn", note: hasFinancing ? "Financing info detected." : "No financing info. For big jobs (water heaters, repipes), financing increases conversions.", recommendation: hasFinancing ? undefined : "If you offer financing, promote it on service pages for expensive services.", category: "conversion" });

    const hasPricing = /price|pricing|cost|rate|starts? at|\$\d|free estimate/i.test(html);
    checks.push({ label: "Pricing / Cost Info", status: hasPricing ? "pass" : "warn", note: hasPricing ? "Pricing info detected — builds trust." : "No pricing info. 'How much does a plumber cost' is a top search query.", recommendation: hasPricing ? undefined : "Add price ranges for common services.", category: "conversion" });

    // ═══ SOCIAL MEDIA (48-53) ═══
    const hasFB = /facebook\.com|fb\.com/i.test(html);
    const hasIG = /instagram\.com/i.test(html);
    const hasYT = /youtube\.com|youtu\.be/i.test(html);
    const hasLI = /linkedin\.com/i.test(html);
    const hasND = /nextdoor\.com/i.test(html);
    const hasTT = /tiktok\.com/i.test(html);
    const socials = [hasFB&&"Facebook",hasIG&&"Instagram",hasYT&&"YouTube",hasLI&&"LinkedIn",hasND&&"Nextdoor",hasTT&&"TikTok"].filter(Boolean);
    checks.push({ label: "Social Media Links", status: socials.length >= 3 ? "pass" : socials.length >= 1 ? "warn" : "fail", note: socials.length >= 3 ? `${socials.length} social links: ${socials.join(", ")}.` : socials.length >= 1 ? `Only ${socials.length} social link(s). Add more platforms.` : "No social media links found.", recommendation: socials.length < 3 ? "Add links to Facebook, Instagram, YouTube, and Nextdoor." : undefined, details: { Facebook: hasFB?"Found":"Missing", Instagram: hasIG?"Found":"Missing", YouTube: hasYT?"Found":"Missing", LinkedIn: hasLI?"Found":"Missing", Nextdoor: hasND?"Found":"Missing", TikTok: hasTT?"Found":"Missing" }, category: "social" });

    checks.push({ label: "Facebook Business Link", status: hasFB ? "pass" : "fail", note: hasFB ? "Facebook link found." : "No Facebook link. #2 review platform after Google.", recommendation: hasFB ? undefined : "Create a Facebook Business Page and link to it.", category: "social" });

    const hasVideo = /youtube|vimeo|<video|wistia|vidyard/i.test(html);
    checks.push({ label: "Video Content", status: hasVideo ? "pass" : "warn", note: hasVideo ? "Video content detected — increases engagement 80%." : "No video. Before/after videos and team intros convert well.", recommendation: hasVideo ? undefined : "Add video to your homepage. Embed from YouTube for extra SEO benefit.", category: "social" });

    checks.push({ label: "Nextdoor Presence", status: hasND ? "pass" : "warn", note: hasND ? "Nextdoor link found." : "No Nextdoor link. Most underrated platform for plumbers.", recommendation: hasND ? undefined : "Claim your Nextdoor Business page and add a link.", category: "social" });

    checks.push({ label: "Instagram Portfolio", status: hasIG ? "pass" : "warn", note: hasIG ? "Instagram link found." : "No Instagram. Perfect for before/after job photos.", recommendation: hasIG ? undefined : "Create an Instagram Business profile for before/after photos.", category: "social" });

    checks.push({ label: "YouTube Channel", status: hasYT ? "pass" : "warn", note: hasYT ? "YouTube link found. Video is the #1 engagement format." : "No YouTube link. YouTube is the #2 search engine — plumbing videos rank well.", recommendation: hasYT ? undefined : "Create a YouTube channel for how-to videos, job walkthroughs, and team intros.", category: "social" });

    // ═══ PERFORMANCE (54-57) ═══
    const gGood = 800, gNI = 1800;
    let speedSt: CheckStatus = "fail";
    let pctNote = "";
    if (responseTime <= gGood) { speedSt = "pass"; pctNote = `faster than ~${Math.min(95,Math.round(85+(gGood-responseTime)/gGood*10))}% of websites`; }
    else if (responseTime <= gNI) { speedSt = "warn"; pctNote = `faster than ~${Math.min(84,Math.max(30,Math.round(50+((gNI-responseTime)/(gNI-gGood))*35)))}% of websites`; }
    else { speedSt = "fail"; pctNote = `slower than ~${100-Math.min(30,Math.max(5,Math.round(30-(responseTime-gNI)/100)))}% of websites`; }
    checks.push({ label: "Server Response (TTFB)", status: speedSt, note: `${responseTime}ms response. ${pctNote}.`, recommendation: speedSt === "pass" ? undefined : "Upgrade hosting, enable caching, use a CDN like Cloudflare.", details: { "Your TTFB": `${responseTime}ms`, "Google 'Good'": "<800ms", "Google 'Needs Improvement'": "800-1800ms", "Google 'Poor'": ">1800ms", "Industry Median": "~1,400ms", Ranking: pctNote.charAt(0).toUpperCase()+pctNote.slice(1) }, category: "performance" });

    const hasGzip = /gzip|br|compress/i.test(html.substring(0,500));
    checks.push({ label: "Text Compression (Gzip/Brotli)", status: htmlSizeKb < 50 || hasGzip ? "pass" : "warn", note: htmlSizeKb < 50 ? "Small page — compression less critical." : hasGzip ? "Compression indicators found." : "No compression detected. Gzip/Brotli reduces transfer size 60-80%.", recommendation: !hasGzip && htmlSizeKb >= 50 ? "Enable Gzip or Brotli compression on your web server." : undefined, category: "performance" });

    const hasRenderBlocking = cnt(html, /<link[^>]*rel=["']stylesheet["'][^>]*>/gi);
    checks.push({ label: "Render-Blocking Resources", status: hasRenderBlocking <= 3 ? "pass" : hasRenderBlocking <= 6 ? "warn" : "fail", note: `${hasRenderBlocking} external stylesheets. ${hasRenderBlocking <= 3 ? "Good." : "Many blocking stylesheets slow initial render."}`, recommendation: hasRenderBlocking > 3 ? "Combine CSS files, inline critical CSS, and defer non-critical stylesheets." : undefined, category: "performance" });

    const extScripts = cnt(html, /<script[^>]*src=["'][^"']+["']/gi);
    checks.push({ label: "JavaScript Load Impact", status: extScripts <= 5 ? "pass" : extScripts <= 10 ? "warn" : "fail", note: `${extScripts} external scripts. ${extScripts <= 5 ? "Reasonable." : "Many scripts slow page interactivity."}`, recommendation: extScripts > 5 ? "Defer non-critical scripts, remove unused ones, and consider lazy-loading third-party scripts." : undefined, category: "performance" });

    // ═══ TRUST & CREDIBILITY (58-64) ═══
    const hasReviews = /review|testimonial|5[\s-]star|google review|★|⭐/i.test(html);
    const hasRevCount = /\d+\s*(?:\+\s*)?reviews?/i.test(html);
    checks.push({ label: "Reviews / Testimonials", status: hasReviews && hasRevCount ? "pass" : hasReviews ? "warn" : "fail", note: hasReviews && hasRevCount ? "Reviews with counts detected — strong social proof." : hasReviews ? "Review content found but no specific count/rating displayed." : "No reviews detected. 88% of consumers trust online reviews.", recommendation: !hasReviews ? "Display Google reviews with star rating and count on homepage." : undefined, category: "trust" });

    const hasLicense = /licens|insur|bonded|certified|master plumb|journeyman/i.test(html);
    checks.push({ label: "License & Insurance Info", status: hasLicense ? "pass" : "fail", note: hasLicense ? "Licensing/insurance info detected — essential trust signal for plumbing companies." : "No licensing or insurance info found. This is critical — homeowners need to know you're licensed.", recommendation: hasLicense ? undefined : "Display your license number, insurance info, and any certifications prominently.", category: "trust" });

    const hasTrustBadges = /bbb|angi|homeadvisor|better business|trust|guarantee|warranty|satisfaction/i.test(html);
    checks.push({ label: "Trust Badges & Guarantees", status: hasTrustBadges ? "pass" : "warn", note: hasTrustBadges ? "Trust badges or guarantee messaging detected." : "No trust badges or guarantees found.", recommendation: hasTrustBadges ? undefined : "Add trust badges (BBB, Angi, Best of HomeAdvisor) and a satisfaction guarantee.", category: "trust" });

    const hasPrivacy = /privacy[\s-]?policy|terms[\s-]?(?:of[\s-]?(?:service|use))|cookie[\s-]?policy/i.test(html);
    checks.push({ label: "Privacy Policy / Terms", status: hasPrivacy ? "pass" : "warn", note: hasPrivacy ? "Privacy policy or terms link detected." : "No privacy policy link found. Required for trust and compliance.", recommendation: hasPrivacy ? undefined : "Add a Privacy Policy and Terms of Service page. Required if you use analytics, forms, or cookies.", category: "trust" });

    const hasCopyright = /©|&copy;|\bcopyright\b/i.test(html);
    const hasCurrYear = new RegExp(`20(?:2[5-6])`).test(html);
    checks.push({ label: "Copyright & Current Year", status: hasCopyright && hasCurrYear ? "pass" : hasCopyright ? "warn" : "warn", note: hasCopyright && hasCurrYear ? "Current copyright year detected." : hasCopyright ? "Copyright found but may be outdated." : "No copyright notice detected.", recommendation: !hasCopyright || !hasCurrYear ? "Add '© 2026 [Business Name]. All rights reserved.' to your footer." : undefined, category: "trust" });

    const hasYearsExp = /\d+\s*(?:\+\s*)?years?\s*(?:of\s*)?(?:experience|in business|serving)/i.test(html);
    checks.push({ label: "Years of Experience", status: hasYearsExp ? "pass" : "warn", note: hasYearsExp ? "Years of experience mentioned — builds authority and trust." : "No mention of years of experience. This is a powerful trust signal.", recommendation: hasYearsExp ? undefined : "Add your years of experience prominently: '15+ Years Serving [City]'.", category: "trust" });

    const hasServiceGuarantee = /guarantee|warranted|satisfaction|money[\s-]?back/i.test(html);
    checks.push({ label: "Service Guarantee", status: hasServiceGuarantee ? "pass" : "warn", note: hasServiceGuarantee ? "Service guarantee or warranty messaging detected." : "No service guarantee found. A guarantee reduces risk for customers.", recommendation: hasServiceGuarantee ? undefined : "Add a satisfaction guarantee: '100% Satisfaction Guaranteed' builds confidence.", category: "trust" });

    // ═══ ADVANCED (65-68) ═══
    const hasAMP = /amphtml|amp-/i.test(html);
    checks.push({ label: "AMP / Fast Mobile Pages", status: hasAMP ? "pass" : "warn", note: hasAMP ? "AMP support detected." : "No AMP detected. Not critical but can improve mobile search visibility.", category: "advanced" });

    const hasPreconnect = /rel=["']preconnect["']/i.test(html);
    const hasPrefetch = /rel=["'](?:dns-prefetch|prefetch|preload)["']/i.test(html);
    checks.push({ label: "Resource Hints (Preconnect/Prefetch)", status: hasPreconnect || hasPrefetch ? "pass" : "warn", note: hasPreconnect || hasPrefetch ? "Resource hints detected — faster third-party resource loading." : "No preconnect/prefetch hints. These speed up loading of external resources.", recommendation: !hasPreconnect ? "Add <link rel='preconnect'> for Google Fonts, analytics, and other third-party domains." : undefined, category: "advanced" });

    const hasServiceWorker = /serviceWorker|service-worker/i.test(html);
    checks.push({ label: "Service Worker / PWA", status: hasServiceWorker ? "pass" : "warn", note: hasServiceWorker ? "Service worker detected — enables offline caching and PWA features." : "No service worker. Not critical but enables advanced caching and offline support.", category: "advanced" });

    const hasAnalytics = /google-analytics|gtag|ga\(|analytics|googletagmanager|clarity|hotjar|facebook.*pixel|fbq\(|gtm\./i.test(html);
    checks.push({ label: "Analytics Tracking", status: hasAnalytics ? "pass" : "fail", note: hasAnalytics ? "Analytics tracking detected. You're measuring your traffic — essential for making data-driven decisions." : "No analytics tracking found. You're flying blind — install Google Analytics to track visitors, calls, and form submissions.", recommendation: hasAnalytics ? undefined : "Install Google Analytics 4 and Google Tag Manager. Without analytics, you can't measure what's working.", category: "advanced" });

    // ═══ CALCULATE SCORE ═══
    const totalChecks = checks.length;
    const passCount = checks.filter(c => c.status === "pass").length;
    const warnCount = checks.filter(c => c.status === "warn").length;
    const rawScore = Math.round(((passCount * 10 + warnCount * 5) / (totalChecks * 10)) * 100);
    const score = Math.min(95, rawScore); // Cap at 95 — always room to improve

    let grade = "F";
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B+";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C+";
    else if (score >= 50) grade = "C";
    else if (score >= 40) grade = "D";

    return NextResponse.json({ score, grade, checks, domain, detectedCity, totalChecks, categoryLabels: CATEGORY_LABELS });
  } catch (error) {
    console.error("Website grader error:", error);
    return NextResponse.json({ error: "Something went wrong analyzing that website. Please try again." }, { status: 500 });
  }
}
