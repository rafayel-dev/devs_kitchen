import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { mailto, site } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DEVS KITCHEN about a product, support, a partnership or an idea.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const topics = [
  { label: "A new idea or project", subject: "New project" },
  { label: "Help with one of our products", subject: "Product support" },
  { label: "Partnerships", subject: "Partnership" },
  { label: "Something else", subject: "Hello" },
];

const include = [
  "Who you are, and the best way to reach you.",
  "What you are working on, or the problem you want solved.",
  "Any timing or constraints that matter.",
  "Links, sketches or files that help explain it.",
];

const support = [
  "The name of the app or product.",
  "Your device and operating system version.",
  "What you expected, and what happened instead.",
  "A screenshot, if you can.",
];

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Contact"
        aside="Email is the fastest way"
        title="Let’s talk."
        intro="DEVS KITCHEN designs and builds software products — mobile apps, web products and digital tools. Whether you have a question, a problem or an idea, write to us."
      />

      <section className={`container ${styles.mailBlock}`} aria-labelledby="write">
        <h2 id="write" className="label muted">
          Write to us
        </h2>
        <a href={mailto()} className={styles.email}>
          {site.email}
          <span aria-hidden="true">→</span>
        </a>

        <div className={styles.topics}>
          <p className="label muted">Or start with a subject</p>
          <ul>
            {topics.map((t) => (
              <li key={t.subject}>
                <a href={mailto(t.subject)} className={styles.topic}>
                  {t.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`container ${styles.guides}`} aria-label="What to include">
        <div className={styles.guide} data-reveal>
          <h2 className="h3">What to include</h2>
          <ol>
            {include.map((line, i) => (
              <li key={line}>
                <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.guide} data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties}>
          <h2 className="h3">Using one of our apps?</h2>
          <p className="muted">For the quickest help, please mention:</p>
          <ol>
            {support.map((line, i) => (
              <li key={line}>
                <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageTransition>
  );
}
