import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"
import { textVariants } from "@/lib/typography"

type SectionBadgeProps = ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode
}

export function SectionBadge({ className, children, ...props }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#eceae4] px-2 py-1",
        className
      )}
      {...props}
    >
      <span
        className={cn(textVariants({ variant: "mono-xs" }), "text-black")}
      >
        {children}
      </span>
    </div>
  )
}
