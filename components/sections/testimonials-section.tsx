import Image from "next/image"

import { FadeIn } from "@/components/motion/fade-in"
import { Container } from "@/components/primitives/container"
import { Text } from "@/components/primitives/text"
import { siteAssets } from "@/lib/site-assets"

const starIcons = [
  siteAssets.star1,
  siteAssets.star2,
  siteAssets.star3,
] as const

const testimonials = [
  {
    quote:
      "For the first time, I could see what my daughter was working on — not just what the scoreboard said.",
    name: "Alex M.",
    role: "Parent",
    initials: "AM",
  },
  {
    quote:
      "The report gave us something concrete to discuss with her coach. It turned vague feedback into a plan.",
    name: "Jordan K.",
    role: "Parent",
    initials: "JK",
  },
  {
    quote:
      "We finally had language for what was improving and what still needed reps. Huge relief.",
    name: "Sam T.",
    role: "Parent",
    initials: "ST",
  },
] as const

/**
 * Three-up testimonial band. Reorder via `home-page-sections.tsx`.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-header-theme="light"
      className="relative scroll-mt-24 overflow-hidden bg-[#f6f6f0] px-4 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(24,23,23,0.1) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-[1] max-w-6xl">
        <FadeIn>
          <h2
            id="testimonials-heading"
            className="text-center font-serif text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.12] text-[#181717]"
          >
            What parents are saying
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {testimonials.map((t, index) => (
              <li
                key={t.name}
                className="flex flex-col rounded-none bg-white p-6"
              >
                <Image
                  src={starIcons[index]}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0 object-contain"
                  unoptimized
                  aria-hidden
                />
                <Text variant="sans-base" className="mt-4 flex-1 text-pretty text-[#181717]">
                  {t.quote}
                </Text>
                <div className="mt-6 flex items-center gap-3 pt-5">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eceae4] font-mono text-xs font-medium text-[#181717]"
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="font-sans text-sm font-medium leading-[1.46] text-[#181717]">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] font-normal uppercase leading-[1.3] tracking-[0.2px] text-[#434242]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  )
}
