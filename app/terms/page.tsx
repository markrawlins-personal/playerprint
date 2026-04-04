import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/primitives/container"
import { Heading } from "@/components/primitives/heading"
import { Section } from "@/components/primitives/section"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${siteConfig.name}.`,
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <Section spacing="lg" className="pt-8">
      <Container size="narrow">
        <Heading level="h1" className="mb-6">
          Terms
        </Heading>
        <div className="max-w-none space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            This page is a placeholder until your counsel finalizes terms of
            use, acceptable use, and any sport-specific compliance addenda for{" "}
            {siteConfig.name}.
          </p>
          <p className="leading-relaxed">
            For questions about pilot agreements, contact{" "}
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
