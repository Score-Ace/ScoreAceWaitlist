"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// PASTE YOUR GOOGLE APPS SCRIPT URL HERE
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRHlAfnT2oalydYGm8pg76sXa7dZxcbrdfN1yfAnBv1JZv0eD5hY0efUi86kgSRkk2XQ/exec"

export function WaitlistSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script cross-origin requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role, // Your script currenty doesn't save 'role', but it's sent anyway
        }),
      })

      // Note: With "no-cors", we can't read the response body, 
      // but if the fetch doesn't throw, it generally succeeded.
      setSubmitted(true)
    } catch (err) {
      console.error("Submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-green-950/30 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {!submitted ? (
          <div className="glass-strong rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Be among the first to use Score Ace
              </h2>
              <p className="text-base sm:text-lg text-white/70">
                Join our waitlist for early access. No spam—just genuine updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 bg-white/5 border-white/10 text-white focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-white/5 border-white/10 text-white focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-white">I am a...</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger id="role" className="h-12 bg-white/5 border-white/10 text-white">
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

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-black h-12 font-semibold transition-all hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
        ) : (
          <div className="glass-strong rounded-2xl p-8 sm:p-12 shadow-2xl space-y-6 text-center animate-fade-in-up">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Check your inbox, {name.split(' ')[0]}!</h3>
              <p className="text-lg text-white/70">
                We've sent a welcome email to <strong>{email}</strong>. If you don't see it, check your spam folder.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}