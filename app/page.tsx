import { Hero } from "@/components/hero"
// import { HeroDashboard } from "@/components/hero-dashboard"
// import { HeroChaosClarity } from "@/components/hero-chaos-clarity"
import StickyTabs from "@/components/sticky-tabs"
import { SocialProofStrip } from "@/components/social-proof-strip"
import { ProblemSolution } from "@/components/problem-solution"
import { Features } from "@/components/features"
import { AudienceSections } from "@/components/audience-sections"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/* <HeroDashboard /> */}
      {/* <HeroChaosClarity /> */}
      <SocialProofStrip />
      <StickyTabs />
      <ProblemSolution />
      <Features />
      <AudienceSections />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  )
}
