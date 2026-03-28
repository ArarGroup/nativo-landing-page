"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  TrendingUp,
  FileCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// ---------------------------------------------------------------------------
// Count-up hook
// ---------------------------------------------------------------------------
function useCountUp(end: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let id: number
    let start: number | null = null

    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      setCount(Math.floor(eased * end))
      if (progress < 1) id = requestAnimationFrame(step)
    }

    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [end, duration, active])

  return count
}

// ---------------------------------------------------------------------------
// Chart geometry
// ---------------------------------------------------------------------------
const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
const VALUES = [45, 52, 48, 61, 58, 72, 69, 84, 90, 87, 98, 115]
const W = 500
const H = 140
const PAD_V = 16

function buildPath() {
  const min = Math.min(...VALUES)
  const max = Math.max(...VALUES)
  const toY = (v: number) => H - PAD_V - ((v - min) / (max - min)) * (H - PAD_V * 2)
  const pts = VALUES.map((v, i) => ({ x: (i / (VALUES.length - 1)) * W, y: toY(v) }))

  let line = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`
  for (let i = 1; i < pts.length; i++) {
    const cpx = ((pts[i - 1].x + pts[i].x) / 2).toFixed(2)
    line += ` C ${cpx} ${pts[i - 1].y.toFixed(2)} ${cpx} ${pts[i].y.toFixed(2)} ${pts[i].x.toFixed(2)} ${pts[i].y.toFixed(2)}`
  }
  const area = `${line} L ${W} ${H} L 0 ${H} Z`
  return { line, area }
}

const { line: LINE_PATH, area: AREA_PATH } = buildPath()

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------
interface StatCardProps {
  label: string
  icon: React.ElementType
  end: number
  suffix?: string
  note: string
  delay: number
  active: boolean
  prefersReduced: boolean
  extra?: React.ReactNode
}

function StatCard({ label, icon: Icon, end, suffix = "", note, delay, active, prefersReduced, extra }: StatCardProps) {
  const count = useCountUp(end, 1400, active && !prefersReduced)
  const display = prefersReduced ? end : count

  return (
    <motion.div
      className="rounded-xl border border-border bg-background p-4 space-y-2"
      initial={prefersReduced ? undefined : { opacity: 0, y: 14 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <p className="text-2xl font-bold tabular-nums leading-none">
        {display.toLocaleString("es-CO")}
        {suffix}
      </p>
      {extra}
      <p className="text-xs text-emerald-600 font-medium">{note}</p>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function HeroDashboard() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()
  const animate = isInView && !prefersReduced

  return (
    <section
      ref={ref}
      id="hero-dashboard"
      className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container">
        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-12"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Panel de control en vivo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Así se ve operar con{" "}
            <span className="text-primary">datos unificados</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Cuando finanzas, inventario y facturación comparten la misma fuente de verdad, los
            números hablan solos.
          </p>
        </motion.div>

        {/* ── Browser mockup card ── */}
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          initial={prefersReduced ? undefined : { opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/40">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-background/80 border border-border rounded-full px-4 py-1 text-xs text-muted-foreground max-w-[220px] w-full text-center select-none">
                app.1nativoone.com
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-5 md:p-8 space-y-5">
            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                label="Facturas emitidas"
                icon={FileCheck}
                end={1247}
                note="↑ 18% vs. mes anterior"
                delay={0.25}
                active={isInView}
                prefersReduced={prefersReduced}
              />
              <StatCard
                label="Cumplimiento DIAN"
                icon={CheckCircle2}
                end={99}
                suffix="%"
                note="100% en últimos 3 períodos"
                delay={0.35}
                active={isInView}
                prefersReduced={prefersReduced}
                extra={
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden" role="progressbar" aria-valuenow={99} aria-valuemin={0} aria-valuemax={100}>
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={animate ? { width: "99%" } : {}}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.65 }}
                    />
                  </div>
                }
              />
              <StatCard
                label="Cierre mensual"
                icon={Clock}
                end={3}
                suffix=" días"
                note="Sector promedio: 12 días"
                delay={0.45}
                active={isInView}
                prefersReduced={prefersReduced}
              />
            </div>

            {/* Revenue chart */}
            <motion.div
              className="rounded-xl border border-border bg-background p-4 md:p-5"
              initial={prefersReduced ? undefined : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-sm font-semibold leading-tight">Ingresos mensuales</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Último año fiscal · COP millones
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
                  <TrendingUp className="h-3 w-3" aria-hidden="true" />
                  +156% anual
                </span>
              </div>

              <div className="w-full h-28 md:h-32">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  aria-label="Gráfico de ingresos mensuales mostrando tendencia alcista del último año fiscal"
                  role="img"
                >
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1F98EA" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#1F98EA" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <motion.path
                    d={AREA_PATH}
                    fill="url(#areaGrad)"
                    initial={{ opacity: 0 }}
                    animate={animate ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  />

                  {/* Line */}
                  <motion.path
                    d={LINE_PATH}
                    fill="none"
                    stroke="#1F98EA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={animate ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.6 }}
                  />
                </svg>
              </div>

              <div className="flex justify-between mt-1.5" aria-hidden="true">
                {MONTHS.map((m) => (
                  <span key={m} className="text-[10px] text-muted-foreground leading-none">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Estado del sistema">
              {[
                { label: "Sincronización DIAN activa", ok: true },
                { label: "Backup automático", ok: true },
                { label: "Módulo nómina activo", ok: true },
                { label: "2 integraciones pendientes", ok: false },
              ].map(({ label, ok }, i) => (
                <motion.span
                  key={label}
                  role="listitem"
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${
                    ok
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                      : "bg-amber-50 border-amber-200 text-amber-700"
                  }`}
                  initial={prefersReduced ? undefined : { opacity: 0, scale: 0.88 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.07, duration: 0.3 }}
                >
                  {ok ? (
                    <CheckCircle2 className="h-3 w-3 shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                  )}
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
