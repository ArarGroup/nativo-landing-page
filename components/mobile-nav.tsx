"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface NavSection {
  title: string
  items: { label: string; href: string }[]
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navSections: NavSection[] = [
    {
      title: "Features",
      items: [
        { label: "Feature 1", href: "#feature-1" },
        { label: "Feature 2", href: "#feature-2" },
        { label: "Feature 3", href: "#feature-3" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#blog" },
        { label: "Documentation", href: "#documentation" },
        { label: "Guides", href: "#guides" },
      ],
    },
  ]

  const regularLinks = [
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div
      className={`fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background md:hidden overflow-y-auto transition-all duration-200 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="p-6">
        <nav className="flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {navSections.map((section) => (
              <AccordionItem
                key={section.title}
                value={section.title.toLowerCase()}
                className="border-b"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base py-2 transition-colors hover:text-primary"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {regularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium py-4 border-b transition-colors hover:text-primary"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 mt-6">
          <Button variant="outline" className="w-full" onClick={onClose}>
            Log in
          </Button>
          <Button className="w-full" onClick={onClose}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}
