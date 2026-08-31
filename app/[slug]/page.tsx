import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { detailsFor, faqsFor, introFor, metaDescription, processFor, relatedPages } from "@/lib/content";
import { imageFor, secondaryImageFor } from "@/lib/images";
import { PAGES, PHONE_DISPLAY, PHONE_E164, SITE_NAME, SITE_URL, pageBySlug, serviceGroup } from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug.slice(1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pageBySlug((await params).slug);
  if (!page) return {};
  const description = metaDescription(page);
  return {
    title: page.title,
    description,
    alternates: { canonical: page.slug },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description,
      url: page.slug,
      type: "article",
      locale: "en_CA",
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const page = pageBySlug((await params).slug);
  if (!page) notFound();

  const details = detailsFor(page);
  const process = processFor(page);
  const faqs = faqsFor(page);
  const related = relatedPages(page);
  const group = serviceGroup(page);
  const location = page.kind === "Local" ? page.area : "Canada";

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: metaDescription(page),
            areaServed: location,
            provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, telephone: PHONE_E164 },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: page.title, item: `${SITE_URL}${page.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <div className="bjp-shell">
        <nav className="bjp-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <span>{page.title}</span>
        </nav>
      </div>

      <section className="bjp-detail-hero">
        <div className="bjp-shell bjp-detail-grid">
          <div>
            <div className="bjp-meta-row">
              <span>{page.kind}</span>
              <span>{group}</span>
              <span>{location}</span>
            </div>
            <h1>{page.title}</h1>
            <p className="bjp-lede">{introFor(page)}</p>
            <div className="bjp-actions">
              <a className="bjp-button bjp-button-primary" href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
              <Link className="bjp-ghost" href="/services">All services</Link>
            </div>
          </div>
          <div className="bjp-detail-photo">
            <Image src={imageFor(page)} alt={`${page.title} commercial service in ${location}`} fill priority sizes="(max-width: 980px) 100vw, 46vw" />
            <span>JOB / {String(page.id).padStart(3, "0")}</span>
          </div>
        </div>
      </section>

      {page.kind === "Urgent" && (
        <section className="bjp-urgent-banner">
          <div className="bjp-shell">
            <span>● LIVE DISPATCH</span>
            <p>Need a commercial crew today? Call now for the next available window.</p>
            <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY} →</a>
          </div>
        </section>
      )}

      <section className="bjp-section">
        <div className="bjp-shell bjp-split">
          <div>
            <p className="bjp-kicker">What this service covers</p>
            <h2>Materials, equipment and destinations.</h2>
          </div>
          <div className="bjp-scope-cards">
            <article>
              <h3>Materials</h3>
              <ul>{details.materials.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <h3>Equipment</h3>
              <p>{details.equipment}</p>
            </article>
            <article>
              <h3>Routing</h3>
              <p>{details.destination}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bjp-section bjp-section-soft">
        <div className="bjp-shell">
          <div className="bjp-section-head">
            <div>
              <p className="bjp-kicker">Field sequence</p>
              <h2>From request to cleared site.</h2>
            </div>
          </div>
          <div className="bjp-process">
            {process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bjp-section">
        <div className="bjp-shell bjp-case-grid">
          <div className="bjp-case-photo">
            <Image src={secondaryImageFor(page)} alt={`Crew support for ${page.keyword}`} fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="bjp-kicker">Commercial fit</p>
            <h2>Designed around access and deadlines.</h2>
            <p>
              Whether you manage turnovers, active jobsites or multi-location facilities, the plan starts with access
              constraints and ends with a cleared floor. Recurring and project-based accounts keep one consistent dispatch contact.
            </p>
            <ul className="bjp-check-list">
              <li>Photo-based quoting for many standard loads</li>
              <li>After-hours and dock-window scheduling</li>
              <li>Documentation support for managed accounts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bjp-section bjp-section-soft">
        <div className="bjp-shell bjp-faq-layout">
          <div>
            <p className="bjp-kicker">Before you book</p>
            <h2>Common questions.</h2>
          </div>
          <div className="bjp-faqs">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bjp-related">
        <div className="bjp-shell">
          <p className="bjp-kicker bjp-kicker-light">Keep planning</p>
          <h2>Related service guides.</h2>
          <div className="bjp-related-grid">
            {related.map((item) => (
              <Link href={item.slug} key={item.slug}>
                <small>{item.kind} · {serviceGroup(item)}</small>
                <h3>{item.title}</h3>
                <span>Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
