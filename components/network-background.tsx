"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  isHub?: boolean
  connections?: number
  color?: string
}

interface CanvasNetworkBackgroundProps {
  color?: string
  secondaryColor?: string
  particleCount?: number
  lineOpacity?: number
  particleOpacity?: number
  particleRadius?: number
  interactive?: boolean
  transversalFactor?: number
  className?: string
  flowDirection?: "left-to-right" | "right-to-left" | "diagonal-up" | "diagonal-down"
}

export function CanvasNetworkBackground({
  color = "#6366f1",
  secondaryColor,
  particleCount = 80,
  lineOpacity = 0.15,
  particleOpacity = 0.7,
  particleRadius = 1.5,
  interactive = true,
  transversalFactor = 0.7, // Controls how strong the directional bias is
  flowDirection = "diagonal-up",
  className = "",
}: CanvasNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 120 })
  const animationRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = setTimeout(() => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          initParticles()
        }
      }, 100)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
      }
    }

    const getDirectionalBias = () => {
      // Return velocity biases based on desired flow direction
      switch (flowDirection) {
        case "left-to-right":
          return { vxBias: transversalFactor, vyBias: 0 }
        case "right-to-left":
          return { vxBias: -transversalFactor, vyBias: 0 }
        case "diagonal-up":
          return { vxBias: transversalFactor, vyBias: -transversalFactor * 0.5 }
        case "diagonal-down":
          return { vxBias: transversalFactor, vyBias: transversalFactor * 0.5 }
        default:
          return { vxBias: transversalFactor, vyBias: -transversalFactor * 0.5 }
      }
    }

    const initParticles = () => {
      particlesRef.current = []
      const { vxBias, vyBias } = getDirectionalBias()

      // Create hub particles (larger, more connections)
      const hubCount = Math.floor(particleCount * 0.5) // 10% of particles are hubs

      for (let i = 0; i < particleCount; i++) {
        const isHub = i < hubCount
        const particleColor = isHub && secondaryColor ? secondaryColor : color

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Add directional bias to velocity
          vx: Math.random() * 0.4 - 0.2 + vxBias * (Math.random() * 0.2 + 0.1),
          vy: Math.random() * 0.4 - 0.2 + vyBias * (Math.random() * 0.2 + 0.1),
          radius: isHub
            ? particleRadius * 2.5
            : Math.random() * particleRadius + particleRadius / 2,
          isHub,
          connections: 0,
          color: particleColor,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Reset connection counts
      particlesRef.current.forEach((p) => {
        p.connections = 0
      })

      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]

        // Move particles
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges (instead of bouncing)
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)

        const particleColor = p.color || color
        ctx.fillStyle = `${particleColor}${Math.floor(particleOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Connect particles with transversal bias
        for (let j = 0; j < particlesRef.current.length; j++) {
          if (i === j) continue

          const p2 = particlesRef.current[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Determine connection distance based on particle types
          let connectionDistance = 150
          if (p.isHub || p2.isHub) {
            connectionDistance = 200 // Hub particles connect from further away
          }

          // Limit connections per particle (except for hubs)
          const maxConnections = p.isHub ? 10 : 3
          if (!p.isHub && (p.connections || 0) >= maxConnections) continue

          // Favor connections in the transversal direction
          const { vxBias, vyBias } = getDirectionalBias()
          const directionBonus =
            Math.abs(dx * vxBias + dy * vyBias) / (Math.abs(dx) + Math.abs(dy) || 1)
          const adjustedDistance = distance * (1 - directionBonus * 0.3)

          if (adjustedDistance < connectionDistance) {
            // Increment connection count
            p.connections = (p.connections || 0) + 1

            // Calculate opacity based on distance and direction
            const opacityFactor = (1 - adjustedDistance / connectionDistance) * lineOpacity
            const lineColor = (p.isHub || p2.isHub) && secondaryColor ? secondaryColor : color

            ctx.beginPath()
            ctx.strokeStyle = `${lineColor}${Math.floor(opacityFactor * 255)
              .toString(16)
              .padStart(2, "0")}`

            // Thicker lines for hub connections
            ctx.lineWidth = p.isHub || p2.isHub ? 0.8 : 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Interactive - connect to mouse with transversal effect
        if (interactive) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRef.current.radius) {
            // Calculate influence based on transversal direction
            const { vxBias, vyBias } = getDirectionalBias()
            const directionFactor = Math.sign(dx * vxBias + dy * vyBias)

            ctx.beginPath()
            const lineColor = p.isHub && secondaryColor ? secondaryColor : color
            ctx.strokeStyle = `${lineColor}${Math.floor(
              (1 - distance / mouseRef.current.radius) * lineOpacity * 2 * 255
            )
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = p.isHub ? 1 : 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
            ctx.stroke()

            // Move particles with transversal bias when near mouse
            const pushFactor = 0.02
            p.vx += directionFactor * vxBias * pushFactor
            p.vy += directionFactor * vyBias * pushFactor

            // Limit velocity
            const maxVelocity = 2
            const currentVelocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
            if (currentVelocity > maxVelocity) {
              p.vx = (p.vx / currentVelocity) * maxVelocity
              p.vy = (p.vy / currentVelocity) * maxVelocity
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles()
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [
    color,
    secondaryColor,
    particleCount,
    lineOpacity,
    particleOpacity,
    particleRadius,
    interactive,
    transversalFactor,
    flowDirection,
  ])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 -z-10 w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
