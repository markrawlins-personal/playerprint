import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

type MarketingArrowRightProps = {
  className?: string
}

/** Decorative arrow for pill CTAs — Figma `right_arrow.svg` (#181717 strokes). */
export function MarketingArrowRight({ className }: MarketingArrowRightProps) {
  return (
    <img
      src={siteAssets.rightArrow}
      alt=""
      aria-hidden
      className={cn("pointer-events-none size-6 shrink-0", className)}
    />
  )
}
