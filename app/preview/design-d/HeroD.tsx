"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hero, trust } from "@/lib/home-v2";
import s from "./d.module.css";

const INTERVAL = 7000;

// Full-bleed cinematic slider: photographs only, slow push-in, segmented progress.
// No text on the photos; the "20 years" band sits beneath them.
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
      {/* "20 years" band under the photos (client, 28 Oct), laid out like Schüco's anniversary band.
          The keyword H1 stays as the small line above the title, for search and AI answers. */}
      <div className={s.trust}>
        <div className={`${s.wrap} ${s.trustGrid}`}>
          <p className={s.trustMark} aria-label={`${trust.years} ${trust.unit.toLowerCase()} ${trust.tagline}`}>
            <span className={s.trustNum} aria-hidden="true">{trust.years}</span>
            <span className={s.trustWords} aria-hidden="true">
              <span className={s.trustUnit}>{trust.unit}</span>
              <span className={s.trustTag}>{trust.tagline}</span>
            </span>
          </p>
          <div className={s.trustCopy}>
            <h1 id="d-h1" className={s.trustH1}>{hero.h1}</h1>
            <h2 className={s.trustTitle}>{trust.title}</h2>
            {trust.body.map((p) => <p key={p}>{p}</p>)}
            <Link href={trust.cta.href} className={s.trustBtn}>{trust.cta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
