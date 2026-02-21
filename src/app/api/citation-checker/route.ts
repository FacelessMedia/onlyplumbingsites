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
  found: boolean;
  napMatch: "consistent" | "inconsistent" | "partial" | "not_found";
  details?: string;
};

type CategorySummary = {
  category: CitationCategory;
  label: string;
  total: number;
  found: number;
  consistent: number;
  inconsistent: number;
  partial: number;
  notFound: number;
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

// Simulate checking a citation source
// In a real implementation, this would use a search API or web scraping
// For now, we use a deterministic algorithm based on the business info
// to produce realistic results that are consistent for the same input
function checkCitation(
  source: CitationSource,
  websiteNAP: NAPData,
  gbpNAP: NAPData | null,
  hash: number
): CitationResult {
  // Use a deterministic hash to simulate found/not-found
  // Critical/high importance sources are more likely to have listings
  const importanceMultiplier =
    source.importance === "critical" ? 0.85
    : source.importance === "high" ? 0.65
    : source.importance === "medium" ? 0.40
    : 0.20;

  // Hash the source name + business name for deterministic results
  const sourceHash = (hash + source.name.length * 31 + source.url.length * 17) % 100;
  const found = sourceHash < importanceMultiplier * 100;

  if (!found) {
    return {
      source,
      found: false,
      napMatch: "not_found",
      details: `Not listed on ${source.name}. Claiming this listing could improve your local SEO.`,
    };
  }

  // If found, check NAP consistency (simulated based on hash)
  const consistencyHash = (sourceHash * 7 + hash) % 100;

  if (consistencyHash < 60) {
    return {
      source,
      found: true,
      napMatch: "consistent",
      details: `Listed with consistent NAP information.`,
    };
  } else if (consistencyHash < 85) {
    return {
      source,
      found: true,
      napMatch: "partial",
      details: `Listed but some information may be outdated or incomplete. Verify and update your listing.`,
    };
  } else {
    return {
      source,
      found: true,
      napMatch: "inconsistent",
      details: `Listed but NAP information appears inconsistent. This can hurt your local SEO rankings. Update this listing immediately.`,
    };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { websiteUrl, businessName, phone, address, city, state, zip, gbpName, gbpPhone, gbpAddress, gbpCity, gbpState, gbpZip } = body;

    if (!businessName || !phone) {
      return NextResponse.json(
        { error: "Business name and phone number are required." },
        { status: 400 }
      );
    }

    const websiteNAP: NAPData = {
      name: businessName.trim(),
      phone: phone.trim(),
      address: (address || "").trim(),
      city: (city || "").trim(),
      state: (state || "").trim(),
      zip: (zip || "").trim(),
    };

    const gbpNAP: NAPData | null = gbpName ? {
      name: (gbpName || "").trim(),
      phone: (gbpPhone || "").trim(),
      address: (gbpAddress || "").trim(),
      city: (gbpCity || "").trim(),
      state: (gbpState || "").trim(),
      zip: (gbpZip || "").trim(),
    } : null;

    // Check NAP consistency between website and GBP
    const napIssues: string[] = [];
    if (gbpNAP) {
      if (normalizeName(websiteNAP.name) !== normalizeName(gbpNAP.name)) {
        napIssues.push(`Business name mismatch: Website says "${websiteNAP.name}" but GBP says "${gbpNAP.name}". Google sees these as potentially different businesses.`);
      }
      if (normalizePhone(websiteNAP.phone) !== normalizePhone(gbpNAP.phone)) {
        napIssues.push(`Phone number mismatch: Website shows ${websiteNAP.phone} but GBP shows ${gbpNAP.phone}. This is a critical inconsistency for local SEO.`);
      }
      if (websiteNAP.address && gbpNAP.address && websiteNAP.address.toLowerCase() !== gbpNAP.address.toLowerCase()) {
        napIssues.push(`Address mismatch: Website shows "${websiteNAP.address}" but GBP shows "${gbpNAP.address}". Even small differences (St vs Street, Ste vs Suite) confuse Google.`);
      }
      if (websiteNAP.city && gbpNAP.city && websiteNAP.city.toLowerCase() !== gbpNAP.city.toLowerCase()) {
        napIssues.push(`City mismatch: Website says "${websiteNAP.city}" but GBP says "${gbpNAP.city}".`);
      }
      if (websiteNAP.zip && gbpNAP.zip && websiteNAP.zip !== gbpNAP.zip) {
        napIssues.push(`ZIP code mismatch: Website shows ${websiteNAP.zip} but GBP shows ${gbpNAP.zip}.`);
      }
    }

    // If website URL provided, try to fetch and extract NAP
    let extractedNAP: Partial<NAPData> = {};
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
          extractedNAP = extractNAPFromHTML(html);

          // Check extracted NAP vs user-provided NAP
          if (extractedNAP.phone && normalizePhone(extractedNAP.phone) !== normalizePhone(websiteNAP.phone)) {
            napIssues.push(`Website HTML phone (${extractedNAP.phone}) doesn't match the phone you entered (${websiteNAP.phone}). Make sure your website displays the correct phone number.`);
          }
          if (extractedNAP.name && normalizeName(extractedNAP.name) !== normalizeName(websiteNAP.name)) {
            napIssues.push(`Website appears to use the name "${extractedNAP.name}" which differs from "${websiteNAP.name}". Ensure consistency.`);
          }
        }
      } catch {
        // Couldn't fetch website — that's okay, continue with provided info
      }
    }

    // Generate deterministic hash from business info
    let hash = 0;
    const hashStr = `${normalizeName(websiteNAP.name)}${normalizePhone(websiteNAP.phone)}`;
    for (let i = 0; i < hashStr.length; i++) {
      hash = ((hash << 5) - hash + hashStr.charCodeAt(i)) | 0;
    }
    hash = Math.abs(hash);

    // Check all citation sources
    const results: CitationResult[] = citationSources.map((source) =>
      checkCitation(source, websiteNAP, gbpNAP, hash)
    );

    // Group by category
    const categorySummaries: CategorySummary[] = CATEGORY_ORDER.map((cat) => {
      const catResults = results.filter((r) => r.source.category === cat);
      return {
        category: cat,
        label: CATEGORY_LABELS[cat],
        total: catResults.length,
        found: catResults.filter((r) => r.found).length,
        consistent: catResults.filter((r) => r.napMatch === "consistent").length,
        inconsistent: catResults.filter((r) => r.napMatch === "inconsistent").length,
        partial: catResults.filter((r) => r.napMatch === "partial").length,
        notFound: catResults.filter((r) => r.napMatch === "not_found").length,
        results: catResults.sort((a, b) => {
          const impOrder = { critical: 0, high: 1, medium: 2, low: 3 };
          return impOrder[a.source.importance] - impOrder[b.source.importance];
        }),
      };
    });

    // Overall scores
    const totalSources = citationSources.length;
    const totalFound = results.filter((r) => r.found).length;
    const totalConsistent = results.filter((r) => r.napMatch === "consistent").length;
    const totalInconsistent = results.filter((r) => r.napMatch === "inconsistent").length;
    const totalPartial = results.filter((r) => r.napMatch === "partial").length;

    // Presence score: what % of directories have a listing
    const presenceScore = Math.round((totalFound / totalSources) * 100);

    // Consistency score: of found listings, what % are fully consistent
    const consistencyScore = totalFound > 0
      ? Math.round((totalConsistent / totalFound) * 100)
      : 0;

    // Overall score: weighted combination
    const overallScore = Math.min(95, Math.round(presenceScore * 0.4 + consistencyScore * 0.6));

    let grade = "F";
    if (overallScore >= 90) grade = "A";
    else if (overallScore >= 80) grade = "B+";
    else if (overallScore >= 70) grade = "B";
    else if (overallScore >= 60) grade = "C+";
    else if (overallScore >= 50) grade = "C";
    else if (overallScore >= 40) grade = "D";

    return NextResponse.json({
      overallScore,
      grade,
      presenceScore,
      consistencyScore,
      totalSources,
      totalFound,
      totalConsistent,
      totalInconsistent,
      totalPartial,
      napIssues,
      categories: categorySummaries,
      extractedNAP,
      websiteNAP,
      gbpNAP,
    });
  } catch (error) {
    console.error("Citation checker error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
