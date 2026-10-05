/**
 * Case studies — client projects and in-house products, told as stories.
 *
 * To add one: append to `work`. /work, /work/[slug], the home page and the
 * sitemap pick it up. Only publish real projects, with the client's permission.
 */

import type { ProductImage } from "./products";

export type CaseStudy = {
  slug: string;
  title: string;
  /** Client name, or "In-house product" for the studio's own work. */
  client: string;
  /** True for the studio's own products — labelled so they are never mistaken for client work. */
  inHouse?: boolean;
  summary: string;
  services: string[];
  platforms: string[];
  /** Free text, e.g. "Launched 2026" or "In development". */
  status: string;
  cover?: ProductImage;
  challenge: string[];
  approach: string[];
  highlights?: { title: string; body: string }[];
  stack?: string[];
  outcome: string[];
  /** Related entry in data/products.ts, for in-house products. */
  productSlug?: string;
  websiteUrl?: string;
};

export const work: CaseStudy[] = [
  {
    slug: "boopaw",
    title: "BooPaw",
    client: "In-house product",
    inHouse: true,
    summary:
      "A digital pet ID and lost-and-found network — strategy, design and engineering by DEVS KITCHEN.",
    services: ["Product strategy", "UI/UX design", "Mobile app development", "Web development"],
    platforms: ["Android", "iOS", "Web"],
    status: "In development",
    cover: {
      src: "/products/boopaw/cover.webp",
      alt: "BooPaw app screens: a digital pet ID card and a lost pet alert",
      width: 1024,
      height: 500,
      fit: "contain",
      background: "linear-gradient(90deg, #fff4f6, #fcd0db)",
    },
    challenge: [
      "When a pet goes missing, the person who finds it rarely has a quick way to reach the owner. A collar tag holds a phone number at best, and a microchip needs a vet or shelter to read it.",
      "We wanted anyone — with any phone, and no app installed — to be able to help a lost pet get home.",
    ],
    approach: [
      "We started from the moment of finding a lost pet. That shaped the core idea: a QR collar tag that opens the pet’s emergency profile straight from the phone camera.",
      "For owners, a companion app brings scan alerts, a community lost-pet network, health records and daily care together in one place. We designed the flows first, then built the app in React Native so Android and iOS share one codebase.",
    ],
    highlights: [
      { title: "No app needed to help", body: "Anyone who finds a pet scans the tag with a normal phone camera." },
      { title: "Instant scan alerts", body: "Owners are notified when their pet’s tag is scanned." },
      { title: "Digital pet passport", body: "Vaccinations, medical notes and vet contacts in one secure place." },
      { title: "One codebase", body: "Android and iOS built together with React Native and Expo." },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB"],
    outcome: [
      "BooPaw is in active development for Android and iOS. This case study will be updated with launch details.",
    ],
    productSlug: "boopaw",
    websiteUrl: "https://boopaw.app",
  },
];

export const getCaseStudy = (slug: string) => work.find((w) => w.slug === slug);
