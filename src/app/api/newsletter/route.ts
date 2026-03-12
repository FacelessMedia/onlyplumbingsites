import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateContact } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, _honeypot } = body;

    // Honeypot check
    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    await createOrUpdateContact({
      email,
      source: "Newsletter Signup",
      tags: ["newsletter", "website-lead"],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
