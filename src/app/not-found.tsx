import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; Error /&gt;
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-black text-ink leading-[1.05] tracking-tight uppercase">
            404
          </h1>
          <div className="mt-8 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
        </div>
      </section>

      <section className="py-32 md:py-40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto border border-border bg-surface-card flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 cyber-grid-dense opacity-30" />
            <p className="text-2xl font-display font-black text-accent/30 relative z-10">?</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            ページが見つかりません
          </h2>
          <p className="text-muted max-w-md mx-auto leading-relaxed text-sm mb-10">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-base font-display font-bold tracking-wider text-accent hover:bg-accent/10 hover:border-accent/60 transition-all"
          >
            トップページへ戻る
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
