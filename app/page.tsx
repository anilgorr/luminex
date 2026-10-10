import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import WindowExplode3D from "@/components/WindowExplode3D";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { reasons, partners } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WindowExplode3D />

      {/* About */}
      <section className="section section-bg-lines">
        <div className="container grid-2">
          <Reveal>
            <div className="about-images about-photo">
              <div className="arch">
                <Image src="/images/luminex-banner.jpg" alt="Floor-to-ceiling glazed wall and double doors with slim black frames, filling a modern hallway with daylight" width={2400} height={1600} sizes="(max-width: 991px) 90vw, 430px" />
              </div>
              <div className="customer-badge"><strong>98%</strong><span>Happy Customer</span></div>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="About us" title="Expertise in windows & doors for every style" />
            <Reveal className="justify">
              <p>Luminex Windows is one of the largest manufacturers of premium uPVC and System Aluminium doors and windows in India and Bhutan, with a state-of-the-art manufacturing facility.</p>
              <p><strong>Luminex is an official Schüco channel partner.</strong> We build with Schüco, Luminex and Fenova profiles, Saint-Gobain glass and Schüco, Pego and Kinlong hardware — uPVC windows start at ₹495 per sq ft and system aluminium at ₹950 per sq ft, delivered and installed in 15–30 days. We have an office in Siliguri and a Bhutan liaison desk in Thimphu.</p>
              <p>Our brand focuses on delivering high-performance window solutions that combine durability, energy efficiency, weather insulation, and contemporary design. With advanced manufacturing standards and professional installation, Luminex Windows ensures superior comfort, safety, and long-term value for every project.</p>
              <p>We specialize in a wide range of uPVC window systems including sliding windows, casement windows, tilt and turn windows, and customized uPVC door and window solutions designed to suit modern architectural needs. Our products are engineered to provide excellent thermal insulation, soundproofing, dust protection, and rainwater resistance, making them ideal for Indian weather conditions. The multi-chamber uPVC profiles, airtight sealing systems, and high-quality hardware help improve indoor comfort while reducing energy loss.</p>
              <p>Luminex Windows is dedicated to offering energy-efficient and low-maintenance uPVC windows that outperform traditional wooden and aluminium windows. Our window systems do not warp, rust, or swell, ensuring long-lasting performance, minimal maintenance, and superior durability. This makes our products a preferred choice for homeowners, architects, builders, and interior designers looking for modern, stylish, and high-performance window solutions.</p>
              <p>We are proud to say we are the most loved windows brand in India and Bhutan.</p>
              <Link href="/about" className="btn">Read More</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section reasons">
        <div className="container">
          <div className="section-row">
            <SectionTitle eyebrow="Choose Luminex" title="So many reasons to choose Luminex">
              <p>Luminex is proud to offer the expert guidance and peace-of-mind warranties needed to make your project a &ldquo;happily ever after&rdquo;.</p>
            </SectionTitle>
            <div><Link href="/request-quote" className="btn">Request A Quote</Link></div>
          </div>
          <div className="reason-grid">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 100}>
                <div className="reason">
                  <div className="icon"><img src={r.icon} alt="" width={52} height={52} /></div>
                  <div><h3>{r.title}</h3><p>{r.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section section-bg-lines">
        <div className="container">
          <div className="section-row">
            <SectionTitle eyebrow="Our partners" title="We partner with leading global and premium brands to deliver exceptional quality" />
            <p className="section-side">Luminex systems are built with profiles, glass and hardware from world-class partners, so every window and door meets international performance standards.</p>
          </div>
          <div className="partner-row">
            {partners.map((p) => <Reveal key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></Reveal>)}
          </div>
        </div>
      </section>

    </>
  );
}
