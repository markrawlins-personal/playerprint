export const siteConfig = {
  name: "PlayerPrint",
  tagline: "Objective insight from match film.",
  description:
    "PlayerPrint turns match film into clear, objective insight — so you can understand your player’s game, track their progress, and know what to focus on next.",
  url: "https://playerprint.com",
  links: {
    twitter: "https://twitter.com/playerprint",
    linkedin: "https://linkedin.com/company/playerprint",
    instagram: "https://instagram.com/playerprint",
  },
  email: "hello@playerprint.com",
} as const

export type NavItem = { label: string; href: string }

/** In-page anchors aligned to section ids (Figma single-page layout). */
export const mainNav: NavItem[] = [
  { label: "The problem", href: "#problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why PlayerPrint", href: "#value" },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "How it works", href: "#how-it-works" },
      { label: "The problem", href: "#problem" },
      { label: "Why PlayerPrint", href: "#value" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
]
