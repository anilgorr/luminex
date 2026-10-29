import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import HeroD from "./HeroD";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { classicReasons, explodeSteps, latestPosts, partners, process, products, schuco } from "@/lib/home-v2";
import s from "./d.module.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-d-display", display: "swap" });


// Design D view. `light` renders the white-background variant (client request, 28 Oct).
// Design D, "Obsidian": warm black, ivory and anodised bronze — the colours of slim black
// and bronze aluminium frames. Full-bleed cinematic photography, Bodoni Moda headlines.
export default function DesignDView({ light = false }: { light?: boolean }) {
  return (
    <div className={`${s.root} ${light ? s.light : ""} ${bodoni.variable}`}>
      <PreviewHeader logo={light ? "green" : "white"} />

      <HeroD />

      <WindowExplodeV2 steps={explodeSteps} tone={light ? "light" : "dark"} className={s.explode} />

      {/* "So many reasons to choose Luminex": the previous site's block and fonts (client, 28 Oct). */}
      <section className={`section reasons ${s.classic}`} aria-labelledby="d-classic">
        <div className="container">
          <div className="section-row">
            <div className="section-title">
              <span className="eyebrow">Choose Luminex</span>
              <h2 id="d-classic">{classicReasons.title}</h2>
              <p>{classicReasons.intro}</p>
            </div>
            <div><Link href="/request-quote" className="btn">Request A Quote</Link></div>
          </div>
          <div className="reason-grid">
            {classicReasons.items.map((r) => (
              <div className="reason" key={r.title}>
                <div className="icon"><img src={r.icon} alt="" width={52} height={52} /></div>
                <div><h3>{r.title}</h3><p>{r.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        {/* No product photo until Schüco supplies approved imagery (client: the old cut-out was not a Schüco window). */}
        <div className={`${s.wrap} ${s.schucoSolo}`}>
          <div className={s.schucoHead}>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="d-schuco" className={s.h2}>{schuco.title}</h2>
          </div>
          <p className={s.schucoIntro}>{schuco.intro}</p>
          <ul className={s.schucoList}>
            {schuco.items.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}
          </ul>
          <p className={s.note}>{schuco.note}</p>
        </div>
      </section>

      <section className={s.section} aria-labelledby="d-process">
        <div className={s.wrap}>
          <h2 id="d-process" className={s.h2}>From first visit to after-sales</h2>
          <ol className={s.process}>
            {process.map((p, i) => (
              <li key={p.title}><span className={s.stepNum}>{i + 1}</span><h3>{p.title}</h3>{p.text.map((t) => <p key={t}>{t}</p>)}</li>
            ))}
          </ol>
        </div>
      </section>

      <div className={s.imageBreak} role="img" aria-label="Double-height hallway with a black-framed glazed wall and double doors opening to a garden">
        <Image src="/images/luminex-banner.jpg" alt="" fill sizes="100vw" />
      </div>

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
