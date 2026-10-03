import Link from "next/link";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`on-ink ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Wordmark className={styles.wordmark} />
            <p className={`serif ${styles.tagline}`}>{site.tagline}</p>
          </div>

          <nav className={styles.col} aria-label="Footer">
            <p className="label muted">Studio</p>
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <p className="label muted">Legal</p>
            <ul>
              {site.legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className="label muted">Write to us</p>
            <ul>
              <li>
                <a href={`mailto:${site.email}`} className={styles.link}>
                  {site.email}
                </a>
              </li>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`label muted ${styles.bottom}`}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built in {site.location.country}</p>
        </div>
      </div>
    </footer>
  );
}
