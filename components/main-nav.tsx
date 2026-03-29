"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { DropdownVariant } from "@/components/dropdown-menu"

interface NavItemProps {
  href: string
  children: React.ReactNode
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-foreground/70 transition-colors hover:text-primary font-medium text-base"
    >
      {children}
    </Link>
  )
}

interface DropdownButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function DropdownButton({ label, isActive, onClick, onMouseEnter, onMouseLeave }: DropdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex items-center gap-1 p-0 h-auto text-foreground/70 font-medium text-base hover:text-primary hover:no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors ${
        isActive ? "text-primary" : ""
      }`}
      aria-expanded={isActive}
    >
      {label}
      <motion.span
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="ml-1 inline-flex"
      >
        <ChevronDown className="h-4 w-4" aria-hidden />
      </motion.span>
    </button>
  )
}

interface MainNavProps {
  activeDropdown: DropdownVariant | null
  toggleDropdown: (dropdown: DropdownVariant) => void
  onDropdownHoverOpen?: (dropdown: DropdownVariant) => void
  onDropdownHoverClose?: () => void
  className?: string
}

export function MainNav({
  activeDropdown,
  toggleDropdown,
  onDropdownHoverOpen,
  onDropdownHoverClose,
  className,
}: MainNavProps) {
  return (
    <nav className={cn(className)}>
      <DropdownButton
        label="Productos"
        isActive={activeDropdown === "products"}
        onClick={() => toggleDropdown("products")}
        onMouseEnter={() => onDropdownHoverOpen?.("products")}
        onMouseLeave={onDropdownHoverClose}
      />

      <DropdownButton
        label="Soluciones"
        isActive={activeDropdown === "solutions"}
        onClick={() => toggleDropdown("solutions")}
        onMouseEnter={() => onDropdownHoverOpen?.("solutions")}
        onMouseLeave={onDropdownHoverClose}
      />

      <NavItem href="#accountants">Contadores</NavItem>
      <NavItem href="#resources">Recursos</NavItem>
      <NavItem href="#pricing">Precios</NavItem>
    </nav>
  )
}
