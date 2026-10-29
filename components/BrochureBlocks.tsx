import Image from "next/image";
import Link from "next/link";
import JsonLd from "./JsonLd";
import Swatches from "./Swatches";
import { comparison, fenova, performance, performanceImage, schucoBrochure, brochureFaqs } from "@/lib/brochure";
import s from "./brochure.module.css";

// Sections for the inner pages built from the brochure, pages 9–11 (29 Oct 2026).

export function PerformanceBand() {
  return (
    <section className={s.perf} aria-labelledby="perf-title">
      <div className="container">
        <div className={s.perfInner}>
          <div>
            <span className="eyebrow">Performance that speaks</span>
            <h2 id="perf-title" className={s.h2}>Engineered better. Built to last.</h2>
            <p>{performance.intro}</p>
          </div>
          <dl className={s.stats}>
            {performance.stats.map((st) => (
              <div key={st.label}><dt>{st.label}</dt><dd><small>Up to</small> {st.value}<span>{st.unit}</span></dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function ComparisonTable() {
  return (
    <section className="section" aria-labelledby="compare-title">
      <div className="container">
        <div className={s.compareHead}>
          <span className="eyebrow">Why Luminex?</span>
          <h2 id="compare-title" className={s.h2}>The difference you deserve</h2>
          <p>{comparison.intro}</p>
        </div>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <caption className="sr-only">Luminex uPVC and aluminium systems compared with other standard aluminium windows and other uPVC windows</caption>
            <thead>
              <tr><th scope="col">Feature</th>{comparison.columns.map((c, i) => <th scope="col" key={c} className={i === 0 ? s.ours : undefined}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r.feature}>
                  <th scope="row">{r.feature}</th>
                  <td className={s.ours}>{r.luminex}</td>
                  <td>{r.aluminium}</td>
                  <td>{r.upvc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={s.photo}><Image src={performanceImage.src} alt={performanceImage.alt} width={performanceImage.w} height={performanceImage.h} sizes="(max-width: 1300px) 100vw, 1270px" /></div>
      </div>
    </section>
  );
}

export function ProfilesAndColours() {
  const faqs = [brochureFaqs.coextruded, brochureFaqs.upvcColours, brochureFaqs.aluminiumColours, brochureFaqs.performance];
  return (
    <>
      <section className="section section-bg-lines" aria-labelledby="profiles-title">
        <div className="container">
          <div className={s.compareHead}>
            <span className="eyebrow">uPVC profiles by Fenova</span>
            <h2 id="profiles-title" className={s.h2}>{fenova.compareTitle}</h2>
            <p>{fenova.body.join(" ")}</p>
          </div>
          <div className={s.duo}>
            {[fenova.coextruded, fenova.laminated].map((c, i) => (
              <div key={c.title} className={i === 0 ? s.good : s.bad}>
                <h3>{c.title}</h3>
                <p>{c.lead}</p>
                <ul>{c.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="colours-title">
        <div className="container">
          <div className={s.compareHead}>
            <span className="eyebrow">Colours and finishes</span>
            <h2 id="colours-title" className={s.h2}>Window colours</h2>
          </div>
          <div className={s.palettes}>
            <div><h3>{fenova.coloursTitle} (Fenova)</h3><Swatches colours={fenova.colours} /></div>
            <div><h3>{schucoBrochure.coloursTitle} (Schüco)</h3><Swatches colours={schucoBrochure.colours} /><p className={s.note}>{schucoBrochure.coloursNote}</p></div>
          </div>
          <div className={s.faq}>
            {faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
          <p className={s.more}><Link href="/luminex-difference">See how Luminex compares with other windows</Link></p>
        </div>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </>
  );
}
