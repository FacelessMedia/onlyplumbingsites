/**
 * DataForSEO Competitor Keyword Extraction Script
 * 
 * Pulls all ranked keywords for plumberseo.net and strictlyplumbers.com
 * using the DataForSEO Labs API.
 * 
 * Usage:
 *   1. Add your DataForSEO credentials to .env.local
 *   2. Run: npx tsx scripts/dataforseo-keywords.ts
 * 
 * Output: 
 *   - scripts/output/plumberseo-keywords.json
 *   - scripts/output/strictlyplumbers-keywords.json
 *   - scripts/output/combined-keyword-report.csv
 *   - scripts/output/keyword-analysis.md (summary)
 */

import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN;
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD;

if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
  console.error(
    "❌ Missing DataForSEO credentials. Add DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD to .env.local"
  );
  process.exit(1);
}

const AUTH_HEADER =
  "Basic " +
  Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString("base64");

const API_BASE = "https://api.dataforseo.com/v3";

const TARGETS = [
  { domain: "plumberseo.net", label: "plumberseo" },
  { domain: "strictlyplumbers.com", label: "strictlyplumbers" },
];

// --- Types ---
interface KeywordResult {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: number;
  position: number;
  url: string;
  etv: number; // estimated traffic volume
  type: string; // organic, paid, featured_snippet, etc.
}

interface DomainReport {
  domain: string;
  total_keywords: number;
  top10_keywords: number;
  top3_keywords: number;
  estimated_traffic: number;
  keywords: KeywordResult[];
}

// --- API Helpers ---
async function apiPost(endpoint: string, body: unknown[]): Promise<unknown> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getRankedKeywords(
  domain: string,
  limit: number = 1000,
  offset: number = 0
): Promise<{ items: unknown[]; total_count: number }> {
  const body = [
    {
      target: domain,
      location_code: 2840, // United States
      language_code: "en",
      item_types: ["organic"],
      limit,
      offset,
      order_by: ["keyword_data.keyword_info.search_volume,desc"],
      filters: [
        "keyword_data.keyword_info.search_volume",
        ">",
        0,
      ],
    },
  ];

  const data = (await apiPost(
    "/dataforseo_labs/google/ranked_keywords/live",
    body
  )) as {
    tasks: Array<{
      result: Array<{
        items: unknown[];
        total_count: number;
      }>;
      status_code: number;
      status_message: string;
    }>;
  };

  const task = data.tasks?.[0];
  if (task?.status_code !== 20000) {
    throw new Error(
      `Task failed: ${task?.status_code} — ${task?.status_message}`
    );
  }

  const result = task.result?.[0];
  return {
    items: result?.items || [],
    total_count: result?.total_count || 0,
  };
}

// --- Extract keyword data from raw API items ---
function parseKeywordItems(items: unknown[]): KeywordResult[] {
  return items.map((item: any) => {
    const kd = item.keyword_data;
    const serp = item.ranked_serp_element?.serp_item;

    return {
      keyword: kd?.keyword || "",
      search_volume: kd?.keyword_info?.search_volume || 0,
      cpc: kd?.keyword_info?.cpc || 0,
      competition: kd?.keyword_info?.competition || 0,
      position: serp?.rank_group || 0,
      url: serp?.relative_url || "",
      etv: serp?.etv || 0,
      type: serp?.type || "organic",
    };
  });
}

// --- Paginate through all results ---
async function getAllKeywords(domain: string): Promise<DomainReport> {
  console.log(`\n🔍 Fetching keywords for ${domain}...`);

  const PAGE_SIZE = 1000;
  let allKeywords: KeywordResult[] = [];
  let offset = 0;
  let totalCount = 0;

  // First page
  const first = await getRankedKeywords(domain, PAGE_SIZE, 0);
  totalCount = first.total_count;
  allKeywords = parseKeywordItems(first.items);
  console.log(`   Found ${totalCount} total keywords. Fetched ${allKeywords.length}...`);

  // Subsequent pages (up to 5000 keywords max to control costs)
  const MAX_KEYWORDS = 5000;
  while (allKeywords.length < totalCount && allKeywords.length < MAX_KEYWORDS) {
    offset += PAGE_SIZE;
    console.log(`   Fetching offset ${offset}...`);
    const page = await getRankedKeywords(domain, PAGE_SIZE, offset);
    const parsed = parseKeywordItems(page.items);
    if (parsed.length === 0) break;
    allKeywords = allKeywords.concat(parsed);
    // Rate limit: wait 200ms between requests
    await new Promise((r) => setTimeout(r, 200));
  }

  const top10 = allKeywords.filter((k) => k.position <= 10);
  const top3 = allKeywords.filter((k) => k.position <= 3);
  const totalETV = allKeywords.reduce((sum, k) => sum + k.etv, 0);

  console.log(`   ✅ ${domain}: ${allKeywords.length} keywords fetched`);
  console.log(`      Top 3: ${top3.length} | Top 10: ${top10.length} | Est. Traffic: ${Math.round(totalETV)}`);

  return {
    domain,
    total_keywords: allKeywords.length,
    top10_keywords: top10.length,
    top3_keywords: top3.length,
    estimated_traffic: Math.round(totalETV),
    keywords: allKeywords,
  };
}

