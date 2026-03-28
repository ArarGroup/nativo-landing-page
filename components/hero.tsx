"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HeroP5Background } from "@/components/hero-p5-background"
import { HeroActions } from "@/components/hero-actions"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const prefersReduced = useReducedMotion()

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        }

  const fadeRight = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease, delay },
        }

  return (
    <div className="relative overflow-hidden">
      <HeroP5Background color="#1F98EA" secondaryColor="#0098EA" />

      <div className="absolute inset-0 bg-gradient-to-bl from-background/10 via-background/40 to-background" />

      <section id="hero" className="container relative md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center py-20 md:py-32">
          <div className="flex lg:col-span-3 flex-col max-w-3xl">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance"
              {...fadeUp(0.1)}
            >
              <span className="text-primary">ERP integral</span> para operar con claridad fiscal y
              datos unificados
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-prose leading-relaxed"
              {...fadeUp(0.3)}
            >
              Unifique finanzas, inventario y facturación en un solo sistema. Menos fricción entre
              contabilidad y operación, con visibilidad para decidir —pensado para empresas que
              conviven con normativa dinámica en Colombia.
            </motion.p>

            <motion.div {...fadeUp(0.5)}>
              <HeroActions />
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:col-span-2 lg:justify-end"
            {...fadeRight(0.2)}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
