import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateContact, resolveCustomFields } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, _honeypot } = body;

    // Honeypot check — bots fill this hidden field, humans don't
    if (_honeypot) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    // Split name into first/last
    const parts = name.trim().split(" ");
    const firstName = parts[0] || name;
    const lastName = parts.slice(1).join(" ") || undefined;

    // Resolve custom field IDs dynamically (v2 format)
    const customFields = await resolveCustomFields({
      "Contact Message": message,
    });

    await createOrUpdateContact({
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      source: "Contact Form",
      tags: ["contact-form", "website-inquiry"],
      customFields,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
