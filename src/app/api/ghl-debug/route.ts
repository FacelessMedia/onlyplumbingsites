import { NextResponse } from "next/server";
import { getCustomFieldMap, GHL_LOCATION_ID, GHL_BASE_URL } from "@/lib/ghl";

export async function GET() {
  try {
    const fieldMap = await getCustomFieldMap();

    return NextResponse.json({
      success: true,
      baseUrl: GHL_BASE_URL,
      locationId: GHL_LOCATION_ID,
      apiKeyPrefix: (process.env.GHL_API_KEY || "").slice(0, 8) + "...",
      customFieldCount: Object.keys(fieldMap).length,
      customFields: fieldMap,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: String(error),
        baseUrl: GHL_BASE_URL,
        locationId: GHL_LOCATION_ID,
        apiKeyPrefix: (process.env.GHL_API_KEY || "").slice(0, 8) + "...",
      },
      { status: 500 }
    );
  }
}
