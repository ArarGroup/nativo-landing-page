"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    console.log(dropdown)
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    // Add event listener when dropdown is open
    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

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
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
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

        {/* {activeDropdown === "products" && (
          <div
            ref={dropdownRef}
            className="absolute top-16 left-0 w-full bg-white border-b shadow-md z-50 animate-fadeIn"
          >
            <div className="py-8">
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-5xl">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 mb-4">
                        FINANCIAL MANAGEMENT
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Accounting</div>
                            <div className="text-sm text-gray-500">
                              Complete accounting solution
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Invoicing</div>
                            <div className="text-sm text-gray-500">
                              Professional invoicing tools
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Expense Tracking</div>
                            <div className="text-sm text-gray-500">
                              Simplified expense management
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 mb-4">OPERATIONS</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Inventory</div>
                            <div className="text-sm text-gray-500">Inventory management system</div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">CRM</div>
                            <div className="text-sm text-gray-500">
                              Customer relationship management
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Project Management</div>
                            <div className="text-sm text-gray-500">Task and project tracking</div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 mb-4">REPORTING</h3>
                      <ul className="space-y-4">
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Analytics</div>
                            <div className="text-sm text-gray-500">Business intelligence tools</div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Financial Reports</div>
                            <div className="text-sm text-gray-500">
                              Comprehensive financial reporting
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="block" onClick={() => setActiveDropdown(null)}>
                            <div className="font-medium text-gray-900">Dashboards</div>
                            <div className="text-sm text-gray-500">
                              Customizable business dashboards
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDropdown(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )} */}
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
