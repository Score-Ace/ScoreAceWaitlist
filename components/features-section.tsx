"use client"

import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Handwritten essay scanning",
    description: "Advanced AI reads and understands handwriting—no typed answers required.",
  },
  {
    title: "Teacher-controlled criteria",
    description: "You define what matters. Score Ace follows your marking guide exactly.",
  },
  {
    title: "Fast, consistent grading",
    description: "Grade entire classes in the time it used to take for five scripts.",
  },
  {
    title: "Student performance analytics",
    description: "See patterns, identify struggling students, and adjust your teaching.",
  },
  {
    title: "Mobile-first experience",
    description: "Built for teachers on the go—scan scripts anywhere, anytime.",
  },
  {
    title: "Secure and private",
    description: "Your data stays yours. Built with education privacy standards in mind.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Green glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white">
            Everything you need
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/60">
            Powerful features designed specifically for teachers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 space-y-3 hover:glass-strong transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
