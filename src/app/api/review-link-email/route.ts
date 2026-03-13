import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateContact } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, businessName, reviewLink, smsTemplate } = body;

    if (!email || !reviewLink) {
      return NextResponse.json(
        { success: false, error: "Email and review link are required" },
        { status: 400 }
      );
    }

    // Create/update contact in GHL for lead capture
    try {
      await createOrUpdateContact({
        email,
        source: "Review Link Generator",
        tags: ["review-link-tool", "free-tool-lead"],
        customFields: [],
      });
    } catch (ghlErr) {
      console.error("GHL contact creation failed (non-blocking):", ghlErr);
      // Don't fail the request — email is more important
    }

    // For now, log the request. In production, integrate with an email service
    // (e.g., GHL workflows, SendGrid, Resend, etc.)
    console.log("Review link email request:", {
      email,
      businessName,
      reviewLink,
      smsTemplate: smsTemplate?.substring(0, 50) + "...",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review link email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
