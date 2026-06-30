import type { Metadata } from "next";
import Image from "next/image";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "くまでについて",
  description:
    "くまでは福島県大熊町発のPR・ブランディング会社。「ゼロからでも、福はかき集められる。」それを証明し続ける会社です。",
};

const values = [
  {
    num: "01",
    title: "かき集める前に、種をまく。",
    desc: "小手先の宣伝より、まず価値そのものを一緒につくる。",
  },
  {
    num: "02",
    title: "支援ではなく、伴走する。",
    desc: "当事者として同じ側に立つ。上から「支援」しない。",
  },
  {
    num: "03",
    title: "勢いで動き、丁寧に残す。",
    desc: "スピードで仕掛け、信頼で積み上げる。",
  },
  {
    num: "04",
    title: "人脈は、独り占めせずつなぐ。",
    desc: "抱え込まず、地域の縁を循環させる。",
  },
  {
    num: "05",
    title: "デジタルで、地方のハンデを消す。",
    desc: "距離も人手不足も、ITで埋める。",
  },
];

const nameOrigins = [
  {
    tag: "KMD_01",
    color: "border-accent/20 bg-accent/5",
    indicator: "bg-accent",
    title: "熊手（縁起物）",
    desc: "福やお客を\u201Cかき集める\u201D、商売繁盛の象徴。PR・ブランディングという仕事そのもの。",
  },
  {
    tag: "KMD_02",
    color: "border-accent-alt/20 bg-accent-alt/5",
    indicator: "bg-accent-alt",
    title: "大熊町",
    desc: "会社の出発点。ゼロから立ち上がっていく土地。",
  },
  {
    tag: "KMD_03",
    color: "border-neon-yellow/20 bg-neon-yellow/5",
    indicator: "bg-neon-yellow",
    title: "再起",
    desc: "一度事業をたたみ、ここから挑み直すという物語。町の歩みと静かに重なる。",
  },
];

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

      {/* Purpose */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollFadeIn>
              <div>
                <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
                  // Purpose
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
                  Purpose
                </h2>
                <div className="mt-10 relative border border-border bg-surface-card p-10 md:p-14">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/30" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/30" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent/30" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent/30" />
                  <div className="absolute inset-0 cyber-grid opacity-20" />
                  <div className="relative">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-snug">
                      「ゼロからでも、福はかき集められる。」
                    </p>
                    <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed">
                      ——それを証明し続ける会社。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Mission */}
            <ScrollFadeIn>
              <div>
                <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
                  // Mission
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
                  Mission
                </h2>
                <p className="mt-8 text-muted leading-[2] text-lg">
                  地方の中小企業が、お客・評判・誇りを自分の手でかき集め、繁盛していくための
                  <span className="text-ink font-semibold">一気通貫パートナー</span>
                  になる。
                </p>
                <p className="mt-4 text-muted leading-[2] text-lg">
                  案件を取り（<span className="text-accent font-semibold">人脈</span>）、
                  デジタルで形にし（<span className="text-accent font-semibold">IT</span>）、
                  現場を回って広げる（<span className="text-accent font-semibold">営業</span>）——
                  その全部を地方の事業者の隣で担う。
                </p>
              </div>
            </ScrollFadeIn>

            {/* Vision */}
            <ScrollFadeIn delay={100}>
              <div>
                <p className="text-xs font-mono text-accent-alt/50 tracking-[0.3em] uppercase">
                  // Vision
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
                  Vision
                </h2>
                <p className="mt-8 text-muted leading-[2] text-lg">
                  「<span className="text-ink font-semibold">都会に出なくても、地方から勝てる</span>」を当たり前にする。
                </p>
                <p className="mt-4 text-muted leading-[2] text-lg">
                  その実例を<span className="text-accent-alt font-semibold">大熊町</span>から生み出し、
                  全国の地方へ広げていく。
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 md:py-40 bg-surface overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Values
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Values
            </h2>
            <p className="mt-5 text-muted max-w-xl leading-relaxed text-lg">
              行動指針。5つの約束。
            </p>
          </ScrollFadeIn>

          <div className="mt-14">
            {values.map((item, i) => (
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

      {/* Name Origin - 3 layers */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Name_Origin
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Origin
            </h2>
            <p className="mt-5 text-muted max-w-xl leading-relaxed text-lg">
              三層の意味が一語に重なる。それが「くまで」の名前の強さ。
            </p>
          </ScrollFadeIn>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {nameOrigins.map((item, i) => (
              <ScrollFadeIn key={item.title} delay={100 + i * 80}>
                <div className={`border ${item.color} p-8 hover:border-accent/40 transition-all h-full`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-3 h-3 ${item.indicator}`} />
                    <span className="text-[10px] font-mono text-muted/60 tracking-wider">
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

          <ScrollFadeIn delay={400}>
            <div className="mt-10 max-w-2xl">
              <p className="text-sm text-muted leading-relaxed">
                表記は<span className="text-ink font-semibold">株式会社くまで</span>。
                ひらがなが、地域性・あたたかさ・親しみを担う。
                ロゴや欧文の場面では <span className="text-ink font-semibold font-mono">KUMADE</span> を使い、
                勢い・挑戦的な硬派さを出す。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Logo */}
      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Logo
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Identity
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={80}>
            <div className="mt-14 flex justify-center">
              <div className="relative border border-border bg-surface-card p-12 md:p-16 max-w-2xl w-full">
                <div className="absolute inset-0 cyber-grid-dense opacity-20" />
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent/30" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent/30" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent/30" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/30" />
                <Image
                  src="/logo.webp"
                  alt="くまで ロゴ"
                  width={600}
                  height={200}
                  className="relative w-full h-auto"
                />
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={160}>
            <p className="mt-8 text-center text-sm font-mono text-muted/60 tracking-[0.2em]">
              KUMADE ｜ 大熊町発のPR・ブランディングカンパニー
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Okuma Town Story */}
      <section className="relative py-32 md:py-40 bg-surface-tint border-t border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
              // Okuma_Story
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black text-ink leading-[1.1] tracking-tight uppercase">
              Story
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="mt-14 max-w-3xl space-y-8 text-muted leading-[2] text-lg">
              <p>
                大熊町は、福島第一原子力発電所を抱える町です。
                <span className="text-ink font-semibold">2011年3月</span>、
                震災と原発事故により全域が避難の対象となり、当時11,505人だった町民は、
                会津若松市やいわき市をはじめ全国へ離れざるを得ませんでした。
                町民のおよそ96%が暮らした地域が帰還困難区域となり、
                町は「5年は戻らない」という重い決断をしました。
              </p>
              <p>
                それでも、町は一つひとつ日常を
                <span className="text-accent font-semibold">"かき集める"</span>
                ように取り戻してきました。
                <span className="text-ink font-semibold">2022年6月30日</span>には、
                かつての町の中心部を含む区域の避難指示が解除され、
                駅の西側には産業交流施設や商業施設、駅前広場が新しくオープンし、
                町に賑わいが戻りはじめています。
                いま、町内では約1,500人が暮らし、関係者は「よくここまで来た」と語ります。
              </p>
              <p>
                私たちが社名に「くまで」を選んだのは、この町から始めるからです。
                熊手が福をかき集める縁起物であるように、
                町は人の手で少しずつ未来をかき集めてきました。
                その姿に、<span className="text-accent font-semibold">私たち自身の再起</span>が重なります。
              </p>
              <p>
                だから、くまでの仕事は決まっています。
                地方の事業者が、自分の手でお客と未来をかき集められるように、
                <span className="text-ink font-semibold">隣で伴走すること</span>。
                福島の被災12市町村は今、
                「新しい地域を創り出す、挑戦する人材」を全国から呼び込もうとしています。
                その最前線から、私たちは
                <span className="text-accent font-semibold">「地方でも勝てる」</span>
                を証明していきます。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <p className="text-xs font-mono text-accent/40 tracking-[0.3em] uppercase mb-6">
              // Tagline
            </p>
            <p className="text-3xl md:text-5xl font-bold text-ink leading-snug">
              地方から、福をかき集める。
            </p>
            <div className="mt-6 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Company */}
      <section className="py-32 md:py-40 bg-surface-tint border-t border-border">
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
            <dl className="mt-14 border border-border bg-surface-card overflow-hidden">
              {[
                { label: "会社名", value: "株式会社くまで" },
                { label: "代表者", value: "瀬戸 史弥" },
                { label: "設立", value: "令和7年10月16日" },
                { label: "所在地", value: "福島県双葉郡大熊町" },
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
            </dl>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
