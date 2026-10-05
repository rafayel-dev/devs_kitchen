/**
 * Products — the single source of truth for everything DEVS KITCHEN ships.
 *
 * To add a product: append an object to `products`. The home page, /products,
 * /products/[slug], the sitemap and metadata all pick it up automatically.
 *
 * Links are optional. Any link left undefined is simply not rendered —
 * never add a placeholder URL.
 */

export type ProductCategory = "Mobile application" | "Web product" | "Digital tool" | "Experiment";

export type ProductStatus = "live" | "beta" | "in-development" | "coming-soon" | "experiment";

export type Platform = "android" | "ios" | "web" | "windows" | "macos" | "linux";

export type ProductFeature = { title: string; body: string };

export type ProductImage = {
  src: string; // path under /public, e.g. "/products/my-app/cover.png"
  alt: string;
  width: number;
  height: number;
  /** "cover" fills the frame and may crop; "contain" shows the whole image. Default: cover. */
  fit?: "cover" | "contain";
  /** Frame background behind a contained image — match the image's own edges. Any CSS background. */
  background?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  /** One line. Shown on cards. */
  summary: string;
  /** Longer copy for the product page. One string per paragraph. */
  description: string[];
  platforms: Platform[];
  /** Cover image. Without one, a drawn interface plate is shown instead. */
  image?: ProductImage;
  screenshots?: ProductImage[];
  features?: ProductFeature[];
  technology?: string[];

  websiteUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  /** Support page or mailto:. Falls back to the studio contact page. */
  supportUrl?: string;
  /** App-specific privacy policy. Falls back to the studio privacy policy. */
  privacyUrl?: string;

  /** Marks entries that are stand-ins until real details are announced. */
  placeholder?: boolean;
};

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  beta: "In beta",
  "in-development": "In development",
  "coming-soon": "Coming soon",
  experiment: "In the kitchen",
};

export const platformLabel: Record<Platform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web",
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

export const products: Product[] = [
  {
    slug: "boopaw",
    name: "BooPaw",
    category: "Mobile application",
    status: "in-development",
    summary: "Digital pet ID, smart QR collar tags and lost & found pet network.",
    description: [
      "BooPaw gives pet owners a digital identity for their pets with unique, secure QR collar tags. If a pet ever goes missing, anyone who finds it can scan the tag with their phone camera to instantly view emergency information and contact the owner safely.",
      "The companion mobile application provides owners with instant scan notifications, lost pet community alerts, digital health documents, photo diary, and walk tracking for dogs and cats.",
      "Currently in active development for Android and iOS, built with React Native and modern web technologies.",
    ],
    platforms: ["android", "ios"],
    image: {
      src: "/products/boopaw/cover.webp",
      alt: "BooPaw app screens: a digital pet ID card and a lost pet alert",
      width: 1024,
      height: 500,
      fit: "contain",
      background: "linear-gradient(90deg, #fff4f6, #fcd0db)",
    },
    features: [
      {
        title: "Smart QR collar tags",
        body: "Instant identification scannable by any standard phone camera without requiring an app installation.",
      },
      {
        title: "Lost & found community network",
        body: "Real-time scan alerts with approximate location and neighborhood pet broadcast system.",
      },
      {
        title: "Digital pet passport",
        body: "Securely store vaccination records, dietary needs, medical history, and emergency vet contacts.",
      },
      {
        title: "Health & activity diary",
        body: "Track daily walks, photo diary memories, and pet wellness milestones in one place.",
      },
    ],
    technology: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB"],
    websiteUrl: "https://boopaw.app",
    supportUrl: "mailto:hello@devskitchen.dev.cv?subject=BooPaw%20Support",
  },
  {
    slug: "studio-tools",
    name: "Studio Tools",
    category: "Digital tool",
    status: "in-development",
    summary: "Focused developer utilities and browser tools built for everyday workflows.",
    description: [
      "A collection of purposeful web tools crafted to solve specific workflow friction points. Designed to be fast, private, and lightweight without bloat.",
    ],
    platforms: ["web"],
    technology: ["TypeScript", "Next.js", "Web APIs"],
  },
  {
    slug: "studio-lab",
    name: "Studio Lab",
    category: "Experiment",
    status: "experiment",
    summary: "Experimental prototypes and software concepts currently in exploration.",
    description: [
      "Our sandbox for exploring new interactions, mobile experiments, and emerging technologies before they graduate into full products.",
    ],
    platforms: ["web", "android"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productIndex = (slug: string) =>
  String(products.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
