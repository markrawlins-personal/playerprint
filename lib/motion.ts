import type { Variants } from "framer-motion"

/** Refined ease — calm deceleration, no bounce. */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const
export const easeOutExpo = [0.16, 1, 0.3, 1] as const

/** Default scroll / load reveal — lift + fade. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easeOutExpo },
  },
}

/** Slightly subtler for dense grids. */
export const fadeItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOutSoft },
  },
}

/** Parent: orchestrates staggered children on scroll into view. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
}

/** Tighter stagger for small clusters (e.g. hero lines). */
export const staggerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/** Default viewport for scroll-triggered animations. */
export const defaultScrollViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -12% 0px",
} as const
