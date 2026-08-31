"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FEATURED_PAGES, PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showCall, setShowCall] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setShowCall(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bjp-topline">
        <div className="bjp-shell">
          <span>Commercial accounts · Canada-wide</span>
          <a href={`tel:${PHONE_E164}`}>Same-day dispatch: {PHONE_DISPLAY}</a>
        </div>
      </div>
      <header className="bjp-header">
        <div className="bjp-shell bjp-nav">
          <Link href="/" className="bjp-logo" onClick={() => setOpen(false)} aria-label="BizJunkPro home">
            <span className="bjp-logo-mark"><i /><i /><i /></span>
            <span><b>BizJunk</b>Pro</span>
          </Link>
          <nav className="bjp-links" aria-label="Primary navigation">
            <Link href="/services">All services</Link>
            <Link href="/office-cleanout">Office cleanouts</Link>
            <Link href="/construction-debris-removal">Construction</Link>
            <Link href="/commercial-dumpster-rental">Dumpsters</Link>
          </nav>
          <a className="bjp-button bjp-button-primary bjp-header-call" href={`tel:${PHONE_E164}`}>Book a pickup</a>
          <button className="bjp-menu" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div className={`bjp-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="bjp-drawer-shade" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
        <aside>
          <p className="bjp-kicker">Service menu</p>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>All services</Link>
          {FEATURED_PAGES.map((page) => <Link href={page.slug} key={page.slug} onClick={() => setOpen(false)}>{page.title}</Link>)}
          <a className="bjp-button bjp-button-primary" href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
        </aside>
      </div>
      <div className={`bjp-mobile-call ${showCall && !open ? "is-visible" : ""}`}>
        <a href={`tel:${PHONE_E164}`}>
          <span>Ready when your site is</span>
          <b>Call {PHONE_DISPLAY}</b>
        </a>
      </div>
    </>
  );
}
