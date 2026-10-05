import { site } from "@/data/site";
import { Button } from "./Button";
import styles from "./CTA.module.css";

export function CTA() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="cta-title" className={styles.title} data-reveal>
            Have an idea?
          </h2>
          <div className={styles.side} data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            <p className={`serif ${styles.line}`}>Let’s see what we can cook.</p>
            <div className={styles.actions}>
              <Button href={site.cta.href}>{site.cta.label}</Button>
              <a href={`mailto:${site.email}`} className={`link ${styles.email}`}>
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
