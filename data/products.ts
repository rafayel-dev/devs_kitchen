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
    slug: "untitled-01",
    name: "Untitled No. 01",
    category: "Mobile application",
    status: "coming-soon",
    summary: "A focused mobile app for an everyday task. Name and details at launch.",
    description: [
      "Our first mobile application is in development for Android. We will publish its name, screenshots and full details here when it is ready to ship.",
      "This page will then link straight to Google Play, along with support and privacy information for the app.",
    ],
    platforms: ["android"],
    placeholder: true,
  },
  {
    slug: "untitled-02",
    name: "Untitled No. 02",
    category: "Digital tool",
    status: "in-development",
    summary: "A small, sharp utility built around one specific job.",
    description: [
      "A browser-based tool that does one thing well. It is being built and tested now; details will follow once it is ready for public use.",
    ],
    platforms: ["web"],
    placeholder: true,
  },
  {
    slug: "something-new",
    name: "Something new",
    category: "Experiment",
    status: "experiment",
    summary: "Ideas we are testing before they earn the right to become products.",
    description: [
      "Not everything we try becomes a product. Experiments are where we test an idea quickly and decide whether it is worth building properly.",
      "When one graduates, it gets its own page here.",
    ],
    platforms: [],
    placeholder: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productIndex = (slug: string) =>
  String(products.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
