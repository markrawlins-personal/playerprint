import Image from "next/image"

import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionBadge } from "@/components/primitives/section-badge"
import { Container } from "@/components/primitives/container"
import { Text } from "@/components/primitives/text"
import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

const steps = [
  {
    n: "01",
    title: "Upload a match",
    body: "Record the game and upload the footage — that’s all you need to do.",
    icon: siteAssets.step1,
    bg: "bg-[#e6f0f5]",
  },
  {
    n: "02",
    title: "We analyze the game",
    body: "We break the match down using a professional-grade evaluation framework focused on decisions, tendencies, and behaviors that matter over time.",
    icon: siteAssets.step2,
    bg: "bg-[#d9e0e5]",
  },
  {
    n: "03",
    title: "Get your PlayerPrint",
    body: "Receive a clear, structured report that helps you understand where your player stands and what to focus on next.",
    icon: siteAssets.step3,
    bg: "bg-[#fff7ab]",
  },
] as const

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      data-header-theme="light"
      className="scroll-mt-24 bg-[#f6f6f0] px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="how-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 py-10 text-center">
          <SectionBadge>Playerprint</SectionBadge>
          <h2
            id="how-heading"
            className="font-serif text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.12] text-[#181717]"
          >
            How it works
          </h2>
        </div>

        <Stagger className="grid gap-0 md:grid-cols-3 md:items-stretch">
          {steps.map((step) => (
            <StaggerItem key={step.n} className="h-full min-h-0">
              <article
                className={cn(
                  "flex h-full min-h-[360px] flex-col p-8 transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10",
                  step.bg
                )}
              >
                <div className="flex min-h-[72px] w-full shrink-0 items-start justify-between gap-4">
                  <div className="relative size-[50px] shrink-0">
                    <Image
                      src={step.icon}
                      alt=""
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <span
                    className="shrink-0 font-mono text-xl font-normal uppercase leading-[1.3] tracking-[0.4px]"
                    style={{ color: "#434242" }}
                  >
                    {step.n}
                  </span>
                </div>
                <div className="mt-8 flex min-h-0 flex-1 flex-col gap-4 text-[#181717]">
                  <h3 className="font-mono text-xl font-normal uppercase leading-[1.3] tracking-[0.4px]">
                    {step.title}
                  </h3>
                  <Text variant="sans-base" className="text-pretty">
                    {step.body}
                  </Text>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
