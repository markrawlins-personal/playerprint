import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export type HeadingLevel =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "eyebrow"
  | "lead"

const styles: Record<HeadingLevel, string> = {
  display:
    "font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl lg:text-6xl",
  h1: "font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl lg:text-5xl",
  h2: "font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl lg:text-4xl",
  h3: "font-serif text-xl font-normal tracking-tight sm:text-2xl",
  h4: "font-serif text-lg font-normal tracking-tight sm:text-xl",
  eyebrow:
    "font-mono text-xs font-normal uppercase tracking-[0.2em] text-[#181717]",
  lead: "font-sans text-lg leading-relaxed text-[#434242] sm:text-xl",
}

const defaultTag: Record<
  HeadingLevel,
  "h1" | "h2" | "h3" | "h4" | "p"
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  eyebrow: "p",
  lead: "p",
}

export type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p"
  level: HeadingLevel
  className?: string
  children?: React.ReactNode
} & HTMLAttributes<HTMLElement>

export function Heading({
  as,
  level,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as ?? defaultTag[level]
  return (
    <Component className={cn(styles[level], className)} {...props}>
      {children}
    </Component>
  )
}
