/**
 * Client services. Shown on the home page, /services and the contact form.
 * Only list what the studio actually delivers.
 */

export type Service = {
  slug: string;
  title: string;
  /** Short label for compact lists (hero "menu", form options). */
  short: string;
  tag: string;
  summary: string;
  deliverables: string[];
  stack?: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-apps",
    title: "Mobile app development",
    short: "Mobile apps",
    tag: "Android · iOS",
    summary:
      "Android and iOS apps built with React Native — one codebase, a native feel, ready for the stores.",
    deliverables: [
      "App design and clickable prototypes",
      "Android and iOS builds from a single codebase",
      "Backend, API and third-party integrations",
      "Google Play and App Store submission",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js"],
  },
  {
    slug: "web",
    title: "Web apps & websites",
    short: "Web apps & websites",
    tag: "Web",
    summary: "Fast, accessible websites and web applications that work well on every screen.",
    deliverables: [
      "Company websites and landing pages",
      "Web applications and dashboards",
      "Content management set-up",
      "Hosting, domains and deployment",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    slug: "design",
    title: "UI/UX design",
    short: "UI/UX design",
    tag: "Product design",
    summary:
      "Interfaces that are clear to use and consistent to build — from first flows to finished screens.",
    deliverables: [
      "User flows and wireframes",
      "Interface design for mobile and web",
      "Interactive prototypes",
      "Design systems and developer hand-off",
    ],
    stack: ["Figma"],
  },
  {
    slug: "mvp",
    title: "MVP development",
    short: "MVP for startups",
    tag: "Startups",
    summary:
      "For founders: a focused first version of your idea — designed, built and launched, ready for real users.",
    deliverables: [
      "Scoping session to define the first version",
      "Design and build of the core features",
      "Launch on the web or the app stores",
      "A clear roadmap for what comes next",
    ],
  },
  {
    slug: "support",
    title: "Maintenance & support",
    short: "Maintenance & support",
    tag: "Ongoing",
    summary: "Keep what you have launched healthy — updates, fixes and improvements over time.",
    deliverables: [
      "Bug fixes and dependency updates",
      "OS and app-store compliance updates",
      "Performance and security improvements",
      "New features as your product grows",
    ],
  },
];

/** How a client can work with the studio. No prices — every project is quoted individually. */
export const engagements = [
  {
    title: "Fixed-scope project",
    bestFor: "A defined product or website with a clear brief.",
    body: "Scope, timeline and cost agreed in writing before work starts. You know what you are getting and when.",
  },
  {
    title: "MVP sprint",
    bestFor: "Founders testing a new idea.",
    body: "A short, focused build of the features that matter most — enough to put in front of real users and learn.",
  },
  {
    title: "Ongoing partnership",
    bestFor: "Teams that need design and development on a continuing basis.",
    body: "A monthly arrangement for new features, improvements and support, planned together each month.",
  },
];

/** Client process — shared by the home page and /services. */
export const processSteps = [
  { name: "Discover", body: "A call to understand your goals, your users and your constraints." },
  { name: "Scope", body: "A written proposal with features, timeline and cost — agreed before any work begins." },
  { name: "Design", body: "User flows and interface designs that you review and approve." },
  { name: "Build", body: "Development in short cycles, with a working demo every week." },
  { name: "Launch", body: "Testing, store submission and deployment, handled end to end." },
  { name: "Support", body: "Fixes, updates and improvements after launch — we stay on." },
];
