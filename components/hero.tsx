"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileSpreadsheet,
  Mail,
  MessageSquare,
  Calculator,
  Globe,
  Database,
  CheckCircle2,
  BarChart3,
  FileText,
  ShoppingCart,
  Users,
  Shield,
  Zap,
  Package,
  TrendingUp,
} from "lucide-react"
import { HeroP5Background } from "@/components/hero-p5-background"
import { HeroActions } from "@/components/hero-actions"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const ease = [0.22, 1, 0.36, 1] as const

// ---------------------------------------------------------------------------
// Canvas Data
// ---------------------------------------------------------------------------

type Position = { x: number; y: number }

type NodeData = {
  id: string
  chaos: {
    icon: any
    label: string
    sub: string
    color: string
    pos: Position
    mobilePos: Position
    rotate: number
  }
  clarity: {
    icon: any
    label: string
    sub: string
    pos: Position
    mobilePos: Position
  }
}

const NODES: NodeData[] = [
  {
    id: "node-1",
    chaos: {
      icon: FileSpreadsheet,
      label: "Excel",
      sub: "Manual",
      color: "bg-green-100 text-green-700 border-green-200",
      pos: { x: -25, y: -18 },
      mobilePos: { x: -20, y: -18 },
      rotate: -6,
    },
    clarity: {
      icon: ShoppingCart,
      label: "Inventario",
      sub: "Real-time",
      pos: { x: -32, y: -25 },
      mobilePos: { x: -28, y: -32 },
    },
  },
  {
    id: "node-2",
    chaos: {
      icon: Mail,
      label: "Email",
      sub: "Desorden",
      color: "bg-sky-100 text-sky-700 border-sky-200",
      pos: { x: -22, y: 28 },
      mobilePos: { x: -18, y: 28 },
      rotate: 8,
    },
    clarity: {
      icon: BarChart3,
      label: "Finanzas",
      sub: "Métricas",
      pos: { x: -40, y: 0 },
      mobilePos: { x: -35, y: 0 },
    },
  },
  {
    id: "node-3",
    chaos: {
      icon: MessageSquare,
      label: "WhatsApp",
      sub: "Sin control",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
      pos: { x: 2, y: -31 },
      mobilePos: { x: 2, y: -30 },
      rotate: -4,
    },
    clarity: {
      icon: Users,
      label: "CRM",
      sub: "Embudos",
      pos: { x: -32, y: 25 },
      mobilePos: { x: -28, y: 32 },
    },
  },
  {
    id: "node-4",
    chaos: {
      icon: Users,
      label: "CRM Externo",
      sub: "Aislado",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      pos: { x: -8, y: 2 },
      mobilePos: { x: -6, y: 2 },
      rotate: 5,
    },
    clarity: {
      icon: Database,
      label: "Reportes",
      sub: "Decisiones",
      pos: { x: 32, y: -25 },
      mobilePos: { x: 28, y: -32 },
    },
  },
  {
    id: "node-5",
    chaos: {
      icon: Globe,
      label: "Portal DIAN",
      sub: "Engorroso",
      color: "bg-violet-100 text-violet-700 border-violet-200",
      pos: { x: 26, y: -14 },
      mobilePos: { x: 21, y: -14 },
      rotate: -8,
    },
    clarity: {
      icon: FileText,
      label: "Facturación",
      sub: "Automática",
      pos: { x: 40, y: 0 },
      mobilePos: { x: 35, y: 0 },
    },
  },
  {
    id: "node-6",
    chaos: {
      icon: Calculator,
      label: "Facturador",
      sub: "Pago extra",
      color: "bg-rose-100 text-rose-700 border-rose-200",
      pos: { x: 24, y: 30 },
      mobilePos: { x: 20, y: 30 },
      rotate: 6,
    },
    clarity: {
      icon: Shield,
      label: "Seguridad",
      sub: "Confiable",
      pos: { x: 32, y: 25 },
      mobilePos: { x: 28, y: 32 },
    },
  },
]

