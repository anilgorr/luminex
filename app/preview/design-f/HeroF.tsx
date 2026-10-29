"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./f.module.css";

const n = hero.slides.length;

// Layered collage hero: a large photograph with a second, smaller one overlapping it and a
// Schüco partner plaque. Both photos change together, offset by one, so the pair is always different.
export default function HeroF() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className={s.hero} aria-labelledby="f-h1">
      <div className={`${s.wrap} ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <h1 id="f-h1">{hero.h1}</h1>
          <p className={s.answer}>{hero.answer}</p>
          <div className={s.ctas}>
            <Link href={quoteHref} className={s.btn}>Request a quote</Link>
            <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>Chat on WhatsApp</a>
          </div>
          <div className={s.heroNav}>
            <button type="button" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <span aria-live="polite">{i + 1} / {n}</span>
            <button type="button" onClick={() => setI((i + 1) % n)} aria-label="Next photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
        <div className={s.collage} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className={s.big}>
            {hero.slides.map((sl, k) => (
              <div key={sl.src} className={`${s.layer}${k === i ? ` ${s.on}` : ""}`} aria-hidden={k !== i}>
                <Image src={sl.src} alt={sl.alt} fill priority={k === 0} sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
            ))}
          </div>
          <div className={s.small}>
            {hero.slides.map((sl, k) => (
              <div key={sl.src} className={`${s.layer}${k === (i + 1) % n ? ` ${s.on}` : ""}`} aria-hidden="true">
                <Image src={sl.src} alt="" fill sizes="(max-width: 900px) 50vw, 22vw" />
              </div>
            ))}
          </div>
          <div className={s.plaque}>
            <img src="/images/web/partner/schueco-vektor-data.svg" alt="Schüco" width={294} height={142} />
            <span>Official channel partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
