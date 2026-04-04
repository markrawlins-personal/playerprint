export const siteConfig = {
  name: "PlayerPrint",
  tagline: "Objective insight from match film.",
  description:
    "PlayerPrint turns match film into clear development insight—so you can understand how your player is really performing, where they're improving, and what matters most right now.",
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
  { label: "The Gap", href: "#problem" },
  { label: "How PlayerPrint works", href: "#how-it-works" },
  { label: "Why PlayerPrint", href: "#value" },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "How PlayerPrint works", href: "#how-it-works" },
      { label: "The Gap", href: "#problem" },
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
