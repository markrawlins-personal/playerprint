import Image from "next/image"
import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { GrainOverlay } from "@/components/primitives/grain-overlay"
import { SectionBadge } from "@/components/primitives/section-badge"
import { Container } from "@/components/primitives/container"
import { MarketingArrowRight } from "@/components/primitives/marketing-arrow-right"
import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

const featureCards = [
  {
    n: "01",
    title: "A clear breakdown of what actually happened",
    description: "Not just highlights or general impressions.",
  },
  {
    n: "02",
    title:
      "Where your player is making strong decisions—and where they’re not",
    description: "Specific, grounded, useful.",
  },
  {
    n: "03",
    title: "The clearest areas to focus on next",
    description: "So training feels more targeted.",
  },
  {
    n: "04",
    title: "Patterns that show how their game is evolving over time",
    description:
      "Because development is about what repeats, not just what flashes.",
  },
] as const

/**
 * “After each match” value band — matches Figma node 2:1315.
 */
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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-10 bg-[#282828] p-8 sm:p-10 lg:flex-row lg:items-stretch lg:gap-12 lg:p-10">
              <div className="flex min-w-0 flex-1 flex-col gap-10">
                <div className="flex max-w-[360px] flex-col gap-10">
                  <SectionBadge className="self-start bg-[#eceae4]">
                    After each match
                  </SectionBadge>
                  <div id="value-heading">
                    <p className="font-serif text-[28px] font-normal leading-[1.3] text-[#f6f6f0]">
                      After each match, you&apos;ll get a clearer picture of{" "}
                      <span className="font-serif italic">
                        how your player is developing
                      </span>
                    </p>
                  </div>
                </div>
                <p className="max-w-[360px] font-sans text-lg font-normal leading-[1.46] text-[#dbdbd6]">
                  Insights are framed the way elite coaches think about the game.
                  See patterns, not just moments.
                </p>
              </div>

              <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-end">
                <div className="flex w-full max-w-[452px] flex-col justify-between gap-8 bg-white p-8 text-[#181717] min-h-[320px] sm:p-10 lg:min-h-[393px]">
                  <div className="flex w-full items-start justify-between gap-4">
                    <div
                      className="h-[46px] w-[37px] shrink-0 bg-[#eceae4]"
                      style={{
                        maskImage: `url("${siteAssets.logoShield}")`,
                        WebkitMaskImage: `url("${siteAssets.logoShield}")`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                      aria-hidden
                    />
                    <div className="inline-flex items-center justify-center rounded-full bg-[#eceae4] px-2 py-1">
                      <span className="font-mono text-[10px] font-normal uppercase leading-[1.3] tracking-[0.2px] text-[#181717]">
                        Sample
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-serif text-[22px] font-normal leading-[1.3] tracking-[0.44px]">
                      Maya Rivera - PlayerPrint
                    </p>
                    <p className="font-sans text-base font-normal leading-[1.3] tracking-[0.32px]">
                      Bay Area Surf vs Pacifica United · CM · 5 clips
                    </p>
                  </div>
                  <Link
                    href="#how-it-works"
                    className={cn(
                      "inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-full border border-[#181717]/20 bg-white px-6 py-2.5 font-mono text-sm font-medium leading-[1.46] text-[#181717] transition-[transform,box-shadow] duration-200 ease-out hover:bg-[#f6f6f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181717]/40 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 [&_img]:pointer-events-none [&_img]:shrink-0"
                    )}
                  >
                    View sample
                    <MarketingArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((card) => (
                <li
                  key={card.n}
                  className="flex flex-col gap-6 bg-[#282828] p-8 text-left sm:p-10"
                >
                  <span className="font-mono text-xl font-normal uppercase leading-[1.3] tracking-[0.4px] text-[#d9e0e5]">
                    {card.n}
                  </span>
                  <p className="font-serif text-[22px] font-normal leading-[1.3] tracking-[0.44px] text-white text-pretty">
                    {card.title}
                  </p>
                  <p className="font-sans text-sm font-normal leading-[1.46] tracking-[0.28px] text-[#dbdbd6]">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
