"use client"

import { useEffect } from "react"

export default function PreciosPage() {
  useEffect(() => {
    window.location.replace("/#pricing")
  }, [])
  return null
}
