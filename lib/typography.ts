import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Reusable IBM Plex typography scales aligned to Figma text styles.
 * Use with `<p>`, `<span>`, or the `Text` primitive.
 */
export const textVariants = cva("", {
  variants: {
    variant: {
      "mono-xs":
        "font-mono text-[10px] font-normal uppercase leading-[1.3] tracking-[0.2px]",
      "mono-sm":
        "font-mono text-xs font-normal uppercase leading-[1.3] tracking-[0.24px]",
      "mono-md": "font-mono text-sm font-normal leading-[1.46]",
      "mono-md-medium": "font-mono text-sm font-medium leading-[1.46]",
      "mono-lg":
        "font-mono text-xl font-normal uppercase leading-[1.3] tracking-[0.4px]",
      "serif-hero":
        "font-serif text-[clamp(2.25rem,4.5vw,3rem)] font-normal leading-[1.12] tracking-[-0.025em]",
      "serif-h3": "font-serif text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.12]",
      "sans-lg": "font-sans text-lg font-normal leading-[1.46]",
      "sans-feature": "font-sans text-[22px] font-normal leading-[1.46]",
      "sans-xl": "font-sans text-[28px] font-normal leading-[1.3]",
      "sans-base": "font-sans text-base font-normal leading-[1.46]",
    },
  },
  defaultVariants: {
    variant: "sans-base",
  },
})

export type TextVariantProps = VariantProps<typeof textVariants>

export function textClass(
  variant: NonNullable<TextVariantProps["variant"]>,
  className?: string
) {
  return cn(textVariants({ variant }), className)
}
