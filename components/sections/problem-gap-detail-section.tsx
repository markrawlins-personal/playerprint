import Image from "next/image"

import { FadeIn } from "@/components/motion/fade-in"
import { Container } from "@/components/primitives/container"
import { SectionBadge } from "@/components/primitives/section-badge"
import { siteAssets } from "@/lib/site-assets"

const cards = [
  {
    icon: siteAssets.advantageIcon1,
    title: "Where growth is happening",
  },
  {
    icon: siteAssets.advantageIcon2,
    title: "What needs more attention",
  },
  {
    icon: siteAssets.advantageIcon3,
    title: "How their game is evolving over time",
  },
] as const

/**
 * “The Advantage” band — matches Figma node 2:3386. Reorder via
 * `home-page-sections.tsx`.
 */
export function ProblemGapDetailSection() {
  return (
    <section
      id="problem-gap"
      data-header-theme="light"
      className="scroll-mt-24 bg-[#f6f6f0] px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="problem-gap-heading"
    >
      <Container className="max-w-[1280px]">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 sm:gap-10">
            <div className="flex w-full max-w-[768px] flex-col items-center gap-4 text-center">
              <SectionBadge>The Advantage</SectionBadge>
              <h2
                id="problem-gap-heading"
                className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#181717] md:text-[40px]"
              >
                PlayerPrint gives you a clearer view of your player&apos;s game
              </h2>
              <p className="font-sans text-lg font-normal leading-[1.46] text-[#181717] md:text-[22px]">
                Grounded in what consistently shows up on the field, not just
                what stands out in one moment.
              </p>
            </div>

            <div className="w-full px-0 sm:px-6 md:px-10">
              <ul className="grid w-full gap-6 md:grid-cols-3 md:gap-6">
                {cards.map(({ icon, title }) => (
                  <li
                    key={title}
                    className="flex min-h-[200px] flex-col justify-between bg-white p-8 md:p-10"
                  >
                    <div className="relative size-12 shrink-0">
                      <Image
                        src={icon}
                        alt=""
                        width={48}
                        height={48}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="font-serif text-lg font-normal leading-[1.3] tracking-[0.44px] text-[#181717] md:text-[22px]">
                      {title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
