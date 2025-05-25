"use client"

import Link from "next/link"
import { useRef } from "react"
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

interface DropdownMenuProps {
  onClose: () => void
}

export function DropdownMenu({ onClose }: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const menuSections: MenuSection[] = [
    {
      title: "FINANCIAL MANAGEMENT",
      items: [
        {
          title: "Accounting",
          description: "Complete accounting solution",
          href: "#",
        },
        {
          title: "Invoicing",
          description: "Professional invoicing tools",
          href: "#",
        },
        {
          title: "Expense Tracking",
          description: "Simplified expense management",
          href: "#",
        },
      ],
    },
    {
      title: "OPERATIONS",
      items: [
        {
          title: "Inventory",
          description: "Inventory management system",
          href: "#",
        },
        {
          title: "CRM",
          description: "Customer relationship management",
          href: "#",
        },
        {
          title: "Project Management",
          description: "Task and project tracking",
          href: "#",
        },
      ],
    },
  ]

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black/30" onClick={onClose} />
      <div
        ref={dropdownRef}
        className="fixed top-24 lg:top-16 left-0 w-full bg-white border-t border-b shadow-md z-40 animate-fadeIn hidden md:block"
      >
        <div className="container py-8">
          <div className="grid grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 mb-4">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="block" onClick={onClose}>
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-muted rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium">Explore All Features</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discover how our platform can help you achieve your goals with our comprehensive
                  feature set.
                </p>
                <Button className="mt-4">View All Features</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
