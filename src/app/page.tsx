import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { HeroSection } from "@/components/HeroSection";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { works } from "@/content/works";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection />

      {/* ===== Typewriter Heading + Intro ===== */}
      <div className="mt-32 md:mt-52 px-6 md:px-8 max-w-7xl mx-auto">
        <TypewriterHeading />
      </div>

      {/* ===== Intro Message ===== */}
      <div className="mt-12 md:mt-20 px-6 md:px-8 max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-lg md:text-2xl leading-[2] text-muted max-w-3xl">
            いいものを持っているのに、伝わっていない。
            <br />
            そういう会社を何度も見てきた。
            <br />
            デザインとPRで、<span className="text-accent">ちゃんと届くようにする</span>。
            <br className="hidden md:block" />
            それが、くまでの仕事。
          </p>
        </ScrollFadeIn>
      </div>

      {/* ===== Services ===== */}
      <div className="mt-32 md:mt-52 px-6 md:px-8 max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase mb-3">
            &lt; Services /&gt;
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase">
            Service
          </h2>
          <p className="text-base mt-4 md:mt-8 text-muted">
            つくる力と、走り続ける力。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <ul className="mt-8 md:mt-16 border-t border-border">
            {/* Creative */}
            <li className="border-b border-border py-8 md:py-10 group">
              <Link href="/service" className="grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <div className="flex items-center gap-5 md:min-w-[280px]">
                  <span className="shrink-0 w-10 h-10 border border-accent/30 flex items-center justify-center text-xs font-mono font-bold text-accent tracking-wider group-hover:bg-accent/10 transition-all">
                    01
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold whitespace-nowrap">
                    クリエイティブ制作
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted mt-3 md:mt-0 leading-relaxed">
                  Webサイト、バナー、名刺、ロゴ。事業の「顔」をつくる。
                </p>
                <div className="hidden md:flex items-center shrink-0 text-muted group-hover:text-accent transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </li>

            {/* Support */}
            <li className="border-b border-border py-8 md:py-10 group">
              <Link href="/service" className="grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <div className="flex items-center gap-5 md:min-w-[280px]">
                  <span className="shrink-0 w-10 h-10 border border-accent-alt/30 flex items-center justify-center text-xs font-mono font-bold text-accent-alt tracking-wider group-hover:bg-accent-alt/10 transition-all">
                    02
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold whitespace-nowrap">
                    伴走支援
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted mt-3 md:mt-0 leading-relaxed">
                  作って終わりじゃない。PR・ブランディングで、結果が出るまで走る。
                </p>
                <div className="hidden md:flex items-center shrink-0 text-muted group-hover:text-accent transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </li>
          </ul>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <Link
            href="/service"
            className="group inline-flex h-14 items-center justify-center border border-accent/30 px-8 text-sm font-mono font-bold tracking-wider uppercase leading-none mt-10 md:mt-14 hover:bg-accent/10 hover:border-accent/60 text-accent transition-all"
          >
            View All Services
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollFadeIn>
      </div>

      {/* ===== Works Preview ===== */}
      <div className="mt-32 md:mt-52 px-6 md:px-8 max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase mb-3">
            &lt; Works /&gt;
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase">
            Works
          </h2>
          <p className="text-base mt-4 md:mt-8 text-muted">
            やってきたこと、見せます。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="mt-8 md:mt-16">
            {works.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {works.slice(0, 3).map((work) => (
                  <Link key={work.slug} href={`/works/${work.slug}`}>
                    <article className="group border border-border hover:border-accent/20 transition-all bg-surface-card h-full">
                      <figure className="aspect-video overflow-hidden bg-surface-tint relative">
                        <div className="absolute inset-0 cyber-grid-dense opacity-30" />
                        <div className="h-full w-full flex items-center justify-center relative z-10">
                          <p className="text-[10px] text-accent/50 tracking-[0.2em] uppercase font-mono px-4 text-center">
                            {work.category}
                          </p>
                        </div>
                      </figure>
                      <div className="p-5">
                        <h4 className="text-base font-bold group-hover:text-accent transition-colors">
                          {work.title}
                        </h4>
                        <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">{work.summary}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border border-border bg-surface-card p-12 text-center">
                <div className="w-8 h-8 mx-auto border border-accent/20 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-accent/30" />
                </div>
                <p className="text-[10px] text-muted/40 tracking-[0.2em] uppercase font-mono">
                  Coming Soon
                </p>
                <p className="text-sm text-muted mt-3">実績を準備しています</p>
              </div>
            )}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <Link
            href="/works"
            className="group inline-flex h-14 items-center justify-center border border-accent/30 px-8 text-sm font-mono font-bold tracking-wider uppercase leading-none mt-10 md:mt-14 hover:bg-accent/10 hover:border-accent/60 text-accent transition-all"
          >
            View All Works
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollFadeIn>
      </div>

      {/* ===== About ===== */}
      <div className="mt-32 md:mt-52 px-6 md:px-8 max-w-7xl mx-auto md:flex md:justify-between md:gap-24">
        <ScrollFadeIn>
          <div>
            <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase mb-3">
              &lt; About /&gt;
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase">
              About
            </h2>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="mt-12 md:mt-0 md:max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              なぜ「くまで」なのか。
            </h3>
            <p className="mt-8 text-base md:text-lg text-muted leading-[2]">
              <span className="text-ink font-bold">熊手</span>
              は、福をかき集める縁起物。
              <br />
              そして
              <span className="text-ink font-bold">くまで</span>は、福島県
              <span className="text-accent font-bold">大熊町</span>
              から生まれた会社です。
            </p>
            <p className="mt-6 text-base md:text-lg text-muted leading-[2]">
              大熊町から始めた。
              <br />
              東京にいなくても、やれることは全部やる。
              <br className="hidden md:block" />
              つくって、届けて、走り続ける。
            </p>
            <Link
              href="/about"
              className="group inline-flex h-14 items-center justify-center border border-accent/30 px-8 text-sm font-mono font-bold tracking-wider uppercase leading-none mt-12 hover:bg-accent/10 hover:border-accent/60 text-accent transition-all"
            >
              Learn More
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>

    </>
  );
}
