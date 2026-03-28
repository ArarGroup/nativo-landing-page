"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calculator, BookOpen } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function AudienceSections() {
  const prefersReduced = useReducedMotion()

  return (
    <>
      <section
        id="accountants"
        className="scroll-mt-28 py-16 md:py-20 bg-slate-50 border-y border-slate-100"
      >
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <MotionSection className="flex flex-col md:flex-row md:items-start gap-8">
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={prefersReduced ? undefined : { scale: 1.08, rotate: -3 }}
              transition={{ duration: 0.25 }}
            >
              <Calculator className="h-7 w-7" aria-hidden />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Para contadores y firmas que centralizan a sus clientes
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Menos ida y vuelta por archivos inconsistentes: un entorno donde la empresa
                registra operaciones con criterio contable y usted recupera tiempo para asesoría y
                cumplimiento. Ideal cuando necesitan visibilidad sin sustituir su criterio
                profesional.
              </p>
              <Button variant="outline" asChild>
                <Link href="#contact">Solicitar enfoque para despachos</Link>
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      <section id="resources" className="scroll-mt-28 py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <MotionSection className="flex flex-col md:flex-row md:items-start gap-8">
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={prefersReduced ? undefined : { scale: 1.08, rotate: -3 }}
              transition={{ duration: 0.25 }}
            >
              <BookOpen className="h-7 w-7" aria-hidden />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Recursos y siguiente paso
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La mejor fuente de respuestas técnicas y de producto hoy es el equipo: revise las{" "}
                <Link href="#faq" className="text-primary font-medium underline-offset-4 hover:underline">
                  preguntas frecuentes
                </Link>{" "}
                o escríbanos para una conversación orientada a su sector y tamaño.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" asChild>
                  <Link href="#faq">Ver preguntas frecuentes</Link>
                </Button>
                <Button asChild>
                  <Link href="#contact">Agendar contacto</Link>
                </Button>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  )
}
