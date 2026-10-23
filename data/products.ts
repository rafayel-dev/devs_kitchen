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

/** What the drawn plate shows when there is no image: a category, or a specific interface. */
export type SketchKind = ProductCategory | "inbox";

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
  /** Which drawn plate to show without an image. Defaults to the category's sketch. */
  sketch?: SketchKind;
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
    slug: "ai-sales-desk",
    name: "AI Sales Desk",
    category: "Web product",
    status: "in-development",
    summary:
      "One inbox for website chat, Messenger, Instagram and WhatsApp — with an AI assistant that answers from each shop’s own catalog.",
    description: [
      "AI Sales Desk is a customer-support and sales platform for online sellers. Conversations from website chat, Facebook Messenger, Instagram and WhatsApp arrive in one shared inbox, where a team can reply, assign, tag and follow up together.",
      "An AI assistant answers customers using only the business’s own documents and product catalog. It can search products, check stock and prepare draft orders — and hands the conversation to a person when it does not know the answer.",
      "The platform is in active development. Website chat works end to end; Messenger, Instagram and WhatsApp are built and waiting on Meta’s app review before they go live.",
    ],
    platforms: ["web"],
    image: {
      src: "/products/ai-sales-desk/inbox.webp",
      alt: "The AI Sales Desk inbox: a Bangla customer conversation with agent replies and an internal note (demo workspace)",
      width: 1920,
      height: 900,
      fit: "contain",
    },
    screenshots: [
      {
        src: "/products/ai-sales-desk/products.webp",
        alt: "The product catalog with prices and stock levels (demo workspace)",
        width: 1600,
        height: 583,
      },
      {
        src: "/products/ai-sales-desk/widget.webp",
        alt: "The website chat widget on a phone, showing the customer’s side of the conversation (demo workspace)",
        width: 780,
        height: 947,
      },
      {
        src: "/products/ai-sales-desk/order.webp",
        alt: "An order created from the conversation, with totals, delivery details and history (demo workspace)",
        width: 740,
        height: 960,
      },
    ],
    features: [
      {
        title: "One shared inbox",
        body: "Website chat, Messenger, Instagram and WhatsApp in a single realtime inbox, with assignment, tags, notes and priorities.",
      },
      {
        title: "Answers from your own catalog",
        body: "The assistant replies from the shop’s uploaded documents and products, and hands over to a person when it is not sure.",
      },
      {
        title: "Orders inside the chat",
        body: "Search products, check stock and create orders with server-side pricing, without leaving the conversation.",
      },
      {
        title: "Website chat widget",
        body: "A lightweight chat widget that any shop can add to its website with a single snippet.",
      },
    ],
    technology: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "pgvector", "Redis", "BullMQ", "Socket.IO"],
  },
  {
    slug: "office-erp",
    name: "Office ERP",
    category: "Web product",
    status: "in-development",
    summary:
      "An HR and office ERP for growing teams — attendance, leave, payroll, expenses and projects in one dashboard.",
    description: [
      "Office ERP brings the day-to-day running of an office into one place. Employees check in, apply for leave, claim expenses and raise support tickets; managers, HR and finance approve, run payroll and see reports.",
      "Every screen adapts to the person signed in. Six roles — from employee to admin — decide what each person can see and approve, and leave requests move through a manager and then HR before they are final.",
      "It is currently an interactive prototype: the full interface and workflows run in the browser on demo data, ready to be connected to a backend.",
    ],
    platforms: ["web"],
    image: {
      src: "/products/office-erp/dashboard.webp",
      alt: "The Office ERP dashboard: an employee profile, geofenced check-in and a monthly attendance calendar (demo company)",
      width: 1600,
      height: 900,
      fit: "contain",
    },
    screenshots: [
      {
        src: "/products/office-erp/leave.webp",
        alt: "Leave requests with a two-step manager and HR approval chain (demo company)",
        width: 1600,
        height: 820,
      },
      {
        src: "/products/office-erp/payroll.webp",
        alt: "Monthly payroll with earnings, deductions, net pay and payslips (demo company)",
        width: 1600,
        height: 900,
      },
      {
        src: "/products/office-erp/projects.webp",
        alt: "A project kanban board with tasks in To do, In progress, Under review and Completed (demo company)",
        width: 1600,
        height: 900,
      },
    ],
    features: [
      {
        title: "Geofenced attendance",
        body: "Check in from inside the office radius or with a QR code, against shifts with grace periods.",
      },
      {
        title: "Two-step leave approval",
        body: "Requests go to the employee’s manager, then HR, with balances for each leave type.",
      },
      {
        title: "Payroll and payslips",
        body: "Run monthly payroll with allowances and deductions, issue payslips and handle salary advances.",
      },
      {
        title: "Role-based access",
        body: "Six roles, from employee to admin, decide what each person can see, edit and approve.",
      },
    ],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Table", "Recharts"],
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
