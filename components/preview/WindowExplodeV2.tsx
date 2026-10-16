"use client";
import { useEffect, useRef, useState } from "react";
import s from "./WindowExplodeV2.module.css";

// Exploded 3D window for the redesigned homepage. Same scroll mechanics as the live
// WindowExplode3D, with two changes from the client call:
// - the handle is modelled on a uPVC window handle (tall rose plate + lever) instead of a pull bar;
// - colours come from CSS variables so each design can theme it (--x-bg, --x-ink, --x-muted, --x-accent, --x-panel, --x-display).
// Pass `tone="dark"` for a dark backdrop.

type Layer = { id: string; za: number; ze: number; label: string; ly: number };
const LAYERS: Layer[] = [
  { id: "frame", za: 0, ze: -230, label: "Profile frame", ly: -4 },
  { id: "seal", za: 6, ze: -130, label: "Weather seals", ly: 58 },
  { id: "glassA", za: 12, ze: -35, label: "Saint-Gobain glass", ly: 122 },
  { id: "glassB", za: 20, ze: 55, label: "Double glazing", ly: 186 },
  { id: "sash", za: 26, ze: 140, label: "Sliding sashes", ly: 250 },
  { id: "handle", za: 40, ze: 230, label: "uPVC handle", ly: 314 },
];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

export default function WindowExplodeV2({
  steps,
  eyebrow = "Inside a Luminex window",
  title = "Engineered layer by layer",
  tone = "light",
  className = "",
}: {
  steps: { title: string; text: string }[];
  eyebrow?: string;
  title?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = (p: number) => {
      const e = smooth(clamp((p - 0.04) / 0.72));
      el.style.setProperty("--e", e.toFixed(4));
      el.style.setProperty("--ry", `${(-14 - 26 * e).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(6 + 12 * e).toFixed(2)}deg`);
      LAYERS.forEach((l) => el.style.setProperty(`--z-${l.id}`, `${(l.za + (l.ze - l.za) * e).toFixed(1)}px`));
      setStep(Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999)));
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { apply(0.8); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      apply(travel > 0 ? clamp(-r.top / travel) : 1);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [steps.length]);

  return (
    <section className={`${s.w3} ${tone === "dark" ? s.dark : ""} ${className}`} ref={ref} aria-labelledby="w3v2-title">
      <div className={s.pin}>
        <div className={s.grid}>
          <div className={s.copy}>
            <p className={s.eyebrow}>{eyebrow}</p>
            <h2 id="w3v2-title">{title}</h2>
            <ol className={s.steps}>
              {steps.map((st, i) => (
                <li key={st.title} className={i === step ? s.on : ""} aria-current={i === step ? "step" : undefined}>
                  <span className={s.num}>{i + 1}</span>
                  <div><h3>{st.title}</h3><p>{st.text}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className={s.scene} role="img" aria-label="3D exploded view of a Luminex sliding window: profile frame, weather seals, two glass panes, sliding sashes and a uPVC handle">
            <div className={s.stage}>
              <div className={s.floor} />
              <div className={s.layer} style={{ transform: "translateZ(var(--z-frame))" }}>
                {[-24, -18, -12, -6].map((d) => <div key={d} className={`${s.frame} ${s.depth}`} style={{ transform: `translateZ(${d}px)` }} />)}
                <div className={s.frame}><span className={s.chambers} /></div>
                <Label l={LAYERS[0]} />
              </div>
              <div className={s.layer} style={{ transform: "translateZ(var(--z-seal))" }}>
                <div className={s.seal} />
                <Label l={LAYERS[1]} />
              </div>
              <div className={s.layer} style={{ transform: "translateZ(var(--z-glassA))" }}>
                <div className={s.glass} />
                <Label l={LAYERS[2]} />
              </div>
              <div className={s.layer} style={{ transform: "translateZ(var(--z-glassB))" }}>
                <div className={`${s.glass} ${s.glassFront}`} />
                <Label l={LAYERS[3]} />
              </div>
              <div className={s.layer} style={{ transform: "translateZ(var(--z-sash))" }}>
                {[-8, -4].map((d) => (
                  <div key={d} className={`${s.sashes} ${s.depth}`} style={{ transform: `translateZ(${d}px)` }}><i /><i /></div>
                ))}
                <div className={s.sashes}><i /><i /></div>
                <Label l={LAYERS[4]} />
              </div>
              <div className={s.layer} style={{ transform: "translateZ(var(--z-handle))" }}>
                {/* uPVC handle: rose plate with a key cylinder, and a lever standing proud of it */}
                <div className={s.handle}>
                  <span className={s.rose} />
                  <span className={s.roseDepth} />
                  <span className={s.cylinder} />
                  <span className={s.spindle} />
                  <span className={s.lever} />
                  <span className={s.leverDepth} />
                </div>
                <Label l={LAYERS[5]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ l }: { l: Layer }) {
  return (
    <div className={s.label} style={{ top: l.ly }}>
      <span className={s.dot} />
      <span className={s.text}>{l.label}</span>
    </div>
  );
}
