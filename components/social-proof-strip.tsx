import { Layers, RefreshCw, Headphones } from "lucide-react"

const signals = [
  {
    icon: Layers,
    title: "Un solo sistema",
    description: "Finanzas, inventario y operaciones conectados; menos hojas de cálculo fragmentadas.",
  },
  {
    icon: RefreshCw,
    title: "Listo para evolucionar contigo",
    description:
      "Enfoque en empresas que operan en Colombia: cambios fiscales frecuentes y necesidad de datos confiables.",
  },
  {
    icon: Headphones,
    title: "Soporte que habla tu idioma",
    description: "Acompañamiento por canales definidos según tu plan, desde correo hasta prioridad en planes superiores.",
  },
] as const

export function SocialProofStrip() {
  return (
    <section aria-label="Señales de confianza" className="border-y bg-slate-50/80">
      <div className="container px-4 md:px-6 py-10 md:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Por qué equipos administrativos evalúan NativoOne
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {signals.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-1">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
