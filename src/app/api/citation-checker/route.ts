import { NextRequest, NextResponse } from "next/server";
import {
  citationSources,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  type CitationCategory,
  type CitationSource,
} from "@/data/citation-sources";

type NAPData = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

type CitationResult = {
  source: CitationSource;
  searchUrl: string;
  claimUrl: string;
};

type CategorySummary = {
  category: CitationCategory;
  label: string;
  total: number;
  results: CitationResult[];
};

// Normalize phone for comparison
function normalizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, "").slice(-10);
}

// Normalize business name for fuzzy matching
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+(inc|llc|ltd|co|corp|company|plumbing|services|service|and)\s*/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Extract NAP from HTML
function extractNAPFromHTML(html: string): Partial<NAPData> {
  const result: Partial<NAPData> = {};

  // Extract phone
  const phoneMatch = html.match(/(?:tel:|href="tel:)([\d\-+().]+)/i)
    || html.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
  if (phoneMatch) {
    result.phone = phoneMatch[1] || phoneMatch[0];
  }

  // Extract address from schema markup
  const schemaMatch = html.match(/"streetAddress"\s*:\s*"([^"]+)"/i);
  if (schemaMatch) result.address = schemaMatch[1];

  const cityMatch = html.match(/"addressLocality"\s*:\s*"([^"]+)"/i);
  if (cityMatch) result.city = cityMatch[1];

  const stateMatch = html.match(/"addressRegion"\s*:\s*"([^"]+)"/i);
  if (stateMatch) result.state = stateMatch[1];

  const zipMatch = html.match(/"postalCode"\s*:\s*"([^"]+)"/i);
  if (zipMatch) result.zip = zipMatch[1];

  // Extract business name from schema or title
  const nameMatch = html.match(/"name"\s*:\s*"([^"]+)"/i);
  if (nameMatch) result.name = nameMatch[1];
  if (!result.name) {
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      result.name = titleMatch[1]
        .replace(/<[^>]+>/g, "")
        .split(/[|–—-]/)[0]
        .trim();
    }
  }

  return result;
}

// Build search URL for a citation source using business info
function buildSearchUrl(source: CitationSource, nap: NAPData): string {
  return source.searchUrl
    .replace(/{name}/g, encodeURIComponent(nap.name))
    .replace(/{city}/g, encodeURIComponent(nap.city))
    .replace(/{state}/g, encodeURIComponent(nap.state))
    .replace(/{phone}/g, encodeURIComponent(nap.phone));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { websiteUrl, businessName, phone, address, city, state, zip } = body;

    if (!businessName || !phone) {
      return NextResponse.json(
        { error: "Business name and phone number are required." },
        { status: 400 }
      );
    }

    const userNAP: NAPData = {
      name: businessName.trim(),
      phone: phone.trim(),
      address: (address || "").trim(),
      city: (city || "").trim(),
      state: (state || "").trim(),
      zip: (zip || "").trim(),
    };

    // ─── REAL CHECK: Extract NAP from website ───
    const napIssues: string[] = [];
    let websiteNAP: Partial<NAPData> = {};
    let websiteFetched = false;

    if (websiteUrl) {
      try {
        const fullUrl = websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(fullUrl, {
          signal: controller.signal,
          headers: { "User-Agent": "Mozilla/5.0 (compatible; OnlyPlumbingSitesCitationChecker/1.0)" },
          redirect: "follow",
        });
        clearTimeout(timeout);
        if (res.ok) {
          const html = await res.text();
          websiteNAP = extractNAPFromHTML(html);
          websiteFetched = true;

          // Compare extracted NAP vs what user entered
          if (websiteNAP.phone && normalizePhone(websiteNAP.phone) !== normalizePhone(userNAP.phone)) {
            napIssues.push({
              field: "phone",
              entered: userNAP.phone,
              website: websiteNAP.phone,
              message: `Your website shows "${websiteNAP.phone}" but you entered "${userNAP.phone}". Make sure these match exactly.`,
            } as unknown as string);
          }
          if (websiteNAP.name && normalizeName(websiteNAP.name) !== normalizeName(userNAP.name)) {
            napIssues.push({
              field: "name",
              entered: userNAP.name,
              website: websiteNAP.name,
              message: `Your website uses the name "${websiteNAP.name}" but you entered "${userNAP.name}". These should be identical everywhere.`,
            } as unknown as string);
          }
          if (websiteNAP.address && userNAP.address && websiteNAP.address.toLowerCase() !== userNAP.address.toLowerCase()) {
            napIssues.push({
              field: "address",
              entered: userNAP.address,
              website: websiteNAP.address,
              message: `Address on website: "${websiteNAP.address}" vs entered: "${userNAP.address}". Even "St" vs "Street" matters.`,
            } as unknown as string);
          }
          if (websiteNAP.city && userNAP.city && websiteNAP.city.toLowerCase() !== userNAP.city.toLowerCase()) {
            napIssues.push({
              field: "city",
              entered: userNAP.city,
              website: websiteNAP.city,
              message: `City on website: "${websiteNAP.city}" vs entered: "${userNAP.city}".`,
            } as unknown as string);
          }
        }
      } catch {
        // Couldn't fetch website — that's okay
      }
    }

    // ─── BUILD DIRECTORY CHECKLIST ───
    // We don't fake-check directories. We build a prioritized checklist
    // with real search URLs so users can verify each one themselves.
    const results: CitationResult[] = citationSources.map((source) => ({
      source,
      searchUrl: buildSearchUrl(source, userNAP),
      claimUrl: source.claimUrl,
    }));

    // Group by category
    const categories: CategorySummary[] = CATEGORY_ORDER
      .map((cat) => {
        const catResults = results.filter((r) => r.source.category === cat);
        if (catResults.length === 0) return null;
        return {
          category: cat,
          label: CATEGORY_LABELS[cat],
          total: catResults.length,
          results: catResults.sort((a, b) => {
            const impOrder = { critical: 0, high: 1, medium: 2, low: 3 };
            return impOrder[a.source.importance] - impOrder[b.source.importance];
          }),
        };
      })
      .filter(Boolean) as CategorySummary[];

    return NextResponse.json({
      userNAP,
      websiteNAP: websiteFetched ? websiteNAP : null,
      websiteFetched,
      napIssues,
      totalSources: citationSources.length,
      categories,
    });
  } catch (error) {
    console.error("Citation checker error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
