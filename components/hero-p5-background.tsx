"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type p5 from "p5"
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "")
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h
  const n = parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export interface HeroP5BackgroundProps {
  color?: string
  secondaryColor?: string
  className?: string
}

export function HeroP5Background({
  color = "#1F98EA",
  secondaryColor = "#0098EA",
  className,
}: HeroP5BackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<p5 | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const primary = hexToRgb(color)
    const secondary = hexToRgb(secondaryColor)
    let cancelled = false
    let resizeObserver: ResizeObserver | null = null

    const prefersReducedMotion = () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    import("p5")
      .then((p5mod) => {
        if (cancelled || !containerRef.current) return
        const P5Constructor = p5mod.default

        const sketch = (p: p5) => {
          let time = 0

          const drawField = () => {
            p.clear()
            const w = p.width
            const h = p.height
            const step = 18
            const t = time * 0.008

            for (let x = 0; x < w; x += step) {
              for (let y = 0; y < h; y += step) {
                const n = p.noise(x * 0.0011 + t, y * 0.0011 - t * 0.6, t * 0.4)
                const alpha = p.map(n, 0, 1, 4, 26)
                const mix = n * 0.55 + 0.22
                const r = p.lerp(primary.r, secondary.r, mix)
                const g = p.lerp(primary.g, secondary.g, mix)
                const b = p.lerp(primary.b, secondary.b, mix)
                p.fill(r, g, b, alpha)
                p.noStroke()
                p.rect(x, y, step + 0.5, step + 0.5)
              }
            }
          }

          p.setup = () => {
            const el = containerRef.current
            if (!el) return
            const cw = el.clientWidth
            const ch = el.clientHeight
            p.createCanvas(cw > 0 ? cw : 300, ch > 0 ? ch : 400)
            p.pixelDensity(Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1))

            if (prefersReducedMotion()) {
              drawField()
              p.noLoop()
            } else {
              p.frameRate(22)
            }
          }

          p.draw = () => {
            if (prefersReducedMotion()) return
            time += 1
            drawField()
          }

          p.windowResized = () => {
            const el = containerRef.current
            if (!el) return
            const cw = el.clientWidth
            const ch = el.clientHeight
            if (cw < 1 || ch < 1) return
            p.resizeCanvas(cw, ch)
            if (prefersReducedMotion()) {
              drawField()
            }
          }
        }

        const instance = new P5Constructor(sketch, container)
        if (cancelled) {
          instance.remove()
          return
        }
        instanceRef.current = instance

        resizeObserver = new ResizeObserver(() => {
          const inst = instanceRef.current
          const el = containerRef.current
          if (!inst || !el) return
          const cw = el.clientWidth
          const ch = el.clientHeight
          if (cw < 1 || ch < 1) return
          inst.resizeCanvas(cw, ch)
          inst.redraw()
        })
        resizeObserver.observe(container)
      })
      .catch(() => {
        /* p5 failed to load; hero still works without canvas */
      })

    return () => {
      cancelled = true
      resizeObserver?.disconnect()
      resizeObserver = null
      instanceRef.current?.remove()
      instanceRef.current = null
    }
  }, [color, secondaryColor])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 -z-10 min-h-full w-full [&_canvas]:block", className)}
      aria-hidden="true"
    />
  )
}
