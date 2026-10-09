"use client";
import { useEffect, useRef, useState } from "react";

// Reworked exploded view: a real 3D scene built with CSS 3D transforms (no libraries).
// The window is a stack of thin planes — frame (with extruded depth), seals, two glass panes,
// sliding sashes and a handle. As the visitor scrolls, the camera turns and the planes separate
// along the depth axis, like a technical exploded drawing. Original artwork.

type Layer = { id: string; za: number; ze: number; label: string; ly: number };
const LAYERS: Layer[] = [
  { id: "frame", za: 0, ze: -230, label: "Profile frame", ly: -4 },
  { id: "seal", za: 6, ze: -130, label: "Weather seals", ly: 58 },
  { id: "glassA", za: 12, ze: -35, label: "Saint-Gobain glass", ly: 122 },
  { id: "glassB", za: 20, ze: 55, label: "Double glazing", ly: 186 },
  { id: "sash", za: 26, ze: 140, label: "Sliding sashes", ly: 250 },
  { id: "handle", za: 40, ze: 230, label: "Hardware", ly: 314 },
];

const STEPS = [
  { title: "One window, built as a system", text: "Profile, seals, glass and hardware chosen to work together. Scroll to take a Luminex window apart." },
  { title: "Multi-chamber profile frame", text: "Schüco, Luminex and Fenova profiles with insulating chambers — they don't rust, rot or swell." },
  { title: "Airtight weather seals", text: "Continuous seals keep monsoon rain, dust and draughts out." },
  { title: "Saint-Gobain glass", text: "Double glazing, low-E, toughened or acoustic — matched to your climate, noise and budget." },
  { title: "Sashes and hardware", text: "Smooth sliding sashes with Schüco, Pego and Kinlong hardware for secure locking." },
  { title: "Installed by our own team", text: "Delivered and installed in 15–30 days, with up to 25 years' warranty on profiles." },
];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

export default function WindowExplode3D() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = (p: number) => {
      const e = smooth(clamp((p - 0.04) / 0.72)); // explode amount
      el.style.setProperty("--e", e.toFixed(4));
      el.style.setProperty("--ry", `${(-14 - 26 * e).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(6 + 12 * e).toFixed(2)}deg`);
      LAYERS.forEach((l) => el.style.setProperty(`--z-${l.id}`, `${(l.za + (l.ze - l.za) * e).toFixed(1)}px`));
      setStep(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
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
  }, []);

  return (
    <section className="w3" ref={ref} aria-labelledby="w3-title">
      <div className="w3-pin">
        <div className="container w3-grid">
          <div className="w3-copy">
            <span className="eyebrow">Inside a Luminex window</span>
            <h2 id="w3-title">Engineered layer by layer</h2>
            <ol className="w3-steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className={i === step ? "on" : ""}>
                  <span className="w3-num">0{i + 1}</span>
                  <div><h3>{s.title}</h3><p>{s.text}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="w3-scene" role="img" aria-label="3D exploded view of a Luminex sliding window: profile frame, weather seals, two glass panes, sliding sashes and hardware">
            <div className="w3-stage">
              <div className="w3-floor" />
              {/* frame with extruded depth */}
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-frame))" }}>
                {[-24, -18, -12, -6].map((d) => <div key={d} className="w3-frame w3-depth" style={{ transform: `translateZ(${d}px)` }} />)}
                <div className="w3-frame"><span className="w3-chambers" /></div>
                <Label l={LAYERS[0]} />
              </div>
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-seal))" }}>
                <div className="w3-seal" />
                <Label l={LAYERS[1]} />
              </div>
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-glassA))" }}>
                <div className="w3-glass" />
                <Label l={LAYERS[2]} />
              </div>
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-glassB))" }}>
                <div className="w3-glass w3-glass-front" />
                <Label l={LAYERS[3]} />
              </div>
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-sash))" }}>
                {[-8, -4].map((d) => (
                  <div key={d} className="w3-sashes w3-depth" style={{ transform: `translateZ(${d}px)` }}><i /><i /></div>
                ))}
                <div className="w3-sashes"><i /><i /></div>
                <Label l={LAYERS[4]} />
              </div>
              <div className="w3-layer" style={{ transform: "translateZ(var(--z-handle))" }}>
                <div className="w3-handle"><b /></div>
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
    <div className="w3-label" style={{ top: l.ly }}>
      <span className="w3-dot" />
      <span className="w3-text">{l.label}</span>
    </div>
  );
}
