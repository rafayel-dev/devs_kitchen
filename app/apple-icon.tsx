import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f0d",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <g fill="none" stroke="#f3f0ea" strokeWidth="5">
            <path d="M14.5 19.5v25h6.5a12.5 12.5 0 0 0 0-25z" />
            <path d="M38.5 19v26M38.5 33l11-14M42 29l8.5 16" />
          </g>
          <rect x="50" y="49" width="6" height="6" fill="#e2773f" />
        </svg>
      </div>
    ),
    size,
  );
}
