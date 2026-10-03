import styles from "./SectionHeading.module.css";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  as?: "h1" | "h2";
};

/**
 * Editorial section opener: a hairline, a running index and a label on the left,
 * the heading and its introduction on the right.
 */
export function SectionHeading({ index, label, title, intro, id, as: Tag = "h2" }: Props) {
  return (
    <header className={styles.head}>
      <p className={`label ${styles.meta}`} data-reveal>
        <span className={styles.index}>{index}</span>
        <span className="muted">{label}</span>
      </p>
      <div className={styles.body}>
        <Tag id={id} className={styles.title} data-reveal>
          {title}
        </Tag>
        {intro && (
          <p className={`lead muted ${styles.intro}`} data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
