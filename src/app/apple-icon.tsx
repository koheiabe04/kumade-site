import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

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
          background: "#0a0a0f",
          borderRadius: "32px",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#00f0ff",
            letterSpacing: "-0.02em",
            textShadow: "0 0 20px #00f0ff, 0 0 40px #00f0ff80",
            fontFamily: "sans-serif",
          }}
        >
          K
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
