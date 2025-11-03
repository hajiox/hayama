"use client"
import { useEffect } from "react"

export default function OutboundClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.('a[data-outbound="purchase"]') as HTMLAnchorElement | null
      if (anchor && typeof (window as any).fbq === "function") {
        ;(window as any).fbq("trackCustom", "OutboundPurchaseClick")
      }
    }

    document.addEventListener("click", handler, { capture: true })

    return () => {
      document.removeEventListener("click", handler, { capture: true })
    }
  }, [])

  return null
}
