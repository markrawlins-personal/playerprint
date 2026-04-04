import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site"

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #f6f6f0 0%, #eceae4 50%, #e6f0f5 100%)",
          color: "#181717",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#434242",
            marginBottom: 20,
            fontWeight: 600,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            lineHeight: 1.12,
            maxWidth: 900,
            letterSpacing: "-0.02em",
            color: "#181717",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 20,
            color: "#434242",
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
