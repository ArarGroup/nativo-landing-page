"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MenuItem {
  title: string
  description: string
  href: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

export type DropdownVariant = "products" | "solutions"

interface DropdownMenuProps {
  variant: DropdownVariant
  onClose: () => void
  onPanelMouseEnter?: () => void
  onPanelMouseLeave?: () => void
}

const productSections: MenuSection[] = [
  {
    title: "GESTIÓN FINANCIERA",
    items: [
      {
        title: "Contabilidad e integración",
        description: "Libros y procesos alineados al resto del ERP.",
        href: "#solution",
      },
      {
        title: "Facturación electrónica",
        description: "Flujo de comprobantes ligado a ventas y cobros.",
        href: "#invoice",
      },
      {
        title: "Reportes ejecutivos",
        description: "Indicadores para cierre y dirección.",
        href: "#reports",
      },
    ],
  },
  {
    title: "OPERACIÓN Y RIESGO",
    items: [
      {
        title: "Inventario y cadena",
        description: "Existencias conectadas con finanzas.",
        href: "#solution",
      },
      {
        title: "Seguridad y accesos",
        description: "Roles, controles y buenas prácticas.",
        href: "#security",
      },
      {
        title: "Soporte",
        description: "Niveles de servicio según plan.",
        href: "#support",
      },
    ],
  },
]

const solutionSections: MenuSection[] = [
  {
    title: "ENFOQUES",
    items: [
      {
        title: "El desafío que resolvemos",
        description: "Por qué un ERP integral en un solo sistema.",
        href: "#challenge",
      },
      {
        title: "Para contadores",
        description: "Menos fricción con tus clientes corporativos.",
        href: "#accountants",
      },
      {
        title: "Recursos y FAQ",
        description: "Preguntas frecuentes y siguiente paso.",
        href: "#resources",
      },
    ],
  },
]

export function DropdownMenu({ variant, onClose, onPanelMouseEnter, onPanelMouseLeave }: DropdownMenuProps) {
  const menuSections = variant === "products" ? productSections : solutionSections

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black/30" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-label={variant === "products" ? "Menú productos" : "Menú soluciones"}
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
        className="fixed top-24 lg:top-16 left-0 w-full bg-white border-t border-b shadow-md z-[60] animate-fadeIn hidden md:block"
      >
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 mb-4">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={onClose}>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-muted rounded-lg p-6 flex flex-col justify-between md:col-span-1">
              <div>
                <h3 className="text-lg font-medium">¿Listo para evaluar NativoOne?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reserve una conversación o solicite una demo desde contacto.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="#contact" onClick={onClose}>
                    Ir a contacto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
