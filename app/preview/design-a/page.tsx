import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import HeroA from "./HeroA";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, explodeSteps, glance, latestPosts, partners, products, reasons, schuco } from "@/lib/home-v2";
import s from "./a.module.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-a-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design A: Atelier (preview)",
  robots: { index: false, follow: false },
};

// Design A, "Atelier": cool paper-white, graphite type, one oversized serif headline,
// photography bleeding off the right edge. Green only in the strip, logo and buttons.
export default function DesignA() {
  return (
    <div className={`${s.root} ${serif.variable}`}>
      <PreviewHeader />

      <HeroA />

      <WindowExplodeV2 steps={explodeSteps} className={s.explode} />

      <section className={s.section} aria-labelledby="a-about">
        <div className={`${s.wrap} ${s.about}`}>
          <figure className={s.aboutFig}>
            <Image src={about.image.src} alt={about.image.alt} width={430} height={623} sizes="(max-width: 900px) 100vw, 40vw" />
            <figcaption><strong>{about.stat.value}</strong> {about.stat.label}</figcaption>
          </figure>
          <div className={s.aboutText}>
            <h2 id="a-about" className={s.h2}>{about.title}</h2>
            {about.body.map((p) => <p key={p}>{p}</p>)}
            <Link href="/about" className={s.textLink}>About Luminex</Link>
          </div>
        </div>
      </section>

      <section id="schuco" className={`${s.section} ${s.schuco}`} aria-labelledby="a-schuco">
        <div className={`${s.wrap} ${s.schucoGrid}`}>
          <div>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="a-schuco" className={s.h2}>{schuco.title}</h2>
            <p className={s.lede}>{schuco.intro}</p>
            <ul className={s.schucoList}>
              {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
            </ul>
            <p className={s.note}>{schuco.note}</p>
          </div>
          <div className={s.schucoImg}>
            <Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} sizes="(max-width: 900px) 70vw, 30vw" />
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="a-products">
        <div className={s.wrap}>
          <h2 id="a-products" className={s.h2}>What we make</h2>
          <div className={s.products}>
            {products.map((p) => (
              <Link key={p.href} href={p.href} className={s.product}>
                <span className={s.productImg}><Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.reasons}`} aria-labelledby="a-reasons">
        <div className={`${s.wrap} ${s.reasonsGrid}`}>
          <div className={s.reasonsHead}>
            <h2 id="a-reasons" className={s.h2}>Why homeowners and architects choose Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.reasonList}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="a-faq">
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div>
            <h2 id="a-faq" className={s.h2}>Questions we hear most</h2>
            <dl className={s.glance}>
              {glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Link href="/faq" className={s.textLink}>All FAQs</Link>
          </div>
          <PreviewFaq />
        </div>
      </section>

      <section className={`${s.section} ${s.partners}`} aria-labelledby="a-partners">
        <div className={s.wrap}>
          <h2 id="a-partners" className={s.h3}>Profiles, glass and hardware from</h2>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="a-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="a-blog" className={s.h2}>Notes on windows and doors</h2>
            <Link href="/blog" className={s.textLink}>All articles</Link>
          </div>
          <div className={s.posts}>
            {latestPosts.map((p) => (
              <article key={p.slug}>
                <Link href={`/blog/${p.slug}`} className={s.postImg}><Image src={p.image} alt="" width={1366} height={768} sizes="(max-width: 900px) 100vw, 33vw" /></Link>
                <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PreviewFooter />
      <PreviewWhatsApp />
    </div>
  );
}
