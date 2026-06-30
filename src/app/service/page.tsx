import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  PenTool,
  CreditCard,
  BookOpen,
  Megaphone,
  TrendingUp,
  MessageCircle,
  FileCheck,
  Rocket,
  Paintbrush,
} from "lucide-react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "くまでのサービス。Webサイト・バナー・名刺などのクリエイティブ制作と、継続的なブランディング・PR伴走支援を提供します。",
};

const creativeServices = [
  {
    icon: Globe,
    title: "Webサイト制作",
    desc: "コーポレートサイト、LP、ECサイトなど。戦略設計からデザイン・実装まで一貫して対応します。",
    tag: "WEB",
  },
  {
    icon: PenTool,
    title: "バナー・広告デザイン",
    desc: "SNS広告、Web広告、イベント告知用のバナーなど。訴求力のあるビジュアルを制作します。",
    tag: "ADS",
  },
  {
    icon: CreditCard,
    title: "名刺デザイン",
    desc: "ビジネスの第一印象を左右する名刺。ブランドの世界観を凝縮したデザインを提案します。",
    tag: "CRD",
  },
  {
    icon: Paintbrush,
    title: "ロゴ・VI設計",
    desc: "企業やサービスの顔となるロゴマークとビジュアルアイデンティティを設計します。",
    tag: "VIS",
  },
  {
    icon: BookOpen,
    title: "パンフレット・資料",
    desc: "会社案内、サービス資料、営業ツールなど。伝わるレイアウトで制作します。",
    tag: "DOC",
  },
];

const supportServices = [
  {
    icon: Megaphone,
    title: "PR戦略立案",
    desc: "ターゲット分析から発信戦略まで。何を・誰に・どう届けるかを一緒に設計します。",
    tag: "STR",
  },
  {
    icon: TrendingUp,
    title: "ブランディング支援",
    desc: "ブランドの軸を定め、一貫したメッセージで発信。長期的なブランド価値を構築します。",
    tag: "BRD",
  },
  {
    icon: MessageCircle,
    title: "SNS運用サポート",
    desc: "Instagram、noteなどの運用を支援。コンテンツ企画からクリエイティブ制作まで対応します。",
    tag: "SNS",
  },
];

const flowSteps = [
  {
    num: "01",
    title: "ヒアリング",
    desc: "事業内容やお悩み、目標をじっくりお聞かせください。オンライン面談も可能です。",
    icon: MessageCircle,
  },
  {
    num: "02",
    title: "ご提案",
    desc: "課題を整理し、最適なプランをご提案。スケジュールとお見積りもお出しします。",
    icon: FileCheck,
  },
  {
    num: "03",
    title: "制作・実行",
    desc: "デザイン・制作を進行。途中のフィードバックを大切に、ゴールへ向かいます。",
    icon: Rocket,
  },
  {
    num: "04",
    title: "納品・伴走開始",
    desc: "納品後も終わりではありません。成果を見ながら、継続的にサポートしていきます。",
    icon: TrendingUp,
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; Services /&gt;
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-black text-ink leading-[1.05] tracking-tight uppercase">
            Service
          </h1>
          <div className="mt-8 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-6 text-base text-muted max-w-lg leading-relaxed">
            つくる力と、走り続ける力。
          </p>
        </div>
      </section>

      {/* Creative Production */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-4">
              <PenTool className="text-accent" size={20} />
              <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
                // Creative
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Creative
            </h2>
            <p className="mt-5 text-muted max-w-xl leading-relaxed text-lg">
              事業の「顔」をつくる。
              伝わる形に、変える。
            </p>
          </ScrollFadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {creativeServices.map((service, i) => (
              <ScrollFadeIn key={service.title} delay={i * 80}>
                <div className="group border border-border bg-surface-card p-7 hover:border-accent/30 transition-all h-full">
                  <div className="flex items-center justify-between mb-5">
                    <service.icon className="text-accent/50" size={22} />
                    <span className="text-[10px] font-mono text-muted/60 tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="relative py-32 md:py-40 bg-surface-tint border-t border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-alt/[0.03] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="text-accent-alt" size={20} />
              <p className="text-xs font-mono text-accent-alt/50 tracking-[0.3em] uppercase">
                // Support
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Support
            </h2>
            <p className="mt-5 text-muted max-w-xl leading-relaxed text-lg">
              作って終わりじゃない。
              結果が出るまで、一緒に走る。
            </p>
          </ScrollFadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportServices.map((service, i) => (
              <ScrollFadeIn key={service.title} delay={i * 80}>
                <div className="group border border-border bg-surface-card p-7 hover:border-accent-alt/30 transition-all h-full">
                  <div className="flex items-center justify-between mb-5">
                    <service.icon className="text-accent-alt/50" size={22} />
                    <span className="text-[10px] font-mono text-muted/60 tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Flow
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Process
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flowSteps.map((step, i) => (
              <ScrollFadeIn key={step.num} delay={i * 100}>
                <div className="border border-border bg-surface-card p-7 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-accent/5" />
                  <span className="text-3xl font-display font-black text-accent/10 block mb-4">
                    {step.num}
                  </span>
                  <step.icon className="text-accent/40 mb-4" size={22} />
                  <h3 className="text-base font-bold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollFadeIn>
              <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
                // Pricing
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
                Pricing
              </h2>
              <div className="mt-8 space-y-4 text-muted leading-relaxed text-lg">
                <p>
                  くまでの料金は、お客さまの課題や規模に合わせて
                  <span className="text-ink font-semibold">
                    個別にお見積り
                  </span>
                  しています。
                </p>
                <p>
                  「まずは話を聞いてみたい」という段階でも大歓迎です。
                  ヒアリングとご提案は無料ですので、お気軽にご相談ください。
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-base font-display font-bold tracking-wider uppercase text-accent hover:bg-accent/10 hover:border-accent/60 transition-all"
                >
                  無料相談はこちら
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // FAQ
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              FAQ
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 space-y-4">
            {[
              {
                num: "01",
                q: "初回相談は無料ですか？",
                a: "はい、ヒアリングとご提案は無料です。お気軽にお問い合わせください。",
              },
              {
                num: "02",
                q: "地方（東京以外）からの依頼も対応していますか？",
                a: "はい。くまでは福島県大熊町を拠点に、全国のお客さまに対応しています。オンライン打ち合わせも可能です。",
              },
              {
                num: "03",
                q: "納期はどれくらいですか？",
                a: "内容や規模によりますが、Webサイト制作は約1〜3ヶ月、ロゴ・名刺は約2〜4週間が目安です。お急ぎの場合もご相談ください。",
              },
              {
                num: "04",
                q: "制作後の修正や運用サポートはありますか？",
                a: "はい。納品後の修正対応はもちろん、継続的なブランディング・PR支援のプランもご用意しています。",
              },
              {
                num: "05",
                q: "予算が限られていますが相談できますか？",
                a: "もちろんです。ご予算に合わせた最適なプランをご提案します。まずはお気軽にご相談ください。",
              },
            ].map((item, i) => (
              <ScrollFadeIn key={item.num} delay={i * 80}>
                <div className="border border-border bg-surface-card p-7 hover:border-accent/20 transition-all">
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 text-xs font-mono text-accent/30 tracking-widest pt-1">
                      {item.num}
                    </span>
                    <div className="space-y-3">
                      <p className="text-base font-bold text-ink">{item.q}</p>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
