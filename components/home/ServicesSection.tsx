import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          index="01"
          label="Services"
          id="services-title"
          title="What we can build for you."
          intro="Design and engineering in one team — from the first sketch to the store listing, and the updates after."
        />

        <ol className={styles.list}>
          {services.map((s, i) => (
            <li key={s.slug} data-reveal style={{ "--reveal-delay": i } as React.CSSProperties}>
              <Link href={`/services#${s.slug}`} className={styles.row}>
                <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={`muted ${styles.body}`}>{s.summary}</p>
                <span className={`label muted ${styles.tag}`}>{s.tag}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className={styles.foot}>
          <Button href="/services" variant="outline">
            All services
          </Button>
        </div>
      </div>
    </section>
  );
}
