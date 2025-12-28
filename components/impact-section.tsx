"use client"

import Image from "next/image"
import { TrendingUp, Clock, Target } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Time saved on grading",
    image: "happy teacher with free time, work-life balance",
  },
  {
    icon: Target,
    value: "99%",
    label: "Consistency in scoring",
    image: "consistent exam scores, fair grading results",
  },
  {
    icon: Clock,
    value: "10x",
    label: "Faster feedback to students",
    image: "students receiving quick exam feedback, happy learners",
  },
]

export function ImpactSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-950/20 to-black overflow-hidden">
      {/* Animated green orbs */}
      <div className="absolute top-10 left-20 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-green-700/10 rounded-full blur-[100px] animate-float-delayed" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white">
            Real impact for educators
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/60">
            More time for teaching. Better outcomes for students.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass-green rounded-2xl p-8 space-y-6 hover:glass-strong transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={`/impact-${index + 1}.jpg?height=400&width=400&query=${stat.image}`}
                    alt={stat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-strong flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg text-white/90">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
