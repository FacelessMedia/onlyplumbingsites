/**
 * DataForSEO Deep Competitor Analysis
 * 
 * Step 1: Find top competitors of plumberseo.net + strictlyplumbers.com
 * Step 2: Pull ranked keywords for each discovered competitor
 * Step 3: Find keyword gaps (keywords competitors rank for that our targets DON'T)
 * Step 4: Surface long-tail opportunities
 * 
 * Usage:
 *   npx tsx scripts/dataforseo-competitor-deep-dive.ts
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

const SEED_DOMAINS = ["plumberseo.net", "strictlyplumbers.com"];

// Max competitors to analyze per seed domain
const MAX_COMPETITORS_PER_SEED = 10;
// Max keywords to pull per competitor
const MAX_KEYWORDS_PER_COMPETITOR = 2000;
// Only consider competitors with at least this many overlapping keywords
const MIN_INTERSECTIONS = 5;

// --- Types ---
interface CompetitorInfo {
  domain: string;
  avg_position: number;
  se_type: string;
  intersections: number;
  full_domain_metrics?: {
    organic?: { etv?: number; count?: number; pos_1?: number; pos_2_3?: number; pos_4_10?: number };
  };
}

interface KeywordResult {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: number;
  position: number;
  url: string;
  etv: number;
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

// --- Step 1: Find competitors ---
async function getCompetitors(domain: string): Promise<CompetitorInfo[]> {
  console.log(`\n🔍 Finding competitors for ${domain}...`);
  const body = [
    {
      target: domain,
      location_code: 2840,
      language_code: "en",
      filters: ["intersections", ">", MIN_INTERSECTIONS],
      order_by: ["intersections,desc"],
      limit: MAX_COMPETITORS_PER_SEED,
    },
  ];

  const data = await apiPost(
    "/dataforseo_labs/google/competitors_domain/live",
    body
  );

  const task = data.tasks?.[0];
  if (task?.status_code !== 20000) {
    throw new Error(`competitors_domain failed: ${task?.status_code} — ${task?.status_message}`);
  }

  const items = task.result?.[0]?.items || [];
  const competitors: CompetitorInfo[] = items.map((item: any) => ({
    domain: item.domain,
    avg_position: item.avg_position,
    se_type: item.se_type,
    intersections: item.intersections,
    full_domain_metrics: item.full_domain_metrics,
  }));

  console.log(`   Found ${competitors.length} competitors (min ${MIN_INTERSECTIONS} keyword overlap)`);
  competitors.slice(0, 5).forEach((c, i) => {
    const organic = c.full_domain_metrics?.organic;
    console.log(
      `   ${i + 1}. ${c.domain} — ${c.intersections} shared keywords, ` +
      `${organic?.count || "?"} total keywords, ETV: ${organic?.etv?.toLocaleString() || "?"}`
    );
  });

  return competitors;
}

// --- Step 2: Pull ranked keywords for a domain ---
async function getRankedKeywords(
  domain: string,
  maxKeywords: number = MAX_KEYWORDS_PER_COMPETITOR
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
      console.error(`   ⚠️ ranked_keywords failed for ${domain}: ${task?.status_message}`);
      break;
    }

    const items = task.result?.[0]?.items || [];
    if (items.length === 0) break;

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
    if (items.length < limit) break;
    offset += limit;
    await sleep(250);
  }

  return allKeywords;
}

// --- Main ---
async function main() {
  console.log("🚀 Deep Competitor Analysis — Keyword Gap Discovery");
  console.log("=".repeat(55));

  const outputDir = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // =============================================
  // STEP 1: Load seed domain keywords (from previous run)
  // =============================================
  console.log("\n📂 Loading seed domain keywords from previous extraction...");
  const seedKeywords = new Map<string, KeywordResult>();
  
  for (const seed of SEED_DOMAINS) {
    const label = seed.replace(/\./g, "").replace(/com|net/g, "");
    const jsonPath = path.join(outputDir, `${seed === "plumberseo.net" ? "plumberseo" : "strictlyplumbers"}-keywords.json`);
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      for (const kw of data.keywords) {
        // Keep the best position if keyword already exists
        const existing = seedKeywords.get(kw.keyword);
        if (!existing || kw.position < existing.position) {
          seedKeywords.set(kw.keyword, kw);
        }
      }
      console.log(`   ✅ Loaded ${data.keywords.length} keywords from ${seed}`);
    } else {
      console.log(`   ⚠️ No cached data for ${seed}, will fetch fresh...`);
      const kws = await getRankedKeywords(seed, 5000);
      for (const kw of kws) {
        const existing = seedKeywords.get(kw.keyword);
        if (!existing || kw.position < existing.position) {
          seedKeywords.set(kw.keyword, kw);
        }
      }
      console.log(`   ✅ Fetched ${kws.length} keywords from ${seed}`);
      await sleep(500);
    }
  }
  console.log(`\n📊 Combined seed keyword pool: ${seedKeywords.size} unique keywords`);

  // =============================================
  // STEP 2: Discover competitors
  // =============================================
  const allCompetitors = new Map<string, CompetitorInfo>();

  for (const seed of SEED_DOMAINS) {
    const competitors = await getCompetitors(seed);
    for (const comp of competitors) {
      // Skip seed domains themselves and very generic domains
      if (
        SEED_DOMAINS.includes(comp.domain) ||
        ["youtube.com", "facebook.com", "yelp.com", "reddit.com", "wikipedia.org",
         "google.com", "linkedin.com", "twitter.com", "instagram.com", "bbb.org",
         "amazon.com", "thumbtack.com", "homeadvisor.com", "angi.com",
         "forbes.com", "hubspot.com", "semrush.com", "moz.com", "ahrefs.com",
         "neilpatel.com", "searchenginejournal.com", "wordstream.com"
        ].includes(comp.domain)
      ) {
        continue;
      }
      const existing = allCompetitors.get(comp.domain);
      if (!existing || comp.intersections > existing.intersections) {
        allCompetitors.set(comp.domain, comp);
      }
    }
    await sleep(500);
  }

  // Sort by intersections and take top competitors
  const sortedCompetitors = [...allCompetitors.values()]
    .sort((a, b) => b.intersections - a.intersections)
    .slice(0, 8); // Top 8 competitors to analyze

  console.log(`\n🏆 Top ${sortedCompetitors.length} Competitors to Analyze:`);
  sortedCompetitors.forEach((c, i) => {
    const organic = c.full_domain_metrics?.organic;
    console.log(
      `   ${i + 1}. ${c.domain} — ${c.intersections} shared KWs, ` +
      `${organic?.count || "?"} total, ETV: ${organic?.etv?.toLocaleString() || "?"}`
    );
  });

  // Save competitor list
  fs.writeFileSync(
    path.join(outputDir, "discovered-competitors.json"),
    JSON.stringify(sortedCompetitors, null, 2)
  );

  // =============================================
  // STEP 3: Pull keywords from each competitor
  // =============================================
  const competitorKeywordMap = new Map<string, KeywordResult[]>();

  for (let i = 0; i < sortedCompetitors.length; i++) {
    const comp = sortedCompetitors[i];
    console.log(`\n🔍 [${i + 1}/${sortedCompetitors.length}] Fetching keywords for ${comp.domain}...`);
    
    try {
      const kws = await getRankedKeywords(comp.domain, MAX_KEYWORDS_PER_COMPETITOR);
      competitorKeywordMap.set(comp.domain, kws);
      console.log(`   ✅ ${comp.domain}: ${kws.length} keywords fetched`);
    } catch (err) {
      console.error(`   ❌ Failed for ${comp.domain}:`, err);
    }
    
    await sleep(500);
  }

  // =============================================
  // STEP 4: Gap Analysis — find keywords competitors rank for that seeds DON'T
  // =============================================
  console.log("\n📊 Running keyword gap analysis...");

  // All keywords from all competitors, with best position info
  const gapKeywords = new Map<
    string,
    {
      keyword: string;
      search_volume: number;
      cpc: number;
      competition: number;
      ranked_by: Array<{ domain: string; position: number; url: string }>;
    }
  >();

  for (const [domain, keywords] of competitorKeywordMap) {
    for (const kw of keywords) {
      // Only include if seed domains do NOT rank for this keyword
      if (seedKeywords.has(kw.keyword)) continue;
      // Skip very low volume
      if (kw.search_volume < 10) continue;

      const existing = gapKeywords.get(kw.keyword);
      if (existing) {
        existing.ranked_by.push({ domain, position: kw.position, url: kw.url });
        // Keep highest volume (should be same, but just in case)
        if (kw.search_volume > existing.search_volume) {
          existing.search_volume = kw.search_volume;
        }
      } else {
        gapKeywords.set(kw.keyword, {
          keyword: kw.keyword,
          search_volume: kw.search_volume,
          cpc: kw.cpc,
          competition: kw.competition,
          ranked_by: [{ domain, position: kw.position, url: kw.url }],
        });
      }
    }
  }

  // Filter: keywords ranked by 2+ competitors are higher value
  const multiCompetitorGaps = [...gapKeywords.values()]
    .filter((g) => g.ranked_by.length >= 2)
    .sort((a, b) => b.search_volume - a.search_volume);

  const allGaps = [...gapKeywords.values()].sort(
    (a, b) => b.search_volume - a.search_volume
  );

  console.log(`   Total gap keywords found: ${allGaps.length}`);
  console.log(`   Gap keywords ranked by 2+ competitors: ${multiCompetitorGaps.length}`);

  // =============================================
  // STEP 5: Categorize long-tail opportunities
  // =============================================
  const longTailGaps = allGaps.filter(
    (g) => g.keyword.split(" ").length >= 3 && g.search_volume >= 10
  );

  // Plumbing-relevant filter
  const plumbingRelevant = allGaps.filter((g) => {
    const lower = g.keyword.toLowerCase();
    return (
      lower.includes("plumb") ||
      lower.includes("hvac") ||
      lower.includes("seo") ||
      lower.includes("marketing") ||
      lower.includes("website") ||
      lower.includes("web design") ||
      lower.includes("contractor") ||
      lower.includes("home service") ||
      lower.includes("lead gen") ||
      lower.includes("google ads") ||
      lower.includes("ppc") ||
      lower.includes("local service") ||
      lower.includes("google business") ||
      lower.includes("reputation") ||
      lower.includes("review") ||
      lower.includes("social media") ||
      lower.includes("facebook") ||
      lower.includes("service area") ||
      lower.includes("digital marketing")
    );
  });

  const plumbingLongTail = longTailGaps.filter((g) => {
    const lower = g.keyword.toLowerCase();
    return (
      lower.includes("plumb") ||
      lower.includes("hvac") ||
      lower.includes("contractor") ||
      lower.includes("home service") ||
      lower.includes("seo") ||
      lower.includes("marketing") ||
      lower.includes("web") ||
      lower.includes("lead") ||
      lower.includes("google") ||
      lower.includes("facebook") ||
      lower.includes("review") ||
      lower.includes("reputation")
    );
  });

  // =============================================
  // STEP 6: Generate output
  // =============================================
  let md = `# Deep Competitor Keyword Gap Analysis\n`;
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Seed Domains:** ${SEED_DOMAINS.join(", ")}\n`;
  md += `**Methodology:** Find competitors → Pull their keywords → Subtract seed keywords → Surface gaps\n\n`;
  md += `---\n\n`;

  // Competitor overview
  md += `## Discovered Competitors\n\n`;
  md += `| # | Domain | Shared KWs with Seeds | Total Keywords | Est. Traffic |\n`;
  md += `|---|--------|----------------------|----------------|-------------|\n`;
  sortedCompetitors.forEach((c, i) => {
    const organic = c.full_domain_metrics?.organic;
    const totalKws = competitorKeywordMap.get(c.domain)?.length || organic?.count || 0;
    md += `| ${i + 1} | ${c.domain} | ${c.intersections} | ${totalKws.toLocaleString()} | ${(organic?.etv || 0).toLocaleString()} |\n`;
  });
  md += `\n`;

  // Summary stats
  md += `## Gap Analysis Summary\n\n`;
  md += `| Metric | Count |\n`;
  md += `|--------|-------|\n`;
  md += `| Seed domain keywords (plumberseo + strictlyplumbers) | ${seedKeywords.size} |\n`;
  md += `| Total gap keywords (competitors rank, seeds don't) | ${allGaps.length} |\n`;
  md += `| Gap keywords ranked by 2+ competitors | ${multiCompetitorGaps.length} |\n`;
  md += `| Plumbing/marketing-relevant gap keywords | ${plumbingRelevant.length} |\n`;
  md += `| Long-tail gaps (3+ words) | ${longTailGaps.length} |\n`;
  md += `| Plumbing-relevant long-tail gaps | ${plumbingLongTail.length} |\n`;
  md += `\n---\n\n`;

  // Top plumbing-relevant gap keywords
  md += `## Top Plumbing/Marketing Gap Keywords\n\n`;
  md += `Keywords that competitors rank for but plumberseo.net AND strictlyplumbers.com do NOT:\n\n`;
  md += `| Keyword | Volume | CPC | # Competitors Ranking | Best Position |\n`;
  md += `|---------|--------|-----|----------------------|---------------|\n`;
  plumbingRelevant.slice(0, 100).forEach((g) => {
    const bestPos = Math.min(...g.ranked_by.map((r) => r.position));
    md += `| ${g.keyword} | ${g.search_volume.toLocaleString()} | $${g.cpc.toFixed(2)} | ${g.ranked_by.length} | ${bestPos} |\n`;
  });
  md += `\n`;

  // Multi-competitor gap keywords (ranked by 2+ competitors — validated demand)
  md += `## Validated Gap Keywords (Ranked by 2+ Competitors)\n\n`;
  md += `These keywords are confirmed opportunities — multiple competitors rank for them, but neither seed domain does:\n\n`;
  md += `| Keyword | Volume | CPC | Competitors | Domains |\n`;
  md += `|---------|--------|-----|-------------|--------|\n`;
  multiCompetitorGaps.slice(0, 75).forEach((g) => {
    const domains = g.ranked_by.map((r) => `${r.domain}(#${r.position})`).join(", ");
    md += `| ${g.keyword} | ${g.search_volume.toLocaleString()} | $${g.cpc.toFixed(2)} | ${g.ranked_by.length} | ${domains} |\n`;
  });
  md += `\n`;

  // Long-tail plumbing keywords
  md += `## Long-Tail Plumbing/Marketing Gaps (3+ words)\n\n`;
  md += `These are easier to rank for and often have high intent:\n\n`;
  md += `| Keyword | Volume | CPC | Words | # Competitors |\n`;
  md += `|---------|--------|-----|-------|---------------|\n`;
  plumbingLongTail.slice(0, 100).forEach((g) => {
    md += `| ${g.keyword} | ${g.search_volume.toLocaleString()} | $${g.cpc.toFixed(2)} | ${g.keyword.split(" ").length} | ${g.ranked_by.length} |\n`;
  });
  md += `\n`;

  // Per-competitor unique keywords (what each competitor ranks for that nobody else does)
  md += `## Per-Competitor Unique Keywords\n\n`;
  md += `Keywords unique to each competitor (not ranked by seeds OR other analyzed competitors):\n\n`;

  for (const [domain, keywords] of competitorKeywordMap) {
    const uniqueToThisDomain = keywords.filter((kw) => {
      if (seedKeywords.has(kw.keyword)) return false;
      // Check if any other competitor also ranks for it
      for (const [otherDomain, otherKws] of competitorKeywordMap) {
        if (otherDomain === domain) continue;
        if (otherKws.some((ok) => ok.keyword === kw.keyword)) return false;
      }
      return true;
    });

    // Filter to plumbing-relevant
    const relevantUnique = uniqueToThisDomain.filter((kw) => {
      const lower = kw.keyword.toLowerCase();
      return (
        lower.includes("plumb") || lower.includes("hvac") || lower.includes("seo") ||
        lower.includes("marketing") || lower.includes("website") || lower.includes("web design") ||
        lower.includes("contractor") || lower.includes("home service") || lower.includes("lead") ||
        lower.includes("google") || lower.includes("ppc") || lower.includes("review") ||
        lower.includes("facebook") || lower.includes("social")
      );
    }).sort((a, b) => b.search_volume - a.search_volume);

    if (relevantUnique.length > 0) {
      md += `### ${domain} (${relevantUnique.length} unique relevant keywords)\n\n`;
      md += `| Keyword | Volume | Position | CPC | URL |\n`;
      md += `|---------|--------|----------|-----|-----|\n`;
      relevantUnique.slice(0, 20).forEach((kw) => {
        md += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.position} | $${kw.cpc.toFixed(2)} | ${kw.url} |\n`;
      });
      md += `\n`;
    }
  }

  // Keyword categories for content planning
  md += `---\n\n## Content Opportunities by Category\n\n`;
  
  const categories: Record<string, typeof plumbingRelevant> = {
    "SEO / Rankings": [],
    "Website / Web Design": [],
    "Marketing / Advertising": [],
    "PPC / Google Ads": [],
    "Social Media": [],
    "Lead Generation": [],
    "Business Operations": [],
    "Reviews / Reputation": [],
    "Google Business Profile / Local": [],
    "Industry Tools / Software": [],
  };

  for (const g of plumbingRelevant) {
    const lower = g.keyword.toLowerCase();
    if (lower.includes("seo") || lower.includes("ranking") || lower.includes("serp")) {
      categories["SEO / Rankings"].push(g);
    } else if (lower.includes("website") || lower.includes("web design") || lower.includes("web page")) {
      categories["Website / Web Design"].push(g);
    } else if (lower.includes("marketing") || lower.includes("advertis") || lower.includes("branding")) {
      categories["Marketing / Advertising"].push(g);
    } else if (lower.includes("ppc") || lower.includes("google ads") || lower.includes("adwords") || lower.includes("pay per")) {
      categories["PPC / Google Ads"].push(g);
    } else if (lower.includes("social") || lower.includes("facebook") || lower.includes("instagram")) {
      categories["Social Media"].push(g);
    } else if (lower.includes("lead") || lower.includes("call") || lower.includes("booking")) {
      categories["Lead Generation"].push(g);
    } else if (lower.includes("review") || lower.includes("reputation") || lower.includes("rating")) {
      categories["Reviews / Reputation"].push(g);
    } else if (lower.includes("google business") || lower.includes("google map") || lower.includes("local service") || lower.includes("gbp")) {
      categories["Google Business Profile / Local"].push(g);
    } else if (lower.includes("software") || lower.includes("tool") || lower.includes("crm") || lower.includes("app")) {
      categories["Industry Tools / Software"].push(g);
    } else {
      categories["Business Operations"].push(g);
    }
  }

  for (const [cat, keywords] of Object.entries(categories)) {
    if (keywords.length === 0) continue;
    const sorted = keywords.sort((a, b) => b.search_volume - a.search_volume);
    md += `### ${cat} (${sorted.length} gap keywords)\n\n`;
    md += `| Keyword | Volume | CPC | # Competitors |\n`;
    md += `|---------|--------|-----|---------------|\n`;
    sorted.slice(0, 20).forEach((g) => {
      md += `| ${g.keyword} | ${g.search_volume.toLocaleString()} | $${g.cpc.toFixed(2)} | ${g.ranked_by.length} |\n`;
    });
    md += `\n`;
  }

  // Save everything
  const mdPath = path.join(outputDir, "keyword-gap-analysis.md");
  fs.writeFileSync(mdPath, md);
  console.log(`\n📝 Gap analysis saved: ${mdPath}`);

  // Save raw gap data as CSV
  const csvRows = ["keyword,search_volume,cpc,competition,num_competitors,best_position,domains"];
  for (const g of allGaps) {
    const bestPos = Math.min(...g.ranked_by.map((r) => r.position));
    const domains = g.ranked_by.map((r) => r.domain).join("|");
    csvRows.push(
      `"${g.keyword.replace(/"/g, '""')}",${g.search_volume},${g.cpc.toFixed(2)},${g.competition.toFixed(4)},${g.ranked_by.length},${bestPos},"${domains}"`
    );
  }
  const csvPath = path.join(outputDir, "keyword-gaps.csv");
  fs.writeFileSync(csvPath, csvRows.join("\n"));
  console.log(`📊 Gap CSV saved: ${csvPath}`);

  // Save plumbing-relevant long-tail as separate file
  const ltCsvRows = ["keyword,search_volume,cpc,word_count,num_competitors,best_position,domains"];
  for (const g of plumbingLongTail) {
    const bestPos = Math.min(...g.ranked_by.map((r) => r.position));
    const domains = g.ranked_by.map((r) => r.domain).join("|");
    ltCsvRows.push(
      `"${g.keyword.replace(/"/g, '""')}",${g.search_volume},${g.cpc.toFixed(2)},${g.keyword.split(" ").length},${g.ranked_by.length},${bestPos},"${domains}"`
    );
  }
  const ltPath = path.join(outputDir, "longtail-opportunities.csv");
  fs.writeFileSync(ltPath, ltCsvRows.join("\n"));
  console.log(`🎯 Long-tail CSV saved: ${ltPath}`);

  console.log("\n✅ Deep competitor analysis complete!");
  console.log(`\nKey files:`);
  console.log(`  📝 ${mdPath} — Full gap analysis report`);
  console.log(`  📊 ${csvPath} — All gap keywords (CSV)`);
  console.log(`  🎯 ${ltPath} — Long-tail plumbing opportunities (CSV)`);
  console.log(`  📂 ${path.join(outputDir, "discovered-competitors.json")} — Competitor list`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
