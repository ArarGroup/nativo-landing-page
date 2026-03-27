import Image from "next/image"
import { CanvasNetworkBackground } from "@/components/network-background"
import { HeroActions } from "@/components/hero-actions"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <CanvasNetworkBackground
        color="#1F98EA"
        secondaryColor="#0098EA"
        particleCount={50}
        flowDirection="diagonal-up"
        transversalFactor={0.3}
      />

      <div className="absolute inset-0 bg-gradient-to-bl from-background/10 via-background/40 to-background" />

      <section id="hero" className="container relative md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center py-20 md:py-32">
          <div className="flex lg:col-span-3 flex-col max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              <span className="text-primary">ERP integral</span> para operar con claridad fiscal y
              datos unificados
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed">
              Unifique finanzas, inventario y facturación en un solo sistema. Menos fricción entre
              contabilidad y operación, con visibilidad para decidir —pensado para empresas que
              conviven con normativa dinámica en Colombia.
            </p>

            <HeroActions />
          </div>

          <div className="relative flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative h-[320px] md:h-[400px] w-full max-w-md">
              <Image
                src="/frame_generic_light.png"
                alt="Interfaz del ERP 1NativoOne"
                fill
                className="object-contain drop-shadow-xl"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
