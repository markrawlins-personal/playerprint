import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SectionProps = ComponentProps<"section"> & {
  /** Vertical rhythm preset. */
  spacing?: "sm" | "md" | "lg" | "xl"
  /** Optional id for in-page anchors. */
  id?: string
}

const spacingClass: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
}

export function Section({
  className,
  spacing = "md",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingClass[spacing], className)}
      {...props}
    />
  )
}
