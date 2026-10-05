import { engagements } from "@/data/services";
import { SectionHeading } from "../SectionHeading";
import styles from "./Engagements.module.css";

export function Engagements({ index = "05" }: { index?: string }) {
  return (
    <section className="section" aria-labelledby="engage-title">
      <div className="container">
        <SectionHeading
          index={index}
          label="Working together"
          id="engage-title"
          title="Three ways to work with us."
          intro="Every project is quoted individually after a short discovery call. You get a written scope before any work starts."
        />
        <ol className={styles.grid}>
          {engagements.map((e, i) => (
            <li key={e.title} className={styles.item} data-reveal style={{ "--reveal-delay": i } as React.CSSProperties}>
              <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.body}>{e.body}</p>
              <p className={styles.best}>
                <span className="label muted">Best for</span>
                <span>{e.bestFor}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
