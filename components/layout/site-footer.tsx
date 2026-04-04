import Link from "next/link"

import { BrandLogo } from "@/components/layout/brand-logo"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { Separator } from "@/components/ui/separator"
import { marketingButtonVariants } from "@/lib/marketing-button"
import { cn } from "@/lib/utils"
import { footerNav, siteConfig } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      data-header-theme="dark"
      className="bg-[#262424] text-[#f6f6f0]"
    >
      <Container className="max-w-[1280px] py-10 md:py-14">
        <div className="flex flex-col gap-12 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-md flex-col gap-8">
            <BrandLogo variant="footer" />
            <p className="font-mono text-xs leading-[1.3] tracking-[0.24px] text-[#dbdbd6]">
              TBD
            </p>
            <Link
              href="#value"
              className={cn(
                marketingButtonVariants({
                  variant: "creamDark",
                  size: "sm",
                }),
                "w-fit"
              )}
            >
              Join the pilot
              <MarketingArrowRight />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[10px] font-normal uppercase tracking-[0.2px] text-[#dbdbd6]">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-sans text-sm text-[#dbdbd6] transition-colors hover:text-[#f6f6f0] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f6f0]/40"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-[#3f3f3f]" />

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[#dbdbd6]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={siteConfig.links.twitter}
            className="font-sans text-xs text-[#dbdbd6] transition-colors hover:text-[#f6f6f0] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f6f0]/40"
            rel="noreferrer"
            target="_blank"
          >
            X (Twitter)
          </a>
        </div>
      </Container>
    </footer>
  )
}
