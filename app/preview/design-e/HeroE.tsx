"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./e.module.css";

const PANES = [0, 1, 2];

// "Glazed wall" hero: one panoramic photo seen through three tall panes with anthracite mullions.
// A new photo arrives pane by pane, left to right. No text sits on the photos.
export default function HeroE() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % hero.slides.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className={s.hero} aria-labelledby="e-h1">
      <div className={s.wrap}>
        <div className={s.heroTop}>
          <h1 id="e-h1">{hero.h1}</h1>
          <div className={s.heroSide}>
            <p className={s.answer}>{hero.answer}</p>
            <div className={s.ctas}>
              <Link href={quoteHref} className={s.btn}>Request a quote</Link>
              <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>WhatsApp {whatsapp.india.display}</a>
            </div>
          </div>
        </div>
      </div>
      <div className={s.wallWrap}>
        <div className={s.wall} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {hero.slides.map((sl, k) => (
            <div key={sl.src} className={`${s.slide}${k === i ? ` ${s.on}` : ""}`} aria-hidden={k !== i} role="img" aria-label={sl.alt}>
              {PANES.map((p) => (
                <div key={p} className={s.pane} style={{ clipPath: `inset(0 ${(2 - p) * 33.334}% 0 ${p * 33.333}%)`, transitionDelay: k === i ? `${p * 140}ms` : "0ms" }}>
                  <Image src={sl.src} alt="" fill priority={k === 0} sizes="100vw" />
                </div>
              ))}
            </div>
          ))}
          <span className={s.mullion} style={{ left: "33.333%" }} aria-hidden="true" />
          <span className={s.mullion} style={{ left: "66.666%" }} aria-hidden="true" />
        </div>
        <div className={`${s.wrap} ${s.wallMeta}`}>
          <p>Photo {i + 1} of {hero.slides.length}</p>
          <div className={s.dots}>
            {hero.slides.map((sl, k) => (
              <button key={sl.src} type="button" onClick={() => setI(k)} aria-label={`Show photo ${k + 1}`} aria-pressed={k === i} className={k === i ? s.dotOn : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
