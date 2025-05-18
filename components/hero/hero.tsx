import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CanvasNetworkBackground } from "@/components/network-background"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Canvas Background */}
      <CanvasNetworkBackground
        color="#2D50A4"
        secondaryColor="#3255AA"
        particleCount={100}
        flowDirection="diagonal-down"
        transversalFactor={0.6}
        particleOpacity={0.5}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="container relative pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Innovative Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Empower your business with our cutting-edge platform. Streamline operations, boost
            productivity, and drive growth with our comprehensive suite of tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
