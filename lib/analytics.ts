/**
 * Baseline analytics: pushes to dataLayer/gtag when present; always logs in development.
 * Wire GTM or gtag in production and use the same event names documented in CONVERSION_EVENTS.md
 */

import posthog from "posthog-js"

export type CtaLocation =
  | "hero_primary"
  | "hero_secondary"
  | "header_primary"
  | "feature_section"
  | "pricing_card"
  | "dropdown"
  | "mobile_nav"

export function trackCtaClick(location: CtaLocation, label: string) {
  const payload = { event: "cta_click", location, label }
  pushDataLayer(payload)
  capturePostHog("cta_click", { location, label })
}

export function trackContactFormSubmit() {
  const payload = { event: "conversion_contact_submit" }
  pushDataLayer(payload)
  capturePostHog("conversion_contact_submit")
}

function pushDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return

  type DataLayerWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
  const w = window as DataLayerWindow

  w.dataLayer = w.dataLayer || []
  w.dataLayer.push(data)

  if (typeof w.gtag === "function") {
    w.gtag("event", data.event as string, stripEventKey(data))
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", data)
  }
}

function capturePostHog(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  if (!posthog.__loaded) return
  posthog.capture(event, properties)
}

function stripEventKey(data: Record<string, unknown>) {
  const { event: _e, ...rest } = data
  return rest
}
