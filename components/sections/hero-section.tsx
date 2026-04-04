import Image from "next/image"
import Link from "next/link"

import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { staggerTight } from "@/lib/motion"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { Text } from "@/components/primitives/text"
import { siteAssets } from "@/lib/site-assets"
import { marketingButtonVariants } from "@/lib/marketing-button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      data-header-theme="dark"
      className="relative flex min-h-[min(100svh,56rem)] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src={siteAssets.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(158,158,158,0.15)]" />
        <div className="absolute inset-0 bg-black/20" />
        <GrainOverlay opacity={0.18} />
      </div>

      <Container className="relative z-[1] max-w-[1280px]">
        <Stagger
          className="max-w-[36rem] text-left"
          variants={staggerTight}
        >
          <StaggerItem>
            <h1
              id="hero-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#e6f019]"
            >
              Finally see the real story of your player&apos;s development
            </h1>
          </StaggerItem>
          <StaggerItem>
            <Text variant="sans-lg" className="mt-4 text-white">
              PlayerPrint turns match film into clear development insight—so you
              can understand how your player is really performing, where
              they&apos;re improving, and what matters most right now.
            </Text>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-14 flex flex-col gap-6 md:mt-16 lg:mt-[4.5rem]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-12">
                <Link
                  href="#value"
                  className={cn(
                    marketingButtonVariants({ variant: "lime", size: "hero" })
                  )}
                >
                  Join the pilot
                  <MarketingArrowRight />
                </Link>
                <Link
                  href="#how-it-works"
                  className={cn(
                    marketingButtonVariants({ variant: "cream", size: "hero" })
                  )}
                >
                  Preview a sample
                  <MarketingArrowRight />
                </Link>
              </div>
              <Text variant="mono-md" className="text-white">
                Limited pilot. Free first month if accepted.
              </Text>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  )
}
