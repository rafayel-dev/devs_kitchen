import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";
import styles from "./AboutTeaser.module.css";

export function AboutTeaser() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="04" label="About" id="about-title" title="We build software with a reason." />

        <div className={styles.body}>
          <p className={`serif ${styles.statement}`} data-reveal>
            Based in Bangladesh.
            <br />
            Building for the world.
          </p>
          <div className={styles.copy} data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            <p className="lead">
              DEVS KITCHEN is an independent software studio focused on building digital products
              that solve practical problems.
            </p>
            <p className="muted">
              We explore ideas, design the experience, write the software, and keep improving what
              we ship. We would rather make a few things that work well than many things that
              almost do.
            </p>
            <Button href="/about" variant="secondary">
              More about the studio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
