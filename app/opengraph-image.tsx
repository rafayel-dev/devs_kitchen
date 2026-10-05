import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  const label = { fontSize: 20, letterSpacing: 2, color: "#a29d93", textTransform: "uppercase" as const };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#0f0f0d",
          color: "#f3f0ea",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottom: "1px solid rgba(243,240,234,0.2)",
          }}
        >
          <span style={label}>Design &amp; development studio</span>
          <span style={label}>Bangladesh → Global</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 700, letterSpacing: -9, lineHeight: 0.86 }}>
            DEVS
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", fontSize: 168, fontWeight: 700, letterSpacing: -9, lineHeight: 0.86 }}>
            KITCHEN
            <div style={{ width: 26, height: 26, background: "#e2773f", marginLeft: 22, marginBottom: 22 }} />
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 40, color: "#d8d3c9", letterSpacing: -0.5 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
