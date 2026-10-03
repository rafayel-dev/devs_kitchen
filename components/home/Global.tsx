import { site } from "@/data/site";
import { LocalTime } from "../LocalTime";
import styles from "./Global.module.css";

const offsets = Array.from({ length: 27 }, (_, i) => i - 12); // UTC−12 … UTC+14

const fmt = (n: number) => (n === 0 ? "UTC" : `${n > 0 ? "+" : "−"}${Math.abs(n)}`);

/**
 * A ruler of the world's time zones with home marked on it.
 * Geography told through time rather than a decorative globe.
 */
export function Global() {
  const home = site.location.utcOffset;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="global-title">
      <div className="container">
        <div className={styles.head}>
          <p className="label">
            <span className={styles.index}>07</span> <span className="muted">&nbsp;Where we are</span>
          </p>
          <h2 id="global-title" className={styles.title} data-reveal>
            Built in Bangladesh.
            <br />
            <span className="serif">Made for people everywhere.</span>
          </h2>
        </div>

        <figure className={styles.ruler} data-reveal>
          <ol className={styles.ticks} aria-hidden="true">
            {offsets.map((o) => (
              <li
                key={o}
                className={styles.tick}
                data-home={o === home || undefined}
                data-major={o % 6 === 0 || undefined}
                data-minor={o % 3 === 0 || undefined}
              >
                <span className={styles.mark} />
                <span className={`label ${styles.tickLabel}`}>{fmt(o)}</span>
              </li>
            ))}
          </ol>
          <figcaption className={styles.caption}>
            <p className="label">
              <span className={styles.dot} aria-hidden="true" />
              {site.location.country} · GMT+{home} · <LocalTime />
            </p>
            <p className="label muted">23.7° N, 90.4° E</p>
          </figcaption>
        </figure>

        <p className={`lead muted ${styles.copy}`} data-reveal>
          Our day starts at GMT+{home}. The software we make is meant for anyone, in any of these
          time zones — on whatever device they happen to carry.
        </p>
      </div>
    </section>
  );
}
