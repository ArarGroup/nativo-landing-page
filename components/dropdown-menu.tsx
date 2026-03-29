"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 },
    }),
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-30 bg-black/30"
        onClick={onClose}
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        role="dialog"
        aria-label={variant === "products" ? "Menú productos" : "Menú soluciones"}
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
        className="fixed top-24 lg:top-16 left-0 w-full bg-white border-t border-b shadow-md z-[60] hidden md:block"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 mb-4">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <motion.li key={item.title} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="group block rounded-lg px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors hover:bg-slate-50"
                        onClick={onClose}
                      >
                        <div className="font-medium text-gray-900 transition-colors group-hover:text-primary">{item.title}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
            <motion.div
              className="bg-muted rounded-lg p-6 flex flex-col justify-between md:col-span-1"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
