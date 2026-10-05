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
    "DEVS KITCHEN is a software studio from Bangladesh. We design and build mobile apps, web products and digital tools for clients worldwide — and ship products of our own.",

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

  /**
   * Project inquiry form. Create a free access key at https://web3forms.com and set
   * NEXT_PUBLIC_WEB3FORMS_KEY in your hosting environment. Without a key, the form
   * opens the visitor's email app with their answers filled in instead.
   */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",

  /** Optional booking link (e.g. a Calendly URL). Empty = hidden. */
  bookingUrl: "",

  /** Add real profiles only (e.g. { label: "GitHub", href: "https://github.com/…" }). Empty = hidden. */
  social: [] as SocialLink[],

  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  cta: { label: "Start a project", href: "/contact" },

  legalNav: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
