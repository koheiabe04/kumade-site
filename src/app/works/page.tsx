import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { works } from "@/content/works";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "実績紹介",
  description:
    "くまでの実績紹介。Webサイト制作、ブランディング、PR支援などの事例をご覧いただけます。",
};

function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 mx-auto border border-border bg-surface-card flex items-center justify-center mb-6 relative">
        <div className="absolute inset-0 cyber-grid-dense opacity-30" />
        <div className="w-4 h-4 border border-accent/30 relative z-10" />
      </div>
      <h3 className="text-2xl font-display font-black text-ink mb-3 uppercase tracking-tight">
        Coming Soon
      </h3>
      <p className="text-muted max-w-md mx-auto leading-relaxed text-sm">
        現在、公開できる実績を準備中です。
        <br />
        お仕事のご相談はお気軽にどうぞ。
      </p>
      <div className="mt-8">
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-3.5 font-mono font-bold text-accent hover:bg-accent/10 hover:border-accent/60 transition-all tracking-wider uppercase text-sm"
        >
          Contact
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: (typeof works)[0] }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block border border-border bg-surface-card hover:border-accent/30 transition-all overflow-hidden"
    >
      <div className="aspect-[4/3] bg-surface-tint flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-dense opacity-20" />
        <div className="w-12 h-12 border border-accent/15 flex items-center justify-center group-hover:border-accent/40 transition-all relative z-10">
          <div className="w-3 h-3 bg-accent/20 group-hover:bg-accent/40 transition-all" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-mono font-bold text-accent/60 tracking-wider uppercase">
          {work.category}
        </p>
        <h3 className="mt-1 text-sm font-bold text-ink group-hover:text-accent transition-colors">
          {work.title}
        </h3>
        <p className="mt-2 text-xs text-muted line-clamp-2">{work.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono bg-accent/5 text-accent/40 border border-accent/10 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function WorksPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; Works /&gt;
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-black text-ink leading-[1.05] tracking-tight uppercase">
            Works
          </h1>
          <div className="mt-8 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-6 text-base text-muted max-w-lg leading-relaxed">
            くまでがお手伝いした事例をご紹介します。
          </p>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {works.length === 0 ? (
            <ScrollFadeIn>
              <EmptyState />
            </ScrollFadeIn>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {works.map((work, i) => (
                <ScrollFadeIn key={work.slug} delay={i * 80}>
                  <WorkCard work={work} />
                </ScrollFadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
