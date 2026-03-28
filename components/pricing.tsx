"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { trackCtaClick } from "@/lib/analytics"
import { MotionSection } from "@/components/motion-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

function formatCop(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount)
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } },
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReduced = useReducedMotion()

  const setAnnual = (annual: boolean) => {
    setBillingCycle(annual ? "annual" : "monthly")
  }

  const plans = [
    {
      name: "Inicial",
      description: "Perfecto para pequeñas empresas que empiezan con ERP.",
      monthlyPrice: 449_000,
      annualPrice: 359_000,
      features: [
        "Hasta 5 usuarios",
        "Gestión financiera básica",
        "Seguimiento de inventario básico",
        "Informes estándar",
        "Soporte por correo electrónico",
      ],
      cta: "Contáctanos",
      popular: false,
      href: "#contact" as const,
    },
    {
      name: "Profesional",
      description: "Ideal para empresas en crecimiento con necesidades avanzadas.",
      monthlyPrice: 899_000,
      annualPrice: 719_000,
      features: [
        "Hasta 20 usuarios",
        "Gestión financiera avanzada",
        "Control de inventario completo",
        "Informes personalizados",
        "Soporte prioritario",
        "Acceso a API",
        "Automatización de flujos de trabajo",
      ],
      cta: "Contáctanos",
      popular: true,
      href: "#contact" as const,
    },
    {
      name: "Empresarial",
      description: "Para organizaciones grandes que requieren máxima escalabilidad.",
      monthlyPrice: 1_749_000,
      annualPrice: 1_399_000,
      features: [
        "Usuarios ilimitados",
        "Suite financiera empresarial",
        "Inventario y almacenes avanzados",
        "Inteligencia empresarial",
        "Gestor de cuenta dedicado",
        "Integraciones personalizadas",
        "Opciones de marca blanca",
        "Soporte telefónico 24/7",
      ],
      cta: "Hablar con ventas",
      popular: false,
      href: "#contact" as const,
    },
  ]

  return (
    <section id="pricing" className="scroll-mt-28 py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <MotionSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">
            Precios simples y transparentes
          </h2>
          <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio. Coordinamos una{" "}
            <strong>demo orientada a su operación</strong>. ¿Condiciones fiscales o volumen especial?
            Revisa las{" "}
            <Link href="#faq" className="text-primary font-medium underline-offset-4 hover:underline">
              preguntas frecuentes
            </Link>{" "}
            o escríbenos.
          </p>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
            Cifras orientativas en <strong>pesos colombianos (COP) por mes</strong>, antes de IVA si
            aplica. Valídelas con ventas según su segmento y volumen.
          </p>
        </MotionSection>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm ${billingCycle === "monthly" ? "font-medium" : "text-slate-600"}`}
            >
              Facturación mensual
            </span>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={setAnnual}
            />
            <span
              className={`text-sm ${billingCycle === "annual" ? "font-medium" : "text-slate-600"}`}
            >
              Facturación anual
            </span>
          </div>
          <AnimatePresence>
            {billingCycle === "annual" && (
              <motion.span
                key="savings-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full"
              >
                Ahorra un 20%
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6"
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : isInView ? "show" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={prefersReduced ? undefined : cardVariants}
              whileHover={
                prefersReduced
                  ? undefined
                  : plan.popular
                  ? { y: -8, boxShadow: "0 20px 60px rgba(31,152,234,0.18)" }
                  : { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Card
                className={`border h-full ${
                  plan.popular ? "border-slate-200 shadow-lg relative" : "border-slate-200"
                } flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billingCycle + plan.name}
                        className="text-4xl font-bold tabular-nums"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                      >
                        {formatCop(billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice)}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-slate-600 ml-1">/ mes</span>
                    <AnimatePresence>
                      {billingCycle === "annual" && (
                        <motion.div
                          key="annual-label"
                          className="text-sm text-slate-600 mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          Facturado anualmente
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full min-h-11 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    asChild
                  >
                    <Link
                      href={plan.href}
                      onClick={() => trackCtaClick("pricing_card", `${plan.name}: ${plan.cta}`)}
                    >
                      {plan.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-10 text-slate-600 text-sm">
          <Link
            href="#contact"
            className="text-primary font-medium underline-offset-4 hover:underline"
            onClick={() => trackCtaClick("pricing_card", "footer_contacto_personalizado")}
          >
            Contacta
          </Link>{" "}
          a ventas para un plan personalizado según tus requisitos.
        </p>
      </div>
    </section>
  )
}
