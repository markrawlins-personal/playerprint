import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/primitives/container"
import { Heading } from "@/components/primitives/heading"
import { Section } from "@/components/primitives/section"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy practices for ${siteConfig.name}.`,
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <Section spacing="lg" className="pt-8">
      <Container size="narrow">
        <Heading level="h1" className="mb-6">
          Privacy
        </Heading>
        <div className="max-w-none space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            This page is a placeholder privacy summary until your legal counsel
            provides final copy. {siteConfig.name} respects your data and will
            publish a complete policy before collecting information beyond
            standard website analytics.
          </p>
          <p className="leading-relaxed">
            Questions? Reach us at{" "}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  )
}
