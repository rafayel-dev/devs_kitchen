import type { Metadata } from "next";
import { Button } from "@/components/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={`container ${styles.wrap}`}>
      <p className={`label ${styles.rail}`}>
        <span>Error 404</span>
        <span className="muted">Not on the menu</span>
      </p>
      <h1 className={styles.title}>
        Nothing cooking <span className="serif">here.</span>
      </h1>
      <p className="lead muted">The page you were looking for has moved, or never existed.</p>
      <div className={styles.actions}>
        <Button href="/">Back to the home page</Button>
        <Button href="/products" variant="secondary">
          See our products
        </Button>
      </div>
    </section>
  );
}
