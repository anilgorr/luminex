"use client";
import Link from "next/link";
import Crossfade from "@/components/preview/Crossfade";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./b.module.css";

const n = hero.slides.length;

export default function HeroB() {
  return (
    <section className={s.hero} aria-labelledby="b-h1">
      <div className={s.wrap}>
        <div className={s.window}>
          <Crossfade
            slides={hero.slides}
            className={s.pane}
            slideClass={s.slide}
            activeClass={s.slideOn}
            interval={6500}
            sizes="(max-width: 1240px) 100vw, 1200px"
            controls={(i, go) => (
              <>
                {/* Meeting rail of a two-sash sliding window, drawn over the photo */}
                <span className={s.rail} aria-hidden="true" />
                <div className={s.counter}>
                  <button type="button" onClick={() => go((i - 1 + n) % n)} aria-label="Previous photo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
                  </button>
                  <span aria-live="polite">{i + 1} of {n}</span>
                  <button type="button" onClick={() => go((i + 1) % n)} aria-label="Next photo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                </div>
              </>
            )}
          />
        </div>
        <div className={s.heroText}>
          <h1 id="b-h1">{hero.h1}</h1>
          <div>
            <p className={s.answer}>{hero.answer}</p>
            <div className={s.ctas}>
              <Link href={quoteHref} className={s.btn}>Request a quote</Link>
              <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
