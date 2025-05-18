import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              1NativoOne
            </Link>
            <p className="mt-3 text-muted-foreground">
              Making the world a better place through innovative solutions.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/products/software"
                  className="text-muted-foreground hover:text-primary"
                >
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hardware"
                  className="text-muted-foreground hover:text-primary"
                >
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/enterprise"
                  className="text-muted-foreground hover:text-primary"
                >
                  Enterprise Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} 1NativoOne. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
