import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description: "Products designed and built in-house by DEVS KITCHEN — mobile applications, web products and digital tools.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products" },
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Built in-house"
        aside={`${String(products.length).padStart(2, "0")} entries`}
        title={
          <>
            Our <span className="serif">products.</span>
          </>
        }
        intro="Software we’re building, shipping and exploring for ourselves — designed and engineered by the same team that builds for our clients."
      />

      <section className="container" aria-label="All products">
        <ul className={styles.list}>
          {products.map((p) => (
            <li key={p.slug} data-reveal>
              <ProductCard product={p} layout="row" headingLevel="h2" />
            </li>
          ))}
        </ul>
        <p className={`label muted ${styles.note}`}>
          New products are announced here first.
        </p>
      </section>

      <CTA />
    </PageTransition>
  );
}
