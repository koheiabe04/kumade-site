const cornerLabels = [
  { text: "BRANDING", position: "top-6 left-6 md:top-10 md:left-10" },
  { text: "CREATIVE", position: "top-6 right-6 md:top-10 md:right-10" },
  { text: "DESIGN", position: "bottom-6 left-6 md:bottom-10 md:left-10" },
  { text: "PR_SUPPORT", position: "bottom-6 right-6 md:bottom-10 md:right-10" },
];

export function HeroSection() {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-surface flex items-center justify-center scan-lines">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid-dense" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-alt/[0.04] rounded-full blur-[100px]" />

      {/* Corner labels */}
      {cornerLabels.map((label) => (
        <p
          key={label.text}
          className={`absolute ${label.position} text-[10px] md:text-xs font-mono text-accent/20 tracking-[0.2em] uppercase select-none pointer-events-none`}
          aria-hidden="true"
        >
          {label.text}
        </p>
      ))}

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Tagline top */}
        <div className="animate-fade-up-1">
          <p className="text-xs md:text-sm font-mono text-accent/60 tracking-[0.3em] uppercase mb-8">
            &lt; PR &amp; Branding from Fukushima /&gt;
          </p>
        </div>

        {/* Main title - huge */}
        <div className="animate-fade-up-2">
          <h1
            className="glitch text-[clamp(48px,13vw,160px)] font-display font-black leading-[0.9] tracking-[-0.02em] text-ink neon-text-cyan"
            data-text="KUMADE"
          >
            KUMADE
          </h1>
        </div>

        {/* Japanese tagline */}
        <div className="animate-fade-up-3">
          <p className="mt-6 md:mt-8 text-xl md:text-3xl font-bold text-ink/80 tracking-wider">
            かき集めろ、地方から。
          </p>
        </div>

        {/* Accent line */}
        <div className="animate-fade-up-4 mx-auto mt-8 h-px w-48 md:w-64 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Sub copy */}
        <div className="animate-fade-up-5">
          <p className="mt-6 text-sm md:text-base text-muted font-mono">
            Design × Strategy × Passion
          </p>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow">
        <p className="text-[10px] font-mono text-accent/40 tracking-[0.2em] uppercase">Scroll</p>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  );
}
