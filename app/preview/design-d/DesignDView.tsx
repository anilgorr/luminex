import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import HeroD from "./HeroD";
import WindowExplodeV2 from "@/components/preview/WindowExplodeV2";
import { PreviewHeader, PreviewFooter, PreviewWhatsApp, PreviewFaq } from "@/components/preview/PreviewChrome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { classicReasons, clients, clientsIntro, explodeSteps, latestPosts, partners, process, products, schuco } from "@/lib/home-v2";
import { betterBand, performance, performanceImage, schucoBrochure } from "@/lib/brochure";
import Swatches from "@/components/Swatches";
import s from "./d.module.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-d-display", display: "swap" });


// Design D view. `light` renders the white-background variant (client request, 28 Oct).
// Design D, "Obsidian": warm black, ivory and anodised bronze — the colours of slim black
// and bronze aluminium frames. Full-bleed cinematic photography, Bodoni Moda headlines.
// `chrome={false}` leaves the header, footer and WhatsApp button to the site layout (used when
// this view is the real homepage). The white variant uses the site header and footer (client, 31 Oct).
export default function DesignDView({ light = false, chrome = true }: { light?: boolean; chrome?: boolean }) {
  return (
    <div className={`${s.root} ${light ? s.light : ""} ${bodoni.variable}`}>
      {chrome && (light ? <Header /> : <PreviewHeader logo="white" />)}

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
            <p className={s.body}>{clientsIntro}</p>
          </div>
          <ul className={s.clientGrid}>
            {clients.map((c) => (
              <li key={c.file}><img src={c.src} alt={c.name} loading="lazy" /></li>
            ))}
          </ul>
          <p className={s.clientsMore}>And many more</p>
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

      {/* Schüco, brochure page 11 (29 Oct); wide photo for more impact (client, 31 Oct). */}
      <section id="schuco" className={s.schuco} aria-labelledby="d-schuco">
        <div className={`${s.wrap} ${s.schucoTop}`}>
          <div>
            <p className={s.partnerEyebrow}>{schucoBrochure.eyebrow}</p>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} className={s.schucoLogo} />
            <h2 id="d-schuco" className={s.h2}>{schucoBrochure.title}</h2>
            <p className={s.partnerSub}>{schucoBrochure.subtitle}</p>
          </div>
          <div>{schucoBrochure.body.map((p) => <p key={p} className={s.partnerBody}>{p}</p>)}</div>
        </div>
        <div className={s.schucoWide}>
          <Image src={schucoBrochure.image.src} alt={schucoBrochure.image.alt} fill sizes="(max-width: 1340px) 100vw, 1280px" />
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

      <section className={s.section} aria-labelledby="d-process">
        <div className={s.wrap}>
          <h2 id="d-process" className={s.h2}>Complete Project Lifecycle Management</h2>
          <ol className={s.process}>
            {process.map((p, i) => (
              <li key={p.title}><span className={s.stepNum}>{i + 1}</span><h3>{p.title}</h3>{p.text.map((t) => <p key={t}>{t}</p>)}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brochure page 9 closing band; replaces the repeated hallway photo (client, 29 Oct). */}
      <section className={s.better} aria-labelledby="d-better">
        <div className={`${s.wrap} ${s.betterGrid}`}>
          <img src={betterBand.image.src} alt={betterBand.image.alt} width={betterBand.image.w} height={betterBand.image.h} loading="lazy" className={s.betterArt} />
          <div className={s.betterCopy}>
            <h2 id="d-better">{betterBand.title} <span>{betterBand.accent}</span></h2>
            <p>{betterBand.body}</p>
          </div>
          <ul className={s.betterList}>{betterBand.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        </div>
      </section>

      <section className={`${s.section} ${s.faqSection}`} aria-labelledby="d-faq">
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div className={s.faqHead}>
            <h2 id="d-faq" className={s.h2}>The Luminex Guide</h2>
            <Link href="/faq" className={s.link}>All FAQs</Link>
          </div>
          <PreviewFaq className={s.faq} />
        </div>
      </section>

      <section className={s.partners} aria-labelledby="d-partners">
        <div className={s.wrap}>
          <h2 id="d-partners" className={s.h2}>Our Network of Excellence</h2>
          <p className={s.partnersTitle}>Profiles, glass and hardware from the brands we work with.</p>
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

      {chrome && (light ? <Footer /> : <PreviewFooter />)}
      {chrome && <PreviewWhatsApp />}
    </div>
  );
}
