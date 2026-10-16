import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Familjen_Grotesk } from "next/font/google";
import HeroC from "./HeroC";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, explodeSteps, glance, latestPosts, partners, products, reasons, schuco } from "@/lib/home-v2";
import s from "./c.module.css";

const grotesk = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-c-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design C: Valley (preview)",
  robots: { index: false, follow: false },
};

// Design C, "Valley": stone and slate from the hills between Siliguri and Thimphu.
// Type leads the hero; the photos run as a wide filmstrip you scroll sideways.
export default function DesignC() {
  const [lead, ...rest] = about.body;
  return (
    <div className={`${s.root} ${grotesk.variable}`}>
      <PreviewHeader />

      <HeroC />

      <section className={s.section} aria-labelledby="c-about">
        <div className={`${s.wrap} ${s.about}`}>
          <div>
            <h2 id="c-about" className={s.h2}>{about.title}</h2>
            <p className={s.statement}>{lead}</p>
            {rest.map((p) => <p key={p} className={s.body}>{p}</p>)}
            <Link href="/about" className={s.textLink}>About Luminex</Link>
          </div>
          <figure className={s.aboutFig}>
            <Image src={about.image.src} alt={about.image.alt} width={430} height={623} sizes="(max-width: 900px) 100vw, 34vw" />
            <figcaption><strong>{about.stat.value}</strong> {about.stat.label}</figcaption>
          </figure>
        </div>
      </section>

      <WindowExplodeV2 steps={explodeSteps} tone="dark" className={s.explode} />

      <section id="schuco" className={s.section} aria-labelledby="c-schuco">
        <div className={s.wrap}>
          <div className={s.schuco}>
            <div className={s.schucoMark}>
              <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} />
              <Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} className={s.schucoImg} sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
            <div>
              <h2 id="c-schuco" className={s.h2}>{schuco.title}</h2>
              <p className={s.body}>{schuco.intro}</p>
              <ul className={s.schucoList}>
                {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
              </ul>
              <p className={s.note}>{schuco.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.tight}`} aria-labelledby="c-products">
        <div className={s.wrap}>
          <h2 id="c-products" className={s.h2}>What we make</h2>
          <div className={s.products}>
            {products.map((p, i) => (
              <Link key={p.href} href={p.href} className={`${s.product} ${i === 0 ? s.productLead : ""}`}>
                <span className={s.productImg}><Image src={p.image.src} alt={p.image.alt} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 40vw"} /></span>
                <span className={s.productText}><h3>{p.title}</h3><p>{p.text}</p></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={s.glanceBand} aria-labelledby="c-glance">
        <div className={s.wrap}>
          <h2 id="c-glance" className={s.srOnly}>Luminex at a glance</h2>
          <dl className={s.glance}>
            {glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className={s.section} aria-labelledby="c-reasons">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="c-reasons" className={s.h2}>Six reasons people choose Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.reasons}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className={`${s.section} ${s.surface}`} aria-labelledby="c-faq">
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div>
            <h2 id="c-faq" className={s.h2}>Answers before you call</h2>
            <p className={s.body}>Still unsure? Send your opening sizes on WhatsApp and the team will reply with options.</p>
            <Link href="/faq" className={s.textLink}>All FAQs</Link>
          </div>
          <PreviewFaq />
        </div>
      </section>

      <section className={s.partners} aria-label="Partner brands">
        <div className={s.wrap}>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="c-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="c-blog" className={s.h2}>Reading for your next build</h2>
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
