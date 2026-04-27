"use client"

import type { ReactNode } from "react"
import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion"

import { useWhenInView } from "@/hooks/use-when-in-view"
import { cn } from "@/lib/utils"

import { fadeUpVariants } from "@/lib/motion"

type FadeInProps = Omit<
  HTMLMotionProps<"div">,
  "children" | "whileInView" | "viewport" | "animate"
> & {
  children?: ReactNode
  variants?: Variants
}

export function FadeIn({
  className,
  children,
  variants,
  initial = "hidden",
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion()
  const v = variants ?? fadeUpVariants
  const ref = useRef<HTMLDivElement>(null)
  const inView = useWhenInView(ref)

  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={v}
      initial={initial}
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  )
}
