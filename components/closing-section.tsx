export function ClosingSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Subtle green glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/10 via-black to-black" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight text-white">
          Every teacher deserves more time.
          <br />
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Every student deserves fairness.
          </span>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-white/70 max-w-2xl mx-auto text-pretty">
          Score Ace isn't about replacing teachers—it's about empowering them. Because better grading means better
          teaching. And better teaching changes lives.
        </p>
      </div>

      <footer className="relative z-10 max-w-6xl mx-auto mt-24 pt-12 border-t border-white/10">
        <div className="text-center text-sm text-white/60 space-y-2">
          <p className="font-semibold text-green-400 text-base">Score Ace</p>
          <p>Built for educators. Starting in Africa. Scaling globally.</p>
          <p className="text-xs">© 2025 Score Ace. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
