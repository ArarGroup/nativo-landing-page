"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface TabItem {
  label: string
  href: string
}

export default function StickyTabs() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeTab, setActiveTab] = useState("#solution")

  const tabs: TabItem[] = [
    { label: "Solución transversal", href: "#solution" },
    { label: "Factura electrónica", href: "#invoice" },
    { label: "Seguridad", href: "#security" },
    { label: "Reportes e indicadores", href: "#reports" },
    { label: "Soporte", href: "#support" },
    { label: "FAQ", href: "#faq" },
  ]

  useEffect(() => {
    const heroSection = document.getElementById("hero")
    const header = document.querySelector("header")

    if (!heroSection || !header) return

    const handleScroll = () => {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const scrollPosition = window.scrollY + header.offsetHeight

      setIsSticky(scrollPosition >= heroBottom)

      // Update active tab based on scroll position
      const sections = tabs.map((tab) => document.querySelector(tab.href))

      sections.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom

        if (sectionTop <= 200 && sectionBottom >= 200) {
          setActiveTab(tabs[index].href)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [tabs])

  return (
    <div
      className={cn(
        "hidden md:block w-full transition-all duration-300 z-30",
        isSticky ? "fixed top-16 left-0" : "relative"
      )}
    >
      <div className="py-3">
        <div className="flex justify-center overflow-x-auto">
          <div className="flex space-x-1 p-1 rounded-full bg-white shadow-sm border">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all",
                  activeTab === tab.href
                    ? "bg-white text-primary"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(tab.href)
                  const element = document.querySelector(tab.href)
                  if (element) {
                    const headerHeight = document.querySelector("header")?.offsetHeight || 0
                    const tabsHeight = 48 // Approximate height of tabs
                    const offset = headerHeight + tabsHeight

                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
