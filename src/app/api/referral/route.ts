import { NextRequest, NextResponse } from "next/server";

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

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GHL credentials");
      return NextResponse.json({ success: true });
    }

    // Create referred plumber as a contact
    const parts = (referredName || "").trim().split(" ");
    const firstName = parts[0] || referredName;
    const lastName = parts.slice(1).join(" ") || undefined;

    await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email: referredEmail || undefined,
        phone: referredPhone || undefined,
        companyName: referredCompany || undefined,
        source: "Referral Program",
        tags: ["referral", "referred-plumber"],
        customFields: [
          { key: "referrer_name", field_value: referrerName },
          { key: "referrer_email", field_value: referrerEmail },
          ...(notes ? [{ key: "referral_notes", field_value: notes }] : []),
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Referral API error:", error);
    return NextResponse.json({ success: true });
  }
}
