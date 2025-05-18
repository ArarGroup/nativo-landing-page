import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CanvasNetworkBackground } from "@/components/network-background"
import { ArrowRight } from "lucide-react"

export function HeroV2() {
  return (
    <div className="relative overflow-hidden">
      {/* Canvas Background */}
      <CanvasNetworkBackground
        color="#1F98EA"
        secondaryColor="#0098EA"
        particleCount={50}
        flowDirection="diagonal-up"
        transversalFactor={0.3}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background/10 via-background/40 to-background" />

      <section id="hero" className="container relative md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center py-20 md:py-32">
          {/* Content */}
          <div className="flex lg:col-span-3 flex-col max-w-3xl">
            {/* <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your <span className="text-primary">Business</span> Today
            </h1> */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Solucion <span className="text-primary">transversal</span> para empresas modernas
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Our platform provides the tools you need to streamline operations, enhance
              productivity, and drive sustainable growth in today's competitive landscape.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative h-[400px] w-full">
              <Image
                src="/frame_generic_light.png"
                alt="1Nativo one ERP System Interface"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-primary/10 backdrop-blur-sm border shadow-lg hidden md:block">
                <Image
                  src="/frame_generic_light.png"
                  alt="ERP Feature"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-primary/10 backdrop-blur-sm border shadow-lg hidden md:block">
                <Image
                  src="/frame_generic_light.png"
                  alt="ERP Feature"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
          </div>
        </div>
      </section>
    </div>
  )
}
