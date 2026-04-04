import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/primitives/container"
import { marketingButtonVariants } from "@/lib/marketing-button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sign in",
  description: `Sign in to ${siteConfig.name}.`,
  robots: { index: false, follow: true },
}

export default function SignInPage() {
  return (
    <section className="bg-[#f6f6f0] px-4 py-24">
      <Container size="narrow" className="text-center">
        <h1 className="font-serif text-3xl font-normal text-[#181717]">
          Sign in
        </h1>
        <p className="mt-4 font-sans text-[#434242]">
          Authentication is not wired yet. Leave your email with the team or
          return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn(marketingButtonVariants({ variant: "lime" }))}
          >
            Email us
          </a>
          <Link
            href="/"
            className={cn(marketingButtonVariants({ variant: "cream" }))}
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  )
}
