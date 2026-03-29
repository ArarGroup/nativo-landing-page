"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { trackCtaClick } from "@/lib/analytics"

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
        <Button
          size="lg"
          className="group w-full sm:w-auto min-h-11 min-w-[44px]"
          data-cursor="cta"
          asChild
        >
          <Link
            href="#contact"
            onClick={() => trackCtaClick("hero_primary", "Contáctanos")}
          >
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
