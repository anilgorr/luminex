"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Slides use the client's banner photos; add more entries as new photography arrives.
const slides = [
  { src: "/images/luminex-banner.jpg", alt: "Modern home interior with large black-framed Luminex windows and doors" },
  { src: "/images/hero-bg.jpg", alt: "Bright living space with floor-to-ceiling windows" },
  { src: "/images/cta-bg.jpg", alt: "Contemporary home with premium window and door systems" },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero" aria-label="Premium windows and doors">
      {slides.map((s, k) => (
        <div key={s.src} className={`hero-slide${k === i ? " active" : ""}`} aria-hidden={k !== i}>
          <Image src={s.src} alt={s.alt} fill priority={k === 0} sizes="100vw" />
        </div>
      ))}
      <div className="container">
        <div className="hero-content dark">
          <span className="eyebrow">Transform your home today</span>
          <h1>Premium windows &amp; doors for every home</h1>
          <p>Discover a wide range of beautifully crafted windows and doors that combine modern design with superior functionality.</p>
          <div className="hero-btns">
            <Link href="/request-quote" className="btn">Get A Quote</Link>
            <Link href="/about" className="btn btn-light">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        <div className="container">
          {slides.map((_, k) => <button key={k} className={k === i ? "active" : ""} aria-label={`Go to slide ${k + 1}`} onClick={() => setI(k)} />)}
        </div>
      </div>
    </section>
  );
}
