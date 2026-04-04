import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type ContainerProps = ComponentProps<"div"> & {
  /** Max width: `narrow` (prose), `default` (content), `wide` (sections). */
  size?: "default" | "narrow" | "wide"
}

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
}

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClass[size],
        className
      )}
      {...props}
    />
  )
}
