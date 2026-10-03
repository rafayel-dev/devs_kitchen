import { principles } from "@/data/principles";
import { SectionHeading } from "../SectionHeading";
import styles from "./Principles.module.css";

export function Principles({ index = "05" }: { index?: string }) {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="principles-title">
      <div className="container">
        <SectionHeading index={index} label="Principles" id="principles-title" title="How we build." />
        <ol className={styles.list}>
          {principles.map((p, i) => (
            <li key={p.title} className={styles.item} data-reveal>
              <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={`muted ${styles.body}`}>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
