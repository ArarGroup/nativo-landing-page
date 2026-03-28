"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MotionSection } from "@/components/motion-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar NativoOne?",
    answer:
      "El tiempo de implementación varía según el tamaño de su empresa y los módulos seleccionados. Típicamente, una implementación básica puede completarse en 4-6 semanas, mientras que una implementación completa puede tomar 2-3 meses. Nuestro equipo trabaja con usted para crear un plan de implementación detallado que minimice las interrupciones en su operación.",
  },
  {
    question: "¿Cómo se manejan las actualizaciones fiscales?",
    answer:
      "NativoOne se mantiene constantemente actualizado con los cambios en la normativa fiscal colombiana. Proporcionamos actualizaciones automáticas que incluyen requisitos de facturación electrónica, catálogos y validaciones ante la DIAN cuando apliquen a su operación. Nuestro equipo monitorea los cambios regulatorios para ayudarle a mantener sus procesos alineados con el marco vigente.",
  },
  {
    question: "¿Puedo acceder a NativoOne desde dispositivos móviles?",
    answer:
      "Sí, NativoOne ofrece acceso móvil a través de aplicaciones nativas para iOS y Android, así como una interfaz web responsiva. Esto permite a los usuarios acceder a información crítica, aprobar transacciones y monitorear KPIs desde cualquier lugar y en cualquier momento.",
  },
  {
    question: "¿Qué tipo de soporte técnico ofrecen?",
    answer:
      "Ofrecemos múltiples niveles de soporte técnico según el plan contratado. Todos los planes incluyen soporte por correo electrónico y portal de clientes. Los planes Profesional y Empresarial incluyen soporte telefónico y tiempos de respuesta garantizados. El plan Empresarial incluye además un gerente de cuenta dedicado y soporte 24/7.",
  },
  {
    question: "¿Es posible personalizar NativoOne para necesidades específicas?",
    answer:
      "Absolutamente. NativoOne está diseñado con una arquitectura flexible que permite personalizaciones para adaptarse a sus procesos específicos. Podemos crear campos personalizados, flujos de trabajo, reportes y hasta módulos completos según sus necesidades. Nuestro equipo de consultores trabaja con usted para entender sus requerimientos y configurar el sistema de manera óptima.",
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] } },
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  return (
    <section id="faq" className="scroll-mt-28 w-full max-w-4xl mx-auto py-16 px-4">
      <MotionSection className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Preguntas frecuentes</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Respuestas sobre implementación, fiscalidad, movilidad y soporte.
        </p>
      </MotionSection>

      <motion.div
        ref={ref}
        variants={prefersReduced ? undefined : containerVariants}
        initial={prefersReduced ? undefined : "hidden"}
        animate={prefersReduced ? undefined : isInView ? "show" : "hidden"}
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={prefersReduced ? undefined : itemVariants}
            >
              <AccordionItem
                className="border rounded-lg px-6 py-2"
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-gray-700 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
