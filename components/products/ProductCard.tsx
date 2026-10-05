import Link from "next/link";
import { platformLabel, productIndex, type Product } from "@/data/products";
import { ProductPlate } from "./ProductPlate";
import { StatusBadge } from "./StatusBadge";
import { StoreLinks } from "./StoreLinks";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  layout?: "card" | "row";
  headingLevel?: "h2" | "h3";
};

export function ProductCard({ product, layout = "card", headingLevel: H = "h3" }: Props) {
  const index = productIndex(product.slug);
  const href = `/products/${product.slug}`;

  if (layout === "row") {
    return (
      <article className={styles.row}>
        <Link href={href} className={styles.rowPlate} tabIndex={-1} aria-hidden="true">
          <ProductPlate
            index={index}
            label={product.category}
            image={product.image}
            category={product.category}
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </Link>

        <div className={styles.rowBody}>
          <div className={`label ${styles.meta}`}>
            <span className={styles.index}>{index}</span>
            <span className="muted">{product.category}</span>
            <StatusBadge status={product.status} />
          </div>

          <H className={styles.rowName}>
            <Link href={href}>{product.name}</Link>
          </H>
          <p className={`lead muted ${styles.summary}`}>{product.summary}</p>

          <dl className={styles.facts}>
            <div>
              <dt className="label muted">Platform</dt>
              <dd>
                {product.platforms.length
                  ? product.platforms.map((p) => platformLabel[p]).join(", ")
                  : "To be decided"}
              </dd>
            </div>
          </dl>

          <div className={styles.rowActions}>
            <StoreLinks product={product} />
            <Link href={href} className={`${styles.more} link`}>
              Product details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.cardLink}>
        <ProductPlate index={index} label={product.category} image={product.image} category={product.category} />
        <div className={`label ${styles.meta}`}>
          <span className={styles.index}>{index}</span>
          <StatusBadge status={product.status} />
        </div>
        <H className={styles.name}>{product.name}</H>
        <p className={`label muted ${styles.category}`}>{product.category}</p>
        <p className={`muted ${styles.summary}`}>{product.summary}</p>
        <span className={styles.view}>
          View <span aria-hidden="true">→</span>
        </span>
      </Link>
    </article>
  );
}
