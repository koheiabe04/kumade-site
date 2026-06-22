import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <Image
        src="/logo.png"
        alt="KUMADE"
        width={120}
        height={40}
        className="group-hover:scale-105 transition-transform"
        priority
      />
    </Link>
  );
}
