/**
 * DataForSEO Niche Reverse Engineering
 * 
 * For each important plumbing marketing keyword:
 *   1. Pull top 3 SERP results
 *   2. Fetch and analyze each ranking page (headings, structure, elements)
 *   3. Cluster keywords that share ranking URLs (= same page targets multiple keywords)
 *   4. For each cluster, document common page elements across top rankers
 *   5. Output content blueprints for each cluster
 * 
 * Usage: npx tsx scripts/dataforseo-niche-reverse-engineer.ts
 */

import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN;
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD;

if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
  console.error("❌ Missing DataForSEO credentials in .env.local");
  process.exit(1);
}

const AUTH_HEADER =
  "Basic " +
  Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString("base64");
const API_BASE = "https://api.dataforseo.com/v3";

// =============================================
// TARGET KEYWORDS — the most important plumbing marketing keywords
// Hand-curated from our 16K relevant keyword database
// =============================================
const TARGET_KEYWORDS = [
  // --- Core service keywords ---
  "plumbing seo",
  "seo for plumbers",
  "plumber seo company",
  "plumber seo services",
  "local seo for plumbers",
  "plumbing marketing",
  "plumbing marketing agency",
  "plumber marketing",
  "plumber marketing company",
  "plumbing marketing company",
  "marketing for plumbers",
  "digital marketing for plumbers",
  "plumber digital marketing agency",
  "plumber internet marketing",
  "plumbing web design",
  "web design for plumbers",
  "plumber website design",
  "websites for plumbers",
  "plumber website",
  "ppc for plumbers",
  "google ads for plumbers",
  "plumber ppc",
  "social media for plumbers",
  "facebook ads for plumbers",
  "plumber advertising",
  "plumbing lead generation",
  "plumber leads",
  "reputation management for plumbers",
  "google business profile for plumbers",
  // --- Content / informational keywords ---
  "plumber seo agency",
  "plumbing seo services",
  "plumbing digital marketing",
  "plumber marketing services",
  "plumbing company marketing",
  "how to market a plumbing business",
  "plumbing marketing ideas",
  "plumbing advertising ideas",
  "plumber website builder",
  "best plumbing websites",
  "plumbing business plan",
  "how to get more plumbing leads",
  "plumber keywords",
  "plumbing keywords list",
  "plumber slogans",
  "how to start a plumbing business",
  "plumber memes",
  "plumbing ads",
  // --- Broader but valuable ---
  "home service marketing",
  "contractor marketing",
  "contractor seo",
  "local service ads for plumbers",
  "plumber google ads",
  "plumber branding",
  "plumbing logo design",
  "plumber review management",
  "plumbing social media posts",
  "plumber sales training",
  "selling a plumbing business",
  "plumber answering service",
  "plumber chatbot",
];

// --- Types ---
interface SerpEntry {
  keyword: string;
  position: number;
  domain: string;
  url: string;
  title: string;
  description: string;
}

interface PageAnalysis {
  url: string;
  domain: string;
  title: string;
  description: string;
  keywords_ranking_for: string[];
  headings: { tag: string; text: string }[];
  word_count_estimate: number;
  has_form: boolean;
  has_video: boolean;
  has_pricing: boolean;
  has_testimonials: boolean;
  has_faq: boolean;
  has_cta_buttons: boolean;
  has_phone_number: boolean;
  has_case_studies: boolean;
  has_stats_numbers: boolean;
  has_process_steps: boolean;
  has_comparison_table: boolean;
  has_blog_content: boolean;
  content_sections: string[];
  raw_text_snippet: string;
}

interface KeywordCluster {
  cluster_id: number;
  primary_keyword: string;
  keywords: string[];
  total_search_volume: number;
  shared_urls: string[];
  page_blueprints: PageAnalysis[];
  common_elements: string[];
  recommended_page_type: string;
  recommended_url: string;
  recommended_title: string;
  content_outline: string[];
}

