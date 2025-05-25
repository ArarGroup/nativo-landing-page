import { Hero } from "@/components/hero"
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
      <Hero />
      <StickyTabs />
      <Features />
      <FAQ />
      <Pricing />
      <Contact />
      {/* <LogoCloud />
				<Features />
				<Experience />
				<Modules />
				<Testimonials />
				<Contact />
				 */}
    </div>
  )
}
