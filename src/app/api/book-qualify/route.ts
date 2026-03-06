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
    if (website) customFields.push({ key: "contact.company_website", field_value: website });
    if (serviceArea) customFields.push({ key: "contact.service_area", field_value: serviceArea });
    if (truckCount) customFields.push({ key: "contact.truck_count", field_value: truckCount });
    if (annualRevenue) customFields.push({ key: "contact.annual_revenue", field_value: annualRevenue });
    if (currentSpend) customFields.push({ key: "contact.current_marketing_spend", field_value: currentSpend });
    if (willingToInvest) customFields.push({ key: "contact.willing_to_invest", field_value: willingToInvest });
    if (biggestChallenge) customFields.push({ key: "contact.biggest_challenge", field_value: biggestChallenge });
    if (howDidYouHear) customFields.push({ key: "contact.lead_source", field_value: howDidYouHear });

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

    // Create pipeline opportunity for qualified leads
    if (qualified && contactRes.ok) {
      try {
        const contactData = await contactRes.json();
        const contactId = contactData?.contact?.id;
        const pipelineId = process.env.GHL_PIPELINE_ID;

        if (contactId && pipelineId) {
          const oppRes = await fetch(
            "https://services.leadconnectorhq.com/opportunities/",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                Version: "2021-07-28",
              },
              body: JSON.stringify({
                pipelineId,
                locationId,
                name: `${firstName || ""} ${lastName || ""} — ${companyName || "New Lead"}`.trim(),
                pipelineStageId: "6c3ff175-6518-44a3-a335-e943e6046fc4", // Qualified stage
                contactId,
                status: "open",
              }),
            }
          );

          if (!oppRes.ok) {
            const err = await oppRes.text();
            console.error("GHL opportunity creation failed:", err);
          }
        }
      } catch (oppError) {
        console.error("Pipeline opportunity error:", oppError);
      }
    }

    return NextResponse.json({ success: true, qualified });
  } catch (error) {
    console.error("Book qualify API error:", error);
    return NextResponse.json({ success: true });
  }
}
