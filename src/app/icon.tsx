import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: "#00f0ff",
            letterSpacing: "-0.02em",
            textShadow: "0 0 8px #00f0ff, 0 0 16px #00f0ff80",
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
