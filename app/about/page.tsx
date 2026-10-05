import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LocalTime } from "@/components/LocalTime";
import { PageHeader } from "@/components/PageHeader";
import { PageTransition } from "@/components/PageTransition";
import { principles } from "@/data/principles";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { team } from "@/data/team";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "DEVS KITCHEN is a software studio from Bangladesh. We design and build apps and web products for clients, and ship products of our own.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const working = [
  {
    title: "One team, start to finish.",
    body: "The people who design your product also build it. Nothing is lost in a hand-off, and you always talk to someone who knows the work.",
  },
  {
    title: "You see progress every week.",
    body: "Work happens in short cycles with a working demo each week, so decisions are made early and nothing arrives as a surprise.",
  },
  {
    title: "Still here after launch.",
    body: "Shipping is the start. We fix problems, keep dependencies and store requirements up to date, and keep improving what is out there.",
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
  // Section numbers stay continuous whether or not the team section is shown.
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <PageTransition>
      <PageHeader
        label="About"
        aside="Design & development studio"
        title={
          <>
            Software that <span className="serif">earns its place.</span>
          </>
        }
        intro="DEVS KITCHEN is a software studio from Bangladesh. We design and build apps and web products for clients — and ship products of our own."
      />

      <Block index={next()} label="Who we are" id="who">
        <p className={styles.statement}>
          A design and development studio with two sides: client projects, and products we build
          for ourselves. Each one makes the other better.
        </p>
        <p className="muted">
          Building our own products keeps us honest about what it takes to launch and maintain
          software. That experience goes straight into the work we do for clients — from the first
          scope to the store listing.
        </p>
        <blockquote className={styles.quote}>
          <p className="serif">
            Why a kitchen? Because good software is made like good food — simple ingredients, real
            technique, tasted often, and served when it is ready. Not before.
          </p>
        </blockquote>
      </Block>

      <Block index={next()} label="What we do" id="what">
        <ul className={styles.making}>
          {services.map((s) => (
            <li key={s.slug}>
              <h3 className="h3">
                <Link href={`/services#${s.slug}`}>{s.title}</Link>
              </h3>
              <p className="muted">{s.summary}</p>
            </li>
          ))}
        </ul>
        <div className={styles.inlineLinks}>
          <Link href="/services" className="link">
            All services <span aria-hidden="true">→</span>
          </Link>
          <Link href="/work" className="link">
            Selected work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Block>

      <Block index={next()} label="How we think" id="think">
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

      <Block index={next()} label="How we work" id="work">
        <div className={styles.working}>
          {working.map((w) => (
            <div key={w.title}>
              <h3 className="h3">{w.title}</h3>
              <p className="muted">{w.body}</p>
            </div>
          ))}
        </div>
      </Block>

      {team.length > 0 && (
        <Block index={next()} label="The team" id="team">
          <ul className={styles.team}>
            {team.map((m) => {
              const card = (
                <>
                  <div className={styles.photo}>
                    {m.photo && (
                      <Image src={m.photo} alt={`Portrait of ${m.name}`} width={800} height={800} sizes="(min-width: 900px) 20vw, 45vw" />
                    )}
                  </div>
                  <p className={styles.memberName}>{m.name}</p>
                  <p className="label muted">{m.role}</p>
                </>
              );
              return (
                <li key={m.name}>
                  {m.link ? (
                    <a href={m.link} target="_blank" rel="noopener noreferrer">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </Block>
      )}

      <Block index={next()} label="Where we are" id="where">
        <p className={styles.where}>
          Based in Bangladesh.
          <br />
          <span className="serif">Working with teams anywhere.</span>
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
            <dt className="label muted">Language</dt>
            <dd>English</dd>
          </div>
        </dl>
        <p className="muted">
          Our working day overlaps with Asia, the Middle East and mornings in Europe. For teams in
          the Americas, we schedule calls at the start or end of our day.
        </p>
      </Block>

      <div className={styles.spacer} />
      <CTA />
    </PageTransition>
  );
}
