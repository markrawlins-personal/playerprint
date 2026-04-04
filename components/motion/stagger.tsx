"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import {
  defaultScrollViewport,
  fadeItem,
  staggerContainer,
} from "@/lib/motion"
import type { HTMLMotionProps } from "framer-motion"

type StaggerProps = {
  className?: string
  children: ReactNode
} & Pick<HTMLMotionProps<"div">, "variants" | "viewport">

export function Stagger({
  className,
  children,
  variants = staggerContainer,
  viewport = defaultScrollViewport,
}: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ className, children }: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }
  return (
    <motion.div className={cn(className)} variants={fadeItem}>
      {children}
    </motion.div>
  )
}
