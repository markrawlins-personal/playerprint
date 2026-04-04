import Image from "next/image"

import { FadeIn } from "@/components/motion/fade-in"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { SectionBadge } from "@/components/primitives/section-badge"
import { Container } from "@/components/primitives/container"
import { Text } from "@/components/primitives/text"
import { siteAssets } from "@/lib/site-assets"

export function ProblemSection() {
  return (
    <section
      id="problem"
      data-header-theme="dark"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="problem-heading"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={siteAssets.problemGradientPrimary}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <Image
          src={siteAssets.problemGradientSecondary}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <GrainOverlay opacity={0.14} />
      </div>

      <Container className="relative z-[1] flex justify-center">
        <FadeIn className="w-full max-w-[640px]">
          <div className="flex flex-col items-center gap-4 rounded-none bg-[rgba(126,162,179,0.6)] px-6 py-10 backdrop-blur-[82px] sm:px-12 sm:py-10 md:px-20">
            <SectionBadge>The problem</SectionBadge>
            <div
              className="h-20 w-px shrink-0 bg-white/45"
              aria-hidden
            />
            <h2
              id="problem-heading"
              className="text-center font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.12] text-[#f5ff3b]"
            >
              Most players are told things like &quot;work harder,&quot;
              &quot;make better decisions,&quot; or &quot;be more
              aggressive.&quot;
            </h2>
            <div
              className="h-20 w-px shrink-0 bg-white/45"
              aria-hidden
            />
            <Text
              variant="sans-feature"
              className="text-center text-white"
            >
              But as a parent, it’s hard to know what that actually means.
            </Text>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
