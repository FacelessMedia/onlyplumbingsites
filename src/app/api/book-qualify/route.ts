import { NextRequest, NextResponse } from "next/server";
import {
  createOrUpdateContact,
  createOpportunity,
  resolveCustomFields,
} from "@/lib/ghl";

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

    // Resolve custom field names → GHL IDs dynamically (v2 format)
    const customFields = await resolveCustomFields({
      "Company Website": website,
      "Service Area": serviceArea,
      "Truck Count": truckCount,
      "Annual Revenue": annualRevenue,
      "Current Marketing Spend": currentSpend,
      "Willing To Invest": willingToInvest,
      "Biggest Challenge": biggestChallenge,
      "Lead Source": howDidYouHear,
      "Pre-Qual Score": qualified ? "Qualified" : "Disqualified",
    });

    // Create or update contact in GHL (v2 API — deduplicates by email)
    const contactData = await createOrUpdateContact({
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      email: email || undefined,
      phone: phone || undefined,
      companyName: companyName || undefined,
      source: "Pre-Qualification Form",
      tags,
      customFields,
    });

    const contactId = contactData?.contact?.id;

    // Create pipeline opportunity for qualified leads
    if (qualified && contactId) {
      const pipelineId = process.env.GHL_PIPELINE_ID;
      if (pipelineId) {
        try {
          await createOpportunity({
            pipelineId,
            contactId,
            title: `${firstName || ""} ${lastName || ""} — ${companyName || "New Lead"}`.trim(),
            status: "open",
          });
        } catch (oppError) {
          console.error("Pipeline opportunity error:", oppError);
          // Don't fail the whole request for opportunity creation failure
        }
      }
    }

    return NextResponse.json({ success: true, qualified, contactId });
  } catch (error) {
    console.error("Book qualify API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process qualification" },
      { status: 500 }
    );
  }
}
