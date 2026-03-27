import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"

export function ProblemSolution() {
  return (
    <section id="challenge" className="scroll-mt-28 py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Cuando la operación y la fiscalidad no conversan, la empresa pierde control
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Datos duplicados, cierres largos y sorpresas en facturación son síntomas de herramientas
            desconectadas — especialmente bajo normativa que cambia con frecuencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive font-semibold mb-4">
              <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
              Riesgos habituales
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>Información financiera y operativa en silos distintos.</li>
              <li>Tiempo del equipo en conciliaciones manuales en lugar de decidir.</li>
              <li>Mayor exposición a errores en facturación electrónica y reporteo cuando no hay un flujo único.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
              Cómo NativoOne encaja
            </div>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li>Un ERP integral que concentra procesos y datos en una sola base coherente.</li>
              <li>Flujos de facturación y fiscalidad alineados con lo que tu negocio ya opera.</li>
              <li>Visibilidad con reportes e indicadores para CFO, operaciones y contabilidad.</li>
            </ul>
            <Button asChild className="group">
              <Link href="#contact">
                Hablar con el equipo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
