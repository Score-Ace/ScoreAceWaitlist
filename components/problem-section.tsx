"use client"

import Image from "next/image"
import { Clock, Frown, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Hundreds of scripts to mark",
    description:
      "Every exam period, teachers face mountains of handwritten essays—each one demanding full attention, thoughtful feedback, and hours of time they don't have.",
    image: "/teacherusingscoreace.png",
  },
  {
    icon: Frown,
    title: "Mistakes happen when you're exhausted",
    description:
      "Late nights, fatigue, and rushed deadlines lead to inconsistency. A missed point here, a miscalculation there—and suddenly a student's future is affected.",
    image: "tired teacher grading papers late at night, fatigue",
  },
  {
    icon: TrendingDown,
    title: "Students and teachers both lose",
    description: "Students wait weeks for results. Teachers burn out. Education suffers. There has to be a better way.",
    image: "student waiting for exam results, disappointed",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-white">Teachers are</span>{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              overwhelmed
            </span>
          </h2>
          <p className="text-xl text-white/60">And it's costing everyone.</p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 hover:glass-green transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 order-2 md:order-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{problem.title}</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-white/70">{problem.description}</p>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden order-1 md:order-2">
                    <Image
                      src={`/teacherusingscoreace.png?height=400&width=600&query=${problem.image}`}
                      alt={problem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
