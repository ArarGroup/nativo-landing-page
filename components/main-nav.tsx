"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
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
}

function DropdownButton({ label, isActive, onClick }: DropdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1 p-0 h-auto text-foreground/70 font-medium text-base hover:text-primary hover:no-underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        isActive ? "text-primary" : ""
      }`}
      aria-expanded={isActive}
    >
      {label}
      <ChevronDown className="ml-1 h-4 w-4" aria-hidden />
    </button>
  )
}

interface MainNavProps {
  activeDropdown: DropdownVariant | null
  toggleDropdown: (dropdown: DropdownVariant) => void
  className?: string
}

export function MainNav({ activeDropdown, toggleDropdown, className }: MainNavProps) {
  return (
    <nav className={cn(className)}>
      <DropdownButton
        label="Productos"
        isActive={activeDropdown === "products"}
        onClick={() => toggleDropdown("products")}
      />

      <DropdownButton
        label="Soluciones"
        isActive={activeDropdown === "solutions"}
        onClick={() => toggleDropdown("solutions")}
      />

      <NavItem href="#accountants">Contadores</NavItem>
      <NavItem href="#resources">Recursos</NavItem>
      <NavItem href="#pricing">Precios</NavItem>
    </nav>
  )
}
