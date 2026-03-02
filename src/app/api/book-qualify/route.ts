import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      companyName,
      website,
      serviceArea,
      truckCount,
      annualRevenue,
      currentSpend,
      willingToInvest,
      biggestChallenge,
      howDidYouHear,
      qualified,
    } = body;

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GHL credentials");
      return NextResponse.json({ success: true });
    }

    // Build tags based on qualification
    const tags: string[] = ["website-lead", "book-form"];
    if (qualified) {
      tags.push("qualified");
    } else {
      tags.push("disqualified", "no-budget");
    }

    // Tag based on source
    if (howDidYouHear === "Someone called me") {
      tags.push("cold-call-lead");
    } else if (howDidYouHear === "Referral from a friend") {
      tags.push("referral");
    }

    // Build custom fields
    const customFields: { key: string; field_value: string }[] = [];
    if (website) customFields.push({ key: "company_website", field_value: website });
    if (serviceArea) customFields.push({ key: "service_area", field_value: serviceArea });
    if (truckCount) customFields.push({ key: "truck_count", field_value: truckCount });
    if (annualRevenue) customFields.push({ key: "annual_revenue", field_value: annualRevenue });
    if (currentSpend) customFields.push({ key: "current_marketing_spend", field_value: currentSpend });
    if (willingToInvest) customFields.push({ key: "willing_to_invest", field_value: willingToInvest });
    if (biggestChallenge) customFields.push({ key: "biggest_challenge", field_value: biggestChallenge });
    if (howDidYouHear) customFields.push({ key: "lead_source", field_value: howDidYouHear });

    // Create or update contact in GHL
    const contactRes = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          locationId,
          firstName: firstName || undefined,
          lastName: lastName || undefined,
          email: email || undefined,
          phone: phone || undefined,
          companyName: companyName || undefined,
          website: website || undefined,
          source: "Pre-Qualification Form",
          tags,
          customFields,
        }),
      }
    );

    if (!contactRes.ok) {
      const err = await contactRes.text();
      console.error("GHL contact creation failed:", err);
    }

    return NextResponse.json({ success: true, qualified });
  } catch (error) {
    console.error("Book qualify API error:", error);
    return NextResponse.json({ success: true });
  }
}
