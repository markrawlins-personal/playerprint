"use client"

import type { ReactNode } from "react"
import { useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

import { useWhenInView } from "@/hooks/use-when-in-view"
import { cn } from "@/lib/utils"
import { fadeItem, staggerContainer } from "@/lib/motion"

type StaggerContainerProps = {
  className?: string
  children: ReactNode
} & Pick<HTMLMotionProps<"div">, "variants">

export function Stagger({
  className,
  children,
  variants = staggerContainer,
}: StaggerContainerProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useWhenInView(ref)
  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  className?: string
  children: ReactNode
} & Pick<HTMLMotionProps<"div">, "variants">

export function StaggerItem({ className, children }: StaggerItemProps) {
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
