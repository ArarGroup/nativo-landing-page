"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackCtaClick } from "@/lib/analytics"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const productLinks = [
  { label: "Solución transversal", href: "#solution" },
  { label: "Facturación electrónica", href: "#invoice" },
  { label: "Seguridad", href: "#security" },
  { label: "Reportes e indicadores", href: "#reports" },
  { label: "Soporte", href: "#support" },
]

const solutionLinks = [
  { label: "Desafío y enfoque", href: "#challenge" },
  { label: "Para contadores", href: "#accountants" },
  { label: "Recursos", href: "#resources" },
]

const primaryLinks = [
  { label: "Precios", href: "#pricing" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contact" },
]

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const handleNav = (label: string) => {
    trackCtaClick("mobile_nav", label)
    onClose()
  }

  return (
    <div
      className={`fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background md:hidden overflow-y-auto transition-all duration-200 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="p-6 pb-24">
        <nav className="flex flex-col gap-4" aria-label="Principal">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="productos" className="border-b">
              <AccordionTrigger className="text-lg font-medium py-4">Productos</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-2">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base py-3 min-h-11 rounded-md px-2 transition-colors hover:text-primary hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={() => handleNav(item.label)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="soluciones" className="border-b">
              <AccordionTrigger className="text-lg font-medium py-4">Soluciones</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1 pl-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base py-3 min-h-11 rounded-md px-2 transition-colors hover:text-primary hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={() => handleNav(item.label)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="#accountants"
            className="text-lg font-medium py-4 border-b min-h-11 flex items-center transition-colors hover:text-primary"
            onClick={() => handleNav("Contadores")}
          >
            Contadores
          </Link>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium py-4 border-b min-h-11 flex items-center transition-colors hover:text-primary"
              onClick={() => handleNav(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 mt-6">
          <Button variant="outline" className="w-full min-h-11" asChild>
            <Link href="/login" onClick={() => onClose()}>
              Iniciar sesión
            </Link>
          </Button>
          <Button className="w-full min-h-11" asChild>
            <Link
              href="#contact"
              onClick={() => {
                trackCtaClick("mobile_nav", "Contáctanos")
                onClose()
              }}
            >
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
