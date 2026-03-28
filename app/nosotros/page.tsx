"use client"

import { useEffect } from "react"

export default function NosotrosPage() {
  useEffect(() => {
    window.location.replace("/")
  }, [])
  return null
}
