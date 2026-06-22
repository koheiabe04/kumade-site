import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer>
      {/* CTA Band */}
      <div className="relative bg-surface-tint border-t border-accent/10 overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-xs font-mono text-accent/40 tracking-[0.3em] uppercase mb-6">
            &lt; Contact /&gt;
          </p>
          <p className="text-3xl md:text-5xl font-display font-black text-ink leading-tight tracking-tight uppercase">
            Get in
            <span className="text-accent neon-text-cyan"> Touch</span>
          </p>
          <p className="mt-6 text-muted max-w-md mx-auto text-sm leading-relaxed">
            事業の話、聞かせてください。
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-base font-display font-bold tracking-wider uppercase text-accent hover:bg-accent/10 hover:border-accent/60 transition-all"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer proper */}
      <div className="bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Logo & description */}
            <div>
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="KUMADE"
                  width={120}
                  height={40}
                  className="hover:scale-105 transition-transform"
                />
              </Link>
              <p className="mt-3 text-muted/60 text-xs max-w-xs leading-relaxed font-mono">
                // 福島県大熊町発のPR・ブランディング会社
              </p>
            </div>

            {/* SNS links */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-muted/40 hover:text-accent/60 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="text-muted/40 hover:text-accent/60 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link
                href="#"
                aria-label="note"
                className="text-[11px] font-mono text-muted/40 hover:text-accent/60 transition-colors tracking-wider"
              >
                note
              </Link>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-6" aria-label="フッターナビゲーション">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-mono text-muted/40 hover:text-accent/60 transition-colors tracking-wider uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-muted/30 font-mono">
              &copy; {new Date().getFullYear()} KUMADE All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-[10px] text-muted/30 hover:text-accent/40 transition-colors font-mono"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
