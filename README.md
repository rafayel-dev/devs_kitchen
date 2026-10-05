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

1. **Project form**: create a free access key at [web3forms.com](https://web3forms.com) and set `NEXT_PUBLIC_WEB3FORMS_KEY` in your hosting environment. Without it, the form still works by opening the visitor's email app with the brief filled in.
2. **Booking link** (optional): put a Calendly or similar URL in `site.bookingUrl`. A "Book a call" button then appears on /contact.
3. **Team** (optional): add real people to `data/team.ts`. The team section on /about stays hidden while the list is empty.
4. **App privacy policies**: every app needs its own policy before release. Set `privacyUrl` on the product. Until then its page says the policy will be published before launch.
5. **Legal**: review `data/legal.ts`. Have the final text reviewed professionally.
6. **Social links**: add real profiles to `site.social`. An empty list hides them.

## Editing content

| What | Where |
| --- | --- |
| Name, tagline, email, nav, CTA, form key, booking link | `data/site.ts` |
| Services, engagement models, client process | `data/services.ts` |
| Case studies (/work) | `data/work.ts` |
| Own products (/products) | `data/products.ts` |
| Team | `data/team.ts` |
| Principles ("How we build") | `data/principles.ts` |
| Privacy policy & terms | `data/legal.ts` |

### Adding a case study

Append to `work` in `data/work.ts`. Only publish real projects, and only with the client's permission. Set `inHouse: true` for the studio's own products, so they are clearly labelled and never mistaken for client work.

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
  image: { src: "/products/my-app/cover.webp", alt: "…", width: 1600, height: 1000 },
  // For logos or wide banners that must not be cropped:
  // image: { …, fit: "contain", background: "#hex or CSS gradient matching the image edges" },
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
app/          routes (/, /services, /work, /products, /about, /contact, legal), metadata, sitemap, icons
components/   Navbar, Footer, Button, SectionHeading, PageHeader, CTA, …
  home/       homepage sections
  products/   ProductCard, ProductGrid, ProductPlate, StatusBadge, StoreLinks
  work/       WorkCard
  contact/    InquiryForm
data/         all editable content
```

## Design system

Tokens live at the top of `app/globals.css`: ink `#0f0f0d`, paper `#f3f0ea`, and a single burnt-orange accent (`--accent`) used sparingly. Type is Inter Tight (display/body), Instrument Serif italic (editorial accents) and JetBrains Mono (labels). Fonts are self-hosted through `next/font`.

Motion is limited to a hero entrance, one-time scroll reveals (`data-reveal`), hover details and a soft page cross-fade (React `<ViewTransition>`). All of it is disabled under `prefers-reduced-motion`, and content stays visible without JavaScript.
