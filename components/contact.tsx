import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const contactBenefits = [
  "Demostración personalizada según sus necesidades",
  "Análisis de su situación actual",
  "Propuesta de implementación a medida",
  "Consultoría inicial sin costo",
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 hover:bg-white/20 text-white">Comience Hoy</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Transforme su negocio con NativoOne
            </h2>
            <p className="text-slate-300 md:text-xl mb-6">
              Solicite una demostración personalizada y descubra cómo nuestro ERP puede optimizar sus procesos y
              potenciar el crecimiento de su empresa.
            </p>
            <ul className="space-y-2 mb-6">
              {contactBenefits.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Solicite una Demostración</CardTitle>
                <CardDescription>
                  Complete el formulario y nos pondremos en contacto en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Ingrese su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="apellido"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Ingrese su apellido"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="empresa"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="telefono"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Su número de contacto"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Cuéntenos sobre sus necesidades específicas"
                    />
                  </div>
                  <Button className="w-full">Solicitar Demostración</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
