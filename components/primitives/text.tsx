import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"
import { textVariants, type TextVariantProps } from "@/lib/typography"

type TextProps<T extends ElementType = "p"> = {
  as?: T
} & TextVariantProps &
  Omit<ComponentPropsWithoutRef<T>, "as" | "className"> & {
    className?: string
  }

export function Text<T extends ElementType = "p">({
  as,
  variant = "sans-base",
  className,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType
  return (
    <Component className={cn(textVariants({ variant }), className)} {...props} />
  )
}
