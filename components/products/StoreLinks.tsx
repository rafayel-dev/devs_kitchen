import type { Product } from "@/data/products";
import { Button } from "../Button";
import styles from "./StoreLinks.module.css";

/** Renders only the links that exist. No URL, no button. */
export function StoreLinks({ product }: { product: Product }) {
  const links = [
    product.playStoreUrl && { href: product.playStoreUrl, label: "Get it on Google Play" },
    product.appStoreUrl && { href: product.appStoreUrl, label: "Download on the App Store" },
    product.websiteUrl && { href: product.websiteUrl, label: "Visit website" },
  ].filter(Boolean) as { href: string; label: string }[];

  if (!links.length) return null;

  return (
    <div className={styles.links}>
      {links.map((l, i) => (
        <Button key={l.href} href={l.href} variant={i === 0 ? "primary" : "outline"}>
          {l.label}
        </Button>
      ))}
    </div>
  );
}
