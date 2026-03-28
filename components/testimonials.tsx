"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MotionSection } from "@/components/motion-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const testimonials = [
  {
    quote:
      "NativoOne transformó nuestra gestión financiera. Ahora tenemos visibilidad total de nuestras operaciones y hemos reducido el tiempo de cierre contable en un 60%.",
    author: "María Rodríguez",
    position: "Directora Financiera",
    company: "Grupo Comercial XYZ",
  },
  {
    quote:
      "La implementación fue sorprendentemente rápida y el soporte es excepcional. El módulo de facturación electrónica nos ha ahorrado innumerables horas de trabajo.",
    author: "Carlos Méndez",
    position: "Gerente de Contabilidad",
    company: "Industrias Tecnológicas",
  },
  {
    quote:
      "Después de probar varios sistemas, NativoOne es el único que realmente entiende las necesidades fiscales de Colombia. Las actualizaciones constantes nos mantienen siempre en cumplimiento.",
    author: "Laura Sánchez",
    position: "Contadora General",
    company: "Distribuidora Nacional",
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } },
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="mb-2">Testimonios</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Empresas de diversos sectores han transformado su operación con NativoOne.
          </p>
        </MotionSection>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={prefersReduced ? undefined : cardVariants}
              whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center bg-background/50 border h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={`/placeholder.svg?height=64&width=64&text=Avatar`}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
