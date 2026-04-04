import Image from "next/image"

import { FadeIn } from "@/components/motion/fade-in"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { SectionBadge } from "@/components/primitives/section-badge"
import { Container } from "@/components/primitives/container"
import { siteAssets } from "@/lib/site-assets"

export function ValueSection() {
  return (
    <section
      id="value"
      data-header-theme="dark"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="value-heading"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src={siteAssets.valueBackdrop}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <Image
          src={siteAssets.valueBackdropOverlay}
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <GrainOverlay opacity={0.1} />
      </div>

      <Container className="relative z-[1] max-w-[1280px]">
        <FadeIn>
          <div className="flex flex-col bg-[#282828] p-8 text-[#f6f6f0] sm:p-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex min-w-0 flex-1 flex-col gap-12">
              <div className="flex max-w-[360px] flex-col gap-10">
                <SectionBadge className="self-start bg-[#eceae4]">
                  PlayerPrint
                </SectionBadge>
                <div id="value-heading">
                  <p className="font-serif text-[28px] font-normal leading-[1.3] text-[#f6f6f0]">
                    PlayerPrint gives you a clear, unbiased view of your
                    player’s game —{" "}
                    <span className="font-serif italic">
                      grounded in what’s actually happening on the field.
                    </span>
                  </p>
                </div>
              </div>
              <ul
                className="max-w-[360px] list-none space-y-4 font-sans text-[24px] font-normal leading-[1.46] text-[#dbdbd6]"
                aria-label="What you will see"
              >
                <li>What’s working</li>
                <li>What needs to improve</li>
                <li>How your player is evolving</li>
              </ul>
            </div>

            <div className="relative mt-10 aspect-[4/3] w-full min-h-[280px] shrink-0 overflow-hidden bg-[#1a1a1a] lg:mt-0 lg:aspect-auto lg:h-[600px] lg:min-h-[600px] lg:flex-1">
              <Image
                src={siteAssets.valuePhoto}
                alt="Players competing on the field"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[rgba(251,238,3,0.5)] mix-blend-hue"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
