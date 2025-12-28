"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Waitlist submission:", { email, role })
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-green-950/30 overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {!submitted ? (
          <div className="glass-strong rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance text-white">
                Be among the first to use Score Ace
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white/70">
                Join our waitlist and get early access when we launch. No spam, no gimmicks—just genuine updates from
                real people building something that matters.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base text-white">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-base text-white">
                  I am a...
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger id="role" className="h-12 text-base bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Secondary School Teacher</SelectItem>
                    <SelectItem value="lecturer">University Lecturer</SelectItem>
                    <SelectItem value="school">School Administrator</SelectItem>
                    <SelectItem value="other">Other Educator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-black h-12 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <p className="text-sm text-center text-white/50">
                Your email is safe with us. We respect your privacy and will only send you updates about Score Ace.
              </p>
            </form>
          </div>
        ) : (
          <div className="glass-strong rounded-2xl p-8 sm:p-12 shadow-2xl space-y-6 text-center animate-fade-in-up">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center animate-bounce-in">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">You're on the list!</h3>
              <p className="text-base sm:text-lg leading-relaxed text-white/70">
                Thank you for joining. We'll reach out soon with updates on our progress and early access details.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
