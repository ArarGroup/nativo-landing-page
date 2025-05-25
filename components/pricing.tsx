"use client"

import { useState } from "react"
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

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
  }

  const plans = [
    {
      name: "Inicial",
      description: "Perfecto para pequeñas empresas que empiezan con ERP.",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Hasta 5 usuarios",
        "Gestión financiera básica",
        "Seguimiento de inventario básico",
        "Informes estándar",
        "Soporte por correo electrónico",
      ],
      cta: "Comenzar prueba gratuita",
      popular: false,
    },
    {
      name: "Profesional",
      description: "Ideal para empresas en crecimiento con necesidades avanzadas.",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Hasta 20 usuarios",
        "Gestión financiera avanzada",
        "Control de inventario completo",
        "Informes personalizados",
        "Soporte prioritario",
        "Acceso a API",
        "Automatización de flujos de trabajo",
      ],
      cta: "Comenzar prueba gratuita",
      popular: true,
    },
    {
      name: "Empresarial",
      description: "Para organizaciones grandes que requieren máxima escalabilidad.",
      monthlyPrice: 399,
      annualPrice: 319,
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
      cta: "Contactar ventas",
      popular: false,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">
            Precios simples y transparentes
          </h2>
          <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio. Todos los planes
            incluyen una prueba gratuita de 14 días.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm ${billingCycle === "monthly" ? "font-medium" : "text-slate-600"}`}
            >
              Facturación mensual
            </span>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={toggleBilling}
            />
            <span
              className={`text-sm ${billingCycle === "annual" ? "font-medium" : "text-slate-600"}`}
            >
              Facturación anual
            </span>
          </div>
          {billingCycle === "annual" && (
            <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
              Ahorra un 20%
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border ${
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
                  <span className="text-4xl font-bold">
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-2xl text-slate-600 ml-1">k</span>
                  </span>

                  <span className="text-slate-600 ml-1">/ mes</span>
                  {billingCycle === "annual" && (
                    <div className="text-sm text-slate-600 mt-1">Facturado anual</div>
                  )}
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
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center mt-10 text-slate-600 text-sm">
          <Link href="/contact" className="text-primary">
            Contacte
          </Link>{" "}
          a nuestro equipo de ventas para un plan personalizado adaptado a sus requisitos
          empresariales específicos.
        </p>
      </div>
    </section>
  )
}
