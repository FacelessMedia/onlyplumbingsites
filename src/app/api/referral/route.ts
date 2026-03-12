import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateContact, resolveCustomFields } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      referrerName,
      referrerEmail,
      referredName,
      referredEmail,
      referredPhone,
      referredCompany,
      notes,
      _honeypot,
    } = body;

    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    // Create referred plumber as a contact
    const parts = (referredName || "").trim().split(" ");
    const firstName = parts[0] || referredName;
    const lastName = parts.slice(1).join(" ") || undefined;

    // Resolve custom field IDs dynamically (v2 format)
    const customFields = await resolveCustomFields({
      "Referrer Name": referrerName,
      "Referrer Email": referrerEmail,
      "Referral Notes": notes,
    });

    await createOrUpdateContact({
      firstName,
      lastName,
      email: referredEmail || undefined,
      phone: referredPhone || undefined,
      companyName: referredCompany || undefined,
      source: "Referral Program",
      tags: ["referral", "referred-plumber"],
      customFields,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Referral API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit referral" },
      { status: 500 }
    );
  }
}
