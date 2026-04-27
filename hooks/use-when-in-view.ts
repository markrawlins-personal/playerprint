"use client"

import { useLayoutEffect, useState, type RefObject } from "react"

/**
 * Drives scroll reveal with Framer "hidden" / "visible" variants. Uses
 * getBoundingClientRect on mount for elements already in the viewport, because
 * whileInView can fail to fire in some embedded or zero-height layout frames
 * and leaves opacity:0 content stuck.
 */
export function useWhenInView(
  ref: RefObject<HTMLElement | null>,
  options?: { rootMargin?: string }
) {
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const markIfVisible = () => {
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      if (r.width <= 0 || r.height <= 0) return
      if (r.top < h && r.bottom > 0) {
        setInView(true)
      }
    }
    markIfVisible()

    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true)
            return
          }
        }
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? "0px 0px 0px 0px",
        threshold: [0, 0.01, 0.1],
      }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [ref, options?.rootMargin])

  return inView
}
