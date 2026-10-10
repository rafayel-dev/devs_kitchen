/**
 * Case studies — client projects and in-house products, told as stories.
 *
 * To add one: append to `work`. /work, /work/[slug], the home page and the
 * sitemap pick it up. Only publish real projects, with the client's permission.
 */

import type { ProductImage, SketchKind } from "./products";

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
  /** Drawn plate shown when there is no cover image. */
  sketch?: SketchKind;
  /** Extra screens shown on the case study, each with a short caption. */
  gallery?: (ProductImage & { caption: string })[];
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
    slug: "ai-sales-desk",
    title: "AI Sales Desk",
    client: "In-house product",
    inHouse: true,
    summary:
      "An omnichannel inbox with an AI sales assistant for online sellers — architecture, design and engineering by DEVS KITCHEN.",
    services: ["Product strategy", "System architecture", "UI/UX design", "Web development", "AI integration"],
    platforms: ["Web", "Messenger", "Instagram", "WhatsApp"],
    status: "In development",
    cover: {
      src: "/products/ai-sales-desk/inbox.webp",
      alt: "The AI Sales Desk inbox: a Bangla customer conversation with agent replies and an internal note (demo workspace)",
      width: 1920,
      height: 900,
      fit: "contain",
    },
    gallery: [
      {
        src: "/products/ai-sales-desk/products.webp",
        alt: "The product catalog with prices and stock levels (demo workspace)",
        width: 1600,
        height: 583,
        caption: "Catalog — the prices and stock the team and the assistant quote",
      },
      {
        src: "/products/ai-sales-desk/widget.webp",
        alt: "The website chat widget on a phone, showing the customer’s side of the conversation (demo workspace)",
        width: 780,
        height: 947,
        caption: "Website chat widget — the customer’s side, on a phone",
      },
      {
        src: "/products/ai-sales-desk/order.webp",
        alt: "An order created from the conversation, with totals, delivery details and history (demo workspace)",
        width: 740,
        height: 960,
        caption: "Orders — created from the conversation, with full history",
      },
    ],
    challenge: [
      "Online sellers often take orders through a Facebook page, Instagram, WhatsApp and their own website at the same time. Customer questions arrive in four different apps, and the same few questions — price, size, stock, delivery — fill the day.",
      "They need one place to answer everyone, and help with the repetitive questions — without an AI that invents prices or promises stock that is not there.",
    ],
    approach: [
      "We brought every channel into a single realtime inbox. Messages from the website widget, Messenger, Instagram and WhatsApp share one write path, so each is stored, de-duplicated and delivered the same way.",
      "The AI assistant is deliberately constrained. It answers only from the shop’s own documents and catalog, uses a small set of strictly validated tools — search products, check stock, draft an order — and hands the conversation to a person when it is not confident. Prices are always calculated on the server, never by the model.",
      "Each business’s data is isolated at the database level with row-level security, and every phase shipped against written acceptance tests — including concurrency tests for stock and duplicate-webhook tests for messaging.",
    ],
    highlights: [
      {
        title: "Realtime omnichannel inbox",
        body: "Assignment, tags, notes, priorities and live typing across website chat, Messenger, Instagram and WhatsApp.",
      },
      {
        title: "Grounded AI assistant",
        body: "Retrieval from the shop’s own knowledge base with pgvector, strict tool validation and hand-off to a person.",
      },
      {
        title: "Commerce in the conversation",
        body: "Products, variants, inventory and orders, with server-side pricing and duplicate-safe order creation.",
      },
      {
        title: "Embeddable chat widget",
        body: "A 57 KB widget isolated in shadow DOM, added to any website with one snippet.",
      },
      {
        title: "Automation rules",
        body: "Versioned, loop-protected rules that tag, assign, prioritise or reply when a message or order matches.",
      },
      {
        title: "Multi-tenant by design",
        body: "Row-level security on every table keeps each business’s data separate from every other.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Redis",
      "BullMQ",
      "Socket.IO",
    ],
    outcome: [
      "The core platform is built and tested. Website chat works end to end, and the inbox, AI assistant, commerce, billing and automation pass their automated test suites.",
      "Messenger, Instagram and WhatsApp are code-complete and waiting on Meta’s app review. The AI assistant will be evaluated with a production model before launch.",
    ],
    productSlug: "ai-sales-desk",
  },
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