// --- Generate CSV ---
function generateCSV(reports: DomainReport[]): string {
  const rows: string[] = [
    "keyword,search_volume,cpc,competition,domain,position,url,etv",
  ];

  for (const report of reports) {
    for (const kw of report.keywords) {
      rows.push(
        [
          `"${kw.keyword.replace(/"/g, '""')}"`,
          kw.search_volume,
          kw.cpc.toFixed(2),
          kw.competition.toFixed(4),
          report.domain,
          kw.position,
          `"${kw.url}"`,
          kw.etv.toFixed(2),
        ].join(",")
      );
    }
  }

  return rows.join("\n");
}

// --- Generate analysis markdown ---
function generateAnalysis(reports: DomainReport[]): string {
  let md = `# Competitor Keyword Analysis\n`;
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Source:** DataForSEO Labs API — Ranked Keywords\n\n`;
  md += `---\n\n`;

  // Overview table
  md += `## Overview\n\n`;
  md += `| Metric | ${reports.map((r) => r.domain).join(" | ")} |\n`;
  md += `|--------|${reports.map(() => "------").join("|")}|\n`;
  md += `| Total Keywords | ${reports.map((r) => r.total_keywords.toLocaleString()).join(" | ")} |\n`;
  md += `| Top 3 Positions | ${reports.map((r) => r.top3_keywords.toLocaleString()).join(" | ")} |\n`;
  md += `| Top 10 Positions | ${reports.map((r) => r.top10_keywords.toLocaleString()).join(" | ")} |\n`;
  md += `| Est. Monthly Traffic | ${reports.map((r) => r.estimated_traffic.toLocaleString()).join(" | ")} |\n\n`;

  // Per-domain breakdown
  for (const report of reports) {
    md += `---\n\n## ${report.domain}\n\n`;

    // Top 30 keywords by search volume
    md += `### Top 30 Keywords by Search Volume\n\n`;
    md += `| # | Keyword | Volume | Position | CPC | URL |\n`;
    md += `|---|---------|--------|----------|-----|-----|\n`;
    const top30 = [...report.keywords]
      .sort((a, b) => b.search_volume - a.search_volume)
      .slice(0, 30);
    top30.forEach((kw, i) => {
      md += `| ${i + 1} | ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} | ${kw.url} |\n`;
    });

    // Top keywords by position (page 1)
    md += `\n### Top Page 1 Rankings (Position 1-10)\n\n`;
    md += `| Keyword | Volume | Position | CPC |\n`;
    md += `|---------|--------|----------|-----|\n`;
    const page1 = [...report.keywords]
      .filter((k) => k.position <= 10)
      .sort((a, b) => a.position - b.position)
      .slice(0, 50);
    page1.forEach((kw) => {
      md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} |\n`;
    });

    // URL breakdown — which pages rank for most keywords
    md += `\n### Pages Ranking for Most Keywords\n\n`;
    const urlCounts: Record<string, { count: number; totalVol: number }> = {};
    for (const kw of report.keywords) {
      if (!urlCounts[kw.url]) urlCounts[kw.url] = { count: 0, totalVol: 0 };
      urlCounts[kw.url].count++;
      urlCounts[kw.url].totalVol += kw.search_volume;
    }
    const topUrls = Object.entries(urlCounts)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 20);
    md += `| URL | Keywords | Total Volume |\n`;
    md += `|-----|----------|--------------|\n`;
    topUrls.forEach(([url, data]) => {
      md += `| ${url} | ${data.count} | ${data.totalVol.toLocaleString()} |\n`;
    });
    md += `\n`;
  }

  // Combined: keywords both domains rank for
  if (reports.length === 2) {
    md += `---\n\n## Keyword Overlap\n\n`;
    md += `Keywords that BOTH ${reports[0].domain} and ${reports[1].domain} rank for:\n\n`;
    const set1 = new Map(reports[0].keywords.map((k) => [k.keyword, k]));
    const set2 = new Map(reports[1].keywords.map((k) => [k.keyword, k]));
    const overlap: Array<{
      keyword: string;
      volume: number;
      pos1: number;
      pos2: number;
    }> = [];
    for (const [kw, data1] of set1) {
      const data2 = set2.get(kw);
      if (data2) {
        overlap.push({
          keyword: kw,
          volume: data1.search_volume,
          pos1: data1.position,
          pos2: data2.position,
        });
      }
    }
    overlap.sort((a, b) => b.volume - a.volume);
    md += `**${overlap.length} overlapping keywords found.**\n\n`;
    md += `| Keyword | Volume | ${reports[0].domain} Pos | ${reports[1].domain} Pos |\n`;
    md += `|---------|--------|------|------|\n`;
    overlap.slice(0, 50).forEach((o) => {
      md += `| ${o.keyword} | ${o.volume.toLocaleString()} | ${o.pos1} | ${o.pos2} |\n`;
    });
    md += `\n`;

    // Unique to each
    const unique1 = reports[0].keywords.filter((k) => !set2.has(k.keyword));
    const unique2 = reports[1].keywords.filter((k) => !set1.has(k.keyword));
    md += `### Keywords Unique to ${reports[0].domain} (Top 30)\n\n`;
    md += `| Keyword | Volume | Position | CPC |\n`;
    md += `|---------|--------|----------|-----|\n`;
    unique1
      .sort((a, b) => b.search_volume - a.search_volume)
      .slice(0, 30)
      .forEach((kw) => {
        md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} |\n`;
      });

    md += `\n### Keywords Unique to ${reports[1].domain} (Top 30)\n\n`;
    md += `| Keyword | Volume | Position | CPC |\n`;
    md += `|---------|--------|----------|-----|\n`;
    unique2
      .sort((a, b) => b.search_volume - a.search_volume)
      .slice(0, 30)
      .forEach((kw) => {
        md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} |\n`;
      });
  }

  // Target keyword categories for Only Plumbing Sites
  md += `\n---\n\n## Keyword Categories to Target (for onlyplumbingsites.com)\n\n`;
  md += `Based on competitor analysis, here are the keyword clusters to build content around:\n\n`;

  const allKw = reports.flatMap((r) => r.keywords);
  const categories: Record<string, KeywordResult[]> = {
    "Plumber SEO": [],
    "Plumber Website / Web Design": [],
    "Plumber Marketing": [],
    "Plumber PPC / Google Ads": [],
    "Plumber Social Media": [],
    "Plumber Lead Generation": [],
    "Plumber Business / Coaching": [],
    "Google Business Profile / Maps": [],
    "Plumber Branding / Logo": [],
    "General SEO / Digital Marketing": [],
  };

  for (const kw of allKw) {
    const lower = kw.keyword.toLowerCase();
    if (lower.includes("seo") && (lower.includes("plumb") || lower.includes("hvac"))) {
      categories["Plumber SEO"].push(kw);
    } else if (lower.includes("website") || lower.includes("web design")) {
      categories["Plumber Website / Web Design"].push(kw);
    } else if (lower.includes("marketing") && lower.includes("plumb")) {
      categories["Plumber Marketing"].push(kw);
    } else if (lower.includes("ppc") || lower.includes("google ads") || lower.includes("adwords")) {
      categories["Plumber PPC / Google Ads"].push(kw);
    } else if (lower.includes("social media") || lower.includes("facebook")) {
      categories["Plumber Social Media"].push(kw);
    } else if (lower.includes("lead") || lower.includes("calls")) {
      categories["Plumber Lead Generation"].push(kw);
    } else if (lower.includes("business") || lower.includes("coach") || lower.includes("hiring")) {
      categories["Plumber Business / Coaching"].push(kw);
    } else if (lower.includes("google") && (lower.includes("map") || lower.includes("business") || lower.includes("local"))) {
      categories["Google Business Profile / Maps"].push(kw);
    } else if (lower.includes("brand") || lower.includes("logo")) {
      categories["Plumber Branding / Logo"].push(kw);
    } else {
      categories["General SEO / Digital Marketing"].push(kw);
    }
  }

  for (const [cat, keywords] of Object.entries(categories)) {
    const unique = [...new Map(keywords.map((k) => [k.keyword, k])).values()]
      .sort((a, b) => b.search_volume - a.search_volume);
    if (unique.length === 0) continue;
    md += `### ${cat} (${unique.length} keywords)\n\n`;
    md += `| Keyword | Volume | CPC |\n`;
    md += `|---------|--------|-----|\n`;
    unique.slice(0, 15).forEach((kw) => {
      md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | $${kw.cpc.toFixed(2)} |\n`;
    });
    md += `\n`;
  }

  return md;
}

// --- Main ---
async function main() {
  console.log("🚀 DataForSEO Competitor Keyword Extraction");
  console.log("=".repeat(50));

  const outputDir = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const reports: DomainReport[] = [];

  for (const target of TARGETS) {
    try {
      const report = await getAllKeywords(target.domain);
      reports.push(report);

      // Save raw JSON
      const jsonPath = path.join(outputDir, `${target.label}-keywords.json`);
      fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
      console.log(`   📄 Saved: ${jsonPath}`);
    } catch (error) {
      console.error(`   ❌ Error fetching ${target.domain}:`, error);
    }
  }

  if (reports.length === 0) {
    console.error("No data fetched. Check your credentials and try again.");
    process.exit(1);
  }

  // Generate CSV
  const csvPath = path.join(outputDir, "combined-keyword-report.csv");
  fs.writeFileSync(csvPath, generateCSV(reports));
  console.log(`\n📊 CSV saved: ${csvPath}`);

  // Generate analysis markdown
  const mdPath = path.join(outputDir, "keyword-analysis.md");
  fs.writeFileSync(mdPath, generateAnalysis(reports));
  console.log(`📝 Analysis saved: ${mdPath}`);

  console.log("\n✅ Done! Check scripts/output/ for results.");
  console.log("\nNext steps:");
  console.log("  1. Review keyword-analysis.md for the full breakdown");
  console.log("  2. Use the keyword categories to plan your content strategy");
  console.log("  3. Build pages targeting the highest-value keyword clusters");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
