import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { PilotCtaSection } from "@/components/sections/pilot-cta-section"
import { ProblemGapDetailSection } from "@/components/sections/problem-gap-detail-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ValueSection } from "@/components/sections/value-section"

/**
 * Homepage section order. Reorder the JSX below to change on-page flow without
 * editing individual section components.
 */
export function HomePageSections() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProblemGapDetailSection />
      <ValueSection />
      <HowItWorksSection />
      <PilotCtaSection />
      <TestimonialsSection />
    </>
  )
}
