import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import HeroD from "./HeroD";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { about, craftImage, detailImage, explodeSteps, latestPosts, partners, process, products, reasons, regions, schuco } from "@/lib/home-v2";
import s from "./d.module.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-d-display", display: "swap" });

export const metadata: Metadata = {
  title: "Homepage design D: Obsidian (preview)",
  robots: { index: false, follow: false },
};

// Design D, "Obsidian": warm black, ivory and anodised bronze — the colours of slim black
// and bronze aluminium frames. Full-bleed cinematic photography, Bodoni Moda headlines.
export default function DesignD() {
  return (
    <div className={`${s.root} ${bodoni.variable}`}>
      <PreviewHeader logo="white" />

      <HeroD />

      <section className={s.section} aria-labelledby="d-about">
        <div className={`${s.wrap} ${s.about}`}>
          <div className={s.aboutCopy}>
            <h2 id="d-about" className={s.h2}>{about.title}</h2>
            {about.body.map((p) => <p key={p} className={s.body}>{p}</p>)}
            <p className={s.stat}><strong>{about.stat.value}</strong><span>{about.stat.label}</span></p>
            <Link href="/about" className={s.link}>About Luminex</Link>
          </div>
          <div className={s.aboutPhotos}>
            <div className={s.photoTall}><Image src={detailImage.src} alt={detailImage.alt} width={detailImage.w} height={detailImage.h} sizes="(max-width: 900px) 60vw, 26vw" /></div>
            <div className={s.photoSmall}><Image src={craftImage.src} alt={craftImage.alt} width={craftImage.w} height={craftImage.h} sizes="(max-width: 900px) 50vw, 20vw" /></div>
          </div>
        </div>
      </section>

      <WindowExplodeV2 steps={explodeSteps} tone="dark" className={s.explode} />

      <section className={s.productsSection} aria-labelledby="d-products">
        <div className={s.wrap}><h2 id="d-products" className={s.h2}>What we make</h2></div>
        <div className={s.products}>
          {products.map((p) => (
            <Link key={p.href} href={p.href} className={s.product}>
              <span className={s.productImg}><Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 34vw" /></span>
              <span className={s.productText}><h3>{p.title}</h3><p>{p.text}</p><span className={s.productMore}>Explore {p.title.toLowerCase()}</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section id="schuco" className={s.schuco} aria-labelledby="d-schuco">
        <div className={`${s.wrap} ${s.schucoGrid}`}>
          <div>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="d-schuco" className={s.h2}>{schuco.title}</h2>
            <p className={s.schucoIntro}>{schuco.intro}</p>
            <ul className={s.schucoList}>
              {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
            </ul>
            <p className={s.note}>{schuco.note}</p>
          </div>
          <div className={s.schucoVisual}>
            <Image src={schuco.image.src} alt={schuco.image.alt} width={370} height={465} sizes="(max-width: 900px) 70vw, 30vw" />
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="d-process">
        <div className={s.wrap}>
          <h2 id="d-process" className={s.h2}>From first visit to after-sales</h2>
          <ol className={s.process}>
            {process.map((p, i) => (
              <li key={p.title}><span className={s.stepNum}>{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <div className={s.imageBreak} role="img" aria-label="Double-height hallway with a black-framed glazed wall and double doors opening to a garden">
        <Image src="/images/luminex-banner.jpg" alt="" fill sizes="100vw" />
      </div>

      <section className={s.section} aria-labelledby="d-reasons">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="d-reasons" className={s.h2}>Why homeowners, architects and hotels choose Luminex</h2>
            <Link href="/request-quote" className={s.btn}>Request a quote</Link>
          </div>
          <ul className={s.reasons}>
            {reasons.map((r) => <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className={`${s.section} ${s.regionsSection}`} aria-labelledby="d-regions">
        <div className={`${s.wrap} ${s.regionsGrid}`}>
          <div>
            <h2 id="d-regions" className={s.h2}>Where we install</h2>
            <p className={s.body}>From the plains of North Bengal to the hill towns of Sikkim and the valleys of Bhutan, every installation is done by Luminex&apos;s own teams.</p>
          </div>
          <ul className={s.regions}>
            {regions.map((r) => (
              <li key={r.href}><Link href={r.href}><span className={s.place}>{r.place}</span><span className={s.placeNote}>{r.note}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${s.section} ${s.faqSection}`} aria-labelledby="d-faq">
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div>
            <h2 id="d-faq" className={s.h2}>Questions before you order</h2>
            <Link href="/faq" className={s.link}>All FAQs</Link>
          </div>
          <PreviewFaq className={s.faq} />
        </div>
      </section>

      <section className={s.partners} aria-labelledby="d-partners">
        <div className={s.wrap}>
          <h2 id="d-partners" className={s.partnersTitle}>Profiles, glass and hardware from</h2>
          <ul className={s.partnerRow}>
            {partners.map((p) => <li key={p.alt}><img src={p.src} alt={p.alt} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      <section className={s.section} aria-labelledby="d-blog">
        <div className={s.wrap}>
          <div className={s.rowHead}>
            <h2 id="d-blog" className={s.h2}>Journal</h2>
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
