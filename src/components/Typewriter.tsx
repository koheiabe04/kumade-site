"use client";

import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  className?: string;
  speed?: number;
  lineDelay?: number;
};

export function Typewriter({
  lines,
  className = "",
  speed = 80,
  lineDelay = 400,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      if (currentLine >= lines.length) {
        return;
      }

      const line = lines[currentLine];
      if (currentChar <= line.length) {
        const built = lines
          .slice(0, currentLine)
          .map((l) => l + "\n")
          .join("")
          + line.slice(0, currentChar);
        setDisplayed(built);
        currentChar++;
        timeout = setTimeout(type, speed);
      } else {
        currentLine++;
        currentChar = 0;
        timeout = setTimeout(type, lineDelay);
      }
    }

    timeout = setTimeout(type, 600);

    return () => clearTimeout(timeout);
  }, [lines, speed, lineDelay]);

  return (
    <span className={className}>
      {displayed.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
      <span className="ml-[0.05em] inline-block leading-none font-mono text-accent animate-blink">
        _
      </span>
    </span>
  );
}
