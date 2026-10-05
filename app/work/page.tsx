import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { WorkCard } from "@/components/work/WorkCard";
import { work } from "@/data/work";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from DEVS KITCHEN — the problem, the approach and what we built.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work" },
};

export default function WorkPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Work"
        aside={`${String(work.length).padStart(2, "0")} case ${work.length === 1 ? "study" : "studies"}`}
        title={
          <>
            Selected <span className="serif">work.</span>
          </>
        }
        intro="Projects we have designed and built — what the problem was, how we approached it, and what came out of the kitchen."
      />

      <section className="container" aria-label="Case studies">
        <ul className={styles.list}>
          {work.map((w, i) => (
            <li key={w.slug} data-reveal>
              <WorkCard study={w} index={String(i + 1).padStart(2, "0")} headingLevel="h2" />
            </li>
          ))}
        </ul>
        <p className={`label muted ${styles.note}`}>More case studies are added as projects launch.</p>
      </section>

      <CTA />
    </PageTransition>
  );
}
