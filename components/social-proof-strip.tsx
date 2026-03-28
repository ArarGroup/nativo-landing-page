"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, RefreshCw, Headphones } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const signals = [
  {
    icon: Layers,
    title: "Un solo sistema",
    description: "Finanzas, inventario y operaciones conectados; menos hojas de cálculo fragmentadas.",
  },
  {
    icon: RefreshCw,
    title: "Listo para evolucionar contigo",
    description:
      "Enfoque en empresas que operan en Colombia: cambios fiscales frecuentes y necesidad de datos confiables.",
  },
  {
    icon: Headphones,
    title: "Soporte que habla tu idioma",
    description: "Acompañamiento por canales definidos según tu plan, desde correo hasta prioridad en planes superiores.",
  },
] as const

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] } },
}

export function SocialProofStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  return (
    <section id="social-proof" aria-label="Señales de confianza" className="border-y bg-slate-50/80">
      <div className="container px-4 md:px-6 py-10 md:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Por qué equipos administrativos evalúan NativoOne
        </p>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : isInView ? "show" : "hidden"}
        >
          {signals.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="flex gap-4"
              variants={prefersReduced ? undefined : itemVariants}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-1">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
