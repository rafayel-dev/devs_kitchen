import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.6,
  }));

  // Placeholder products are noindex, so they stay out of the sitemap too.
  const productPages = products
    .filter((p) => !p.placeholder)
    .map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...pages, ...productPages];
}
