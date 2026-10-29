import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import HeroD from "./HeroD";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import { classicReasons, clients, explodeSteps, latestPosts, partners, process, products, schuco } from "@/lib/home-v2";
import { fenova, performance, performanceImage, schucoBrochure } from "@/lib/brochure";
import Swatches from "@/components/Swatches";
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

      {/* Performance figures, brochure page 9 (29 Oct). */}
      <section className={s.perf} aria-labelledby="d-perf">
        <div className={`${s.wrap} ${s.perfGrid}`}>
          <div className={s.perfHead}>
            <h2 id="d-perf" className={s.h2}>{performance.title}</h2>
            <p className={s.body}>{performance.intro}</p>
            <Link href={performance.link.href} className={s.link}>{performance.link.label}</Link>
          </div>
          <dl className={s.perfStats}>
            {performance.stats.map((st) => (
              <div key={st.label}>
                <dt>{st.label}</dt>
                <dd><span className={s.perfUpto}>Up to</span><span className={s.perfNum}>{st.value}<small>{st.unit}</small></span></dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={s.perfPhoto}><Image src={performanceImage.src} alt={performanceImage.alt} fill sizes="100vw" /></div>
      </section>

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

      {/* Client logos (supplied by Luminex, 29 Oct). */}
      <section className={s.clients} aria-labelledby="d-clients">
        <div className={s.wrap}>
          <div className={s.clientsHead}>
            <h2 id="d-clients" className={s.h2}>Our clients</h2>
            <p className={s.body}>Hotels, schools and businesses across India and Bhutan trust Luminex with their windows and doors.</p>
          </div>
          <ul className={s.clientGrid}>
            {clients.map((c) => (
              <li key={c.file}><img src={c.src} alt={c.name} loading="lazy" /></li>
            ))}
          </ul>
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

      {/* Schüco, brochure page 11 (29 Oct). */}
      <section id="schuco" className={s.schuco} aria-labelledby="d-schuco">
        <div className={`${s.wrap} ${s.partnerGrid}`}>
          <div className={s.partnerCopy}>
            <p className={s.partnerEyebrow}>{schucoBrochure.eyebrow}</p>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="d-schuco" className={s.h2}>{schucoBrochure.title}</h2>
            <p className={s.partnerSub}>{schucoBrochure.subtitle}</p>
            {schucoBrochure.body.map((p) => <p key={p} className={s.partnerBody}>{p}</p>)}
          </div>
          <div className={s.partnerPhoto}>
            <Image src={schucoBrochure.image.src} alt={schucoBrochure.image.alt} width={schucoBrochure.image.w} height={schucoBrochure.image.h} sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
        </div>
        <div className={s.wrap}>
          <ul className={s.pointGrid}>
            {schucoBrochure.points.map((pt) => <li key={pt.title}><h3>{pt.title}</h3><p>{pt.text}</p></li>)}
          </ul>
          <div className={s.palette}>
            <h3>{schucoBrochure.coloursTitle}</h3>
            <Swatches colours={schucoBrochure.colours} />
            <p className={s.note}>{schucoBrochure.coloursNote}</p>
          </div>
        </div>
      </section>

      {/* Fenova, brochure page 10 (29 Oct). */}
      <section className={s.fenova} aria-labelledby="d-fenova">
        <div className={`${s.wrap} ${s.partnerGrid} ${s.partnerFlip}`}>
          <div className={s.partnerPhoto}>
            <Image src={fenova.image.src} alt={fenova.image.alt} width={fenova.image.w} height={fenova.image.h} sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className={s.partnerCopy}>
            <p className={s.partnerEyebrow}>{fenova.eyebrow}</p>
            <img src="/images/web/partner/fenova-logo-200.png" alt="Fenova" width={200} height={60} className={s.fenovaLogo} />
            <h2 id="d-fenova" className={s.h2}>{fenova.title}</h2>
            <p className={s.partnerSub}>{fenova.subtitle}</p>
            {fenova.body.map((p) => <p key={p} className={s.partnerBody}>{p}</p>)}
            <ul className={s.badges}>{fenova.badges.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
        <div className={s.wrap}>
          <h3 className={s.compareTitle}>{fenova.compareTitle}</h3>
          <div className={s.compare}>
            {[fenova.coextruded, fenova.laminated].map((c, i) => (
              <div key={c.title} className={i === 0 ? s.compareGood : s.compareBad}>
                <h4>{c.title}</h4>
                <p>{c.lead}</p>
                <ul>{c.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className={s.palette}>
            <h3>{fenova.coloursTitle}</h3>
            <Swatches colours={fenova.colours} />
          </div>
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
