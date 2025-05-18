"use client"

import Link from "next/link"
import Image from "next/image"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MobileMenuHeaderProps {
  onClose: () => void
}

function MobileMenuHeader({ onClose }: MobileMenuHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-10 w-10 relative">
          <Image
            src="/images/frame_generic_dark.png"
            alt="1Nativo one"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold text-gray-700">1Nativo</span>
      </Link>
      <button onClick={onClose} className="text-gray-700" aria-label="Close menu">
        <X className="h-6 w-6" />
      </button>
    </div>
  )
}

interface AccordionItemProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  return (
    <div className="border-b py-3">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left font-medium"
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="mt-2 pl-4 space-y-3">{children}</div>}
    </div>
  )
}

interface AccordionSectionProps {
  title: string
  items: { label: string; href: string }[]
  onItemClick?: () => void
}

function AccordionSection({ title, items, onItemClick }: AccordionSectionProps) {
  return (
    <div className="py-2">
      <div className="font-medium text-sm text-gray-500 mb-2">{title}</div>
      <div className="space-y-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block py-2" onClick={onItemClick}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

interface MobileMenuProps {
  toggleMobileMenu: () => void
}

export function MobileMenu({ toggleMobileMenu }: MobileMenuProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const toggleAccordion = (accordion: string) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion)
  }

  const solutionsSections = [
    {
      title: "FOR INDIVIDUALS",
      items: [{ label: "For Individual Entrepreneurs", href: "#" }],
    },
    {
      title: "FOR BUSINESS",
      items: [
        { label: "For Companies", href: "#" },
        { label: "For Large Companies", href: "#" },
      ],
    },
  ]

  const productsSections = [
    {
      title: "FINANCIAL MANAGEMENT",
      items: [
        { label: "Accounting", href: "#" },
        { label: "Invoicing", href: "#" },
        { label: "Expense Tracking", href: "#" },
      ],
    },
    {
      title: "OPERATIONS",
      items: [
        { label: "Inventory", href: "#" },
        { label: "CRM", href: "#" },
        { label: "Project Management", href: "#" },
      ],
    },
  ]

  const industriesItems = [
    { label: "Manufacturing", href: "#" },
    { label: "Retail", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Professional Services", href: "#" },
  ]

  const regularLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#faq" },
    { label: "AI", href: "#" },
  ]

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto md:hidden">
      <MobileMenuHeader onClose={toggleMobileMenu} />

      <div className="p-4">
        <div className="space-y-1">
          <AccordionItem
            title="Solutions"
            isOpen={activeAccordion === "solutions"}
            onToggle={() => toggleAccordion("solutions")}
          >
            {solutionsSections.map((section) => (
              <AccordionSection
                key={section.title}
                title={section.title}
                items={section.items}
                onItemClick={toggleMobileMenu}
              />
            ))}
            <Link href="#" className="block py-2" onClick={toggleMobileMenu}>
              Developers
            </Link>
            <Link href="#" className="block py-2" onClick={toggleMobileMenu}>
              Education
            </Link>
            <Link href="#" className="block py-2" onClick={toggleMobileMenu}>
              Non-profit Organizations
            </Link>
          </AccordionItem>

          <AccordionItem
            title="Products"
            isOpen={activeAccordion === "products"}
            onToggle={() => toggleAccordion("products")}
          >
            {productsSections.map((section) => (
              <AccordionSection
                key={section.title}
                title={section.title}
                items={section.items}
                onItemClick={toggleMobileMenu}
              />
            ))}
          </AccordionItem>

          <AccordionItem
            title="Industries"
            isOpen={activeAccordion === "industries"}
            onToggle={() => toggleAccordion("industries")}
          >
            {industriesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </AccordionItem>

          {regularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 border-b font-medium"
              onClick={toggleMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <Button variant="outline" className="w-full" onClick={toggleMobileMenu}>
            Try Free Demo
          </Button>
          <Button className="w-full" onClick={toggleMobileMenu}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
