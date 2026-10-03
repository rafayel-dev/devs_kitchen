import Link from "next/link";
import { products, statusLabel } from "@/data/products";
import { site } from "@/data/site";
import { Button } from "../Button";
import { LocalTime } from "../LocalTime";
import styles from "./Hero.module.css";

export function Hero() {
  const stove = products.slice(0, 4);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={`label ${styles.meta}`}>
          <p>Independent software studio</p>
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
              We design and build useful software, mobile applications and digital products — from
              idea to launch.
            </p>
            <div className={styles.actions}>
              <Button href="/products">Explore our products</Button>
              <Button href="/about" variant="secondary">
                About DEVS KITCHEN
              </Button>
            </div>
          </div>

          <aside className={styles.ticket} aria-label="Currently in the kitchen">
            <div className={`label ${styles.ticketHead}`}>
              <span>On the stove</span>
              <span className="muted">{String(stove.length).padStart(2, "0")} items</span>
            </div>
            <ol>
              {stove.map((p, i) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className={styles.ticketRow}>
                    <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.ticketName}>{p.name}</span>
                    <span className={`label ${styles.ticketStatus}`} data-status={p.status}>
                      {statusLabel[p.status]}
                    </span>
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
