"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navV2, quoteHref, whatsapp, footerLocations, contact, faqs } from "@/lib/home-v2";
import { site, telHref } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import c from "./chrome.module.css";

// Shared header, footer, FAQ list and WhatsApp button for the three homepage designs.
// Layout is identical in all three; each design themes them through CSS variables
// (--pv-bg, --pv-ink, --pv-muted, --pv-line, --pv-brand, --pv-display, --pv-radius, --pv-foot-bg).

export function PreviewHeader({ logo = "green" }: { logo?: "green" | "white" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={c.strip}>
        <div className={c.wrap}>
          <span>Official Schüco channel partner</span>
          <span className={c.stripLinks}>
            <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer">WhatsApp India<span className={c.stripNum}> {whatsapp.india.display}</span></a>
            <a href={whatsapp.bhutan.href} target="_blank" rel="noopener noreferrer">WhatsApp Bhutan<span className={c.stripNum}> {whatsapp.bhutan.display}</span></a>
          </span>
        </div>
      </div>
      <header className={c.header}>
        <div className={`${c.wrap} ${c.headerRow}`}>
          <Link href="/" className={c.logo} aria-label="Luminex Windows home">
            <Image src={logo === "white" ? "/images/web/luminex-white.png" : "/images/web/Luminex.png"} alt="Luminex" width={600} height={220} priority />
          </Link>
          <nav className={c.nav} aria-label="Main">
            {navV2.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </nav>
          <Link href={quoteHref} className={c.cta}>Get a quote</Link>
          <button className={c.toggle} aria-label="Menu" aria-expanded={open} aria-controls="pv-mobile-nav" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
        <nav id="pv-mobile-nav" className={`${c.mobileNav}${open ? ` ${c.open}` : ""}`} aria-label="Mobile">
          {navV2.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>)}
          <Link href={quoteHref} onClick={() => setOpen(false)}>Get a quote</Link>
        </nav>
      </header>
    </>
  );
}

export function PreviewFooter() {
  return (
    <footer className={c.footer}>
      <div className={c.wrap}>
        <div className={c.footHead}>
          <h2>Planning windows for a new build or a replacement?</h2>
          <div className={c.footBtns}>
            <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={c.footBtn}><WhatsAppIcon size={18} /> WhatsApp India</a>
            <a href={whatsapp.bhutan.href} target="_blank" rel="noopener noreferrer" className={c.footBtn}><WhatsAppIcon size={18} /> WhatsApp Bhutan</a>
            <Link href={quoteHref} className={`${c.footBtn} ${c.footBtnSolid}`}>Request a quote</Link>
          </div>
        </div>
        <div className={c.footGrid}>
          <div>
            <Image src="/images/web/luminex-white.png" alt="Luminex" width={600} height={220} className={c.footLogo} />
            <p>{site.tagline}</p>
            <div className={c.social}>
              <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Luminex on Facebook"><FacebookIcon size={18} /></a>
              <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Luminex on Instagram"><InstagramIcon size={18} /></a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/windows">Windows</Link></li>
              <li><Link href="/doors">Doors</Link></li>
              <li><Link href="#schuco">Schüco</Link></li>
              <li><Link href="/renovations">Replacements</Link></li>
              <li><Link href="/warranty">Warranty</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3>Where we work</h3>
            <ul className={c.locList}>
              {footerLocations.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p className={c.footLabel}>India</p>
            {contact.phonesIndia.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
            <p className={c.footLabel}>Bhutan</p>
            {contact.phonesBhutan.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
            <p className={c.footLabel}>Email</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p className={c.footLabel}>Siliguri office</p>
            <address>{contact.address}</address>
          </div>
        </div>
        <div className={c.copy}>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}

export function PreviewWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.wa}>
      {open && (
        <div className={c.waMenu} id="pv-wa-menu">
          <p>Chat with Luminex on WhatsApp</p>
          <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> <span><strong>India</strong> {whatsapp.india.display}</span></a>
          <a href={whatsapp.bhutan.href} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> <span><strong>Bhutan</strong> {whatsapp.bhutan.display}</span></a>
        </div>
      )}
      <button className={c.waBtn} aria-label="Chat on WhatsApp" aria-expanded={open} aria-controls="pv-wa-menu" onClick={() => setOpen(!open)}>
        <WhatsAppIcon size={28} />
      </button>
    </div>
  );
}

// Native <details> keeps answers in the HTML for crawlers. No FAQPage schema here: it lives on /faq.
export function PreviewFaq({ className = "" }: { className?: string }) {
  return (
    <div className={`${c.faq} ${className}`}>
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary><h3>{f.q}</h3><span className={c.plus} aria-hidden="true" /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export { telHref };
