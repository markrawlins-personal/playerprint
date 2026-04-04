"use client"

import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export type HeaderSurface = "light" | "dark"

const HEADER_HEIGHT = 80
const STATIC_LIGHT_PATHS = new Set(["/privacy", "/terms", "/sign-in"])

/**
 * Determines whether the fixed header sits over a light or dark surface by
 * finding which `[data-header-theme]` section contains the vertical center of
 * the header strip. `light` = use dark nav text/logo; `dark` = use light nav.
 */
export function useHeaderSurface(): HeaderSurface {
  const pathname = usePathname()
  const [surface, setSurface] = useState<HeaderSurface>(() =>
    STATIC_LIGHT_PATHS.has(pathname) ? "light" : "dark"
  )

  const compute = useCallback(() => {
    if (STATIC_LIGHT_PATHS.has(pathname)) {
      setSurface("light")
      return
    }

    const probeY = HEADER_HEIGHT / 2
    const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]")

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= probeY && rect.bottom >= probeY) {
        const t = section.dataset.headerTheme
        if (t === "light" || t === "dark") {
          setSurface(t)
          return
        }
      }
    }

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top < HEADER_HEIGHT && rect.bottom > 0) {
        const t = section.dataset.headerTheme
        if (t === "light" || t === "dark") {
          setSurface(t)
          return
        }
      }
    }

    setSurface("light")
  }, [pathname])

  useEffect(() => {
    compute()

    const onScroll = () => {
      requestAnimationFrame(compute)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", compute)
    }
  }, [compute])

  return surface
}
