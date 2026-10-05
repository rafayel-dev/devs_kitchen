import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { mailto, site } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell DEVS KITCHEN about your project — mobile apps, web products, design or an MVP. Product support requests welcome too.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const nextSteps = [
  { title: "We read your brief", body: "And reply personally with questions or next steps." },
  { title: "Discovery call", body: "A short call to understand your goals, users and constraints." },
  { title: "Written proposal", body: "Scope, timeline and cost — agreed before any work starts." },
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
        aside="New projects & support"
        title="Let’s talk."
        intro="Tell us about your project — a few details are enough to start. We read every message and reply personally."
      />

      <div className={`container ${styles.layout}`}>
        <section className={styles.formCol} aria-labelledby="brief-title">
          <h2 id="brief-title" className={`label ${styles.colLabel}`}>
            <span className={styles.index}>01</span> Project brief
          </h2>
          <InquiryForm />
        </section>

        <aside className={styles.aside}>
          <div className={styles.asideBlock}>
            <h2 className={`label ${styles.colLabel}`}>
              <span className={styles.index}>02</span> Prefer email?
            </h2>
            <a href={mailto("New project")} className={styles.email}>
              {site.email}
            </a>
            {site.bookingUrl && (
              <Button href={site.bookingUrl} variant="outline">
                Book a call
              </Button>
            )}
          </div>

          <div className={styles.asideBlock}>
            <h2 className={`label ${styles.colLabel}`}>
              <span className={styles.index}>03</span> What happens next
            </h2>
            <ol className={styles.steps}>
              {nextSteps.map((s, i) => (
                <li key={s.title}>
                  <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className={styles.stepTitle}>{s.title}</p>
                    <p className="muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <section className={`container ${styles.support}`} aria-labelledby="support-title">
        <div className={styles.supportHead}>
          <h2 id="support-title" className="h3">
            Using one of our apps?
          </h2>
          <p className="muted">
            Email{" "}
            <a href={mailto("Product support")} className="link">
              {site.email}
            </a>{" "}
            and, for the quickest help, mention:
          </p>
        </div>
        <ol className={styles.supportList}>
          {support.map((line, i) => (
            <li key={line}>
              <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
              {line}
            </li>
          ))}
        </ol>
      </section>
    </PageTransition>
  );
}
