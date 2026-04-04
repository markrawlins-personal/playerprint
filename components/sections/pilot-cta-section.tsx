import Image from "next/image"
import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { Text } from "@/components/primitives/text"
import { marketingButtonVariants } from "@/lib/marketing-button"
import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

/**
 * Pilot CTA — full-bleed practice photo with overlay. Reorder via
 * `home-page-sections.tsx`.
 */
export function PilotCtaSection() {
  return (
    <section
      id="pilot-cta"
      data-header-theme="dark"
      className="relative scroll-mt-24 overflow-hidden bg-[#282828]"
      aria-labelledby="pilot-cta-heading"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src={siteAssets.pilotCtaPhoto}
          alt=""
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#282828]/45" />
        <GrainOverlay opacity={0.14} />
      </div>

      <Container className="relative z-[1] max-w-3xl py-16 sm:py-20 md:py-24">
        <FadeIn>
          <div className="flex min-h-[min(22rem,50svh)] flex-col items-center justify-center gap-8 text-center">
            <h2
              id="pilot-cta-heading"
              className="font-serif text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.12] text-[#f6f6f0]"
            >
              Get a clear view of your player&apos;s development
            </h2>
            <Link
              href="#value"
              className={cn(marketingButtonVariants({ variant: "lime", size: "hero" }))}
            >
              Join the pilot
              <MarketingArrowRight />
            </Link>
            <Text variant="mono-md" className="text-[#dbdbd6]">
              Limited pilot. Free first month if accepted.
            </Text>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
