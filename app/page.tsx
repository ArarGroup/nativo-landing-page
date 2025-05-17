import { Hero } from "@/components/hero/hero"
import { HeroV2 } from "@/components/hero/hero-v2"
import StickyTabs from "@/components/sticky-tabs"
import { LogoCloud } from "@/components/logo-cloud"
import { Features } from "@/components/features"
import { Experience } from "@/components/experience"
import { Modules } from "@/components/modules"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroV2 />
      <StickyTabs />
      <Hero />
      {/* <LogoCloud />
				<Features />
				<Experience />
				<Modules />
				<Pricing />
				<Testimonials />
				<Contact />
				<FAQ /> */}
    </div>
  )
}
