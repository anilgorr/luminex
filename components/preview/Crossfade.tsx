"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

// Image-only slideshow (no text on the photos, per client). Each design passes its own class names
// and renders its own controls through the `controls` render prop.
export default function Crossfade({
  slides,
  className,
  slideClass,
  activeClass,
  interval = 6000,
  sizes = "100vw",
  onChange,
  controls,
}: {
  slides: Slide[];
  className: string;
  slideClass: string;
  activeClass: string;
  interval?: number;
  sizes?: string;
  onChange?: (i: number) => void;
  controls?: (i: number, go: (n: number) => void) => React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [paused, interval, slides.length]);
  useEffect(() => { onChange?.(i); }, [i, onChange]);
  return (
    <>
      <div className={className} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        {slides.map((s, k) => (
          <div key={s.src} className={`${slideClass}${k === i ? ` ${activeClass}` : ""}`} aria-hidden={k !== i}>
            <Image src={s.src} alt={s.alt} fill priority={k === 0} sizes={sizes} />
          </div>
        ))}
      </div>
      {controls?.(i, setI)}
    </>
  );
}
