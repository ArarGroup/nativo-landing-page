"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface TabItem {
  label: string
  href: string
}

const STICKY_TABS: TabItem[] = [
  { label: "Solución transversal", href: "#solution" },
  { label: "Factura electrónica", href: "#invoice" },
  { label: "Seguridad", href: "#security" },
  { label: "Reportes e indicadores", href: "#reports" },
  { label: "Soporte", href: "#support" },
  { label: "FAQ", href: "#faq" },
]

function elementDocumentBottomY(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.bottom + window.scrollY
}

export default function StickyTabs() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeTab, setActiveTab] = useState("#solution")
  const [barHeight, setBarHeight] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    const measure = () => setBarHeight(el.offsetHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const heroSection = document.getElementById("hero")
    const socialSection = document.getElementById("social-proof")
    const header = document.querySelector("header")

    if (!heroSection || !header) return

    const handleScroll = () => {
      // Stick only after the last block above this bar (social proof, or hero if strip is absent)
      const thresholdEl = socialSection ?? heroSection
      const thresholdBottom = elementDocumentBottomY(thresholdEl)
      const scrollPosition = window.scrollY + header.offsetHeight

      setIsSticky(scrollPosition >= thresholdBottom)

      const sections = STICKY_TABS.map((tab) => document.querySelector(tab.href))

      sections.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom

        if (sectionTop <= 200 && sectionBottom >= 200) {
          setActiveTab(STICKY_TABS[index].href)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="hidden md:block w-full">
      {isSticky && barHeight > 0 ? (
        <div className="w-full" style={{ height: barHeight }} aria-hidden />
      ) : null}
      <div
        ref={barRef}
        className={cn(
          "w-full transition-all duration-300 z-20",
          isSticky ? "fixed top-16 left-0 right-0" : "relative"
        )}
      >
        <div className="pt-1">
          <div className="flex justify-center overflow-x-auto py-2 px-2">
            <div
              className="flex space-x-1 lg:space-x-2 p-1 lg:px-4 rounded-full bg-white shadow-sm border max-w-full"
              role="tablist"
              aria-label="Secciones del producto"
            >
              {STICKY_TABS.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  role="tab"
                  aria-selected={activeTab === tab.href}
                  className={cn(
                    "px-3 lg:px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all min-h-9 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeTab === tab.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(tab.href)
                    const element = document.querySelector(tab.href)
                    if (element) {
                      const headerHeight = document.querySelector("header")?.offsetHeight || 0
                      const tabsHeight = (barRef.current?.offsetHeight ?? barHeight) || 52
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
    </div>
  )
}
