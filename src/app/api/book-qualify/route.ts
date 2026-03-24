import { NextRequest, NextResponse } from "next/server";
import {
  createOrUpdateContact,
  createOpportunity,
  resolveCustomFields,
} from "@/lib/ghl";

export async function POST(req: NextRequest) {
  let contactId: string | null = null;

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

    console.log("[book-qualify] Received form submission:", {
      firstName, lastName, email, phone: phone ? "***" : "(empty)",
      companyName, qualified,
    });

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

    // ── Step 1: Resolve custom field names → GHL IDs ──
    let customFields: { id: string; field_value: string }[] = [];
    try {
      customFields = await resolveCustomFields({
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
      console.log(`[book-qualify] Resolved ${customFields.length} custom fields`);
    } catch (fieldErr) {
      console.error("[book-qualify] Custom field resolution failed (continuing without):", fieldErr);
    }

    // ── Step 2: Upsert contact in GHL ──
    // Uses /contacts/upsert — creates if new, updates if email exists.
    // This ensures the calendar booking later merges into the SAME contact.
    try {
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

      contactId = contactData?.contact?.id || null;
      console.log("[book-qualify] GHL upsert success — contactId:", contactId);
    } catch (ghlErr) {
      console.error("[book-qualify] GHL contact upsert FAILED:", ghlErr);
      // Return an error so the frontend knows GHL failed
      return NextResponse.json(
        { success: false, qualified, contactId: null, error: "GHL contact creation failed" },
        { status: 502 }
      );
    }

    // ── Step 3: Create pipeline opportunity for qualified leads ──
    if (qualified && contactId) {
      const pipelineId = (process.env.GHL_PIPELINE_ID || "").trim();
      if (pipelineId) {
        try {
          await createOpportunity({
            pipelineId,
            contactId,
            title: `${firstName || ""} ${lastName || ""} — ${companyName || "New Lead"}`.trim(),
            status: "open",
          });
          console.log("[book-qualify] Pipeline opportunity created for", contactId);
        } catch (oppError) {
          console.error("[book-qualify] Pipeline opportunity error (non-fatal):", oppError);
        }
      }
    }

    return NextResponse.json({ success: true, qualified, contactId });
  } catch (error) {
    console.error("[book-qualify] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process qualification", contactId },
      { status: 500 }
    );
  }
}
