import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";
import HeroB from "./HeroB";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, explodeSteps, glance, latestPosts, partners, products, reasons, schuco } from "@/lib/home-v2";
import s from "./b.module.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-b-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design B: Profile (preview)",
  robots: { index: false, follow: false },
};

// Design B, "Profile": the language of window engineering. Photos sit inside a white frame
// with a meeting rail, like looking through a Luminex sliding window; specs read like a data sheet.
export default function DesignB() {
  return (
    <div className={`${s.root} ${archivo.variable}`}>
      <PreviewHeader />

      <HeroB />

      <WindowExplodeV2 steps={explodeSteps} className={s.explode} />

      <section className={s.section} aria-labelledby="b-about">
        <div className={`${s.wrap} ${s.about}`}>
          <div>
            <h2 id="b-about" className={s.h2}>{about.title}</h2>
            {about.body.map((p) => <p key={p} className={s.body}>{p}</p>)}
            <p className={s.stat}><strong>{about.stat.value}</strong><span>{about.stat.label}</span></p>
            <Link href="/about" className={s.btnLine}>About Luminex</Link>
          </div>
          <div className={s.mat}>
            <Image src={about.image.src} alt={about.image.alt} width={430} height={623} sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      <section id="schuco" className={`${s.section} ${s.schuco}`} aria-labelledby="b-schuco">
        <div className={`${s.wrap} ${s.schucoGrid}`}>
          <div>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="b-schuco" className={s.h2}>{schuco.title}</h2>
            <p className={s.lede}>{schuco.intro}</p>
          </div>
          <Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} className={s.schucoImg} sizes="(max-width: 900px) 60vw, 25vw" />
          <ul className={s.schucoList}>
            {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
          </ul>
          <p className={s.note}>{schuco.note}</p>
        </div>
      </section>

      <section className={s.section} aria-labelledby="b-products">
        <div className={s.wrap}>
          <h2 id="b-products" className={s.h2}>Windows, doors and replacements</h2>
          <div className={s.products}>
            {products.map((p) => (
              <Link key={p.href} href={p.href} className={s.product}>
                <span className={s.productMat}><span className={s.productImg}><Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" /></span></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.white}`} aria-labelledby="b-reasons">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="b-reasons" className={s.h2}>Why Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.sheet}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
          <h2 className={s.h3}>At a glance</h2>
          <dl className={s.glance}>
            {glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="b-faq">
        <div className={`${s.wrap} ${s.narrow}`}>
          <h2 id="b-faq" className={s.h2}>Questions before you order</h2>
          <PreviewFaq />
          <Link href="/faq" className={s.btnLine}>All FAQs</Link>
        </div>
      </section>

      <section className={`${s.partners}`} aria-labelledby="b-partners">
        <div className={`${s.wrap} ${s.partnerGrid}`}>
          <h2 id="b-partners" className={s.h3}>Built with</h2>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="b-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="b-blog" className={s.h2}>From the workshop</h2>
            <Link href="/blog" className={s.btnLine}>All articles</Link>
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
