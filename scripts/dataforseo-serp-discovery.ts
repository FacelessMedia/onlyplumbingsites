/**
 * DataForSEO SERP Discovery — Find All Plumbing Marketing Companies
 * 
 * Searches Google for key plumbing marketing keywords, pulls top 20 organic
 * results for each, and compiles a deduplicated list of all domains found.
 * 
 * Usage: npx tsx scripts/dataforseo-serp-discovery.ts
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

// Keywords to search — these are the terms plumbing marketing companies rank for
const SEARCH_KEYWORDS = [
  "plumbing marketing company",
  "plumbing marketing agency",
  "plumber marketing",
  "plumbing seo",
  "seo for plumbers",
  "plumber seo company",
  "plumbing web design",
  "plumber website design",
  "websites for plumbers",
  "web design for plumbers",
  "plumber advertising",
  "digital marketing for plumbers",
  "plumbing internet marketing",
  "plumber ppc",
  "ppc for plumbers",
  "google ads for plumbers",
  "social media for plumbers",
  "plumbing lead generation",
  "plumber marketing services",
  "plumber digital marketing agency",
  "local seo for plumbers",
  "plumbing marketing",
  "plumbing website builder",
  "plumber seo services",
  "reputation management for plumbers",
  "plumbing company marketing",
];

interface SerpResult {
  domain: string;
  title: string;
  url: string;
  position: number;
  keyword: string;
}

interface DomainSummary {
  domain: string;
  keywords_found_in: string[];
  total_appearances: number;
  avg_position: number;
  positions: number[];
  sample_titles: string[];
  sample_urls: string[];
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function apiPost(endpoint: string, body: unknown[]): Promise<any> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API ${response.status}: ${text.slice(0, 500)}`);
  }
  return response.json();
}

// Use DataForSEO Labs "SERP Competitors" or regular SERP API
// We'll use the Google Organic SERP live endpoint for accuracy
async function searchKeyword(keyword: string): Promise<SerpResult[]> {
  const body = [
    {
      keyword,
      location_code: 2840, // US
      language_code: "en",
      depth: 20, // top 20 results
    },
  ];

  const data = await apiPost("/serp/google/organic/live/regular", body);
  const task = data.tasks?.[0];

  if (task?.status_code !== 20000) {
    console.error(`   ⚠️ SERP failed for "${keyword}": ${task?.status_message}`);
    return [];
  }

  const items = task.result?.[0]?.items || [];
  const results: SerpResult[] = [];

  for (const item of items) {
    if (item.type === "organic") {
      // Extract domain from URL
      let domain = "";
      try {
        domain = new URL(item.url).hostname.replace(/^www\./, "");
      } catch {
        continue;
      }

      results.push({
        domain,
        title: item.title || "",
        url: item.url || "",
        position: item.rank_group || 0,
        keyword,
      });
    }
  }

  return results;
}

async function main() {
  console.log("🔍 SERP Discovery — Finding All Plumbing Marketing Companies");
  console.log("=".repeat(60));
  console.log(`Searching ${SEARCH_KEYWORDS.length} keywords, top 20 results each\n`);

  const outputDir = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const allResults: SerpResult[] = [];

  // Batch keywords: DataForSEO allows sending multiple in one request,
  // but for clarity we'll do them sequentially with rate limiting
  for (let i = 0; i < SEARCH_KEYWORDS.length; i++) {
    const keyword = SEARCH_KEYWORDS[i];
    console.log(`[${i + 1}/${SEARCH_KEYWORDS.length}] Searching: "${keyword}"...`);

    try {
      const results = await searchKeyword(keyword);
      allResults.push(...results);
      console.log(`   Found ${results.length} organic results`);
    } catch (err) {
      console.error(`   ❌ Error:`, err);
    }

    // Rate limit
    if (i < SEARCH_KEYWORDS.length - 1) {
      await sleep(300);
    }
  }

  console.log(`\n📊 Total SERP results collected: ${allResults.length}`);

  // Aggregate by domain
  const domainMap = new Map<string, DomainSummary>();

  for (const result of allResults) {
    const existing = domainMap.get(result.domain);
    if (existing) {
      if (!existing.keywords_found_in.includes(result.keyword)) {
        existing.keywords_found_in.push(result.keyword);
      }
      existing.total_appearances++;
      existing.positions.push(result.position);
      existing.avg_position =
        existing.positions.reduce((a, b) => a + b, 0) / existing.positions.length;
      if (existing.sample_titles.length < 3 && !existing.sample_titles.includes(result.title)) {
        existing.sample_titles.push(result.title);
      }
      if (existing.sample_urls.length < 3 && !existing.sample_urls.includes(result.url)) {
        existing.sample_urls.push(result.url);
      }
    } else {
      domainMap.set(result.domain, {
        domain: result.domain,
        keywords_found_in: [result.keyword],
        total_appearances: 1,
        avg_position: result.position,
        positions: [result.position],
        sample_titles: [result.title],
        sample_urls: [result.url],
      });
    }
  }

  // Sort by total appearances (most visible first)
  const sortedDomains = [...domainMap.values()].sort(
    (a, b) => b.keywords_found_in.length - a.keywords_found_in.length
  );

  console.log(`\n🏢 Unique domains found: ${sortedDomains.length}`);

  // Generate markdown report
  let md = `# Plumbing Marketing Company Discovery\n`;
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Method:** Searched ${SEARCH_KEYWORDS.length} plumbing marketing keywords, top 20 Google results each\n`;
  md += `**Total SERP results:** ${allResults.length}\n`;
  md += `**Unique domains found:** ${sortedDomains.length}\n\n`;
  md += `---\n\n`;

  md += `## Keywords Searched\n\n`;
  SEARCH_KEYWORDS.forEach((kw) => {
    md += `- ${kw}\n`;
  });
  md += `\n---\n\n`;

  // Main table — ALL domains sorted by visibility
  md += `## All Domains Found (sorted by keyword visibility)\n\n`;
  md += `Review this list and remove generalist/non-plumbing domains. Keep only plumbing marketing companies.\n\n`;
  md += `| # | Domain | Keywords Ranking For | Appearances | Avg Position | Sample Title |\n`;
  md += `|---|--------|---------------------|-------------|-------------|---------------|\n`;

  sortedDomains.forEach((d, i) => {
    const title = d.sample_titles[0]?.slice(0, 60) || "";
    md += `| ${i + 1} | **${d.domain}** | ${d.keywords_found_in.length} | ${d.total_appearances} | ${d.avg_position.toFixed(1)} | ${title} |\n`;
  });
  md += `\n`;

  // Detailed per-domain breakdown for top domains
  md += `---\n\n## Detailed Breakdown (Top 40 Domains)\n\n`;

  sortedDomains.slice(0, 40).forEach((d) => {
    md += `### ${d.domain}\n`;
    md += `- **Keywords ranking for:** ${d.keywords_found_in.length}/${SEARCH_KEYWORDS.length}\n`;
    md += `- **Total appearances:** ${d.total_appearances}\n`;
    md += `- **Avg position:** ${d.avg_position.toFixed(1)}\n`;
    md += `- **Keywords:** ${d.keywords_found_in.join(", ")}\n`;
    md += `- **Sample URLs:**\n`;
    d.sample_urls.forEach((url) => {
      md += `  - ${url}\n`;
    });
    md += `\n`;
  });

  // Save
  const mdPath = path.join(outputDir, "serp-company-discovery.md");
  fs.writeFileSync(mdPath, md);
  console.log(`\n📝 Report saved: ${mdPath}`);

  // Save raw JSON for later use
  const jsonPath = path.join(outputDir, "serp-domains.json");
  fs.writeFileSync(jsonPath, JSON.stringify(sortedDomains, null, 2));
  console.log(`📂 Domain data saved: ${jsonPath}`);

  // Save as simple CSV for quick review
  const csvRows = [
    "rank,domain,keywords_found_in,total_appearances,avg_position,sample_title,sample_url",
  ];
  sortedDomains.forEach((d, i) => {
    csvRows.push(
      `${i + 1},"${d.domain}",${d.keywords_found_in.length},${d.total_appearances},${d.avg_position.toFixed(1)},"${(d.sample_titles[0] || "").replace(/"/g, '""')}","${d.sample_urls[0] || ""}"`
    );
  });
  const csvPath = path.join(outputDir, "serp-domains.csv");
  fs.writeFileSync(csvPath, csvRows.join("\n"));
  console.log(`📊 CSV saved: ${csvPath}`);

  // Print top 30 to console for quick review
  console.log(`\n${"=".repeat(60)}`);
  console.log(`TOP DOMAINS BY KEYWORD VISIBILITY`);
  console.log(`${"=".repeat(60)}\n`);

  sortedDomains.slice(0, 30).forEach((d, i) => {
    console.log(
      `${String(i + 1).padStart(2)}. ${d.domain.padEnd(35)} ${String(d.keywords_found_in.length).padStart(2)} keywords | avg pos ${d.avg_position.toFixed(1).padStart(5)} | ${d.sample_titles[0]?.slice(0, 50) || ""}`
    );
  });

  console.log(`\n✅ Done! Review serp-company-discovery.md to pick competitors.`);
  console.log(`After removing generalists, run the keyword pull script on the remaining domains.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
