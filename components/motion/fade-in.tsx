"use client"

import type { ReactNode } from "react"
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion"

import { cn } from "@/lib/utils"

import { defaultScrollViewport, fadeUpVariants } from "@/lib/motion"

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode
  variants?: Variants
}

export function FadeIn({
  className,
  children,
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = defaultScrollViewport,
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion()
  const v = variants ?? fadeUpVariants

  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={v}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  )
}
