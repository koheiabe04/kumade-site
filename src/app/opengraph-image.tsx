import { ImageResponse } from "next/og";

export const alt = "くまで | かき集めろ、地方から。";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#E93119",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative sunrise circle */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "120px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "#F9B923",
            opacity: 0.3,
          }}
        />

        {/* Logo mark */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="rgba(255,255,255,0.9)">
            <path d="M155 450 Q130 455 125 430 C120 400 130 370 140 340 C148 315 155 300 165 285 C175 268 188 258 200 280 C205 290 200 310 190 340 C175 395 165 430 155 450 Z" />
            <path d="M140 340 C135 330 128 318 115 300 C98 275 75 255 68 235 C60 212 68 198 82 195 C96 192 108 202 120 218 C135 238 148 262 158 285 C163 296 160 310 155 325 Z" />
            <path d="M165 285 C160 265 158 240 155 215 C152 185 150 155 155 132 C160 110 170 100 182 102 C194 104 200 118 200 140 C200 168 198 198 195 228 C192 252 190 272 188 285 Z" />
            <path d="M195 270 C195 245 198 215 205 180 C212 145 220 115 230 95 C240 78 252 72 262 78 C272 84 275 100 272 125 C268 155 260 190 250 225 C242 252 235 270 228 280 Z" />
            <path d="M235 265 C238 240 248 205 260 170 C272 135 285 105 298 85 C308 70 320 65 330 72 C340 80 340 98 335 122 C328 152 318 185 305 218 C295 245 285 265 275 275 Z" />
            <path d="M278 262 C285 235 298 200 312 168 C328 132 345 102 358 82 C368 68 380 65 388 74 C396 84 394 102 385 128 C375 158 360 192 345 225 C332 252 320 268 310 275 Z" />
            <path d="M155 340 C158 310 168 290 185 280 C200 272 220 268 245 268 C265 268 282 265 295 268 C308 272 310 280 300 290 C285 305 260 320 230 335 C200 350 175 355 160 348 Z" />
          </g>
          <circle cx="395" cy="68" r="35" fill="#F9B923" />
        </svg>

        {/* Company name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: "24px",
            letterSpacing: "0.08em",
          }}
        >
          くまで
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            marginTop: "16px",
            letterSpacing: "0.12em",
          }}
        >
          かき集めろ、地方から。
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "24px",
          }}
        >
          PR・ブランディング
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
