import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "くまでへのお問い合わせ。ブランディング・PR・制作のご相談はお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; Contact /&gt;
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-black text-ink leading-[1.05] tracking-tight uppercase">
            Contact
          </h1>
          <div className="mt-8 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-6 text-base text-muted leading-relaxed">
            ブランディング・PR・制作のこと、
            <br className="hidden md:block" />
            まずは気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
