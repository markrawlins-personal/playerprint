import { cva, type VariantProps } from "class-variance-authority"

/** Pill CTAs from Figma — IBM Plex Mono, rounded-full, hover/active polish. */
export const marketingButtonVariants = cva(
  "font-mono text-sm font-medium leading-[1.46] inline-flex items-center justify-center gap-2 rounded-full border border-transparent transition-[transform,box-shadow,background-color,filter] duration-200 ease-out hover:brightness-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181717]/40 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 [&_img]:pointer-events-none [&_img]:shrink-0",
  {
    variants: {
      variant: {
        lime: "bg-[#f5ff3b] text-[#181717] shadow-sm hover:shadow-md",
        cream:
          "bg-[#f6f6f0] text-[#181717] hover:bg-[#eceae4]",
        creamDark:
          "bg-[#f6f6f0] text-[#181717] hover:bg-[#dbdbd6]",
        outlineOnDark:
          "border-white/70 bg-transparent text-white hover:bg-white/10",
      },
      size: {
        default: "min-h-10 px-6 py-2.5",
        sm: "min-h-8 px-5 py-2 text-sm",
        hero: "min-h-10 px-6 py-2.5 md:min-h-10",
      },
    },
    defaultVariants: {
      variant: "lime",
      size: "default",
    },
  }
)

export type MarketingButtonVariantProps = VariantProps<
  typeof marketingButtonVariants
>
