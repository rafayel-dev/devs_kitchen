/**
 * Central site configuration.
 * Everything that identifies the company lives here — change it once, it updates everywhere.
 */

export type SocialLink = { label: string; href: string };

export const site = {
  name: "DEVS KITCHEN",
  shortName: "Devs Kitchen",
  tagline: "Digital products, cooked with code.",
  description:
    "DEVS KITCHEN is an independent software studio from Bangladesh, designing and building mobile applications, web products and digital tools for people everywhere.",

  /**
   * Production URL — used for canonical links, the sitemap and Open Graph.
   * Set NEXT_PUBLIC_SITE_URL in your hosting environment (e.g. https://devskitchen.dev.cv).
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://devskitchen.dev.cv").replace(/\/$/, ""),

  /**
   * Public contact address.
   */
  email: "hello@devskitchen.dev.cv",

  location: {
    country: "Bangladesh",
    countryCode: "BD",
    timeZone: "Asia/Dhaka",
    utcOffset: 6,
  },

  /** Add real profiles only (e.g. { label: "GitHub", href: "https://github.com/…" }). Empty = hidden. */
  social: [] as SocialLink[],

  nav: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  legalNav: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
