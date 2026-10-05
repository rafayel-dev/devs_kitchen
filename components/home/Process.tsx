import { processSteps as steps } from "@/data/services";
import { SectionHeading } from "../SectionHeading";
import styles from "./Process.module.css";

/**
 * Six steps. The type weight rises from light to heavy as the work goes from
 * a first conversation to something solid — the progression is carried by the type itself.
 */
export function Process({ index = "04" }: { index?: string }) {
  return (
    <section className={`section on-ink ${styles.process}`} aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          index={index}
          label="Process"
          id="process-title"
          title="From first call to launch."
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
