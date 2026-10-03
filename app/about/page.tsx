import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LocalTime } from "@/components/LocalTime";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { principles } from "@/data/principles";
import { site } from "@/data/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "DEVS KITCHEN is an independent software studio from Bangladesh that designs, builds and ships its own digital products.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const making = [
  { title: "Mobile applications", body: "Apps for everyday tasks, published on Google Play and other stores." },
  { title: "Web products", body: "Focused products that run in the browser and load quickly anywhere." },
  { title: "Digital tools", body: "Small utilities that do one job properly." },
  { title: "Experiments", body: "Quick tests of ideas, some of which grow into products." },
];

const working = [
  {
    title: "Small scope, finished well.",
    body: "We would rather ship one complete thing than three half-done ones. Each release has a clear purpose and an honest scope.",
  },
  {
    title: "Design and engineering together.",
    body: "The people who shape the experience also write the software, so decisions about how something looks and how it works are made at the same table.",
  },
  {
    title: "Still here after launch.",
    body: "Shipping is the start. We fix problems, answer support email and keep improving what is already out there.",
  },
];

function Block({
  index,
  label,
  id,
  children,
}: {
  index: string;
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`container ${styles.block}`} aria-labelledby={id}>
      <h2 id={id} className={`label ${styles.blockLabel}`}>
        <span className={styles.index}>{index}</span>
        <span>{label}</span>
      </h2>
      <div className={styles.blockBody} data-reveal>
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        label="About"
        aside="Independent software studio"
        title={
          <>
            Software that <span className="serif">earns its place.</span>
          </>
        }
        intro="DEVS KITCHEN designs, builds and ships its own digital products — from the first idea to the update after launch."
      />

      <Block index="01" label="Who we are" id="who">
        <p className={styles.statement}>
          An independent software studio from {site.location.country}. We make our own products,
          end to end: the idea, the design, the code, the release, and everything that comes after.
        </p>
        <p className="muted">
          Independent means we choose what to build and decide when it is ready. It also means we
          answer directly to the people who use what we make.
        </p>
        <blockquote className={styles.quote}>
          <p className="serif">
            Why a kitchen? Because good software is made like good food — simple ingredients, real
            technique, tasted often, and served when it is ready. Not before.
          </p>
        </blockquote>
      </Block>

      <Block index="02" label="What we build" id="what">
        <ul className={styles.making}>
          {making.map((m) => (
            <li key={m.title}>
              <h3 className="h3">{m.title}</h3>
              <p className="muted">{m.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/products" className={`link ${styles.inline}`}>
          See what&rsquo;s cooking <span aria-hidden="true">→</span>
        </Link>
      </Block>

      <Block index="03" label="How we think" id="think">
        <ol className={styles.principles}>
          {principles.map((p, i) => (
            <li key={p.title}>
              <span className="label muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      <Block index="04" label="How we work" id="work">
        <div className={styles.working}>
          {working.map((w) => (
            <div key={w.title}>
              <h3 className="h3">{w.title}</h3>
              <p className="muted">{w.body}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block index="05" label="Where we are" id="where">
        <p className={styles.where}>
          Based in Bangladesh.
          <br />
          <span className="serif">Building for the world.</span>
        </p>
        <dl className={styles.coords}>
          <div>
            <dt className="label muted">Studio</dt>
            <dd>{site.location.country}</dd>
          </div>
          <div>
            <dt className="label muted">Time zone</dt>
            <dd>GMT+{site.location.utcOffset}</dd>
          </div>
          <div>
            <dt className="label muted">Local time</dt>
            <dd>
              <LocalTime />
            </dd>
          </div>
          <div>
            <dt className="label muted">Audience</dt>
            <dd>Everywhere</dd>
          </div>
        </dl>
      </Block>

      <div className={styles.spacer} />
      <CTA />
    </PageTransition>
  );
}
