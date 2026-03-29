"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
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
  X,
} from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// ---------------------------------------------------------------------------
// Data & Layout Mappings
// ---------------------------------------------------------------------------
// We map each "chaos" tool to its "clarity" (Nativo) equivalent to morph between them.
// 'pos' represents percentages relative to the center (0,0) of the container.

type Position = { x: number; y: number }

type NodeData = {
  id: string
  chaos: {
    icon: any
    label: string
    sub: string
    color: string
    pos: Position // Desktop
    mobilePos: Position // Mobile
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
      pos: { x: -35, y: -25 },
      mobilePos: { x: -25, y: -38 },
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
      pos: { x: -22, y: 35 },
      mobilePos: { x: -20, y: 38 },
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
      pos: { x: 0, y: -40 },
      mobilePos: { x: 0, y: -45 },
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
      pos: { x: 18, y: 28 },
      mobilePos: { x: 20, y: 40 },
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
      pos: { x: 38, y: -20 },
      mobilePos: { x: 25, y: -35 },
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
      pos: { x: 30, y: 38 },
      mobilePos: { x: 28, y: 30 },
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

// Chaos links are pairs of node indexes to draw the tangled web
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

export function HeroChaosClarity() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // If not mounted, we can render a generic static placeholder or just the desktop layout
  // But wait, to avoid ANY hydration mismatch, we must render exactly what the server renders.
  // We will let it render the desktop version on SSR, and layout animations will fix it.

  return (
    <section ref={ref} id="hero-chaos-clarity" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* ── Section header with staggered reveal ── */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {/* Line 1: "Deja atrás el caos" */}
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={{
                  hidden: prefersReduced ? {} : { y: "100%", opacity: 0 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                Deja atrás{" "}
                <span className="relative inline-block">
                  el caos
                  {/* Animated brush stroke underline */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 8.5C30 3 60 2 100 5.5C140 9 170 4 198 7"
                      stroke="url(#brush-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <defs>
                      <linearGradient id="brush-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f43f5e" stopOpacity="0.7" />
                        <stop offset="1" stopColor="#e11d48" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.span>
            </span>
            {/* Line 2: "de las múltiples herramientas" */}
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={{
                  hidden: prefersReduced ? {} : { y: "100%", opacity: 0 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                de las múltiples herramientas
              </motion.span>
            </span>
          </h2>

          {/* Subtitle cascades in as the last staggered child */}
          <span className="block overflow-hidden">
            <motion.p
              className="text-slate-600 max-w-2xl mx-auto text-lg"
              variants={{
                hidden: prefersReduced ? {} : { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Descubre cómo se ve tu empresa cuando pasas de decenas de suscripciones dispersas a{" "}
              un solo ecosistema unificado.
            </motion.p>
          </span>
        </motion.div>

        {/* ── Tabs selector ── */}
        <motion.div
          className="flex justify-center mb-8 lg:mb-12 relative z-20"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex bg-slate-200/60 p-1.5 rounded-full border border-slate-300 shadow-sm backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("without")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "without"
                  ? "bg-white text-rose-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              aria-selected={activeTab === "without"}
              role="tab"
            >
              Sin Nativo
              {activeTab === "without" && (
                <motion.div
                  layoutId="tabTarget"
                  className="absolute inset-0 rounded-full border border-rose-100"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("with")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "with"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
              }`}
              aria-selected={activeTab === "with"}
              role="tab"
            >
              Con 1NativoOne
              {activeTab === "with" && (
                <motion.div
                  layoutId="tabTarget"
                  className="absolute inset-0 rounded-full border border-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* ── Interactive Canvas ── */}
        <div className="relative w-full h-[550px] sm:h-[600px] lg:h-[700px] rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden mx-auto">
          
          {/* Background grid texture for extra depth */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* SVG Lines Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Chaos web lines */}
            <AnimatePresence>
              {activeTab === "without" && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
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
              )}
            </AnimatePresence>

            {/* Clarity neat lines & pulses */}
            <AnimatePresence>
              {activeTab === "with" && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {NODES.map((node, i) => {
                    const posX = isMobile ? node.clarity.mobilePos.x : node.clarity.pos.x
                    const posY = isMobile ? node.clarity.mobilePos.y : node.clarity.pos.y
                    return (
                      <g key={`clarity-line-${i}`}>
                        {/* Static connecting line */}
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${posX}%)`}
                          y2={`calc(50% + ${posY}%)`}
                          className="stroke-primary/20"
                          strokeWidth="2"
                        />
                        {/* Animated glowing pulse */}
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${posX}%)`}
                          y2={`calc(50% + ${posY}%)`}
                          className="stroke-primary drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                          strokeWidth="3"
                          strokeDasharray="25 200"
                          // Flowing outward logic based on coordinates
                          animate={{ strokeDashoffset: [225, 0] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2, // Stagger pulses slightly
                          }}
                        />
                      </g>
                    )
                  })}
                </motion.g>
              )}
            </AnimatePresence>
          </svg>

          {/* Central Hub (1NativoOne) -> Appears only in 'with' tab */}
          <AnimatePresence>
            {activeTab === "with" && (
              <motion.div
                className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Hub animated glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-primary bg-primary/5"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-primary rounded-3xl shadow-2xl shadow-primary/40 flex flex-col items-center justify-center gap-1 border border-blue-400/30 overflow-hidden">
                  {/* Internal glare effect */}
                  <div className="absolute top-0 right-0 left-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                  
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wider opacity-90">
                    SISTEMA
                  </span>
                  <span className="text-white text-xl sm:text-2xl font-black tracking-tight leading-none text-center px-2">
                    1Nativo<br/>One
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Nodes */}
          {NODES.map((node) => {
            const isChaos = activeTab === "without"
            
            const targetPos = isChaos
              ? (isMobile ? node.chaos.mobilePos : node.chaos.pos)
              : (isMobile ? node.clarity.mobilePos : node.clarity.pos)

            const rotate = isChaos ? node.chaos.rotate : 0

            return (
              <motion.div
                key={node.id}
                layout // Crucial for smoothly morphing position and size!
                className="absolute z-20"
                initial={false}
                animate={{
                  left: `calc(50% + ${targetPos.x}%)`,
                  top: `calc(50% + ${targetPos.y}%)`,
                  rotate: rotate,
                  x: "-50%",
                  y: "-50%",
                }}
                transition={{
                  layout: { type: "spring", stiffness: 120, damping: 20 },
                  rotate: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                {/* Node Container */}
                <div
                  className={`
                    w-[130px] sm:w-[150px] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border bg-white shadow-lg transition-colors overflow-hidden
                    ${isChaos ? 'border-slate-200' : 'border-primary/20'}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {/* Chaos Content */}
                    {isChaos && (
                      <motion.div
                        key="chaos-content"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2 relative"
                      >
                        {/* Error Alert Dot */}
                        <div className="absolute top-0 right-0 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                        </div>

                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${node.chaos.color.split(' ')[0]} ${node.chaos.color.split(' ')[1]}`}>
                          <node.chaos.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                            {node.chaos.label}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5 pointer-events-none truncate">
                            {node.chaos.sub}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Clarity Content */}
                    {!isChaos && (
                      <motion.div
                        key="clarity-content"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2 relative"
                      >
                        <div className="absolute top-0 right-0 flex h-4 w-4 rounded-full bg-emerald-100 items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        </div>

                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                          <node.clarity.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                            {node.clarity.label}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {node.clarity.sub}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle continuous float animation if resting in Chaos */}
                {isChaos && (
                  <motion.div
                    className="absolute inset-0 z-[-1]"
                    animate={{ x: [0, 3, -3, 0], y: [0, -4, 4, 0] }}
                    transition={{
                      duration: Math.random() * 3 + 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
