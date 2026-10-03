import type { LegalDocument as Doc } from "@/data/legal";
import { PageHeader } from "./PageHeader";
import styles from "./LegalDocument.module.css";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export function LegalDocument({ doc }: { doc: Doc }) {
  return (
    <>
      <PageHeader
        label="Legal"
        aside={
          <>
            Last updated <time dateTime={doc.lastUpdated}>{formatDate(doc.lastUpdated)}</time>
          </>
        }
        title={doc.title}
        intro={doc.intro}
      />

      <div className={`container ${styles.layout}`}>
        <nav className={styles.toc} aria-label="On this page">
          <p className="label muted">On this page</p>
          <ol>
            {doc.sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.body}>
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className={styles.section} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className={styles.heading}>
                <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              {s.body.map((part, j) =>
                typeof part === "string" ? (
                  <p key={j}>{part}</p>
                ) : (
                  <ul key={j}>
                    {part.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
