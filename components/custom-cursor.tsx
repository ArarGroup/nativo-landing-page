"use client"

import { useEffect, useRef } from "react"

type CursorState = "default" | "hover" | "cta"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<CursorState>("default")
  const rafRef = useRef<number>(0)
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const isVisible = useRef(false)

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const LERP = 0.12

    function tick() {
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * LERP
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * LERP

      dot.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`
      ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`

      rafRef.current = requestAnimationFrame(tick)
    }

    function onMouseMove(e: MouseEvent) {
      dotPos.current = { x: e.clientX, y: e.clientY }

      if (!isVisible.current) {
        // Snap ring to cursor on first move to avoid it flying in from 0,0
        ringPos.current = { x: e.clientX, y: e.clientY }
        isVisible.current = true
        dot.style.opacity = "1"
        ring.style.opacity = "1"
      }
    }

    function applyState(state: CursorState) {
      if (stateRef.current === state) return
      stateRef.current = state

      if (state === "default") {
        dot.style.opacity = "1"
        ring.style.width = "32px"
        ring.style.height = "32px"
        ring.style.borderRadius = "50%"
        ring.style.backgroundColor = "transparent"
        ring.style.borderColor = "rgba(31, 152, 234, 0.6)"
        ring.style.marginLeft = "-16px"
        ring.style.marginTop = "-16px"
      } else if (state === "hover") {
        dot.style.opacity = "1"
        ring.style.width = "48px"
        ring.style.height = "48px"
        ring.style.borderRadius = "50%"
        ring.style.backgroundColor = "transparent"
        ring.style.borderColor = "rgba(31, 152, 234, 0.9)"
        ring.style.marginLeft = "-24px"
        ring.style.marginTop = "-24px"
      } else if (state === "cta") {
        dot.style.opacity = "0"
        ring.style.width = "64px"
        ring.style.height = "40px"
        ring.style.borderRadius = "8px"
        ring.style.backgroundColor = "rgba(31, 152, 234, 0.12)"
        ring.style.borderColor = "rgba(31, 152, 234, 0.8)"
        ring.style.marginLeft = "-32px"
        ring.style.marginTop = "-20px"
      }
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest("[data-cursor='cta']")) {
        applyState("cta")
      } else if (target.closest("button, a, [role='tab'], [role='button'], label[for]")) {
        applyState("hover")
      } else {
        applyState("default")
      }
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseover", onMouseOver)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div aria-hidden="true" style={{ pointerEvents: "none" }}>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#1F98EA",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          opacity: 0,
          transition: "opacity 0.2s ease-out, background-color 0.2s ease-out",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(31, 152, 234, 0.6)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          opacity: 0,
          marginLeft: -16,
          marginTop: -16,
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, border-radius 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out, margin 0.2s ease-out, opacity 0.2s ease-out",
        }}
      />
    </div>
  )
}
