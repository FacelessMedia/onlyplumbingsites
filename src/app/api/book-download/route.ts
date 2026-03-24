import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateContact } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, businessName } = body;

    await createOrUpdateContact({
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      companyName: businessName || undefined,
      source: "Book Waitlist - The Little Plumber That Could",
      tags: ["book-waitlist", "website-lead", "top-of-funnel"],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book download API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process book download" },
      { status: 500 }
    );
  }
}
