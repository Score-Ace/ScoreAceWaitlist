"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSolution = () => {
    document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/50 via-black to-green-900/30 animate-gradient" />

      {/* Floating green orbs with animations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-700/20 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-600/10 rounded-full blur-[80px] animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green animate-pulse-soft">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300 font-medium">Launching in 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
            <span className="text-white">Grade exams in</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-gradient-text">
              minutes
            </span>
            <span className="text-white">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            Score Ace uses AI to help teachers grade theory exams instantly—with your marking
            guide, your standards, and zero compromise on fairness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black px-8 h-12 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
              onClick={scrollToWaitlist}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 text-base font-medium text-white hover:text-green-400 glass hover:glass-strong transition-all duration-300"
              onClick={scrollToSolution}
            >
              See how it works
            </Button>
          </div>
        </div>

        {/* Right: Hero image with glass card */}
        <div className="relative animate-fade-in-up animation-delay-600">
          <div className="glass-strong rounded-2xl p-8 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/ScoreAceScan.jpg"
                alt="Teacher using Score Ace AI grading system"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/90 text-sm font-medium">AI-powered grading in action</p>
              </div>
            </div>
          </div>

          {/* Floating stats card with animation */}
          <div className="absolute -bottom-6 -left-6 glass-green rounded-xl p-4 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-xs text-white/60">Time saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
