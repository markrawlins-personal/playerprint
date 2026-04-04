import Image from "next/image"
import Link from "next/link"

import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

import type { HeaderSurface } from "@/hooks/use-header-surface"

type BrandLogoProps = {
  className?: string
  /** Footer: inverted logo on dark bar. Nav: use `navSurface` for scroll-based contrast. */
  variant?: "nav" | "footer"
  /** When `variant="nav"`, adapt logo for light vs dark surface behind the header. */
  navSurface?: HeaderSurface
}

export function BrandLogo({
  className,
  variant = "nav",
  navSurface = "light",
}: BrandLogoProps) {
  const navOnLight = variant === "nav" && navSurface === "light"
  const navOnDark = variant === "nav" && navSurface === "dark"

  return (
    <Link
      href="/"
      className={cn(
        "relative inline-flex shrink-0 items-center transition-[opacity,filter] duration-200 ease-out hover:opacity-90 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variant === "footer" &&
          "focus-visible:outline-[#f6f6f0]/40 [&_img]:brightness-0 [&_img]:invert",
        navOnLight &&
          "focus-visible:outline-[#181717]/35 [&_img]:brightness-0",
        navOnDark &&
          "focus-visible:outline-white/40 [&_img]:brightness-0 [&_img]:invert",
        className
      )}
      aria-label="PlayerPrint home"
    >
      {variant === "footer" ? (
        <Image
          src={siteAssets.logoShield}
          alt="PlayerPrint"
          width={37}
          height={46}
          className="h-[46px] w-auto object-contain object-left"
          priority
        />
      ) : (
        <Image
          src={siteAssets.logoFull}
          alt="PlayerPrint"
          width={188}
          height={46}
          className="h-9 w-auto max-w-[200px] object-contain object-left"
          priority
        />
      )}
    </Link>
  )
}
