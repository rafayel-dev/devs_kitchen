# DEVS KITCHEN — website

The official website for DEVS KITCHEN, an independent software studio.
_Digital products, cooked with code._

Next.js (App Router) · TypeScript · CSS Modules. No UI or animation libraries.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Contact email**: set `email` in `data/site.ts`. It currently uses the reserved `.example` domain on purpose.
2. **Site URL**: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://devskitchen.com`) in your hosting environment. Canonical links, the sitemap, robots.txt and Open Graph all use it.
3. **Products**: replace the placeholder entries in `data/products.ts` (see below).
4. **Legal**: review `data/legal.ts`. It describes the site as built: no cookies, analytics, forms or accounts. If you add any of those, update the policy, and have the final text reviewed professionally.
5. **Social links**: add real profiles to `site.social`. An empty list hides them.

## Editing content

| What | Where |
| --- | --- |
| Name, tagline, email, location, nav, social | `data/site.ts` |
| Products | `data/products.ts` |
| Principles ("How we build") | `data/principles.ts` |
| Privacy policy & terms | `data/legal.ts` |

### Adding a product

Append an object to `products` in `data/products.ts`. The home page, `/products`, `/products/[slug]`, the sitemap and metadata all pick it up.

```ts
{
  slug: "my-app",
  name: "My App",
  category: "Mobile application",
  status: "live",               // live | beta | in-development | coming-soon | experiment
  summary: "One line for cards.",
  description: ["Paragraph one.", "Paragraph two."],
  platforms: ["android"],
  image: { src: "/products/my-app/cover.png", alt: "…", width: 1600, height: 1000 },
  screenshots: [ /* same shape as image */ ],
  features: [{ title: "…", body: "…" }],
  technology: ["React Native", "TypeScript"],
  playStoreUrl: "https://play.google.com/store/apps/details?id=…",
  privacyUrl: "/products/my-app/privacy", // optional, otherwise the studio policy is used
  supportUrl: "mailto:…",                 // optional, otherwise /contact
}
```

- Leave any link undefined and its button is not rendered.
- Without an `image`, a line-drawn "interface plate" matching the category is shown.
- `placeholder: true` keeps an entry out of the sitemap and marks its page `noindex`. Remove it when the product is real.
- `SoftwareApplication` structured data is emitted for `live` and `beta` products.

## Structure

```
app/          routes, metadata, sitemap, robots, manifest, icons, OG image
components/   Navbar, Footer, Button, SectionHeading, PageHeader, CTA, …
  home/       homepage sections
  products/   ProductCard, ProductGrid, ProductPlate, StatusBadge, StoreLinks
data/         all editable content
```

## Design system

Tokens live at the top of `app/globals.css`: ink `#0f0f0d`, paper `#f3f0ea`, and a single burnt-orange accent (`--accent`) used sparingly. Type is Inter Tight (display/body), Instrument Serif italic (editorial accents) and JetBrains Mono (labels). Fonts are self-hosted through `next/font`.

Motion is limited to a hero entrance, one-time scroll reveals (`data-reveal`), hover details and a soft page cross-fade (React `<ViewTransition>`). All of it is disabled under `prefers-reduced-motion`, and content stays visible without JavaScript.
