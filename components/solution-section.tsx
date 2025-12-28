"use client"

import { Scan, FileCheck, Sparkles } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: FileCheck,
    title: "1. Define your guide",
    description:
      "Set up your marking criteria once. Score Ace learns your standards and applies them consistently every time.",
    image: "teacher setting up marking rubric on tablet, digital assessment",
  },
  {
    icon: Scan,
    title: "2. Scan with your phone",
    description:
      "Use your mobile device to scan handwritten scripts. No special equipment needed—just your phone camera.",
    image: "teacher scanning handwritten exam with smartphone, mobile grading",
  },
  {
    icon: Sparkles,
    title: "3. Get instant scores",
    description: "Scores and insights appear in seconds. Review, adjust if needed, and move on with confidence.",
    image: "AI grading results dashboard showing instant scores and analytics",
  },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-green-950/20 overflow-hidden"
    >
      {/* Floating green orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-[90px] animate-float" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-white">Meet</span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Score Ace
            </span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/70 text-pretty">
            An AI-powered grading assistant that understands handwriting, follows your marking guide, and gives you
            hours back—without compromising on quality or fairness.
          </p>
        </div>

        <div className="grid gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 hover:glass-green transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:grid-flow-dense"}`}>
                  <div className={`space-y-4 ${isEven ? "md:col-start-1" : "md:col-start-2"}`}>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-white/70">{step.description}</p>
                  </div>
                  <div
                    className={`relative aspect-video rounded-xl overflow-hidden ${isEven ? "md:col-start-2" : "md:col-start-1"}`}
                  >
                    <Image
                      src={`/solution-step-${index + 1}.jpg?height=400&width=600&query=${step.image}`}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
