"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { DropdownMenu, type DropdownVariant } from "@/components/dropdown-menu"
import { trackCtaClick } from "@/lib/analytics"

const HOVER_CLOSE_DELAY_MS = 220

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownVariant | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const closeHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelPendingClose = useCallback(() => {
    if (closeHoverTimeoutRef.current) {
      clearTimeout(closeHoverTimeoutRef.current)
      closeHoverTimeoutRef.current = null
    }
  }, [])

  const scheduleCloseDropdown = useCallback(() => {
    cancelPendingClose()
    closeHoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      closeHoverTimeoutRef.current = null
    }, HOVER_CLOSE_DELAY_MS)
  }, [cancelPendingClose])

  const openDropdownHover = useCallback(
    (dropdown: DropdownVariant) => {
      cancelPendingClose()
      setActiveDropdown(dropdown)
    },
    [cancelPendingClose],
  )

  useEffect(() => {
    return () => {
      cancelPendingClose()
    }
  }, [cancelPendingClose])

  const toggleDropdown = (dropdown: DropdownVariant) => {
    cancelPendingClose()
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  /** Lock scroll only for the full-screen mobile drawer. Desktop mega menu does not lock body scroll (avoids scrollbar flicker / html vs body mismatch). When locking, set both html and body — the viewport often scrolls on <html>. */
  useEffect(() => {
    const root = document.documentElement
    if (isMenuOpen) {
      root.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      root.style.overflow = ""
      document.body.style.overflow = ""
    }
    return () => {
      root.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="1NativoOne"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">1NativoOne</span>
            </Link>
          </div>

          <MainNav
            className="hidden lg:flex justify-center items-center space-x-6"
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            onDropdownHoverOpen={openDropdownHover}
            onDropdownHoverClose={scheduleCloseDropdown}
          />

          <div className="flex items-center space-x-3">
            <Button className="hidden sm:flex min-h-9" size="sm" asChild>
              <Link
                href="#contact"
                onClick={() => trackCtaClick("header_primary", "Contáctanos")}
              >
                Contáctanos
              </Link>
            </Button>
            <Button
              className="flex md:hidden min-h-11 min-w-11"
              variant="ghost"
              size="icon"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            </Button>
          </div>
        </div>

        <div className="hidden md:block lg:hidden border-t">
          <div className="py-2">
            <MainNav
              className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              onDropdownHoverOpen={openDropdownHover}
              onDropdownHoverClose={scheduleCloseDropdown}
            />
          </div>
        </div>
      </header>
      {activeDropdown && (
        <DropdownMenu
          variant={activeDropdown}
          onClose={() => {
            cancelPendingClose()
            setActiveDropdown(null)
          }}
          onPanelMouseEnter={cancelPendingClose}
          onPanelMouseLeave={scheduleCloseDropdown}
        />
      )}

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
