"use client"

import { GraduationCap, School, Users } from "lucide-react"
import Image from "next/image"

const audiences = [
  {
    icon: GraduationCap,
    title: "University Lecturers",
    description: "Handle large classes with ease. Grade hundreds of essays in hours, not weeks.",
    image: "university professor teaching large class, higher education",
  },
  {
    icon: School,
    title: "Secondary School Teachers",
    description: "Spend less time marking, more time teaching. Get your evenings and weekends back.",
    image: "secondary school teacher in classroom, education",
  },
  {
    icon: Users,
    title: "Schools & Institutions",
    description: "Improve grading consistency across your institution. Better analytics, fairer results.",
    image: "school administrators reviewing educational data, institutional",
  },
]

export function AudienceSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/10 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white">
            Built for educators
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/60">Whether you teach 30 students or 3,000</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="glass-strong rounded-2xl overflow-hidden hover:glass-green transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/audience-${index + 1}.jpg?height=300&width=500&query=${audience.image}`}
                    alt={audience.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl glass-strong flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{audience.title}</h3>
                  <p className="text-base leading-relaxed text-white/60">{audience.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
