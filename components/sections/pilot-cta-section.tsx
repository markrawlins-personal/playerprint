import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { Text } from "@/components/primitives/text"
import { marketingButtonVariants } from "@/lib/marketing-button"
import { cn } from "@/lib/utils"

/**
 * Centered dark-band CTA from the landing design. Reorder via
 * `home-page-sections.tsx`.
 */
export function PilotCtaSection() {
  return (
    <section
      id="pilot-cta"
      data-header-theme="dark"
      className="relative scroll-mt-24 overflow-hidden bg-[#282828] px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="pilot-cta-heading"
    >
      <GrainOverlay opacity={0.12} />

      <Container className="relative z-[1] max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
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
