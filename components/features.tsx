"use client"

import { useRef } from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  DivideIcon as LucideIcon,
  Globe,
  FileText,
  Shield,
  BarChart3,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackCtaClick } from "@/lib/analytics"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export interface Feature {
  sectionId: string
  icon: typeof LucideIcon
  title: string
  description: string
  bulletPoints: string[]
  buttonText: string
  mainImage: {
    src: string
    alt: string
  }
  floatingImage: {
    src: string
    alt: string
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  }
  imageOnLeft: boolean
  bgColor: "white" | "gray"
}

export const features: Feature[] = [
  {
    sectionId: "solution",
    icon: Globe,
    title: "Una solución transversal para toda tu empresa",
    description: `Imagina todas las áreas conectadas en sincronía: finanzas, compras, inventario, ventas y atención al cliente sobre **la misma base de datos**, con procesos alineados y comunicación ágil entre equipos.`,
    bulletPoints: [
      "Módulos integrados por área sin duplicar información",
      "Sincronización operativa y controles por rol",
      "Flujos adaptables a cómo ya trabajan hoy",
    ],
    buttonText: "Solicitar una conversación",
    mainImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      alt: "Vista general del tablero de gestión",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      alt: "Indicadores analíticos",
      position: "bottom-right",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
  {
    sectionId: "invoice",
    icon: FileText,
    title: "Facturación electrónica alineada a tu operación",
    description:
      "Automatice la generación y seguimiento de comprobantes con flujos que conectan ventas, cobros y contabilidad — **menos trabajo manual** y trazabilidad clara desde el pedido hasta la factura electrónica validada.",
    bulletPoints: [
      "Emisión y seguimiento de facturas en flujo integrado",
      "Conciliación más simple entre ingresos y estados de cuenta",
      "Preparado para evolucionar con catálogos y reglas fiscales vigentes",
    ],
    buttonText: "Ver planes y contactar",
    mainImage: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2426",
      alt: "Proceso de facturación electrónica",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80&w=800",
      alt: "Vista previa de comprobante",
      position: "top-right",
    },
    imageOnLeft: true,
    bgColor: "gray",
  },
  {
    sectionId: "security",
    icon: Shield,
    title: "Seguridad y gobernanza de acceso",
    description:
      "Proteja datos sensibles con **controles por rol**, respaldo de información y buenas prácticas de acceso — imprescindible cuando finanzas y operación comparten el mismo sistema.",
    bulletPoints: [
      "Controles de acceso según responsabilidad",
      "Cifrado en tránsito y en reposo según arquitectura desplegada",
      "Copias de respaldo y continuidad acordes a tu plan",
    ],
    buttonText: "Consultar requisitos",
    mainImage: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2426",
      alt: "Controles de seguridad",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      alt: "Panel de seguridad",
      position: "top-left",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
  {
    sectionId: "reports",
    icon: BarChart3,
    title: "Reportes e indicadores para decidir",
    description:
      "Paneles e informes que reflejen **el mismo dato operativo y financiero** — ideal para cierres, auditoría interna y seguimiento de KPIs sin reconstruir reportes en hojas externas.",
    bulletPoints: [
      "Indicadores en tiempo casi real según módulos activos",
      "Reportes configurables por equipo",
      "Exportación para análisis externo cuando lo necesite",
    ],
    buttonText: "Hablar con ventas",
    mainImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426",
      alt: "Tablero de analítica",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
      alt: "Vista de reporte",
      position: "bottom-right",
    },
    imageOnLeft: true,
    bgColor: "gray",
  },
  {
    sectionId: "support",
    icon: Headphones,
    title: "Soporte según el plan que elija",
    description:
      "Acompañamiento por **correo, portal y, en planes superiores, canales prioritarios** — para que implementación y operación diaria no dependan solo de documentación estática.",
    bulletPoints: [
      "Soporte por correo en todos los planes",
      "Prioridad y tiempos de respuesta en planes Profesional y Empresarial",
      "Gerente de cuenta en el nivel Empresarial",
    ],
    buttonText: "Ir a contacto",
    mainImage: {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2426",
      alt: "Equipo de soporte",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800",
      alt: "Atención al cliente",
      position: "top-right",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
]

const bulletVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const bulletItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] } },
}

function FeatureSection({ feature }: { feature: Feature }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const prefersReduced = useReducedMotion()

  const textAnim = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, x: feature.imageOnLeft ? 40 : -40 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imageOnLeft ? 40 : -40 },
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
      }

  const imageAnim = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, x: feature.imageOnLeft ? -40 : 40 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imageOnLeft ? -40 : 40 },
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 },
      }

  const floatingImagePos = {
    "top-right": "-top-8 -right-8",
    "top-left": "-top-8 -left-8",
    "bottom-right": "-bottom-8 -right-8",
    "bottom-left": "-bottom-8 -left-8",
  }[feature.floatingImage.position]

  return (
    <section
      ref={ref}
      key={feature.sectionId}
      id={feature.sectionId}
      className={`scroll-mt-28 rounded-lg min-h-[85vh] md:min-h-screen flex items-center mx-4 sm:mx-6 lg:mx-8 lg:px-16 py-16 md:py-24 ${
        feature.bgColor === "white" ? "bg-white" : "bg-gray-50"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            feature.imageOnLeft ? "lg:grid-flow-col" : ""
          }`}
        >
          {feature.imageOnLeft && (
            <motion.div className="relative order-2 lg:order-none" {...imageAnim}>
              <motion.img
                src={feature.mainImage.src}
                alt={feature.mainImage.alt}
                className="rounded-lg shadow-2xl w-full"
                whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src={feature.floatingImage.src}
                alt={feature.floatingImage.alt}
                className={`absolute w-40 sm:w-48 rounded-lg shadow-xl border-4 border-white ${floatingImagePos}`}
              />
            </motion.div>
          )}

          <motion.div className="order-1" {...textAnim}>
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {feature.title}
              </h2>
              <div className="text-gray-600 mb-6 leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground">
                <ReactMarkdown>{feature.description}</ReactMarkdown>
              </div>
              <motion.ul
                className="space-y-2 mb-8 text-muted-foreground text-sm sm:text-base"
                variants={prefersReduced ? undefined : bulletVariants}
                initial={prefersReduced ? undefined : "hidden"}
                animate={prefersReduced ? undefined : isInView ? "show" : "hidden"}
              >
                {feature.bulletPoints.map((point) => (
                  <motion.li
                    key={point}
                    className="flex gap-2"
                    variants={prefersReduced ? undefined : bulletItemVariants}
                  >
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Button className="group" asChild>
                <Link
                  href="#contact"
                  onClick={() =>
                    trackCtaClick("feature_section", `${feature.sectionId}: ${feature.buttonText}`)
                  }
                >
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {!feature.imageOnLeft && (
            <motion.div className="relative order-2" {...imageAnim}>
              <motion.img
                src={feature.mainImage.src}
                alt={feature.mainImage.alt}
                className="rounded-lg shadow-2xl w-full"
                whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src={feature.floatingImage.src}
                alt={feature.floatingImage.alt}
                className={`absolute w-40 sm:w-48 rounded-lg shadow-xl border-4 border-white ${floatingImagePos}`}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <div>
      {features.map((feature) => (
        <FeatureSection key={feature.sectionId} feature={feature} />
      ))}
    </div>
  )
}
