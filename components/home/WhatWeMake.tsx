import { SectionHeading } from "../SectionHeading";
import styles from "./WhatWeMake.module.css";

const disciplines = [
  {
    title: "Mobile applications",
    body: "Apps for everyday use — quick to open, clear to use, and built to stay out of the way.",
    tag: "Android · iOS",
  },
  {
    title: "Web products",
    body: "Fast, focused products for the browser that load quickly and scale when they need to.",
    tag: "Web",
  },
  {
    title: "Digital tools",
    body: "Small pieces of software built around one specific need, and nothing more.",
    tag: "Utilities",
  },
  {
    title: "Experiments",
    body: "Ideas we test in the open before deciding whether they become products.",
    tag: "R&D",
  },
];

export function WhatWeMake() {
  return (
    <section className="section" aria-labelledby="make-title">
      <div className="container">
        <SectionHeading
          index="01"
          label="What we make"
          id="make-title"
          title="We make things useful."
          intro="From focused mobile applications to web products and small digital tools, we build software around real problems."
        />

        <ol className={styles.list}>
          {disciplines.map((d, i) => (
            <li key={d.title} className={styles.row} data-reveal style={{ "--reveal-delay": i } as React.CSSProperties}>
              <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{d.title}</h3>
              <p className={`muted ${styles.body}`}>{d.body}</p>
              <span className={`label muted ${styles.tag}`}>{d.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
