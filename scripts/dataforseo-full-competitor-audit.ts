/**
 * DataForSEO Full Competitor Audit
 * 
 * Pulls FULL keyword reports for every plumbing-focused marketing competitor.
 * Merges into a master deduplicated keyword list with gap analysis.
 * 
 * Usage: npx tsx scripts/dataforseo-full-competitor-audit.ts
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
// ALL plumbing-focused marketing competitors
// Only sites obviously doing plumbing + marketing
// =============================================
const COMPETITORS = [
  // Already pulled (will load from cache)
  { domain: "plumberseo.net", label: "PlumberSEO", cached: true },
  { domain: "strictlyplumbers.com", label: "StrictlyPlumbers", cached: true },
  { domain: "plumbingwebmasters.com", label: "PlumbingWebmasters", cached: false },

  // New — plumbing-specific marketing companies
  { domain: "plumbermarketingfirm.com", label: "PlumberMarketingFirm", cached: false },
  { domain: "kickcharge.com", label: "KickCharge", cached: false },
  { domain: "scorpion.co", label: "Scorpion", cached: false },
  { domain: "hookagency.com", label: "HookAgency", cached: false },
  { domain: "1seo.com", label: "1SEO", cached: false },
  { domain: "relentless-digital.com", label: "RelentlessDigital", cached: false },
  { domain: "jdplumbingpartners.com", label: "JDPlumbingPartners", cached: false },
  { domain: "rivaldigital.com", label: "RivalDigital", cached: false },
  { domain: "bird.marketing", label: "BirdMarketing", cached: false },
  { domain: "mammothforplumbers.com", label: "MammothForPlumbers", cached: false },
  { domain: "choicelocal.com", label: "ChoiceLocal", cached: false },
  { domain: "helium-seo.com", label: "HeliumSEO", cached: false },
  { domain: "valveandmeter.com", label: "ValveAndMeter", cached: false },
  { domain: "rankmetop.net", label: "RankMeTop", cached: false },
];

const MAX_KEYWORDS_PER_DOMAIN = 5000;

// --- Types ---
interface KeywordResult {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: number;
  position: number;
  url: string;
  etv: number;
}

interface DomainReport {
  domain: string;
  label: string;
  total_keywords: number;
  top3: number;
  top10: number;
  top20: number;
  estimated_traffic: number;
  keywords: KeywordResult[];
}

// --- API ---
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

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getRankedKeywords(
  domain: string,
  maxKeywords: number
): Promise<KeywordResult[]> {
  const PAGE_SIZE = 1000;
  let allKeywords: KeywordResult[] = [];
  let offset = 0;

  while (allKeywords.length < maxKeywords) {
    const limit = Math.min(PAGE_SIZE, maxKeywords - allKeywords.length);
    const body = [
      {
        target: domain,
        location_code: 2840,
        language_code: "en",
        item_types: ["organic"],
        limit,
        offset,
        order_by: ["keyword_data.keyword_info.search_volume,desc"],
        filters: ["keyword_data.keyword_info.search_volume", ">", 0],
      },
    ];

    const data = await apiPost(
      "/dataforseo_labs/google/ranked_keywords/live",
      body
    );

    const task = data.tasks?.[0];
    if (task?.status_code !== 20000) {
      console.error(`   ⚠️ Error for ${domain}: ${task?.status_message}`);
      break;
    }

    const items = task.result?.[0]?.items || [];
    if (items.length === 0) break;

    const totalCount = task.result?.[0]?.total_count || 0;

    const parsed: KeywordResult[] = items.map((item: any) => {
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
      };
    });

    allKeywords = allKeywords.concat(parsed);

    // Log progress
    if (offset === 0) {
      console.log(`   Total available: ${totalCount} | Fetching up to ${Math.min(totalCount, maxKeywords)}...`);
    }

    if (parsed.length < limit || allKeywords.length >= totalCount) break;
    offset += limit;
    await sleep(250);
  }

  return allKeywords;
}

// --- Main ---
async function main() {
  console.log("🚀 FULL Competitor Keyword Audit — All Plumbing Marketing Companies");
  console.log("=".repeat(65));
  console.log(`Auditing ${COMPETITORS.length} competitors\n`);

  const outputDir = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const reports: DomainReport[] = [];

  for (let i = 0; i < COMPETITORS.length; i++) {
    const comp = COMPETITORS[i];
    console.log(`\n[${i + 1}/${COMPETITORS.length}] 🔍 ${comp.domain} (${comp.label})`);

    let keywords: KeywordResult[] = [];

    // Check cache first
    const cachePath = path.join(outputDir, `${comp.label.toLowerCase()}-keywords.json`);
    // Also check old naming convention
    const altCachePaths = [
      path.join(outputDir, `plumberseo-keywords.json`),
      path.join(outputDir, `strictlyplumbers-keywords.json`),
    ];

    let loadedFromCache = false;
    if (comp.cached) {
      // Try to load from previous runs
      for (const cp of [cachePath, ...altCachePaths]) {
        if (fs.existsSync(cp)) {
          try {
            const data = JSON.parse(fs.readFileSync(cp, "utf-8"));
            if (data.keywords && data.domain === comp.domain) {
              keywords = data.keywords;
              console.log(`   ✅ Loaded from cache: ${keywords.length} keywords`);
              loadedFromCache = true;
              break;
            }
          } catch {}
        }
      }
    }

    if (!loadedFromCache) {
      try {
        keywords = await getRankedKeywords(comp.domain, MAX_KEYWORDS_PER_DOMAIN);
        console.log(`   ✅ Fetched: ${keywords.length} keywords`);
      } catch (err) {
        console.error(`   ❌ Failed: ${err}`);
        continue;
      }
      await sleep(500);
    }

    const top3 = keywords.filter((k) => k.position <= 3).length;
    const top10 = keywords.filter((k) => k.position <= 10).length;
    const top20 = keywords.filter((k) => k.position <= 20).length;
    const etv = Math.round(keywords.reduce((s, k) => s + k.etv, 0));

    const report: DomainReport = {
      domain: comp.domain,
      label: comp.label,
      total_keywords: keywords.length,
      top3,
      top10,
      top20,
      estimated_traffic: etv,
      keywords,
    };
    reports.push(report);

    // Save individual report
    fs.writeFileSync(
      path.join(outputDir, `${comp.label.toLowerCase()}-keywords.json`),
      JSON.stringify(report, null, 2)
    );
    console.log(`   📊 Top 3: ${top3} | Top 10: ${top10} | Top 20: ${top20} | ETV: ${etv.toLocaleString()}`);
  }

  // =============================================
  // MASTER KEYWORD AGGREGATION
  // =============================================
  console.log("\n\n" + "=".repeat(65));
  console.log("📊 BUILDING MASTER KEYWORD LIST");
  console.log("=".repeat(65));

  // Deduplicate: for each keyword, track which domains rank + best position
  const masterMap = new Map<
    string,
    {
      keyword: string;
      search_volume: number;
      cpc: number;
      competition: number;
      domains: Array<{ domain: string; position: number; url: string }>;
    }
  >();

  for (const report of reports) {
    for (const kw of report.keywords) {
      const existing = masterMap.get(kw.keyword);
      if (existing) {
        existing.domains.push({
          domain: report.domain,
          position: kw.position,
          url: kw.url,
        });
        // Keep highest volume
        if (kw.search_volume > existing.search_volume) {
          existing.search_volume = kw.search_volume;
          existing.cpc = kw.cpc;
          existing.competition = kw.competition;
        }
      } else {
        masterMap.set(kw.keyword, {
          keyword: kw.keyword,
          search_volume: kw.search_volume,
          cpc: kw.cpc,
          competition: kw.competition,
          domains: [
            { domain: report.domain, position: kw.position, url: kw.url },
          ],
        });
      }
    }
  }

  const masterList = [...masterMap.values()].sort(
    (a, b) => b.search_volume - a.search_volume
  );

  console.log(`\nTotal unique keywords across all competitors: ${masterList.length.toLocaleString()}`);

  // Filter to plumbing/marketing relevant
  const relevantKeywords = masterList.filter((kw) => {
    const lower = kw.keyword.toLowerCase();
    return (
      lower.includes("plumb") || lower.includes("hvac") || lower.includes("seo") ||
      lower.includes("marketing") || lower.includes("website") || lower.includes("web design") ||
      lower.includes("contractor") || lower.includes("home service") || lower.includes("lead") ||
      lower.includes("google") || lower.includes("ppc") || lower.includes("review") ||
      lower.includes("reputation") || lower.includes("facebook") || lower.includes("social media") ||
      lower.includes("advertising") || lower.includes("digital") || lower.includes("local service") ||
      lower.includes("branding") || lower.includes("logo") || lower.includes("business coach") ||
      lower.includes("service area") || lower.includes("rank") || lower.includes("traffic")
    );
  });

  console.log(`Plumbing/marketing-relevant keywords: ${relevantKeywords.length.toLocaleString()}`);

  // Multi-competitor keywords (ranked by 3+ competitors = high confidence)
  const highConfidence = masterList.filter((kw) => kw.domains.length >= 3);
  const highConfRelevant = relevantKeywords.filter((kw) => kw.domains.length >= 3);

  console.log(`Keywords ranked by 3+ competitors: ${highConfidence.length.toLocaleString()}`);
  console.log(`Relevant keywords ranked by 3+ competitors: ${highConfRelevant.length.toLocaleString()}`);

  // =============================================
  // GENERATE REPORTS
  // =============================================

  // --- 1. Domain Overview Report ---
  let md = `# Master Competitor Keyword Audit\n`;
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Competitors Audited:** ${reports.length}\n`;
  md += `**Total Unique Keywords:** ${masterList.length.toLocaleString()}\n`;
  md += `**Plumbing/Marketing Relevant:** ${relevantKeywords.length.toLocaleString()}\n\n`;
  md += `---\n\n`;

  // Domain comparison table
  md += `## Competitor Overview\n\n`;
  md += `| # | Domain | Total KWs | Top 3 | Top 10 | Top 20 | Est. Traffic |\n`;
  md += `|---|--------|-----------|-------|--------|--------|-------------|\n`;
  const sortedReports = [...reports].sort((a, b) => b.total_keywords - a.total_keywords);
  sortedReports.forEach((r, i) => {
    md += `| ${i + 1} | **${r.domain}** | ${r.total_keywords.toLocaleString()} | ${r.top3} | ${r.top10} | ${r.top20} | ${r.estimated_traffic.toLocaleString()} |\n`;
  });
  md += `\n`;

  // --- 2. Per-domain top keywords ---
  md += `---\n\n## Per-Competitor Top Keywords\n\n`;
  for (const report of sortedReports) {
    md += `### ${report.domain} (${report.total_keywords.toLocaleString()} keywords)\n\n`;
    md += `| Keyword | Volume | Position | CPC | URL |\n`;
    md += `|---------|--------|----------|-----|-----|\n`;
    // Top 25 by volume
    const top = [...report.keywords]
      .sort((a, b) => b.search_volume - a.search_volume)
      .slice(0, 25);
    for (const kw of top) {
      md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} | ${kw.url} |\n`;
    }

    // Top page rankings
    const page1 = [...report.keywords]
      .filter((k) => k.position <= 10)
      .sort((a, b) => a.position - b.position)
      .slice(0, 15);
    if (page1.length > 0) {
      md += `\n**Page 1 Rankings:**\n`;
      md += `| Keyword | Volume | Position |\n`;
      md += `|---------|--------|----------|\n`;
      for (const kw of page1) {
        md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} |\n`;
      }
    }

    // Pages ranking for most keywords
    const urlMap: Record<string, number> = {};
    for (const kw of report.keywords) {
      urlMap[kw.url] = (urlMap[kw.url] || 0) + 1;
    }
    const topUrls = Object.entries(urlMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    md += `\n**Top Pages by Keyword Count:**\n`;
    md += `| URL | Keywords |\n`;
    md += `|-----|----------|\n`;
    for (const [url, count] of topUrls) {
      md += `| ${url} | ${count} |\n`;
    }
    md += `\n`;
  }

  // --- 3. Master relevant keyword list ---
  md += `---\n\n## Master Relevant Keyword List (Top 200)\n\n`;
  md += `All plumbing/marketing keywords across all competitors, sorted by volume:\n\n`;
  md += `| Keyword | Volume | CPC | # Competitors | Best Position | Domains |\n`;
  md += `|---------|--------|-----|---------------|--------------|--------|\n`;
  relevantKeywords.slice(0, 200).forEach((kw) => {
    const bestPos = Math.min(...kw.domains.map((d) => d.position));
    const domains = kw.domains
      .sort((a, b) => a.position - b.position)
      .slice(0, 3)
      .map((d) => `${d.domain.split(".")[0]}(#${d.position})`)
      .join(", ");
    md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | $${kw.cpc.toFixed(2)} | ${kw.domains.length} | ${bestPos} | ${domains} |\n`;
  });
  md += `\n`;

  // --- 4. High-confidence targets (3+ competitors rank) ---
  md += `---\n\n## High-Confidence Targets (3+ Competitors Rank)\n\n`;
  md += `These keywords are validated — multiple plumbing marketing companies rank for them:\n\n`;
  md += `| Keyword | Volume | CPC | # Competitors | Best Pos |\n`;
  md += `|---------|--------|-----|---------------|----------|\n`;
  highConfRelevant.slice(0, 100).forEach((kw) => {
    const bestPos = Math.min(...kw.domains.map((d) => d.position));
    md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | $${kw.cpc.toFixed(2)} | ${kw.domains.length} | ${bestPos} |\n`;
  });
  md += `\n`;

  // --- 5. Long-tail opportunities ---
  const longTail = relevantKeywords.filter(
    (kw) => kw.keyword.split(" ").length >= 4 && kw.search_volume >= 10
  );
  md += `---\n\n## Long-Tail Opportunities (4+ words)\n\n`;
  md += `Easier to rank for, high intent:\n\n`;
  md += `| Keyword | Volume | CPC | # Competitors |\n`;
  md += `|---------|--------|-----|---------------|\n`;
  longTail.slice(0, 100).forEach((kw) => {
    md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | $${kw.cpc.toFixed(2)} | ${kw.domains.length} |\n`;
  });
  md += `\n`;

  // Save markdown
  const mdPath = path.join(outputDir, "master-competitor-audit.md");
  fs.writeFileSync(mdPath, md);
  console.log(`\n📝 Master audit: ${mdPath}`);

  // Save master CSV
  const csvRows = [
    "keyword,search_volume,cpc,competition,num_competitors,best_position,word_count,domains",
  ];
  for (const kw of masterList) {
    const bestPos = Math.min(...kw.domains.map((d) => d.position));
    const domains = kw.domains.map((d) => d.domain).join("|");
    csvRows.push(
      `"${kw.keyword.replace(/"/g, '""')}",${kw.search_volume},${kw.cpc.toFixed(2)},${kw.competition.toFixed(4)},${kw.domains.length},${bestPos},${kw.keyword.split(" ").length},"${domains}"`
    );
  }
  const csvPath = path.join(outputDir, "master-all-keywords.csv");
  fs.writeFileSync(csvPath, csvRows.join("\n"));
  console.log(`📊 Master CSV (all ${masterList.length.toLocaleString()} keywords): ${csvPath}`);

  // Save relevant-only CSV
  const relCsvRows = [
    "keyword,search_volume,cpc,competition,num_competitors,best_position,word_count,domains",
  ];
  for (const kw of relevantKeywords) {
    const bestPos = Math.min(...kw.domains.map((d) => d.position));
    const domains = kw.domains.map((d) => d.domain).join("|");
    relCsvRows.push(
      `"${kw.keyword.replace(/"/g, '""')}",${kw.search_volume},${kw.cpc.toFixed(2)},${kw.competition.toFixed(4)},${kw.domains.length},${bestPos},${kw.keyword.split(" ").length},"${domains}"`
    );
  }
  const relCsvPath = path.join(outputDir, "master-relevant-keywords.csv");
  fs.writeFileSync(relCsvPath, relCsvRows.join("\n"));
  console.log(`🎯 Relevant CSV (${relevantKeywords.length.toLocaleString()} keywords): ${relCsvPath}`);

  // Summary
  console.log("\n" + "=".repeat(65));
  console.log("✅ FULL COMPETITOR AUDIT COMPLETE");
  console.log("=".repeat(65));
  console.log(`\nCompetitors audited: ${reports.length}`);
  console.log(`Total unique keywords: ${masterList.length.toLocaleString()}`);
  console.log(`Plumbing/marketing relevant: ${relevantKeywords.length.toLocaleString()}`);
  console.log(`High-confidence (3+ competitors): ${highConfRelevant.length.toLocaleString()}`);
  console.log(`Long-tail opportunities (4+ words): ${longTail.length.toLocaleString()}`);
  console.log(`\nKey files:`);
  console.log(`  📝 ${mdPath}`);
  console.log(`  📊 ${csvPath}`);
  console.log(`  🎯 ${relCsvPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
