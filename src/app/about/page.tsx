import type { Metadata } from "next";
import Image from "next/image";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "くまでについて",
  description:
    "くまでは福島県大熊町発のPR・ブランディング会社。地方に眠る価値を見つけ出し、デザインと伴走支援で届けます。",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; About /&gt;
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-black text-ink leading-[1.05] tracking-tight uppercase">
            About
          </h1>
          <div className="mt-8 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-6 text-base text-muted max-w-lg leading-relaxed">
            大熊町から始めた、PR・ブランディング会社。
          </p>
        </div>
      </section>

      {/* Brand Story - Name Origin */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollFadeIn>
              <div>
                <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
                  // Our_Name
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
                  Origin
                </h2>
                <div className="mt-10 space-y-6 text-muted leading-relaxed text-lg">
                  <p>
                    <span className="text-ink font-semibold">「くまで」</span>
                    という社名には、ふたつの想いが込められています。
                  </p>
                  <p>
                    ひとつは、
                    <span className="text-ink font-semibold">熊手</span>。
                    お正月の縁起物として知られる熊手は、
                    <span className="text-accent font-semibold">
                      福をかき集める
                    </span>
                    道具です。
                    事業の中にある「まだ届いていないもの」をかき集めて、届ける。そのための道具。
                  </p>
                  <p>
                    もうひとつは、
                    <span className="text-ink font-semibold">大熊町</span>。
                    福島県大熊町。ここが始まりの場所。
                    <span className="text-accent font-semibold">
                      地方だから何もできない、なんてことはない。
                    </span>
                    そう証明するために動き出した。
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Visual */}
            <ScrollFadeIn delay={150}>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Decorative frame */}
                  <div className="absolute -inset-2 border border-accent/10" />
                  <div className="absolute -inset-4 border border-accent/5" />
                  <div className="relative border border-border bg-surface-card p-16 flex items-center justify-center aspect-square">
                    <div className="absolute inset-0 cyber-grid-dense opacity-30" />
                    <div className="relative text-center">
                      <p className="text-6xl md:text-7xl font-display font-black text-accent/20 tracking-tight">
                        KM
                      </p>
                      <p className="mt-2 text-xs font-mono text-muted/40 tracking-[0.2em]">
                        KUMADE_INC
                      </p>
                    </div>
                    {/* Corner markers */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent/30" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent/30" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent/30" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/30" />
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Logo Interpretation */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Logo
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Identity
            </h2>
          </ScrollFadeIn>

          {/* Logo display */}
          <ScrollFadeIn delay={80}>
            <div className="mt-14 flex justify-center">
              <div className="relative border border-border bg-surface-card p-12 md:p-16 max-w-2xl w-full">
                <div className="absolute inset-0 cyber-grid-dense opacity-20" />
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent/30" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent/30" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent/30" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/30" />
                <Image
                  src="/logo.png"
                  alt="KUMADE"
                  width={600}
                  height={200}
                  className="relative w-full h-auto"
                />
              </div>
            </div>
          </ScrollFadeIn>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {[
              {
                color: "border-accent/20 bg-accent/5",
                indicator: "bg-accent",
                title: "サイバーグロー",
                desc: "シアンの発光が文字を縁取る。テクノロジーと未来志向を体現するネオンの光。",
                tag: "CYN_01",
              },
              {
                color: "border-accent-alt/20 bg-accent-alt/5",
                indicator: "bg-accent-alt",
                title: "グリッチノイズ",
                desc: "マゼンタのグリッチが走る。常識を壊し、地方から新しい価値を生み出す姿勢の表現。",
                tag: "MGT_02",
              },
              {
                color: "border-border bg-surface-card",
                indicator: "bg-ink",
                title: "ブロックレター",
                desc: "太く力強い文字は、地方から挑む覚悟と存在感。読みやすく、記憶に残るタイポグラフィ。",
                tag: "BLK_03",
              },
            ].map((item, i) => (
              <ScrollFadeIn key={item.title} delay={100 + i * 80}>
                <div className={`border ${item.color} p-8 hover:border-accent/40 transition-all h-full`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-3 h-3 ${item.indicator}`} />
                    <span className="text-[10px] font-mono text-muted/30 tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-32 md:py-40 bg-surface overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Philosophy
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Belief
            </h2>
          </ScrollFadeIn>

          <div className="mt-14">
            {[
              {
                num: "01",
                title: "地方から、仕掛ける",
                desc: "東京じゃなくても、やれることは全部やる。場所を言い訳にしない。",
              },
              {
                num: "02",
                title: "作って終わりにしない",
                desc: "納品して終わりなら、そのへんの業者と同じ。結果が出るまで一緒に走る。",
              },
              {
                num: "03",
                title: "一社一社、丁寧に",
                desc: "テンプレートは使わない。その会社のことを知らなきゃ、つくれない。",
              },
            ].map((item, i) => (
              <ScrollFadeIn key={item.num} delay={i * 80}>
                <div className="flex gap-8 md:gap-12 items-baseline py-10 border-b border-border last:border-b-0">
                  <span className="text-4xl md:text-6xl font-display font-black text-accent/15 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-ink mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Message
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Message
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="mt-14 relative border border-border bg-surface-card p-10 md:p-14">
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/30" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/30" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent/30" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent/30" />

              <div className="absolute inset-0 cyber-grid opacity-20" />

              <div className="relative">
                <p className="text-xs font-mono text-accent/40 tracking-[0.2em] mb-6">
                  REPRESENTATIVE_VOICE
                </p>
                <blockquote className="text-lg md:text-xl text-ink leading-relaxed font-sans">
                  「地方から世界を変える。大げさに聞こえるかもしれないけど、本気でそう思っています。いいものを持っているのに、届いていない会社がたくさんある。それを変えるのが、くまでの仕事です。」
                </blockquote>
                <p className="mt-8 text-sm font-mono text-muted/60 tracking-[0.15em]">
                  代表　※後日追加
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Company */}
      <section className="py-32 md:py-40 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Company
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Company
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="mt-14 border border-border bg-surface-card overflow-hidden">
              {[
                { label: "会社名", value: "くまで（※法人格は後日追加）" },
                { label: "代表者", value: "※後日追加" },
                { label: "設立", value: "※後日追加" },
                { label: "所在地", value: "福島県双葉郡大熊町（※詳細住所は後日追加）" },
                { label: "事業内容", value: "クリエイティブ制作 / PR・ブランディング支援" },
                { label: "URL", value: "https://kumade.jp" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row border-b border-border last:border-b-0 ${
                    i % 2 === 0 ? "bg-surface-card" : "bg-surface-tint"
                  }`}
                >
                  <dt className="sm:w-48 shrink-0 px-8 py-5 text-xs font-mono text-accent/60 tracking-[0.2em] uppercase border-b sm:border-b-0 sm:border-r border-border flex items-center">
                    {row.label}
                  </dt>
                  <dd className="px-8 py-5 text-sm text-muted leading-relaxed flex items-center">
                    {row.label === "URL" ? (
                      <a
                        href={row.value}
                        className="text-accent/80 hover:text-accent font-mono transition-colors"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
