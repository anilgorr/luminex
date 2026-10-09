import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import CtaBox from "@/components/CtaBox";

export const metadata: Metadata = {
  title: "Window & Door Replacement and Renovation",
  description: "Replace old wooden or aluminium windows with Luminex uPVC — measured, removed and installed by our own team with minimal disruption. Free consultation and quote.",
  alternates: { canonical: "/renovations" },
};

const steps = [
  ["Free consultation", "We visit your home, understand your needs and recommend the right window and door systems."],
  ["Precise measurement", "Every opening is measured on site so your new frames fit perfectly."],
  ["Manufacturing", "Windows and doors are made to order in our facility using partner profiles, glass and hardware."],
  ["Clean installation", "Our trained team removes the old frames, installs, seals and finishes — then cleans up."],
];

export default function Renovations() {
  return (
    <>
      <PageHeader title="Renovations" crumbs={[{ label: "Renovations" }]} />
      <section className="section section-bg-lines">
        <div className="container grid-2">
          <div>
            <SectionTitle eyebrow="Replacement windows & doors" title="Upgrade your home without rebuilding it">
              <p>Old wooden frames swell and rot; basic aluminium lets in heat, noise and dust. Luminex replacement windows and doors fit into your existing openings and immediately make rooms quieter, cooler and easier to maintain.</p>
            </SectionTitle>
            <ul className="check-list">
              <li>Fits existing wall openings</li><li>Minimal dust and disruption</li><li>Better insulation and soundproofing</li><li>Up to 25-year profile warranty</li><li>Installed in 15–30 days</li>
            </ul>
            <div style={{ marginTop: 30 }}><Link href="/request-quote" className="btn">Request A Quote</Link></div>
          </div>
          <Reveal><div className="shine"><Image src="/images/our-faqs-img.jpg" alt="Renovated home with new Luminex windows" width={585} height={730} /></div></Reveal>
        </div>
      </section>
      <section className="section reasons">
        <div className="container">
          <SectionTitle eyebrow="How it works" title="A simple four-step renovation process" center />
          <div className="reason-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}><div className="reason"><div className="icon" style={{ fontSize: 40, fontWeight: 800, color: "var(--primary)" }}>0{i + 1}</div><div><h3>{t}</h3><p>{d}</p></div></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBox />
    </>
  );
}
