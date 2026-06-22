import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <Image
        src="/logo.png"
        alt="くまで"
        width={40}
        height={40}
        className="rounded-lg group-hover:scale-105 transition-transform"
        priority
      />
      <span className="text-xl font-bold text-ink tracking-wide">くまで</span>
    </Link>
  );
}
