import type { Metadata } from "next"

import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { ValueSection } from "@/components/sections/value-section"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "See how your player is actually developing",
  description: siteConfig.description,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ValueSection />
    </>
  )
}
