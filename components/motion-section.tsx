"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function MotionSection({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0], delay }}
    >
      {children}
    </motion.div>
  )
}
