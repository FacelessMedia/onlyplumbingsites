import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, _honeypot } = body;

    // Honeypot check
    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GHL credentials");
      return NextResponse.json({ success: true });
    }

    await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        email,
        source: "Newsletter Signup",
        tags: ["newsletter", "website-lead"],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ success: true });
  }
}
