import styles from "./Technology.module.css";

/** Keep this list honest — only tools we actually build with. */
const stack = [
  { name: "TypeScript", role: "Language" },
  { name: "React", role: "Interfaces" },
  { name: "React Native", role: "Mobile" },
  { name: "Next.js", role: "Web" },
  { name: "Node.js", role: "Services" },
  { name: "PostgreSQL", role: "Data" },
  { name: "MongoDB", role: "Data" },
];

export function Technology() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="tech-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <p className="label">
            <span className={styles.index}>06</span> <span className="muted">&nbsp;Stack</span>
          </p>
          <h2 id="tech-title" className={`h3 ${styles.title}`}>
            Built with modern technologies.
          </h2>
          <p className={`muted ${styles.note}`}>
            We choose tools for reliability and speed, and use the simplest one that does the job.
          </p>
        </div>
        <ul className={styles.list} data-reveal>
          {stack.map((t) => (
            <li key={t.name}>
              <span className={styles.name}>{t.name}</span>
              <span className="label muted">{t.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
