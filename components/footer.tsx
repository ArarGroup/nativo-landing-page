import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              1NativoOne
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              ERP integral para PyMEs y equipos administrativos en Colombia. Operación, finanzas y
              facturación en un solo sistema.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Producto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#solution" className="text-muted-foreground hover:text-primary text-sm">
                  Solución integral
                </Link>
              </li>
              <li>
                <Link href="#invoice" className="text-muted-foreground hover:text-primary text-sm">
                  Facturación
                </Link>
              </li>
              <li>
                <Link href="#reports" className="text-muted-foreground hover:text-primary text-sm">
                  Reportes
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary text-sm">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Empresa</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#challenge" className="text-muted-foreground hover:text-primary text-sm">
                  Enfoque
                </Link>
              </li>
              <li>
                <Link
                  href="#accountants"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  Contadores
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary text-sm">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Actualizaciones</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Suscríbase para novedades de producto y normativa (sin spam).
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2" action="#" method="post">
              <Input
                type="email"
                placeholder="Correo electrónico"
                className="flex-1 min-h-11"
                aria-label="Correo para boletín"
                name="email"
              />
              <Button type="submit" className="min-h-11">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} 1NativoOne. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Términos
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
