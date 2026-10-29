import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Jost } from "next/font/google";
import HeroE from "./HeroE";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, craftImage, explodeSteps, glance, latestPosts, partners, process, products, reasons, regions, schuco } from "@/lib/home-v2";
import s from "./e.module.css";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-e-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design E: Anthracite (preview)",
  robots: { index: false, follow: false },
};

// Design E, "Anthracite": RAL 7016 anthracite grey, a classic premium window frame colour,
// with white and brushed aluminium. Architectural, precise, light Jost headlines at large scale.
export default function DesignE() {
  return (
    <div className={`${s.root} ${jost.variable}`}>
      <PreviewHeader />

      <HeroE />

      <section className={s.specBar} aria-label="Luminex at a glance">
        <dl className={s.wrap}>
          {glance.slice(0, 4).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </section>

      <section className={s.section} aria-labelledby="e-about">
        <div className={`${s.wrap} ${s.about}`}>
          <h2 id="e-about" className={s.h2}>{about.title}</h2>
          <div>
            {about.body.map((p) => <p key={p} className={s.body}>{p}</p>)}
            <div className={s.aboutFoot}>
              <p className={s.stat}><strong>{about.stat.value}</strong> {about.stat.label}</p>
              <Link href="/about" className={s.link}>About Luminex</Link>
            </div>
          </div>
        </div>
      </section>

      <WindowExplodeV2 steps={explodeSteps} className={s.explode} />

      <section className={s.section} aria-labelledby="e-products">
        <div className={s.wrap}>
          <h2 id="e-products" className={s.h2}>Windows, doors and replacements</h2>
          <div className={s.rows}>
            {products.map((p, i) => (
              <Link key={p.href} href={p.href} className={`${s.row} ${i % 2 ? s.rowFlip : ""}`}>
                <span className={s.rowImg}><Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 60vw" /></span>
                <span className={s.rowText}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className={s.rowMore}>View {p.title.toLowerCase()}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="schuco" className={s.schuco} aria-labelledby="e-schuco">
        <div className={`${s.wrap} ${s.schucoGrid}`}>
          <div className={s.schucoHead}>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="e-schuco" className={s.h2}>{schuco.title}</h2>
            <p className={s.schucoIntro}>{schuco.intro}</p>
          </div>
          <div className={s.schucoImg}><Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} sizes="(max-width: 900px) 60vw, 28vw" /></div>
          <ul className={s.schucoList}>
            {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
          </ul>
          <p className={s.note}>{schuco.note}</p>
        </div>
      </section>

      <section className={s.section} aria-labelledby="e-process">
        <div className={`${s.wrap} ${s.processGrid}`}>
          <div>
            <h2 id="e-process" className={s.h2}>How a Luminex project runs</h2>
            <div className={s.craft}><Image src={craftImage.src} alt={craftImage.alt} width={craftImage.w} height={craftImage.h} sizes="(max-width: 900px) 100vw, 34vw" /></div>
          </div>
          <ol className={s.timeline}>
            {process.map((p, i) => (
              <li key={p.title}><span className={s.tlNum}>{i + 1}</span><div><h3>{p.title}</h3>{p.text.map((t) => <p key={t}>{t}</p>)}</div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${s.section} ${s.mist}`} aria-labelledby="e-reasons">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="e-reasons" className={s.h2}>Why Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.reasons}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="e-regions">
        <div className={s.wrap}>
          <h2 id="e-regions" className={s.h2}>Our installation teams cover</h2>
          <ol className={s.route}>
            {regions.map((r) => (
              <li key={r.href}><Link href={r.href}><span className={s.routeDot} aria-hidden="true" /><span className={s.routePlace}>{r.place}</span><span className={s.routeNote}>{r.note}</span></Link></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${s.section} ${s.mist}`} aria-labelledby="e-faq">
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div>
            <h2 id="e-faq" className={s.h2}>Questions before you order</h2>
            <p className={s.body}>Send your opening sizes on WhatsApp and the team will reply with options.</p>
            <Link href="/faq" className={s.link}>All FAQs</Link>
          </div>
          <PreviewFaq />
        </div>
      </section>

      <section className={s.partners} aria-labelledby="e-partners">
        <div className={`${s.wrap} ${s.partnerGrid}`}>
          <h2 id="e-partners" className={s.partnersTitle}>Built with</h2>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="e-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="e-blog" className={s.h2}>Guides</h2>
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
