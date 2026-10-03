import styles from "./PageHeader.module.css";

type Props = {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

/** Opening block for inner pages: label rail, large title, short introduction. */
export function PageHeader({ label, title, intro, aside }: Props) {
  return (
    <header className={`container ${styles.header}`}>
      <div className={`label ${styles.rail}`}>
        <span>{label}</span>
        {aside && <span className="muted">{aside}</span>}
      </div>
      <h1 className={styles.title}>{title}</h1>
      {intro && <p className={`lead ${styles.intro}`}>{intro}</p>}
    </header>
  );
}
