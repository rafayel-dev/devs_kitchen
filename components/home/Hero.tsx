import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Button } from "../Button";
import { LocalTime } from "../LocalTime";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={`label ${styles.meta}`}>
          <p>Design &amp; development studio</p>
          <p className={styles.route}>
            {site.location.country} <span aria-hidden="true">→</span>
            <span className="visually-hidden">to</span> Global
          </p>
          <p className={styles.clock}>
            <span className="muted">Local time</span> <LocalTime />{" "}
            <span className="muted">GMT+{site.location.utcOffset}</span>
          </p>
        </div>

        <div className={styles.titleWrap}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.mask}>
              <span className={styles.line}>DEVS</span>
            </span>{" "}
            <span className={styles.mask}>
              <span className={styles.line} style={{ "--d": "90ms" } as React.CSSProperties}>
                KITCHEN
              </span>
            </span>
          </h1>
          <p className={`serif ${styles.tagline}`}>{site.tagline}</p>
        </div>

        <div className={styles.lower}>
          <div className={styles.copy}>
            <p className="lead">
              We design and build mobile apps, web products and digital tools — for clients, and
              for ourselves. From first idea to launch, and after.
            </p>
            <div className={styles.actions}>
              <Button href={site.cta.href}>{site.cta.label}</Button>
              <Button href="/work" variant="secondary">
                See our work
              </Button>
            </div>
          </div>

          <aside className={styles.ticket} aria-label="Services">
            <div className={`label ${styles.ticketHead}`}>
              <span>The menu</span>
              <span className="muted">{String(services.length).padStart(2, "0")} services</span>
            </div>
            <ol>
              {services.map((s, i) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className={styles.ticketRow}>
                    <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.ticketName}>{s.short}</span>
                    <span className={`label muted ${styles.ticketTag}`}>{s.tag}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
