import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Features } from "@/components/features";
import { Experience } from "@/components/experience";
import { Modules } from "@/components/modules";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main>
				<Hero />
				<LogoCloud />
				<Features />
				<Experience />
				<Modules />
				<Pricing />
				<Testimonials />
				<Contact />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}
