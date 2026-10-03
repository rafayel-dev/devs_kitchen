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
          index="02"
          label="Products"
          id="cooking-title"
          title="What’s cooking?"
          intro="A look at the products and experiments coming out of DEVS KITCHEN."
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
