import Link from "next/link";
import type { CaseStudy } from "@/data/work";
import { ProductPlate } from "../products/ProductPlate";
import styles from "./WorkCard.module.css";

type Props = {
  study: CaseStudy;
  index: string;
  headingLevel?: "h2" | "h3";
};

export function WorkCard({ study, index, headingLevel: H = "h3" }: Props) {
  const href = `/work/${study.slug}`;

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.plate} tabIndex={-1} aria-hidden="true">
        <ProductPlate
          index={index}
          label={study.inHouse ? "Own product" : study.client}
          image={study.cover}
          category={study.sketch}
          sizes="(min-width: 900px) 58vw, 100vw"
        />
      </Link>

      <div className={styles.body}>
        <p className={`label ${styles.meta}`}>
          <span className={styles.index}>{index}</span>
          <span className="muted">{study.client}</span>
          <span className="muted">{study.status}</span>
        </p>
        <H className={styles.title}>
          <Link href={href}>{study.title}</Link>
        </H>
        <p className={`lead muted ${styles.summary}`}>{study.summary}</p>
        <ul className={styles.services} aria-label="Services">
          {study.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <Link href={href} className={`link ${styles.more}`}>
          Read the case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
