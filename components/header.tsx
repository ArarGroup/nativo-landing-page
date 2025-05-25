"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { DropdownMenu } from "@/components/dropdown-menu"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (activeDropdown || isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [activeDropdown, isMenuOpen])

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">1NativoOne</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <MainNav
            className="hidden lg:flex justify-center items-center space-x-6"
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button className="hidden sm:flex" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden md:flex items-center gap-1">
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="flex md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Stacked navigation for medium screens */}
        <div className="hidden md:block lg:hidden border-t">
          <div className="py-2">
            <MainNav
              className="flex flex-wrap justify-center items-center space-x-6"
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
      </header>
      {activeDropdown && <DropdownMenu onClose={() => setActiveDropdown(null)} />}

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