const CHAOS_LINKS = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [2, 5],
  [1, 4],
  [0, 4],
]

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export function Hero() {
  const prefersReduced = useReducedMotion()
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setActiveTab("with"), 5000)
    return () => clearTimeout(timer)
  }, [])

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

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  icon: Zap,
                  label: "Facturación electrónica DIAN",
                  delay: 0.25,
                },
                {
                  icon: BarChart3,
                  label: "Contabilidad sin fricciones",
                  delay: 0.35,
                },
                {
                  icon: Package,
                  label: "Inventario en tiempo real",
                  delay: 0.45,
                },
                {
                  icon: Shield,
                  label: "Cumplimiento normativo Colombia",
                  delay: 0.55,
                },
              ].map(({ icon: Icon, label, delay }) =>
                prefersReduced ? (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl px-3 py-2 shadow-sm w-fit`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 whitespace-nowrap">{label}</span>
                  </div>
                ) : (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease, delay }}
                    className={`flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl px-3 py-2 shadow-sm w-fit`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 whitespace-nowrap">{label}</span>
                  </motion.div>
                )
              )}
            </div>

            <motion.div {...fadeUp(0.5)}>
              <HeroActions />
            </motion.div>
          </div>

          {/* Interactive Canvas */}
          <motion.div
            className="relative flex flex-col gap-4 justify-center lg:col-span-2"
            {...fadeRight(0.2)}
          >
            {/* Tabs */}
            <div className="flex justify-center">
              <div className="flex bg-slate-200/60 p-1.5 rounded-full border border-slate-300 shadow-sm backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("without")}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === "without"
                    ? "bg-white text-rose-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                  aria-selected={activeTab === "without"}
                  role="tab"
                >
                  Sin Nativo
                  {activeTab === "without" && (
                    <motion.div
                      layoutId="heroTabTarget"
                      className="absolute inset-0 rounded-full border border-rose-100"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("with")}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === "with"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                    }`}
                  aria-selected={activeTab === "with"}
                  role="tab"
                >
                  Con 1NativoOne
                  {activeTab === "with" && (
                    <motion.div
                      layoutId="heroTabTarget"
                      className="absolute inset-0 rounded-full border border-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative w-full h-[420px] sm:h-[460px] rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <AnimatePresence mode="wait">
                {/* ── Chaos view ── */}
                {activeTab === "without" && (
                  <motion.div
                    key="chaos"
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Tangled SVG lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        {CHAOS_LINKS.map(([n1, n2], i) => (
                          <motion.line
                            key={`chaos-line-${i}`}
                            x1={`calc(50% + ${isMobile ? NODES[n1].chaos.mobilePos.x : NODES[n1].chaos.pos.x}%)`}
                            y1={`calc(50% + ${isMobile ? NODES[n1].chaos.mobilePos.y : NODES[n1].chaos.pos.y}%)`}
                            x2={`calc(50% + ${isMobile ? NODES[n2].chaos.mobilePos.x : NODES[n2].chaos.pos.x}%)`}
                            y2={`calc(50% + ${isMobile ? NODES[n2].chaos.mobilePos.y : NODES[n2].chaos.pos.y}%)`}
                            className="stroke-slate-300/60"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        ))}
                      </motion.g>
                    </svg>

                    {/* Chaos floating nodes */}
                    {NODES.map((node) => (
                      <motion.div
                        key={node.id}
                        className="absolute z-20"
                        style={{
                          left: `calc(50% + ${isMobile ? node.chaos.mobilePos.x : node.chaos.pos.x}%)`,
                          top: `calc(50% + ${isMobile ? node.chaos.mobilePos.y : node.chaos.pos.y}%)`,
                          x: "-50%",
                          y: "-50%",
                          rotate: node.chaos.rotate,
                        }}
                      >
                        <div className="w-[148px] sm:w-[165px] p-3 sm:p-3.5 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                          <div className="flex flex-col gap-2 relative">
                            <div className="absolute top-0 right-0 flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
                            </div>
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${node.chaos.color.split(" ")[0]} ${node.chaos.color.split(" ")[1]}`}>
                              <node.chaos.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800 leading-tight">{node.chaos.label}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{node.chaos.sub}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ── Clarity dashboard view ── */}
                {activeTab === "with" && (
                  <motion.div
                    key="clarity"
                    className="absolute inset-0 flex flex-col"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease }}
                  >
                    {/* Header */}
                    <div className="shrink-0 flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50/80">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center shrink-0">
                          <span className="text-white text-[9px] font-black leading-none">1N</span>
                        </div>
                        <span className="text-xs font-bold text-slate-800 tracking-tight">1NativoOne</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] text-emerald-600 font-semibold">Sistema conectado</span>
                      </div>
                    </div>

                    {/* Hub-and-spoke layout */}
                    <div className="flex-1 relative overflow-hidden">
                      {/* SVG connecting lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                          <linearGradient id="flowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient id="flowRight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Left module lines → hub */}
                        {([15, 50, 85] as const).map((yPct, i) => (
                          <g key={`ll-${i}`}>
                            <line x1="39%" y1={`${yPct}%`} x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1.5" />
                            <motion.line
                              x1="39%" y1={`${yPct}%`} x2="50%" y2="50%"
                              stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"
                              strokeDasharray="18 200"
                              animate={{ strokeDashoffset: [218, 0] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.35 }}
                            />
                          </g>
                        ))}

                        {/* Right module lines → hub */}
                        {([15, 50, 85] as const).map((yPct, i) => (
                          <g key={`rl-${i}`}>
                            <line x1="61%" y1={`${yPct}%`} x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1.5" />
                            <motion.line
                              x1="61%" y1={`${yPct}%`} x2="50%" y2="50%"
                              stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"
                              strokeDasharray="18 200"
                              animate={{ strokeDashoffset: [218, 0] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: (i + 3) * 0.35 }}
                            />
                          </g>
                        ))}
                      </svg>

                      {/* Central hub */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          className="absolute -inset-2 rounded-2xl border border-primary/30 bg-primary/5"
                          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="relative w-16 h-16 bg-primary rounded-2xl shadow-lg shadow-primary/30 flex flex-col items-center justify-center border border-blue-400/20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                          <span className="text-white text-[8px] font-semibold tracking-widest opacity-80">SISTEMA</span>
                          <span className="text-white text-[11px] font-black leading-tight text-center">1Nativo<br />One</span>
                        </div>
                      </div>

                      {/* Left modules (0–2) */}
                      {NODES.slice(0, 3).map((node, i) => (
                        <motion.div
                          key={node.id}
                          className="absolute left-[2%] z-10 flex items-center gap-2 bg-white rounded-xl border border-slate-100 px-2.5 py-2 shadow-sm"
                          style={{ top: `${[15, 50, 85][i]}%`, transform: "translateY(-50%)", width: "36%" }}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.08, ease }}
                        >
                          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <node.clarity.icon className="w-3 h-3 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-slate-800 leading-tight truncate">{node.clarity.label}</p>
                            <p className="text-[9px] text-emerald-600 font-medium leading-tight">{node.clarity.sub}</p>
                          </div>
                        </motion.div>
                      ))}

                      {/* Right modules (3–5) */}
                      {NODES.slice(3).map((node, i) => (
                        <motion.div
                          key={node.id}
                          className="absolute right-[2%] z-10 flex items-center gap-2 bg-white rounded-xl border border-slate-100 px-2.5 py-2 shadow-sm"
                          style={{ top: `${[15, 50, 85][i]}%`, transform: "translateY(-50%)", width: "36%" }}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (i + 3) * 0.08, ease }}
                        >
                          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <node.clarity.icon className="w-3 h-3 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-slate-800 leading-tight truncate">{node.clarity.label}</p>
                            <p className="text-[9px] text-emerald-600 font-medium leading-tight">{node.clarity.sub}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="shrink-0 px-4 py-2 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">6 módulos activos</span>
                      <div className="flex gap-1">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
