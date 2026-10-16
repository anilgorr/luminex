"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { hero, quoteHref, whatsapp } from "@/lib/home-v2";
import s from "./c.module.css";

export default function HeroC() {
  const strip = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => {
    const el = strip.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <section className={s.hero} aria-labelledby="c-h1">
      <div className={s.wrap}>
        <h1 id="c-h1">{hero.h1}</h1>
        <div className={s.heroRow}>
          <p className={s.answer}>{hero.answer}</p>
          <div className={s.ctas}>
            <Link href={quoteHref} className={s.btn}>Request a quote</Link>
            <a href={whatsapp.india.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>WhatsApp {whatsapp.india.display}</a>
          </div>
        </div>
      </div>
      <div className={s.filmWrap}>
        <ul className={s.film} ref={strip} tabIndex={0} aria-label="Photos of Luminex windows and doors, scroll sideways">
          {hero.slides.map((sl, k) => (
            <li key={sl.src}>
              <Image src={sl.src} alt={sl.alt} fill priority={k === 0} sizes="(max-width: 900px) 88vw, 72vw" />
            </li>
          ))}
        </ul>
        <div className={`${s.wrap} ${s.filmNav}`}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous photo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next photo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
