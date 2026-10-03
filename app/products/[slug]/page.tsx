import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";
import { ProductPlate } from "@/components/products/ProductPlate";
import { StatusBadge } from "@/components/products/StatusBadge";
import { StoreLinks } from "@/components/products/StoreLinks";
import { getProduct, platformLabel, productIndex, products, statusLabel } from "@/data/products";
import { site } from "@/data/site";
import styles from "./product.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const path = `/products/${product.slug}`;
  return {
    title: product.name,
    description: `${product.summary} ${product.category} by ${site.name}.`,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${product.name} — ${site.name}`,
      description: product.summary,
      ...(product.image ? { images: [{ url: product.image.src, alt: product.image.alt }] } : {}),
    },
    // Stand-in entries stay out of search results until they are real.
    ...(product.placeholder ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = productIndex(product.slug);
  const position = products.indexOf(product);
  const next = products[(position + 1) % products.length];

  const support = product.supportUrl ?? "/contact";
  const privacy = product.privacyUrl ?? "/privacy";
  const isExternal = (href: string) => /^https?:\/\//.test(href);

  const platforms = product.platforms.length
    ? product.platforms.map((p) => platformLabel[p]).join(", ")
    : "To be decided";

  const structuredData =
    !product.placeholder && (product.status === "live" || product.status === "beta")
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.summary,
          applicationCategory: product.category,
          operatingSystem: product.platforms.map((p) => platformLabel[p]).join(", "),
          url: `${site.url}/products/${product.slug}`,
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          ...(product.image ? { image: `${site.url}${product.image.src}` } : {}),
          ...(product.playStoreUrl || product.appStoreUrl
            ? { downloadUrl: product.playStoreUrl ?? product.appStoreUrl }
            : {}),
        }
      : null;

  return (
    <PageTransition>
      <article>
        <header className={`container ${styles.hero}`}>
          <div className={`label ${styles.rail}`}>
            <Link href="/products" className={styles.back}>
              <span aria-hidden="true">←</span> All products
            </Link>
            <span className="muted">
              Product {index} / {String(products.length).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={`label ${styles.kicker}`}>
                <span className={styles.index}>{index}</span>
                <span className="muted">{product.category}</span>
              </p>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={`lead muted ${styles.summary}`}>{product.summary}</p>
              <StoreLinks product={product} />
            </div>

            <dl className={styles.facts}>
              <div>
                <dt className="label muted">Status</dt>
                <dd>
                  <StatusBadge status={product.status} />
                </dd>
              </div>
              <div>
                <dt className="label muted">Category</dt>
                <dd>{product.category}</dd>
              </div>
              <div>
                <dt className="label muted">Platform</dt>
                <dd>{platforms}</dd>
              </div>
              <div>
                <dt className="label muted">Made by</dt>
                <dd>{site.name}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className={`container ${styles.cover}`}>
          <ProductPlate product={product} index={index} priority sizes="100vw" />
        </div>

        <section className={`container ${styles.block}`} aria-labelledby="overview">
          <h2 id="overview" className={`label ${styles.blockLabel}`}>
            Overview
          </h2>
          <div className={styles.prose}>
            {product.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        {product.features?.length ? (
          <section className={`container ${styles.block}`} aria-labelledby="features">
            <h2 id="features" className={`label ${styles.blockLabel}`}>
              Features
            </h2>
            <ol className={styles.features}>
              {product.features.map((f, i) => (
                <li key={f.title}>
                  <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p className="muted">{f.body}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {product.screenshots?.length ? (
          <section className={styles.screens} aria-labelledby="screenshots">
            <div className="container">
              <h2 id="screenshots" className={`label ${styles.blockLabel}`}>
                Screenshots
              </h2>
            </div>
            <ul className={styles.screenRow} tabIndex={0} aria-label="Screenshots, scrollable">
              {product.screenshots.map((s) => (
                <li key={s.src}>
                  <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 900px) 22vw, 70vw" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {product.technology?.length ? (
          <section className={`container ${styles.block}`} aria-labelledby="technology">
            <h2 id="technology" className={`label ${styles.blockLabel}`}>
              Built with
            </h2>
            <ul className={styles.tech}>
              {product.technology.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className={`container ${styles.block}`} aria-labelledby="help">
          <h2 id="help" className={`label ${styles.blockLabel}`}>
            Support &amp; privacy
          </h2>
          <div className={styles.help}>
            <Link
              href={support}
              className={styles.helpCard}
              {...(isExternal(support) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="h3">Get support</span>
              <span className="muted">
                Questions, problems or feedback about {product.name}.
              </span>
              <span className={styles.helpArrow} aria-hidden="true">
                {isExternal(support) ? "↗" : "→"}
              </span>
            </Link>
            <Link
              href={privacy}
              className={styles.helpCard}
              {...(isExternal(privacy) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="h3">Privacy policy</span>
              <span className="muted">
                {product.privacyUrl
                  ? `How ${product.name} handles your information.`
                  : `${product.name} is covered by the ${site.name} privacy policy.`}
              </span>
              <span className={styles.helpArrow} aria-hidden="true">
                {isExternal(privacy) ? "↗" : "→"}
              </span>
            </Link>
          </div>
        </section>

        {products.length > 1 && (
          <nav className={styles.next} aria-label="Next product">
            <Link href={`/products/${next.slug}`} className={`container ${styles.nextLink}`}>
              <span className="label muted">
                Next — {productIndex(next.slug)} · {statusLabel[next.status]}
              </span>
              <span className={styles.nextName}>
                {next.name} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </nav>
        )}
      </article>
      {structuredData && <JsonLd data={structuredData} />}
    </PageTransition>
  );
}
