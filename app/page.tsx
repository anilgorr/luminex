import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { reasons, partners } from "@/lib/site";
import { posts } from "@/lib/content";
import { ArrowRight } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section className="section section-bg-lines">
        <div className="container grid-2">
          <Reveal>
            <div className="about-images">
              <div className="arch"><Image src="/images/luminex-about.jpg" alt="White uPVC casement bay window installed by Luminex" width={430} height={623} /></div>
              <div className="customer-badge"><strong>98%</strong><span>Happy Customer</span></div>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="About us" title="Expertise in windows & doors for every style" />
            <Reveal className="justify">
              <p>Luminex Windows is one of the largest manufacturers of premium uPVC and System Aluminium doors and windows in India and Bhutan, with a state-of-the-art manufacturing facility.</p>
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

      {/* FAQ */}
      <section className="section faqs" id="faq">
        <div className="container grid-2">
          <div className="faq-img"><Image src="/images/our-faqs-img.jpg" alt="Luminex uPVC window detail" width={585} height={730} /></div>
          <div className="dark">
            <SectionTitle eyebrow="Frequently asked questions" title="Answers to your most asked questions" />
            <Faq />
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

      {/* Blog */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-row">
            <SectionTitle eyebrow="Latest news" title="Expert tips and insights for windows and doors" />
            <p className="section-side">Stay informed with professional advice, design trends, and practical solutions for enhancing your home&apos;s windows and doors.</p>
          </div>
          <div className="grid-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <article className="post">
                  <Link href={`/blog/${p.slug}`}><figure><Image src={p.image} alt={p.title} width={1366} height={768} sizes="(max-width: 767px) 100vw, 33vw" /></figure></Link>
                  <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="read-more">Read more <span className="circle"><ArrowRight /></span></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
