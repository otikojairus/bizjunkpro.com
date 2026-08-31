import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { HOME_IMAGE } from "@/lib/images";
import {
  FEATURED_PAGES,
  LOCAL_PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_NAME,
  SITE_URL,
  URGENT_PAGES,
  serviceGroup,
} from "@/lib/pages";

const lanes = [
  { code: "A", title: "Scope the load", text: "Photos, volume, material type and site access determine the right crew and equipment." },
  { code: "B", title: "Protect the space", text: "Travel paths, floors and occupied zones are protected so operations can continue." },
  { code: "C", title: "Clear and route", text: "Loads leave on schedule and materials are directed to reuse, recycling or approved disposal." },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_NAME,
          url: SITE_URL,
          telephone: PHONE_E164,
          areaServed: "Canada",
          description: "Commercial junk removal, cleanouts, dumpster rental and material recovery services.",
        }}
      />

      <section className="bjp-hero">
        <div className="bjp-shell bjp-hero-grid">
          <div>
            <p className="bjp-kicker">Commercial removal network</p>
            <h1>
              Clear the floor.<br />
              <span>Keep the schedule.</span>
            </h1>
            <p className="bjp-lede">
              BizJunkPro coordinates commercial junk removal, office cleanouts, construction debris,
              dumpsters and recovery across Canada—built around access windows, not residential day rates.
            </p>
            <div className="bjp-actions">
              <a className="bjp-button bjp-button-primary" href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
              <Link className="bjp-ghost" href="/services">Browse services</Link>
            </div>
            <ul className="bjp-pill-row">
              <li>Office & warehouse</li>
              <li>Construction & reno</li>
              <li>Property management</li>
              <li>Same-day options</li>
            </ul>
          </div>
          <div className="bjp-hero-stage">
            <div className="bjp-hero-photo">
              <Image src={HOME_IMAGE} alt="Commercial warehouse staging area ready for a clearout" fill priority sizes="(max-width: 980px) 100vw, 48vw" />
            </div>
            <aside className="bjp-ticket" aria-label="Sample pickup ticket">
              <span>Pickup ticket / BJP-1842</span>
              <strong>3 dock bays · 2 crews</strong>
              <div>
                <p><b>Window</b><em>14:00–16:00</em></p>
                <p><b>Load</b><em>Office + metal</em></p>
                <p><b>Status</b><em>Confirmed</em></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bjp-marquee" aria-label="Service categories">
        <div>
          {[...Array(2)].flatMap((_, pass) =>
            ["Commercial junk", "Office cleanouts", "Construction debris", "Dumpster rental", "Scrap recovery", "Warehouse clearouts"].map((item) => (
              <span key={`${item}-${pass}`}>{item}</span>
            )),
          )}
        </div>
      </section>

      <section className="bjp-section">
        <div className="bjp-shell">
          <div className="bjp-section-head">
            <div>
              <p className="bjp-kicker">Core service lanes</p>
              <h2>Built for business sites, not backyard piles.</h2>
            </div>
            <p>Every project starts with volume, material, access and deadline. That is how we size the crew and keep turnover dates intact.</p>
          </div>
          <div className="bjp-feature-grid">
            {FEATURED_PAGES.map((page, index) => (
              <Link href={page.slug} className="bjp-feature-card" key={page.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{page.title}</h3>
                <p>{serviceGroup(page)}</p>
                <b>Open service →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bjp-section bjp-section-dark">
        <div className="bjp-shell bjp-lane-grid">
          <div>
            <p className="bjp-kicker bjp-kicker-light">How a commercial job runs</p>
            <h2>Three lanes.<br />One clear site.</h2>
          </div>
          <div className="bjp-lanes">
            {lanes.map((lane) => (
              <article key={lane.code}>
                <span>{lane.code}</span>
                <h3>{lane.title}</h3>
                <p>{lane.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bjp-section">
        <div className="bjp-shell bjp-urgent-panel">
          <div>
            <p className="bjp-kicker">Need it gone today?</p>
            <h2>Same-day and emergency commercial pickup.</h2>
            <p>Blocked loading docks, failed inspections and surprise turnovers do not wait for a weekly route. Call and we will confirm the next available window.</p>
          </div>
          <div className="bjp-urgent-links">
            {URGENT_PAGES.map((page) => (
              <Link href={page.slug} key={page.slug}>{page.title}<span>→</span></Link>
            ))}
            <a href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}<span>→</span></a>
          </div>
        </div>
      </section>

      <section className="bjp-section bjp-section-soft">
        <div className="bjp-shell bjp-market-layout">
          <div>
            <p className="bjp-kicker">Regional coverage</p>
            <h2>Local commercial pages across Canada.</h2>
            <p>BC, Ontario, Alberta and Manitoba markets with access notes, crew windows and service pages tailored to local business demand.</p>
            <Link className="bjp-ghost" href="/services">See full directory</Link>
          </div>
          <div className="bjp-market-grid">
            {LOCAL_PAGES.map((page) => (
              <Link href={page.slug} key={page.slug}>
                <small>{page.area}</small>
                <span>{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
