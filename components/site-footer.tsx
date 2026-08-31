import Link from "next/link";
import { FEATURED_PAGES, LOCAL_PAGES, PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

export function SiteFooter() {
  return (
    <footer className="bjp-footer">
      <div className="bjp-shell bjp-footer-lead">
        <p className="bjp-kicker">One site or fifty</p>
        <h2>Clear the space.<br /><em>Keep work moving.</em></h2>
        <a className="bjp-button bjp-button-light" href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
      </div>
      <div className="bjp-shell bjp-footer-grid">
        <div>
          <Link href="/" className="bjp-footer-logo"><b>BizJunk</b>Pro</Link>
          <p>Commercial junk, debris, dumpster and recovery services coordinated around your operating schedule.</p>
        </div>
        <div>
          <h3>Services</h3>
          {FEATURED_PAGES.slice(0, 5).map((page) => <Link href={page.slug} key={page.slug}>{page.title}</Link>)}
        </div>
        <div>
          <h3>Markets</h3>
          {LOCAL_PAGES.slice(0, 7).map((page) => <Link href={page.slug} key={page.slug}>{page.area}</Link>)}
        </div>
        <div>
          <h3>Dispatch</h3>
          <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          <span>Commercial service</span>
          <span>Canada-wide network</span>
        </div>
      </div>
      <div className="bjp-shell bjp-footer-base">
        <span>© {new Date().getFullYear()} BizJunkPro</span>
        <span>Commercial waste & recovery coordination</span>
      </div>
    </footer>
  );
}
