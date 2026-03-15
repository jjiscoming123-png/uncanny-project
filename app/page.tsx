"use client";

import Logo from "@/components/Logo";

export default function Page() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] font-medium tracking-wide text-[var(--color-dark)]/50 almost">UNCANNY</span>
        </div>
        <a href="https://x.com/uncannyxyz" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[var(--color-bg)] bg-[var(--color-dark)] px-4 py-1.5 rounded-full hover:bg-[var(--color-dark)]/80 transition-colors">
          Follow
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-16">
        <div className="max-w-lg text-center">
          {/* Face grid - slightly wrong */}
          <div className="face-grid mb-10 anim-up d1 almost">
            <div className="face-cell">👁</div>
            <div className="face-cell" style={{ transform: 'translateY(-2px)' }}>👁</div>
            <div className="face-cell col-span-2 !rounded-b-xl">
              <span style={{ transform: 'scaleY(0.85)' }}>👄</span>
            </div>
          </div>
          <p className="text-[10px] text-[var(--color-skin)] tracking-[0.3em] uppercase mb-4 anim-up d1">Something is not quite right</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 anim-up d2 leading-tight almost">
            Almost <span className="text-[var(--color-skin)] italic">real.</span>
          </h1>
          <p className="text-[var(--color-muted)] mb-8 anim-up d3 leading-relaxed">
            You can feel it, can&apos;t you? Something about everything lately.
            The photo that&apos;s too perfect. The voice that never breathes.
            The smile that&apos;s exactly right — and that&apos;s the problem.
          </p>
          <a href="#evidence" className="text-sm font-semibold text-[var(--color-bg)] bg-[var(--color-dark)] px-6 py-3 rounded-full hover:bg-[var(--color-dark)]/80 transition-colors anim-up d4">
            Look Closer ↓
          </a>
        </div>
      </section>

      {/* ── REALITY PERCENTAGE ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[10px] text-[var(--color-skin)] tracking-[0.3em] uppercase mb-6">Reality Index</p>
          <div className="space-y-6">
            {[
              { year: "2023", pct: 85, label: "You could spot AI in seconds" },
              { year: "2024", pct: 60, label: "It took a few minutes" },
              { year: "2025", pct: 30, label: "You had to really look" },
              { year: "2026", pct: 5, label: "You're not sure about anything" },
            ].map((item) => (
              <div key={item.year} className="text-left">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[var(--color-dark)]">{item.year}</span>
                  <span className="text-[var(--color-muted)] text-xs">{item.label}</span>
                </div>
                <div className="pct-bar">
                  <div className="pct-fill" style={{ width: `${item.pct}%` }} />
                </div>
                <p className="text-right text-[10px] text-[var(--color-skin)] mt-1">{item.pct}% detectable</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVIDENCE ── */}
      <section id="evidence" className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] text-[var(--color-skin)] tracking-[0.3em] uppercase mb-3">Signs</p>
          <h2 className="text-2xl font-bold mb-8">Things That Are Almost Right</h2>
          <div className="space-y-3">
            {[
              { emoji: "🖐", text: "The photo looks real. But the fingers have six joints." },
              { emoji: "🗣", text: "The voice sounds human. But it never takes a breath." },
              { emoji: "📰", text: "The article is well-written. The journalist doesn't exist." },
              { emoji: "😊", text: "The smile is perfect. Exactly perfect. That's the problem." },
              { emoji: "🎵", text: "The song is catchy. Nobody wrote it." },
              { emoji: "💬", text: "The reply is thoughtful. It was generated in 0.3 seconds." },
            ].map((item, i) => (
              <div key={i} className="evidence flex items-start gap-4 almost">
                <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE THESIS ── */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-12">
          {[
            { t: "Real became a spectrum.", d: "'Is this real?' used to be yes-or-no. Now it's a percentage. 90% real. 99.7% real. We don't live in reality anymore — we live in probability." },
            { t: "Your gut is the last firewall.", d: "Something is off. You can't point to what. The lighting is right, the words are right, the face is right. But your gut says no. That instinct is the last thing standing between you and total synthetic reality." },
            { t: "Uncanny is the only honest word left.", d: "Not fake. Not real. Uncanny. The word for the gap between what your eyes see and what your instinct knows. In a world that's almost real, uncanny is the only truth." },
          ].map((item, i) => (
            <div key={i} className="group">
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-skin)] transition-colors">{item.t}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 text-center border-t border-[var(--color-border)]">
        <h2 className="text-3xl font-bold mb-3 almost">
          Trust your <span className="text-[var(--color-skin)] italic">instinct.</span>
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
          In a world where everything looks real, your gut feeling is the last truth detector.
        </p>
        <a href="https://x.com/uncannyxyz" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-bg)] bg-[var(--color-dark)] px-6 py-3 rounded-full hover:bg-[var(--color-dark)]/80 transition-colors">
          <span>𝕏</span> Something Feels Off
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={14} />
          <span className="text-[9px] text-[var(--color-dark)]/30">UNCANNY</span>
        </div>
        <p className="text-[9px] text-[var(--color-dark)]/20 italic almost">This page was definitely made by a human. Probably.</p>
      </footer>
    </>
  );
}
