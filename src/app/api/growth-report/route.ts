import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      website,
      city,
      trucks,
      revenue,
    } = body;

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GHL credentials");
      return NextResponse.json({ success: true }); // Don't expose errors
    }

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
          firstName,
          lastName,
          email,
          phone,
          companyName: businessName,
          website: website || undefined,
          city: city || undefined,
          source: "Growth Report Request",
          tags: ["growth-report", "website-lead"],
          customFields: [
            ...(trucks ? [{ key: "trucks", field_value: trucks }] : []),
            ...(revenue ? [{ key: "revenue", field_value: revenue }] : []),
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
    console.error("Growth report API error:", error);
    return NextResponse.json({ success: true }); // Always return success to frontend
  }
}
