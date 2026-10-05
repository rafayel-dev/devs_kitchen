import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { Engagements } from "@/components/home/Engagements";
import { Process } from "@/components/home/Process";
import { services } from "@/data/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development, web apps and websites, UI/UX design, MVP development and ongoing support — by DEVS KITCHEN.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Services"
        aside="Design · Development · Support"
        title={
          <>
            Built for you, <span className="serif">end to end.</span>
          </>
        }
        intro="One team for design and engineering. We take a product from the first conversation to launch — and keep it healthy afterwards."
      />

      <div className="container">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className={styles.service} aria-labelledby={`${s.slug}-title`}>
            <p className={`label ${styles.meta}`}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <span className="muted">{s.tag}</span>
            </p>
            <div className={styles.body} data-reveal>
              <h2 id={`${s.slug}-title`} className={styles.title}>
                {s.title}
              </h2>
              <p className={`lead muted ${styles.summary}`}>{s.summary}</p>
              <div className={styles.cols}>
                <div>
                  <h3 className="label muted">What you get</h3>
                  <ul className={styles.deliverables}>
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                {s.stack?.length ? (
                  <div>
                    <h3 className="label muted">Typical stack</h3>
                    <ul className={styles.stack}>
                      {s.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className={styles.gap} />
      <Process index="06" />
      <Engagements index="07" />
      <CTA />
    </PageTransition>
  );
}
