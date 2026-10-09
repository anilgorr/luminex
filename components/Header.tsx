"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>{site.topbarText}</span>
          <Link href="/request-quote">Get Your Free Quote</Link>
        </div>
      </div>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="logo" aria-label="Luminex × Schüco — Luminex Windows home">
            <Image src="/images/web/Luminex.png" alt="Luminex – windows, doors, facade" width={600} height={220} priority />
            <span className="logo-x" aria-hidden="true">×</span>
            <img className="logo-partner" src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} />
          </Link>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : ""}>{n.label}</Link>
            ))}
          </nav>
          <div className="header-social">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
          </div>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
            {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </nav>
        </div>
      </header>
    </>
  );
}
