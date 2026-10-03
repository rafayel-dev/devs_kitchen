import { statusLabel, type ProductStatus } from "@/data/products";
import styles from "./StatusBadge.module.css";

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span className={`label ${styles.badge}`} data-status={status}>
      <span className={styles.dot} aria-hidden="true" />
      <span className="visually-hidden">Status: </span>
      {statusLabel[status]}
    </span>
  );
}
