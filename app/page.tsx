import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactSection } from "@/components/impact-section"
import { AudienceSection } from "@/components/audience-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { ClosingSection } from "@/components/closing-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ImpactSection />
      <AudienceSection />
      <WaitlistSection />
      <ClosingSection />
    </main>
  )
}
