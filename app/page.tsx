"use client";

import Logo from "@/components/Logo";

const OBSERVATIONS = [
  { text: "The photo looks real. But the fingers have six joints.", icon: "🖐" },
  { text: "The voice sounds human. But it never takes a breath.", icon: "🗣" },
  { text: "The smile is perfect. Exactly perfect. That's the problem.", icon: "😊" },
  { text: "The news article exists. The journalist doesn't.", icon: "📰" },
];

const MANIFESTO = [
  {
    num: "01",
    title: "You can feel it before you can name it",
    text: "Something is off. You can't point to what exactly. The lighting is right, the words are right, the face is right. But your gut says no. That instinct is the last firewall between you and total synthetic reality.",
  },
  {
    num: "02",
    title: "The valley gets deeper every day",
    text: "In 2024, you could spot AI images in seconds. In 2025, it took minutes. Now? You're not sure about anything. The uncanny valley isn't getting smaller — we're falling deeper into it.",
  },
  {
    num: "03",
    title: "Real became a spectrum",
    text: "'Is this real?' used to be a yes-or-no question. Now it's a percentage. 90% real. 95% real. 99.7% real. We don't live in reality anymore — we live in probability.",
  },
  {
    num: "04",
    title: "UNCANNY is the last honest word",
    text: "Not fake. Not real. Uncanny. The word for the gap between what your eyes see and what your instinct knows. In a world that's almost real, uncanny is the only truth left.",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f5f0e8]/80 border-b border-[#c9a87c]/15">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-semibold text-sm text-[#1a1a1a]/70 tracking-wide wrong">UNCANNY</span>
          </div>
          <a href="https://x.com/UncannyCoin" target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-1.5 border border-[#c9a87c]/30 text-[#1a1a1a]/60 rounded-full hover:bg-[#c9a87c]/10 transition-all">
            Follow
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-up fade-up-1 mb-8">
            <Logo size={72} className="mx-auto almost-right" />
          </div>
          <p className="fade-up fade-up-1 text-[#c9a87c] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Something is not quite right
          </p>
          <h1 className="fade-up fade-up-2 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[#1a1a1a]">
            Almost <span className="text-[#c9a87c] wrong">real</span>
          </h1>
          <p className="fade-up fade-up-3 text-lg text-[#1a1a1a]/50 max-w-lg mx-auto leading-relaxed mb-10">
            You can feel it, can&apos;t you? Something about this page.
            <br />
            Something about everything, lately.
          </p>
          <div className="fade-up fade-up-4">
            <a href="https://x.com/UncannyCoin" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#1a1a1a] text-[#f5f0e8] font-semibold rounded-full hover:bg-[#1a1a1a]/90 transition-all text-sm">
              Look Closer →
            </a>
          </div>
        </div>
      </section>

      {/* Observations */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-12 tracking-tight">
            Signs You&apos;re Already in the Valley
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OBSERVATIONS.map((o, i) => (
              <div key={i} className="uncanny-card rounded-xl p-6">
                <div className="text-2xl mb-3">{o.icon}</div>
                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <p className="text-center text-[#c9a87c]/60 text-xs tracking-[0.3em] uppercase mb-4">The Manifesto</p>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-16 tracking-tight">
            Why UNCANNY Exists
          </h2>
          <div className="space-y-12">
            {MANIFESTO.map((m) => (
              <div key={m.num} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-[#c9a87c]/30 text-xs font-bold mt-1 shrink-0">{m.num}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c9a87c] transition-colors">{m.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-divider mb-16" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4 tracking-tight">
            Trust your <span className="text-[#c9a87c] wrong">instinct</span>
          </h2>
          <p className="text-sm text-[#1a1a1a]/50 mb-10">
            In a world where everything looks real, your gut feeling is the last truth detector.
          </p>
          <a href="https://x.com/UncannyCoin" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 bg-[#1a1a1a] text-[#f5f0e8] font-semibold rounded-full hover:bg-[#1a1a1a]/90 transition-all text-sm">
            Something Feels Off →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c9a87c]/15 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={18} />
            <span className="text-xs text-[#1a1a1a]/30">UNCANNY</span>
          </div>
          <p className="text-[10px] text-[#1a1a1a]/20 wrong">This page was definitely made by a human. Probably.</p>
          <a href="https://x.com/UncannyCoin" target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#1a1a1a]/30 hover:text-[#c9a87c] transition-colors">𝕏</a>
        </div>
      </footer>
    </>
  );
}
