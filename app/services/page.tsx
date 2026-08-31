import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_IMAGE } from "@/lib/images";
import {
  LOCAL_PAGES,
  NATIONAL_PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  URGENT_PAGES,
  serviceGroup,
} from "@/lib/pages";

export const metadata: Metadata = {
  title: "Commercial Junk, Cleanout & Dumpster Services",
  description: "Browse BizJunkPro commercial junk removal, office cleanouts, construction debris, dumpsters, scrap recovery and local market pages across Canada.",
  alternates: { canonical: "/services" },
};

const groups = [
  "Junk & Waste Removal",
  "Commercial Cleanouts",
  "Construction Debris",
  "Dumpster Rental",
  "Recycling & Recovery",
  "Regulated Waste",
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bjp-index-hero">
        <div className="bjp-shell bjp-index-grid">
          <div>
            <p className="bjp-kicker">Service directory</p>
            <h1>Every commercial lane in one place.</h1>
            <p className="bjp-lede">
              Start with the national service that matches your load, or jump straight to a regional page for local coordination.
            </p>
            <a className="bjp-button bjp-button-primary" href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
          </div>
          <div className="bjp-index-photo">
            <Image src={SERVICES_IMAGE} alt="Commercial shipping and logistics facility" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="bjp-section">
        <div className="bjp-shell">
          {groups.map((group, index) => {
            const pages = NATIONAL_PAGES.filter((page) => serviceGroup(page) === group);
            if (!pages.length) return null;
            return (
              <div className="bjp-group" key={group}>
                <header>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{group}</h2>
                  <small>{pages.length} pages</small>
                </header>
                <div className="bjp-group-links">
                  {pages.map((page) => (
                    <Link href={page.slug} key={page.slug}>
                      <span>{page.title}</span>
                      <b>→</b>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bjp-section bjp-section-dark">
        <div className="bjp-shell">
          <p className="bjp-kicker bjp-kicker-light">Urgent lanes</p>
          <h2>Same-day and emergency.</h2>
          <div className="bjp-urgent-links bjp-urgent-links-wide">
            {URGENT_PAGES.map((page) => (
              <Link href={page.slug} key={page.slug}>{page.title}<span>→</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bjp-section">
        <div className="bjp-shell">
          <div className="bjp-section-head">
            <div>
              <p className="bjp-kicker">Regional pages</p>
              <h2>Markets across Canada.</h2>
            </div>
            <p>BC, Ontario, Alberta and Manitoba commercial pages for local dispatch planning.</p>
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
