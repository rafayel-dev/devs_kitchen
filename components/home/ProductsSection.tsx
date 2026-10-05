import { products } from "@/data/products";
import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";
import { ProductGrid } from "../products/ProductGrid";
import styles from "./ProductsSection.module.css";

export function ProductsSection() {
  return (
    <section className="section" aria-labelledby="cooking-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Our products"
          id="cooking-title"
          title="What’s cooking?"
          intro="We don’t only build for clients — we design, build and ship products of our own. It is the clearest proof of how we work."
        />
        <div className={styles.grid}>
          <ProductGrid products={products.slice(0, 3)} />
        </div>
        <div className={styles.foot}>
          <Button href="/products" variant="outline">
            All products
          </Button>
        </div>
      </div>
    </section>
  );
}
