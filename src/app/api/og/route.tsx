import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Only Plumbing Sites";
  const subtitle =
    searchParams.get("subtitle") || "Plumbing Websites Built by a Licensed Plumber";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#f97316",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            O
          </div>
          <span
            style={{
              color: "#94a3b8",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            Only Plumbing Sites
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            color: "white",
            fontSize: title.length > 50 ? "48px" : "56px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: "1000px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <span style={{ color: "#f97316", fontSize: "16px", fontWeight: 700 }}>
            250+ Plumbing Websites Built
          </span>
          <span style={{ color: "#475569", fontSize: "16px" }}>•</span>
          <span style={{ color: "#f97316", fontSize: "16px", fontWeight: 700 }}>
            Licensed Plumber Since 2014
          </span>
          <span style={{ color: "#475569", fontSize: "16px" }}>•</span>
          <span style={{ color: "#f97316", fontSize: "16px", fontWeight: 700 }}>
            onlyplumbingsites.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
