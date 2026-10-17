"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./d.module.css";

const INTERVAL = 7000;

// Full-bleed cinematic slider: photographs only, slow push-in, segmented progress.
// The headline sits on the dark band beneath the photo, never on it.
export default function HeroD() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  useEffect(() => { setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setI((x) => (x + 1) % hero.slides.length), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  return (
    <section className={s.hero} aria-labelledby="d-h1">
      <div className={s.stage} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {hero.slides.map((sl, k) => (
          <div key={sl.src} className={`${s.slide}${k === i ? ` ${s.on}` : ""}`} aria-hidden={k !== i}>
            <Image src={sl.src} alt={sl.alt} fill priority={k === 0} sizes="100vw" />
          </div>
        ))}
        <div className={s.progress}>
          {hero.slides.map((sl, k) => (
            <button key={sl.src} type="button" onClick={() => setI(k)} aria-label={`Show photo ${k + 1} of ${hero.slides.length}`} aria-pressed={k === i}
              className={k === i ? (paused || reduce ? s.barStill : s.barRun) : k < i ? s.barDone : ""}>
              <span />
            </button>
          ))}
        </div>
      </div>
      <div className={s.heroBand}>
        <div className={s.wrap}>
          <div className={s.heroGrid}>
            <h1 id="d-h1">{hero.h1}</h1>
            <div>
              <p className={s.answer}>{hero.answer}</p>
              <div className={s.ctas}>
                <Link href={quoteHref} className={s.btn}>Request a quote</Link>
                <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>WhatsApp {whatsapp.india.display}</a>
              </div>
            </div>
          </div>
          <dl className={s.keyFacts}>
            <div><dt>Partner</dt><dd>Official Schüco channel partner</dd></div>
            <div><dt>Order to installation</dt><dd>30–45 days</dd></div>
            <div><dt>Profile warranty</dt><dd>Up to 25 years</dd></div>
            <div><dt>Installed by our own teams</dt><dd>India and Bhutan</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
