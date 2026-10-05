import { work } from "@/data/work";
import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";
import { WorkCard } from "../work/WorkCard";
import styles from "./WorkSection.module.css";

export function WorkSection() {
  if (!work.length) return null;

  return (
    <section className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          index="02"
          label="Selected work"
          id="work-title"
          title="Work we’re proud of."
          intro="Case studies from the kitchen — what the problem was, how we approached it, and what we built."
        />
        <ul className={styles.list}>
          {work.slice(0, 3).map((w, i) => (
            <li key={w.slug} data-reveal>
              <WorkCard study={w} index={String(i + 1).padStart(2, "0")} />
            </li>
          ))}
        </ul>
        <div className={styles.foot}>
          <Button href="/work" variant="outline">
            All work
          </Button>
        </div>
      </div>
    </section>
  );
}
