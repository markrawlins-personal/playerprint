"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { fadeItem, staggerContainer } from "@/lib/motion"

type StaggerProps = {
  className?: string
  children: ReactNode
}

export function Stagger({ className, children }: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={cn(className)}>{children}</div>
  }
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
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
