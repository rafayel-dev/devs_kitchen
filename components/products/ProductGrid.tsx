import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className={styles.grid}>
      {products.map((p, i) => (
        <li key={p.slug} data-reveal style={{ "--reveal-delay": i } as React.CSSProperties}>
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}
