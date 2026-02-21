import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, _honeypot } = body;

    // Honeypot check — bots fill this hidden field, humans don't
    if (_honeypot) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GHL credentials");
      return NextResponse.json({ success: true });
    }

    // Split name into first/last
    const parts = name.trim().split(" ");
    const firstName = parts[0] || name;
    const lastName = parts.slice(1).join(" ") || undefined;

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
          firstName,
          lastName,
          email,
          phone: phone || undefined,
          source: "Contact Form",
          tags: ["contact-form", "website-inquiry"],
          customFields: [
            ...(message
              ? [{ key: "contact_message", field_value: message }]
              : []),
          ],
        }),
      }
    );

    if (!contactRes.ok) {
      const err = await contactRes.text();
      console.error("GHL contact creation failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: true });
  }
}