// --- API helpers ---
async function apiPost(endpoint: string, body: unknown[]): Promise<any> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { Authorization: AUTH_HEADER, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API ${response.status}: ${text.slice(0, 300)}`);
  }
  return response.json();
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// --- Step 1: SERP fetch ---
async function fetchSerp(keyword: string): Promise<SerpEntry[]> {
  const body = [
    {
      keyword,
      location_code: 2840,
      language_code: "en",
      depth: 10,
    },
  ];
  const data = await apiPost("/serp/google/organic/live/regular", body);
  const task = data.tasks?.[0];
  if (task?.status_code !== 20000) return [];

  const items = task.result?.[0]?.items || [];
  const results: SerpEntry[] = [];

  for (const item of items) {
    if (item.type !== "organic") continue;
    let domain = "";
    try { domain = new URL(item.url).hostname.replace(/^www\./, ""); } catch { continue; }
    results.push({
      keyword,
      position: item.rank_group || 0,
      domain,
      url: item.url || "",
      title: item.title || "",
      description: item.description || "",
    });
    if (results.length >= 3) break; // Top 3 only
  }
  return results;
}

// --- Step 2: Page analysis via DataForSEO On-Page Instant ---
async function analyzePage(url: string): Promise<Partial<PageAnalysis>> {
  try {
    const body = [{
      url,
      enable_javascript: true,
      enable_browser_rendering: true,
    }];
    const data = await apiPost("/on_page/instant_pages", body);
    const task = data.tasks?.[0];
    if (task?.status_code !== 20000) {
      return { url, headings: [], content_sections: [], raw_text_snippet: "" };
    }
    const page = task.result?.[0]?.items?.[0];
    if (!page) return { url, headings: [], content_sections: [], raw_text_snippet: "" };

    const meta = page.meta || {};
    const onPage = page.page_timing || {};

    return {
      url,
      title: meta.title || "",
      description: meta.description || "",
      word_count_estimate: page.meta?.content?.plain_text_word_count || 0,
      headings: (page.meta?.htags || []).flatMap((tagGroup: any) => {
        if (!tagGroup) return [];
        return Object.entries(tagGroup).flatMap(([tag, texts]: [string, any]) =>
          (Array.isArray(texts) ? texts : []).map((text: string) => ({ tag, text }))
        );
      }),
    };
  } catch {
    return { url, headings: [], content_sections: [], raw_text_snippet: "" };
  }
}

// Lightweight page analysis via content fetch (fallback / supplement)
async function analyzePageViaFetch(url: string): Promise<Partial<PageAnalysis>> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; OnlyPlumbingSites/1.0)" },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!response.ok) return {};
    const html = await response.text();
    const lower = html.toLowerCase();

    // Extract headings
    const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
    const headings: { tag: string; text: string }[] = [];
    let match;
    while ((match = headingRegex.exec(html)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, "").trim();
      if (text.length > 0 && text.length < 200) {
        headings.push({ tag: match[1].toLowerCase(), text });
      }
    }

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "";

    // Extract meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    const description = descMatch ? descMatch[1].trim() : "";

    // Word count estimate (strip HTML, count words)
    const textContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = textContent.split(/\s+/).length;

    // Detect page elements
    const has_form = /<form/i.test(html);
    const has_video = /youtube|vimeo|<video|wistia/i.test(html);
    const has_pricing = /pricing|price|\$[\d,]+\/mo|\$[\d,]+per month|\/month/i.test(lower);
    const has_testimonials = /testimonial|review|client.say|what.our.clients|customer.stories/i.test(lower);
    const has_faq = /faq|frequently.asked|accordion|question.*answer/i.test(lower);
    const has_cta_buttons = /book.a.call|schedule|get.a.quote|free.consultation|contact.us|get.started|free.audit/i.test(lower);
    const has_phone_number = /\(\d{3}\)\s*\d{3}[-.]\d{4}|\d{3}[-.]\d{3}[-.]\d{4}/i.test(html);
    const has_case_studies = /case.stud|portfolio|our.work|client.results|success.stor/i.test(lower);
    const has_stats_numbers = /\d+\s*\+|\d+%|\d+x|million|thousand|hundreds/i.test(lower);
    const has_process_steps = /step\s*\d|phase\s*\d|how.it.works|our.process|process.step/i.test(lower);
    const has_comparison_table = /<table|comparison|vs\.|versus|compare/i.test(lower);
    const has_blog_content = /blog|article|posted.on|published|read.more|min.read/i.test(lower);

    // Detect content sections from headings
    const content_sections = headings
      .filter((h) => h.tag === "h2" || h.tag === "h3")
      .map((h) => `[${h.tag}] ${h.text}`);

    return {
      url,
      title,
      description,
      word_count_estimate: wordCount,
      headings,
      has_form,
      has_video,
      has_pricing,
      has_testimonials,
      has_faq,
      has_cta_buttons,
      has_phone_number,
      has_case_studies,
      has_stats_numbers,
      has_process_steps,
      has_comparison_table,
      has_blog_content,
      content_sections,
    };
  } catch (err) {
    return { url };
  }
}

// --- Step 3: Keyword clustering ---
function clusterKeywords(
  serpData: Map<string, SerpEntry[]>,
  volumeMap: Map<string, number>
): KeywordCluster[] {
  // Build URL → keywords mapping
  const urlToKeywords = new Map<string, Set<string>>();
  const keywordToUrls = new Map<string, Set<string>>();

  for (const [keyword, entries] of serpData) {
    const urls = new Set<string>();
    for (const entry of entries.slice(0, 3)) { // top 3
      urls.add(entry.url);
      if (!urlToKeywords.has(entry.url)) urlToKeywords.set(entry.url, new Set());
      urlToKeywords.get(entry.url)!.add(keyword);
    }
    keywordToUrls.set(keyword, urls);
  }

  // Greedy clustering: group keywords that share ranking URLs
  const clustered = new Set<string>();
  const clusters: { keywords: Set<string>; urls: Set<string> }[] = [];

  // Sort keywords by volume for priority
  const sortedKeywords = [...serpData.keys()].sort(
    (a, b) => (volumeMap.get(b) || 0) - (volumeMap.get(a) || 0)
  );

  for (const keyword of sortedKeywords) {
    if (clustered.has(keyword)) continue;

    const cluster: { keywords: Set<string>; urls: Set<string> } = {
      keywords: new Set([keyword]),
      urls: new Set(keywordToUrls.get(keyword) || []),
    };
    clustered.add(keyword);

    // Find other keywords that share at least 1 top-3 URL
    for (const otherKeyword of sortedKeywords) {
      if (clustered.has(otherKeyword)) continue;
      const otherUrls = keywordToUrls.get(otherKeyword) || new Set();
      // Check overlap
      let sharedCount = 0;
      for (const url of otherUrls) {
        if (cluster.urls.has(url)) sharedCount++;
      }
      // If they share at least 1 top-3 URL, they belong in the same cluster
      if (sharedCount >= 1) {
        cluster.keywords.add(otherKeyword);
        for (const url of otherUrls) cluster.urls.add(url);
        clustered.add(otherKeyword);
      }
    }

    clusters.push(cluster);
  }

  // Convert to typed clusters
  return clusters.map((c, i) => {
    const keywords = [...c.keywords];
    const totalVol = keywords.reduce((s, k) => s + (volumeMap.get(k) || 0), 0);
    // Primary keyword = highest volume in cluster
    keywords.sort((a, b) => (volumeMap.get(b) || 0) - (volumeMap.get(a) || 0));

    return {
      cluster_id: i + 1,
      primary_keyword: keywords[0],
      keywords,
      total_search_volume: totalVol,
      shared_urls: [...c.urls],
      page_blueprints: [],
      common_elements: [],
      recommended_page_type: "",
      recommended_url: "",
      recommended_title: "",
      content_outline: [],
    };
  });
}

// --- Main ---
async function main() {
  console.log("🔬 NICHE REVERSE ENGINEERING — Full Content Blueprint");
  console.log("=".repeat(60));
  console.log(`Target keywords: ${TARGET_KEYWORDS.length}\n`);

  const outputDir = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // Load volume data from master CSV
  const volumeMap = new Map<string, number>();
  const masterCsvPath = path.join(outputDir, "master-relevant-keywords.csv");
  if (fs.existsSync(masterCsvPath)) {
    const lines = fs.readFileSync(masterCsvPath, "utf-8").split("\n").slice(1);
    for (const line of lines) {
      const match = line.match(/^"([^"]+)",(\d+)/);
      if (match) volumeMap.set(match[1], parseInt(match[2]));
    }
  }

  // =============================================
  // STEP 1: Fetch top 3 SERP results per keyword
  // =============================================
  console.log("📡 STEP 1: Fetching top 3 SERP results per keyword...\n");
  const serpData = new Map<string, SerpEntry[]>();

  for (let i = 0; i < TARGET_KEYWORDS.length; i++) {
    const kw = TARGET_KEYWORDS[i];
    process.stdout.write(`  [${i + 1}/${TARGET_KEYWORDS.length}] "${kw}"...`);
    const results = await fetchSerp(kw);
    serpData.set(kw, results);
    console.log(` ${results.length} results`);
    await sleep(350);
  }

  // Save raw SERP data
  const serpJson: Record<string, SerpEntry[]> = {};
  for (const [k, v] of serpData) serpJson[k] = v;
  fs.writeFileSync(path.join(outputDir, "serp-top3-raw.json"), JSON.stringify(serpJson, null, 2));

  // =============================================
  // STEP 2: Cluster keywords by shared URLs
  // =============================================
  console.log("\n🧩 STEP 2: Clustering keywords by shared ranking URLs...\n");
  const clusters = clusterKeywords(serpData, volumeMap);
  console.log(`  Found ${clusters.length} content clusters`);
  clusters.slice(0, 10).forEach((c) => {
    console.log(`  Cluster ${c.cluster_id}: "${c.primary_keyword}" + ${c.keywords.length - 1} others (vol: ${c.total_search_volume.toLocaleString()})`);
  });

  // =============================================
  // STEP 3: Analyze top ranking pages for each cluster
  // =============================================
  console.log("\n🔍 STEP 3: Analyzing page structure of top ranking URLs...\n");

  // Collect unique URLs to analyze (deduplicate across clusters)
  const allUrls = new Set<string>();
  for (const cluster of clusters) {
    for (const url of cluster.shared_urls.slice(0, 6)) { // max 6 URLs per cluster
      allUrls.add(url);
    }
  }
  console.log(`  ${allUrls.size} unique URLs to analyze`);

  const pageCache = new Map<string, Partial<PageAnalysis>>();
  let urlCount = 0;
  for (const url of allUrls) {
    urlCount++;
    process.stdout.write(`  [${urlCount}/${allUrls.size}] ${url.slice(0, 70)}...`);
    const analysis = await analyzePageViaFetch(url);
    pageCache.set(url, analysis);
    console.log(` ${analysis.word_count_estimate || "?"} words, ${analysis.headings?.length || 0} headings`);
    await sleep(200);
  }

  // Attach page analyses to clusters
  for (const cluster of clusters) {
    const blueprints: PageAnalysis[] = [];
    for (const url of cluster.shared_urls.slice(0, 6)) {
      const cached = pageCache.get(url);
      if (cached) {
        blueprints.push({
          url,
          domain: "",
          title: cached.title || "",
          description: cached.description || "",
          keywords_ranking_for: cluster.keywords,
          headings: cached.headings || [],
          word_count_estimate: cached.word_count_estimate || 0,
          has_form: cached.has_form || false,
          has_video: cached.has_video || false,
          has_pricing: cached.has_pricing || false,
          has_testimonials: cached.has_testimonials || false,
          has_faq: cached.has_faq || false,
          has_cta_buttons: cached.has_cta_buttons || false,
          has_phone_number: cached.has_phone_number || false,
          has_case_studies: cached.has_case_studies || false,
          has_stats_numbers: cached.has_stats_numbers || false,
          has_process_steps: cached.has_process_steps || false,
          has_comparison_table: cached.has_comparison_table || false,
          has_blog_content: cached.has_blog_content || false,
          content_sections: cached.content_sections || [],
          raw_text_snippet: "",
        });
      }
    }
    cluster.page_blueprints = blueprints;

    // Determine common elements
    if (blueprints.length > 0) {
      const elements: string[] = [];
      const countTrue = (field: keyof PageAnalysis) =>
        blueprints.filter((b) => b[field] === true).length;
      const total = blueprints.length;
      const threshold = Math.ceil(total * 0.4); // 40% of pages have it

      if (countTrue("has_form") >= threshold) elements.push("Lead capture form");
      if (countTrue("has_video") >= threshold) elements.push("Video content");
      if (countTrue("has_pricing") >= threshold) elements.push("Pricing information");
      if (countTrue("has_testimonials") >= threshold) elements.push("Testimonials/reviews");
      if (countTrue("has_faq") >= threshold) elements.push("FAQ section");
      if (countTrue("has_cta_buttons") >= threshold) elements.push("CTA buttons (book/schedule/quote)");
      if (countTrue("has_phone_number") >= threshold) elements.push("Phone number displayed");
      if (countTrue("has_case_studies") >= threshold) elements.push("Case studies/portfolio");
      if (countTrue("has_stats_numbers") >= threshold) elements.push("Stats/numbers (social proof)");
      if (countTrue("has_process_steps") >= threshold) elements.push("Process steps (how it works)");
      if (countTrue("has_comparison_table") >= threshold) elements.push("Comparison table");
      if (countTrue("has_blog_content") >= threshold) elements.push("Blog/article format");

      cluster.common_elements = elements;

      // Average word count
      const avgWords = Math.round(
        blueprints.reduce((s, b) => s + b.word_count_estimate, 0) / blueprints.length
      );

      // Determine page type
      const isBlog = countTrue("has_blog_content") >= threshold;
      const isService = countTrue("has_form") >= threshold || countTrue("has_cta_buttons") >= threshold;
      cluster.recommended_page_type = isBlog ? "Blog/Resource Page" : isService ? "Service Page" : "Landing Page";

      // Generate recommended URL
      const slug = cluster.primary_keyword
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+$/, "");
      cluster.recommended_url = isBlog ? `/blog/${slug}` : `/services/${slug}`;

      // Generate content outline from all headings across top rankers
      const allH2s = blueprints.flatMap((b) =>
        b.headings.filter((h) => h.tag === "h2").map((h) => h.text)
      );
      // Deduplicate similar headings
      const uniqueH2s = [...new Set(allH2s)].slice(0, 15);
      cluster.content_outline = uniqueH2s;

      // Recommended title
      const titles = blueprints.map((b) => b.title).filter(Boolean);
      cluster.recommended_title = `${cluster.primary_keyword.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} | Only Plumbing Sites`;
    }
  }

  // =============================================
  // STEP 4: Generate the blueprint report
  // =============================================
  console.log("\n📝 STEP 4: Generating content blueprints...\n");

  let md = `# Niche Reverse Engineering — Content Blueprint\n`;
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Keywords analyzed:** ${TARGET_KEYWORDS.length}\n`;
  md += `**Content clusters found:** ${clusters.length}\n`;
  md += `**Unique pages analyzed:** ${allUrls.size}\n\n`;
  md += `---\n\n`;

  // Cluster summary table
  md += `## Content Cluster Overview\n\n`;
  md += `| # | Primary Keyword | Keywords in Cluster | Total Volume | Page Type | Recommended URL |\n`;
  md += `|---|----------------|--------------------|--------------|-----------|-----------------|\n`;
  const sortedClusters = [...clusters].sort((a, b) => b.total_search_volume - a.total_search_volume);
  sortedClusters.forEach((c) => {
    md += `| ${c.cluster_id} | ${c.primary_keyword} | ${c.keywords.length} | ${c.total_search_volume.toLocaleString()} | ${c.recommended_page_type} | \`${c.recommended_url}\` |\n`;
  });
  md += `\n---\n\n`;

  // Detailed blueprint per cluster
  for (const cluster of sortedClusters) {
    md += `## Cluster ${cluster.cluster_id}: "${cluster.primary_keyword}"\n\n`;
    md += `**Keywords in this cluster (target ALL on one page):**\n`;
    cluster.keywords.forEach((kw) => {
      const vol = volumeMap.get(kw) || "?";
      md += `- ${kw} (vol: ${typeof vol === "number" ? vol.toLocaleString() : vol})\n`;
    });
    md += `\n`;

    md += `**Total search volume:** ${cluster.total_search_volume.toLocaleString()}\n`;
    md += `**Recommended page type:** ${cluster.recommended_page_type}\n`;
    md += `**Recommended URL:** \`${cluster.recommended_url}\`\n`;
    md += `**Recommended title:** ${cluster.recommended_title}\n\n`;

    // Common elements
    if (cluster.common_elements.length > 0) {
      md += `### Required Page Elements\n`;
      md += `Elements found on 40%+ of top-ranking pages:\n\n`;
      cluster.common_elements.forEach((el) => {
        md += `- ✅ ${el}\n`;
      });
      md += `\n`;
    }

    // Word count benchmark
    if (cluster.page_blueprints.length > 0) {
      const wordCounts = cluster.page_blueprints
        .map((b) => b.word_count_estimate)
        .filter((w) => w > 0);
      if (wordCounts.length > 0) {
        const avg = Math.round(wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length);
        const max = Math.max(...wordCounts);
        const min = Math.min(...wordCounts);
        md += `### Word Count Benchmark\n`;
        md += `- Average: **${avg.toLocaleString()} words**\n`;
        md += `- Range: ${min.toLocaleString()} – ${max.toLocaleString()} words\n`;
        md += `- **Recommendation: Aim for ${Math.round(avg * 1.2).toLocaleString()}+ words** (beat the average by 20%)\n\n`;
      }
    }

    // Content outline from headings
    if (cluster.content_outline.length > 0) {
      md += `### Content Outline (from top-ranking pages)\n`;
      md += `H2 headings used by top rankers — model your page after these:\n\n`;
      cluster.content_outline.forEach((h, i) => {
        md += `${i + 1}. ${h}\n`;
      });
      md += `\n`;
    }

    // Top ranking pages analyzed
    md += `### Top Ranking Pages Analyzed\n\n`;
    for (const bp of cluster.page_blueprints.slice(0, 3)) {
      md += `**${bp.title || bp.url}**\n`;
      md += `- URL: ${bp.url}\n`;
      md += `- Word count: ~${bp.word_count_estimate.toLocaleString()}\n`;
      md += `- Elements: ${[
        bp.has_form && "Form",
        bp.has_video && "Video",
        bp.has_pricing && "Pricing",
        bp.has_testimonials && "Testimonials",
        bp.has_faq && "FAQ",
        bp.has_cta_buttons && "CTAs",
        bp.has_phone_number && "Phone#",
        bp.has_case_studies && "CaseStudies",
        bp.has_stats_numbers && "Stats",
        bp.has_process_steps && "Process",
        bp.has_comparison_table && "CompTable",
      ]
        .filter(Boolean)
        .join(", ") || "N/A"}\n`;

      if (bp.headings.length > 0) {
        md += `- Headings:\n`;
        bp.headings.slice(0, 12).forEach((h) => {
          md += `  - [${h.tag}] ${h.text}\n`;
        });
      }
      md += `\n`;
    }

    md += `---\n\n`;
  }

  // Save blueprint
  const mdPath = path.join(outputDir, "niche-content-blueprint.md");
  fs.writeFileSync(mdPath, md);
  console.log(`📝 Blueprint saved: ${mdPath}`);

  // Save clusters as JSON for programmatic use
  const jsonPath = path.join(outputDir, "content-clusters.json");
  // Strip large fields to keep JSON manageable
  const clustersSave = sortedClusters.map((c) => ({
    cluster_id: c.cluster_id,
    primary_keyword: c.primary_keyword,
    keywords: c.keywords,
    total_search_volume: c.total_search_volume,
    recommended_page_type: c.recommended_page_type,
    recommended_url: c.recommended_url,
    recommended_title: c.recommended_title,
    common_elements: c.common_elements,
    content_outline: c.content_outline,
    num_pages_analyzed: c.page_blueprints.length,
    avg_word_count: c.page_blueprints.length > 0
      ? Math.round(c.page_blueprints.reduce((s, b) => s + b.word_count_estimate, 0) / c.page_blueprints.length)
      : 0,
  }));
  fs.writeFileSync(jsonPath, JSON.stringify(clustersSave, null, 2));
  console.log(`📂 Clusters JSON: ${jsonPath}`);

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("✅ NICHE REVERSE ENGINEERING COMPLETE");
  console.log("=".repeat(60));
  console.log(`\nContent clusters: ${clusters.length}`);
  console.log(`Pages to build: ${clusters.length}`);
  console.log(`Total keyword coverage: ${TARGET_KEYWORDS.length} keywords`);
  console.log(`Total search volume coverage: ${clusters.reduce((s, c) => s + c.total_search_volume, 0).toLocaleString()}`);
  console.log(`\nKey output:`);
  console.log(`  📝 ${mdPath} — Full content blueprint`);
  console.log(`  📂 ${jsonPath} — Cluster data (JSON)`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
