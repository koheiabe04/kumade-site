"use client";

import { Typewriter } from "@/components/Typewriter";

export function TypewriterHeading() {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug min-h-[5em] md:min-h-[4em] text-ink">
      <Typewriter
        lines={["かき集めろ、地方から。", "足りないのは、届け方だ。"]}
        speed={50}
        lineDelay={300}
      />
    </h2>
  );
}
