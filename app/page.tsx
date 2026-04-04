import type { Metadata } from "next"

import { HomePageSections } from "@/components/sections/home-page-sections"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Finally see the real story of your player's development",
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
      <HomePageSections />
    </>
  )
}
