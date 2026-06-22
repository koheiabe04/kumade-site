"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/works", label: "Works" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-sm font-display font-black tracking-[0.15em] text-accent group-hover:neon-text-cyan transition-all uppercase">
            KUMADE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-xs font-mono font-medium tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.1em] uppercase px-5 py-2.5 border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center text-accent/60 hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-surface z-40 flex flex-col transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-50" />

        <div className="relative z-10 flex items-center justify-between px-6 h-16">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-sm font-display font-black tracking-[0.15em] text-accent uppercase">
              KUMADE
            </span>
          </Link>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-accent/60 hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="メニューを閉じる"
          >
            <X size={20} />
          </button>
        </div>
        <nav
          className="relative z-10 flex flex-col items-center justify-center flex-1 gap-10"
          aria-label="モバイルナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-3xl font-display font-black tracking-[0.1em] uppercase text-ink/60 hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 border border-accent/40 px-10 py-4 text-lg font-display font-bold tracking-wider uppercase text-accent hover:bg-accent/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
            <ArrowRight size={20} />
          </Link>
        </nav>

        {/* Decorative corners */}
        <div className="absolute bottom-8 left-6 text-[10px] font-mono text-accent/15 tracking-[0.2em]" aria-hidden="true">
          &lt;/MENU&gt;
        </div>
      </div>
    </header>
  );
}
