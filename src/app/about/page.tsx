import type { Metadata } from "next";
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
            福島県大熊町から、まだ届いていない価値を届ける。
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
                    お客さまの事業に眠る可能性を見つけ出し、
                    世の中に届けるお手伝いをしたい。
                  </p>
                  <p>
                    もうひとつは、
                    <span className="text-ink font-semibold">大熊町</span>。
                    私たちは福島県大熊町からスタートしました。
                    地方からでも、いや、
                    <span className="text-accent font-semibold">
                      地方だからこそ
                    </span>
                    届けられる価値がある。 そう信じて歩み出した原点の地です。
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

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {[
              {
                color: "border-brand/30 bg-brand/5",
                indicator: "bg-brand",
                title: "赤い背景",
                desc: "情熱・エネルギー・行動力。地方から挑む熱量を表現しています。",
                tag: "RED_01",
              },
              {
                color: "border-accent/20 bg-accent/5",
                indicator: "bg-ink/40",
                title: "白い熊手の爪",
                desc: "福をかき集める熊手の爪。お客さまの事業から価値を引き出す力の象徴です。",
                tag: "WHT_02",
              },
              {
                color: "border-neon-yellow/20 bg-neon-yellow/5",
                indicator: "bg-neon-yellow",
                title: "朝日の丸",
                desc: "右上に輝く黄金の丸は昇る朝日。出発・希望・新しい始まりを象徴しています。",
                tag: "YLW_03",
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
                desc: "東京じゃなくてもいい。むしろ地方にしかないストーリーがある。私たちはそれを見つけ出し、届けます。",
              },
              {
                num: "02",
                title: "作って終わりにしない",
                desc: "Webサイトや名刺を作っただけでは何も変わらない。継続的な伴走で、本当の成果につなげます。",
              },
              {
                num: "03",
                title: "一社一社、丁寧に",
                desc: "大量生産のテンプレートではなく、一社一社の事業を深く理解し、その会社だけのブランドを築きます。",
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
    </>
  );
}
