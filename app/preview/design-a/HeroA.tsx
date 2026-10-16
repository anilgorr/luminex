"use client";
import Image from "next/image";
import Link from "next/link";
import Crossfade from "@/components/preview/Crossfade";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./a.module.css";

export default function HeroA() {
  return (
    <section className={s.hero} aria-labelledby="a-h1">
      <div className={s.heroCopy}>
        <h1 id="a-h1">{hero.h1}</h1>
        <p className={s.answer}>{hero.answer}</p>
        <div className={s.ctas}>
          <Link href={quoteHref} className={s.btn}>Request a quote</Link>
          <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>WhatsApp {whatsapp.india.display}</a>
        </div>
      </div>
      <div className={s.heroMedia}>
        <Crossfade
          slides={hero.slides}
          className={s.heroFrame}
          slideClass={s.heroSlide}
          activeClass={s.heroActive}
          sizes="(max-width: 900px) 100vw, 60vw"
          controls={(i, go) => (
            <div className={s.thumbs}>
              {hero.slides.map((sl, k) => (
                <button key={sl.src} type="button" className={k === i ? s.thumbOn : ""} aria-label={`Show photo ${k + 1}: ${sl.alt}`} aria-pressed={k === i} onClick={() => go(k)}>
                  <Image src={sl.src} alt="" width={160} height={100} sizes="160px" />
                </button>
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
}
