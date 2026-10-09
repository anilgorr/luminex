import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import MissionTabs from "@/components/MissionTabs";
import ProfileExplode from "@/components/ProfileExplode";

export const metadata: Metadata = {
  title: "About Us – uPVC Window & Door Manufacturer",
  description: "Luminex Windows manufactures premium uPVC and system aluminium windows and doors for homes and businesses across India and Bhutan. Official Schüco channel partner with an office in Siliguri and a Bhutan liaison desk in Thimphu.",
  alternates: { canonical: "/about" },
};

const facilities = [
  ["icon-about-facility-1.svg", "Energy saving technologies"],
  ["icon-about-facility-2.svg", "Excellent sound insulation"],
  ["icon-about-facility-3.svg", "High light transmission"],
  ["icon-about-facility-4.svg", "Up to 25-year profile warranty"],
  ["icon-about-facility-5.svg", "Eco-friendly, lead-free materials"],
  ["icon-about-facility-6.svg", "Modern thoughtful design"],
];

export default function About() {
  return (
    <>
      <PageHeader title="About us" crumbs={[{ label: "About us" }]} />
      <section className="section section-bg-lines">
        <div className="container grid-2">
          <Reveal>
            <div className="about-images explode-wrap">
              <ProfileExplode />
              <div className="customer-badge"><strong>98%</strong><span>Happy Customer</span></div>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="About us" title="Expertise in windows & doors for every style">
              <p>Partner with a company dedicated to excellence in window and door installations, ensuring each project is handled with precision and care. From design and manufacturing to installation, Luminex delivers windows and doors that look beautiful and perform for decades.</p>
            </SectionTitle>
            <div style={{ display: "grid", gap: 20, marginBottom: 30 }}>
              <Reveal><div className="mv-card"><img src="/images/icon-about-item-1.svg" alt="" /><div><h3>Our mission</h3><p>We aim to transform homes and businesses with high-quality window and door solutions that enhance aesthetics and improve energy efficiency.</p></div></div></Reveal>
              <Reveal delay={100}><div className="mv-card"><img src="/images/icon-about-item-2.svg" alt="" /><div><h3>Our vision</h3><p>We believe in integrity and sustainability. Our focus is on delivering not just products but solutions that improve homes and reduce energy use.</p></div></div></Reveal>
            </div>
            <Link href="/contact" className="btn">Contact Now</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container feature-list">
          {facilities.map(([ic, t], i) => (
            <Reveal key={t} delay={(i % 3) * 100}><div className="feature"><img src={`/images/${ic}`} alt="" /><p>{t}</p></div></Reveal>
          ))}
        </div>
      </section>

      <section className="section reasons">
        <div className="container">
          <SectionTitle eyebrow="Our approach" title="Seamless and reliable solutions" center>
            <p>We deliver tailored window and door solutions, ensuring style, functionality, and expert installation for complete satisfaction.</p>
          </SectionTitle>
          <MissionTabs />
        </div>
      </section>

      <section className="section section-bg-lines">
        <div className="container grid-2">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="shine"><Image src="/images/luminex-whywork1.jpg" alt="Luminex window installation" width={350} height={400} /></div>
              <div className="shine" style={{ marginTop: 60 }}><Image src="/images/luminex-whywork2.jpg" alt="Luminex uPVC window" width={350} height={400} /></div>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="Why work with us" title="Why we're the right choice for your home">
              <p>Partner with a company dedicated to excellence in window and door installations, ensuring each project is handled with precision and care.</p>
            </SectionTitle>
            <ul className="check-list">
              <li>Unmatched quality</li><li>Expert craftsmanship</li><li>Customized solutions</li><li>Energy efficiency</li>
            </ul>
            <div className="stats">
              <div className="stat"><strong>1K+</strong><span>Trusted customers</span></div>
              <div className="stat"><strong>98%</strong><span>Happy customers</span></div>
              <div className="stat"><strong>15 yrs</strong><span>Limited warranty</span></div>
            </div>
            <div style={{ marginTop: 40 }}><Link href="/contact" className="btn">Learn More</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
