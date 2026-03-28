"use client"

import { usePathname } from "next/navigation"
import { usePostHog } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogPageview() {
  const pathname = usePathname()
  const posthog = usePostHog()

  useEffect(() => {
    if (pathname && posthog) {
      posthog.capture("$pageview", {
        $current_url: window.location.href,
      })
    }
  }, [pathname, posthog])

  return null
}
