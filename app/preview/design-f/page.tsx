import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Marcellus } from "next/font/google";
import HeroF from "./HeroF";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, craftImage, detailImage, explodeSteps, glance, latestPosts, partners, process, products, reasons, regions, schuco } from "@/lib/home-v2";
import s from "./f.module.css";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-f-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design F: Daylight (preview)",
  robots: { index: false, follow: false },
};

// Design F, "Daylight": the light a good window lets in. Cool white and sky-grey, deep Himalayan
// navy for text and the dark bands, and brass for hairlines. Marcellus headlines, layered photographs.
export default function DesignF() {
  return (
    <div className={`${s.root} ${marcellus.variable}`}>
      <PreviewHeader />

      <HeroF />

      <section className={s.section} aria-labelledby="f-about">
        <div className={`${s.wrap} ${s.about}`}>
          <div className={s.aboutPhotos}>
            <div className={s.aboutA}><Image src={craftImage.src} alt={craftImage.alt} width={craftImage.w} height={craftImage.h} sizes="(max-width: 900px) 70vw, 24vw" /></div>
            <div className={s.aboutB}><Image src={detailImage.src} alt={detailImage.alt} width={detailImage.w} height={detailImage.h} sizes="(max-width: 900px) 60vw, 22vw" /></div>
          </div>
          <div>
            <h2 id="f-about" className={s.h2}>{about.title}</h2>
            {about.body.map((p) => <p key={p} className={s.body}>{p}</p>)}
            <dl className={s.aboutFacts}>
              <div><dt>Happy customers</dt><dd>{about.stat.value}</dd></div>
              <div><dt>Order to installation</dt><dd>30–45 days</dd></div>
              <div><dt>Profile warranty</dt><dd>Up to 25 yrs</dd></div>
            </dl>
            <Link href="/about" className={s.link}>About Luminex</Link>
          </div>
        </div>
      </section>

      <WindowExplodeV2 steps={explodeSteps} tone="dark" className={s.explode} />

      <section className={s.section} aria-labelledby="f-products">
        <div className={s.wrap}>
          <div className={s.centerHead}>
            <h2 id="f-products" className={s.h2}>What we make</h2>
            <p className={s.body}>Every system is made to your openings in Siliguri and fitted by our own installers.</p>
          </div>
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

      <section id="schuco" className={s.section} aria-labelledby="f-schuco">
        <div className={s.wrap}>
          <div className={s.schuco}>
            <div className={s.schucoImg}><Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} sizes="(max-width: 900px) 60vw, 24vw" /></div>
            <div>
              <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
              <h2 id="f-schuco" className={s.h2}>{schuco.title}</h2>
              <p className={s.body}>{schuco.intro}</p>
              <ul className={s.schucoList}>
                {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
              </ul>
              <p className={s.note}>{schuco.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.navy} aria-labelledby="f-process">
        <div className={s.wrap}>
          <h2 id="f-process" className={s.h2}>From first visit to after-sales</h2>
          <ol className={s.process}>
            {process.map((p, i) => (
              <li key={p.title}><span className={s.stepNum}>{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></li>
            ))}
          </ol>
          <dl className={s.glance}>
            {glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="f-reasons">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="f-reasons" className={s.h2}>Why Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.reasons}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className={s.regionsBand} aria-labelledby="f-regions">
        <div className={s.regionsPhoto}><Image src="/images/mission-vision-bg.jpg" alt="Wide glass sliding door opening a living room onto a stone terrace and garden" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className={s.regionsCard}>
          <h2 id="f-regions" className={s.h2}>Where we install</h2>
          <ul className={s.regions}>
            {regions.map((r) => (
              <li key={r.href}><Link href={r.href}><span>{r.place}</span><small>{r.note}</small></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="f-faq">
        <div className={`${s.wrap} ${s.faqWrap}`}>
          <div className={s.centerHead}>
            <h2 id="f-faq" className={s.h2}>Questions before you order</h2>
          </div>
          <PreviewFaq />
          <p className={s.faqMore}><Link href="/faq" className={s.link}>All FAQs</Link></p>
        </div>
      </section>

      <section className={s.partners} aria-labelledby="f-partners">
        <div className={s.wrap}>
          <h2 id="f-partners" className={s.partnersTitle}>Profiles, glass and hardware from</h2>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="f-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="f-blog" className={s.h2}>Notes for your next build</h2>
            <Link href="/blog" className={s.link}>All articles</Link>
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
