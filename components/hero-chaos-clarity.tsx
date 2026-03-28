"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  FileSpreadsheet,
  Mail,
  MessageSquare,
  Calculator,
  Globe,
  Database,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  FileText,
  ShoppingCart,
  Users,
  Shield,
  X,
} from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const BEFORE_TOOLS = [
  {
    icon: FileSpreadsheet,
    label: "Excel inventario",
    sub: "Actualización manual",
    rotate: -2,
    color: "bg-green-950/60 border-green-700/50 text-green-300",
    badge: "bg-green-900/40 text-green-400",
  },
  {
    icon: Mail,
    label: "Cobros por email",
    sub: "Sin seguimiento",
    rotate: 1.5,
    color: "bg-sky-950/60 border-sky-700/50 text-sky-300",
    badge: "bg-sky-900/40 text-sky-400",
  },
  {
    icon: MessageSquare,
    label: "Ventas WhatsApp",
    sub: "Sin historial",
    rotate: -1,
    color: "bg-emerald-950/60 border-emerald-700/50 text-emerald-300",
    badge: "bg-emerald-900/40 text-emerald-400",
  },
  {
    icon: Calculator,
    label: "Software nómina",
    sub: "Datos aislados",
    rotate: 2,
    color: "bg-violet-950/60 border-violet-700/50 text-violet-300",
    badge: "bg-violet-900/40 text-violet-400",
  },
  {
    icon: Globe,
    label: "Portal DIAN manual",
    sub: "Errores frecuentes",
    rotate: -1.5,
    color: "bg-rose-950/60 border-rose-700/50 text-rose-300",
    badge: "bg-rose-900/40 text-rose-400",
  },
  {
    icon: Database,
    label: "Facturador externo",
    sub: "Sin integración",
    rotate: 1,
    color: "bg-orange-950/60 border-orange-700/50 text-orange-300",
    badge: "bg-orange-900/40 text-orange-400",
  },
]

const AFTER_MODULES = [
  { icon: BarChart3, label: "Finanzas" },
  { icon: ShoppingCart, label: "Inventario" },
  { icon: FileText, label: "Facturación DIAN" },
  { icon: Users, label: "CRM / Ventas" },
  { icon: Shield, label: "Seguridad" },
  { icon: Database, label: "Reportes" },
]

// Stagger chaos offsets — x, y pairs for entrance variety
const CHAOS_OFFSETS: [number, number][] = [
  [-24, -10],
  [20, -8],
  [-16, 6],
  [28, 4],
  [-20, 10],
  [16, -6],
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function HeroChaosClarity() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  return (
    <section
      ref={ref}
      id="hero-chaos-clarity"
      className="py-8 bg-background"
    >
      <div className="container">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-14"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Antes vs. con Nativo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Del caos de herramientas a{" "}
            <span className="text-primary">una sola plataforma</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            La mayoría de empresas colombianas operan con 6 o más herramientas desconectadas.
            Con 1NativoOne, todo convive en un solo lugar.
          </p>
        </motion.div>

        {/* ── Two-panel layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-0 items-stretch rounded-2xl overflow-hidden border border-border shadow-xl">
          {/* ── LEFT: Antes ── */}
          <div className="bg-slate-900 p-8 md:p-10 flex flex-col">
            {/* Panel label */}
            <motion.div
              className="mb-6"
              initial={prefersReduced ? undefined : { opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-rose-500/15 border border-rose-500/30 rounded-full px-3 py-1">
                <X className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
                <span className="text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  Antes de Nativo
                </span>
              </div>
            </motion.div>

            {/* Tool cards grid */}
            <div className="grid grid-cols-2 gap-3 flex-1" role="list" aria-label="Herramientas desconectadas">
              {BEFORE_TOOLS.map((tool, i) => {
                const [ox, oy] = CHAOS_OFFSETS[i]
                return (
                  <motion.div
                    key={tool.label}
                    role="listitem"
                    style={{ transform: `rotate(${tool.rotate}deg)` }}
                    className={`relative rounded-xl border p-3.5 flex flex-col gap-2 ${tool.color}`}
                    initial={
                      prefersReduced
                        ? undefined
                        : { opacity: 0, x: ox, y: oy, scale: 0.9 }
                    }
                    animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2 + i * 0.07,
                    }}
                  >
                    {/* Error badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center shadow-md" aria-hidden="true">
                      <X className="h-3 w-3 text-white" />
                    </div>
                    <tool.icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold leading-tight">{tool.label}</p>
                      <p className="text-[10px] opacity-60 mt-0.5">{tool.sub}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom label */}
            <motion.p
              className="mt-6 text-center text-sm text-rose-400 font-medium"
              initial={prefersReduced ? undefined : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.75, duration: 0.4 }}
            >
              6+ herramientas desconectadas · datos duplicados · errores costosos
            </motion.p>
          </div>

          {/* ── CENTER: Arrow divider ── */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-slate-900 px-2 py-10 min-w-[80px]">
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={prefersReduced ? {} : { x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-8 w-8 text-primary" aria-hidden="true" />
              </motion.div>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest writing-vertical-lr rotate-0 whitespace-nowrap">
                Un solo sistema
              </span>
            </motion.div>
          </div>

          {/* Mobile divider */}
          <div className="flex lg:hidden items-center justify-center gap-3 py-4 bg-muted/40 border-y border-border">
            <ArrowRight className="h-5 w-5 text-primary rotate-90" aria-hidden="true" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Un solo sistema
            </span>
            <ArrowRight className="h-5 w-5 text-primary rotate-90" aria-hidden="true" />
          </div>

          {/* ── RIGHT: Con Nativo ── */}
          <div className="bg-sky-50/60 p-8 md:p-10 flex flex-col">
            {/* Panel label */}
            <motion.div
              className="mb-6"
              initial={prefersReduced ? undefined : { opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Con 1NativoOne
                </span>
              </div>
            </motion.div>

            {/* Central hub */}
            <motion.div
              className="flex justify-center mb-5"
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer pulse ring */}
                <motion.div
                  className="absolute w-20 h-20 rounded-full border-2 border-primary/30"
                  animate={prefersReduced ? {} : { scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-[10px] font-bold text-white text-center leading-tight px-1">
                    1Nativo
                    <br />
                    One
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Module cards */}
            <div className="grid grid-cols-2 gap-3 flex-1" role="list" aria-label="Módulos integrados de 1NativoOne">
              {AFTER_MODULES.map((mod, i) => (
                <motion.div
                  key={mod.label}
                  role="listitem"
                  className="rounded-xl border border-primary/20 bg-white p-3.5 flex flex-col gap-2 shadow-sm"
                  initial={prefersReduced ? undefined : { opacity: 0, scale: 0.88, y: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.35 + i * 0.07,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <mod.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{mod.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom label */}
            <motion.p
              className="mt-6 text-center text-sm text-primary font-medium"
              initial={prefersReduced ? undefined : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Todo conectado · una sola verdad · cero duplicación
            </motion.p>
          </div>
        </div>

        {/* ── Bottom CTA nudge ── */}
        <motion.p
          className="mt-8 text-center text-muted-foreground text-sm"
          initial={prefersReduced ? undefined : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          ¿Reconoces el panel de la izquierda?{" "}
          <a
            href="#contact"
            className="text-primary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Conversemos sobre cómo simplificarlo.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
