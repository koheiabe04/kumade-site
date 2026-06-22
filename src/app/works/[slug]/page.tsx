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
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-ink overflow-hidden noise">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px] translate-x-1/3 -translate-y-1/3" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            実績一覧へ戻る
          </Link>
          <p className="text-sm font-bold text-brand tracking-[0.25em] mb-3">{work.category}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {work.title}
          </h1>
          <p className="mt-4 text-white/40">{work.client}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1 border border-white/5"
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
          <ScrollFadeIn>
            <div>
              <h2 className="text-xl font-bold text-ink mb-4">概要</h2>
              <p className="text-muted leading-relaxed text-lg">{work.summary}</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="border-t border-ink/5 pt-12">
              <h2 className="text-xl font-bold text-ink mb-4">課題</h2>
              <p className="text-muted leading-relaxed text-lg">{work.challenge}</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="border-t border-ink/5 pt-12">
              <h2 className="text-xl font-bold text-ink mb-4">制作内容</h2>
              <p className="text-muted leading-relaxed text-lg">{work.solution}</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <div className="border-t border-ink/5 pt-12">
              <h2 className="text-xl font-bold text-ink mb-4">成果</h2>
              <p className="text-muted leading-relaxed text-lg">{work.result}</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface-tint">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <p className="text-2xl md:text-3xl font-bold text-ink mb-4">
              同じような課題、ありませんか？
            </p>
            <p className="text-muted mb-8">
              話を聞かせてください。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand/25 hover:shadow-brand/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              お問い合わせ
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
