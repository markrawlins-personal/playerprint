"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { BrandLogo } from "@/components/layout/brand-logo"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/lib/button-variants"
import { marketingButtonVariants } from "@/lib/marketing-button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useHeaderSurface } from "@/hooks/use-header-surface"
import { cn } from "@/lib/utils"
import { mainNav } from "@/lib/site"

function NavLinks({
  onNavigate,
  className,
  surface,
}: {
  onNavigate?: () => void
  className?: string
  surface: "light" | "dark"
}) {
  const onDark = surface === "dark"

  return (
    <nav
      aria-label="Page sections"
      className={cn("flex flex-col gap-1 md:flex-row md:items-center", className)}
    >
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "min-h-11 justify-start px-3 font-sans text-sm font-medium md:justify-center",
            onDark
              ? "text-[#f6f6f0]/85 hover:bg-white/10 hover:text-[#f6f6f0]"
              : "text-[#181717]/80 hover:bg-black/[0.06] hover:text-[#181717]"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const surface = useHeaderSurface()
  const onDark = surface === "dark"

  return (
    <header
      id="site-header"
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex h-20 items-center transition-[background-color,backdrop-filter] duration-200 ease-out",
        onDark
          ? "bg-black/15 backdrop-blur-[14px] supports-backdrop-filter:bg-black/10"
          : "bg-[#f6f6f0]/75 backdrop-blur-[14px] supports-backdrop-filter:bg-[#f6f6f0]/65"
      )}
    >
      <Container className="flex w-full max-w-[1280px] items-center justify-between gap-4">
        <BrandLogo variant="nav" navSurface={surface} />
        <div className="hidden items-center gap-6 md:flex">
          <NavLinks surface={surface} />
          <Link
            href="/sign-in"
            className={cn(
              "inline-flex min-h-8 items-center justify-center rounded-full border border-transparent px-5 py-2 font-mono text-sm font-medium leading-[1.46] transition-[transform,background-color,color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
              onDark
                ? "bg-white text-[#181717] hover:bg-white/92 focus-visible:outline-[#181717]/35"
                : "bg-[#181717] text-white hover:bg-[#181717]/92 focus-visible:outline-[#181717]/50"
            )}
          >
            Sign in
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    onDark
                      ? "border-white/35 bg-white/5 text-[#f6f6f0] hover:bg-white/10"
                      : "border-[#181717]/20 bg-[#f6f6f0]/90 text-[#181717] hover:bg-[#eceae4]"
                  )}
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] gap-0 border-[#d4d2cc] bg-[#f6f6f0] p-0"
            >
              <SheetHeader className="border-b border-[#d4d2cc] px-4 py-4 text-left">
                <SheetTitle className="font-serif text-lg text-[#181717]">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-4">
                <NavLinks
                  onNavigate={() => setMobileOpen(false)}
                  surface="light"
                />
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    marketingButtonVariants({ variant: "lime", size: "default" }),
                    "mt-2 w-full"
                  )}
                >
                  Sign in
                  <MarketingArrowRight className="size-5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
