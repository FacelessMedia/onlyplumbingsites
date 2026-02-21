import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy for Google Places API (Text Search / Autocomplete).
 * Requires GOOGLE_PLACES_API_KEY in .env.local.
 * If no key is set, returns an error so the frontend can fall back gracefully.
 */
export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q");
  if (!query || query.length < 3) {
    return NextResponse.json({ results: [] });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "no_api_key", results: [] },
      { status: 200 }
    );
  }

  try {
    // Use Places API (New) Text Search
    const res = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.googleMapsUri,places.types",
        },
        body: JSON.stringify({
          textQuery: query,
          languageCode: "en",
          maxResultCount: 5,
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Places API error:", errText);
      return NextResponse.json({ error: "api_error", results: [] });
    }

    const data = await res.json();
    const places = (data.places || []).map(
      (p: {
        id: string;
        displayName?: { text: string };
        formattedAddress?: string;
        nationalPhoneNumber?: string;
        websiteUri?: string;
        googleMapsUri?: string;
        types?: string[];
      }) => ({
        placeId: p.id,
        name: p.displayName?.text || "",
        address: p.formattedAddress || "",
        phone: p.nationalPhoneNumber || "",
        website: p.websiteUri || "",
        mapsUrl: p.googleMapsUri || "",
        types: p.types || [],
      })
    );

    return NextResponse.json({ results: places });
  } catch (err) {
    console.error("Places search error:", err);
    return NextResponse.json({ error: "fetch_error", results: [] });
  }
}
