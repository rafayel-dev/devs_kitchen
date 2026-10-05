import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";
import { ProductPlate } from "@/components/products/ProductPlate";
import { site } from "@/data/site";
import { getCaseStudy, work } from "@/data/work";
import styles from "./case.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const path = `/work/${study.slug}`;
  return {
    title: `${study.title} — case study`,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${study.title} — ${site.name}`,
      description: study.summary,
      ...(study.cover ? { images: [{ url: study.cover.src, alt: study.cover.alt }] } : {}),
    },
  };
}

function Block({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <section className={`container ${styles.block}`} aria-labelledby={id}>
      <h2 id={id} className={`label ${styles.blockLabel}`}>
        {label}
      </h2>
      <div className={styles.blockBody} data-reveal>
        {children}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const position = work.indexOf(study);
  const index = String(position + 1).padStart(2, "0");
  const next = work.length > 1 ? work[(position + 1) % work.length] : null;
  const label = study.inHouse ? "Own product" : study.client;

  return (
    <PageTransition>
      <article>
        <header className={`container ${styles.hero}`}>
          <div className={`label ${styles.rail}`}>
            <Link href="/work" className={styles.back}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <span className="muted">Case study {index}</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={`label ${styles.kicker}`}>
                <span className={styles.index}>{index}</span>
                <span className="muted">{label}</span>
              </p>
              <h1 className={styles.title}>{study.title}</h1>
              <p className={`lead muted ${styles.summary}`}>{study.summary}</p>
            </div>

            <dl className={styles.facts}>
              <div>
                <dt className="label muted">Client</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt className="label muted">Services</dt>
                <dd>{study.services.join(", ")}</dd>
              </div>
              <div>
                <dt className="label muted">Platforms</dt>
                <dd>{study.platforms.join(", ")}</dd>
              </div>
              <div>
                <dt className="label muted">Status</dt>
                <dd>{study.status}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className={`container ${styles.cover}`}>
          <ProductPlate index={index} label={label} image={study.cover} priority sizes="100vw" />
        </div>

        <Block label="The challenge" id="challenge">
          {study.challenge.map((p, i) => (
            <p key={p} className={i === 0 ? styles.statement : "muted"}>
              {p}
            </p>
          ))}
        </Block>

        <Block label="Our approach" id="approach">
          {study.approach.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>

        {study.highlights?.length ? (
          <Block label="What we built" id="built">
            <ol className={styles.highlights}>
              {study.highlights.map((h, i) => (
                <li key={h.title}>
                  <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3">{h.title}</h3>
                  <p className="muted">{h.body}</p>
                </li>
              ))}
            </ol>
          </Block>
        ) : null}

        {study.stack?.length ? (
          <Block label="Stack" id="stack">
            <ul className={styles.stack}>
              {study.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Block>
        ) : null}

        <Block label="Where it is now" id="outcome">
          {study.outcome.map((p) => (
            <p key={p} className={styles.statement}>
              {p}
            </p>
          ))}
          {(study.productSlug || study.websiteUrl) && (
            <div className={styles.links}>
              {study.productSlug && (
                <Button href={`/products/${study.productSlug}`} variant="outline">
                  Product page
                </Button>
              )}
              {study.websiteUrl && (
                <Button href={study.websiteUrl} variant="outline">
                  Visit website
                </Button>
              )}
            </div>
          )}
        </Block>

        {next && (
          <nav className={styles.next} aria-label="Next case study">
            <Link href={`/work/${next.slug}`} className={`container ${styles.nextLink}`}>
              <span className="label muted">Next case study</span>
              <span className={styles.nextName}>
                {next.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </nav>
        )}
      </article>
      <div className={styles.gap} />
      <CTA />
    </PageTransition>
  );
}
