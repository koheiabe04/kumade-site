import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { works } from "@/content/works";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            実績一覧へ戻る
          </Link>
          <p className="text-xs font-mono font-bold text-accent/60 tracking-[0.25em] uppercase mb-3">
            {work.category}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-ink leading-tight tracking-tight uppercase">
            {work.title}
          </h1>
          <p className="mt-4 text-sm text-muted font-mono">{work.client}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
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
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">
          {[
            { label: "概要", content: work.summary, tag: "SUM_01" },
            { label: "課題", content: work.challenge, tag: "CHL_02" },
            { label: "制作内容", content: work.solution, tag: "SLN_03" },
            { label: "成果", content: work.result, tag: "RST_04" },
          ].map((section, i) => (
            <ScrollFadeIn key={section.tag} delay={i * 100}>
              <div className={`${i > 0 ? "border-t border-border pt-12" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-ink">{section.label}</h2>
                  <span className="text-[10px] font-mono text-muted/40 tracking-wider">
                    {section.tag}
                  </span>
                </div>
                <p className="text-muted leading-relaxed text-lg">{section.content}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-surface-tint border-t border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <p className="text-2xl md:text-3xl font-display font-black text-ink uppercase tracking-tight mb-4">
              同じような課題、ありませんか？
            </p>
            <p className="text-muted text-sm mb-10">
              話を聞かせてください。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-base font-display font-bold tracking-wider uppercase text-accent hover:bg-accent/10 hover:border-accent/60 transition-all"
            >
              お問い合わせ
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
