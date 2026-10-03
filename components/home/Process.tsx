import { SectionHeading } from "../SectionHeading";
import styles from "./Process.module.css";

const steps = [
  { name: "Idea", body: "Start with a problem worth solving — not a feature looking for a use." },
  { name: "Research", body: "Learn who it is for, how they work today, and what already exists." },
  { name: "Design", body: "Shape the flow and the details before a line of production code." },
  { name: "Build", body: "Write clear, tested software that is fast on real devices." },
  { name: "Test", body: "Try to break it ourselves before anyone else has the chance." },
  { name: "Ship", body: "Release it, listen, and keep improving what is out there." },
];

/**
 * Six steps. The type weight rises from light to heavy as the work goes from
 * a loose idea to something solid — the progression is carried by the type itself.
 */
export function Process() {
  return (
    <section className={`section on-ink ${styles.process}`} aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Process"
          id="process-title"
          title="From idea to launch."
          intro={<span className={`serif ${styles.aside}`}>Good software doesn’t happen by accident.</span>}
        />

        <div className={styles.track} data-reveal aria-hidden="true">
          <span className={styles.fill} />
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li
              key={s.name}
              className={styles.step}
              data-reveal
              style={{ "--reveal-delay": i, "--w": 200 + i * 120 } as React.CSSProperties}
            >
              <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={`muted ${styles.body}`}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
