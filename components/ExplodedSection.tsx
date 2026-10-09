"use client";
import { useEffect, useRef, useState } from "react";

// Scroll-triggered exploded view (home page, under the hero).
// The section is taller than the screen; its inner panel stays pinned while the visitor scrolls,
// and a Luminex window separates into its layers one step at a time. Each step's text is real
// HTML (crawlable), so the animation adds no SEO cost. Original illustration — no third-party art.

type Step = { key: string; title: string; text: string };
const steps: Step[] = [
  { key: "whole", title: "One window, built in layers", text: "Every Luminex window is a system: profile, seals, glass and hardware chosen to work together. Scroll to take one apart." },
  { key: "frame", title: "Multi-chamber profile frame", text: "Schüco, Luminex and Fenova profiles with multiple insulating chambers — the frame does not rust, rot or swell." },
  { key: "seal", title: "Airtight weather seals", text: "Continuous seals between frame and sash keep out monsoon rain, dust and draughts." },
  { key: "glass", title: "Saint-Gobain glass", text: "Double glazing, low-E, toughened or acoustic glass — matched to your climate, noise and budget." },
  { key: "sash", title: "Sash and hardware", text: "Schüco, Pego and Kinlong hardware for smooth operation and secure locking." },
  { key: "install", title: "Installed by our own team", text: "Delivered and installed in 15–30 days, with up to 25 years' warranty on profiles." },
];

// Each layer: direction it travels when exploded, and the step at which it starts moving.
const layers = [
  { id: "frame", dx: -120, dy: -80, from: 1 },
  { id: "seal", dx: -70, dy: -46, from: 2 },
  { id: "glassBack", dx: -18, dy: -12, from: 3 },
  { id: "glassFront", dx: 30, dy: 20, from: 3 },
  { id: "sash", dx: 80, dy: 54, from: 4 },
  { id: "handle", dx: 130, dy: 88, from: 4 },
];

const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (v: number) => Math.min(1, Math.max(0, v));

export default function ExplodedSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const apply = (p: number) => {
      // p: 0 → 1 across the pinned scroll distance; one "step" per 1/steps.length
      const stepPos = p * (steps.length - 1);
      layers.forEach((l) => {
        const t = ease(clamp(stepPos - (l.from - 1)));
        el.style.setProperty(`--${l.id}`, t.toFixed(3));
      });
      setActive(Math.min(steps.length - 1, Math.round(stepPos)));
    };
    if (reduce) { apply(1); return; }
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

  const move = (id: string, dx: number, dy: number) => ({
    transform: `translate(calc(${dx}px * var(--${id}, 0)), calc(${dy}px * var(--${id}, 0)))`,
  });

  return (
    <section className="xv" ref={ref} aria-labelledby="xv-title">
      <div className="xv-pin">
        <div className="container xv-grid">
          <div className="xv-copy">
            <span className="eyebrow">Inside a Luminex window</span>
            <h2 id="xv-title" className="xv-h2">Engineered layer by layer</h2>
            <ol className="xv-steps">
              {steps.map((s, i) => (
                <li key={s.key} className={i === active ? "on" : i < active ? "done" : ""}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="xv-progress" aria-hidden="true">
              {steps.map((s, i) => <span key={s.key} className={i <= active ? "on" : ""} />)}
            </div>
          </div>

          <div className="xv-art" role="img" aria-label="Exploded view of a Luminex window showing the profile frame, weather seals, two glass panes, sash and hardware">
            <svg viewBox="-150 -110 820 760" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="xvGlass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#e3f1f4" stopOpacity=".85" />
                  <stop offset="1" stopColor="#9ec3cc" stopOpacity=".5" />
                </linearGradient>
                <linearGradient id="xvProfile" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#e9ece8" />
                </linearGradient>
                <filter id="xvShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="6" dy="10" stdDeviation="10" floodColor="#000" floodOpacity=".28" />
                </filter>
              </defs>

              {/* frame: outer profile with chamber detail */}
              <g style={move("frame", -120, -80)} filter="url(#xvShadow)">
                <rect x="40" y="40" width="380" height="460" rx="8" fill="none" stroke="url(#xvProfile)" strokeWidth="34" />
                <rect x="23" y="23" width="414" height="494" rx="12" fill="none" stroke="#c9d1c9" strokeWidth="1.5" />
                <rect x="57" y="57" width="346" height="426" rx="4" fill="none" stroke="#c9d1c9" strokeWidth="1.5" />
                <rect x="40" y="40" width="380" height="460" rx="8" fill="none" stroke="#c9d1c9" strokeWidth="1" strokeDasharray="5 7" />
                {/* corner cross-section hint: chambers */}
                <g transform="translate(23 23)">
                  <rect width="34" height="34" fill="#ffffff" stroke="#9aa59b" />
                  <line x1="11" y1="0" x2="11" y2="34" stroke="#9aa59b" />
                  <line x1="23" y1="0" x2="23" y2="34" stroke="#9aa59b" />
                  <line x1="0" y1="17" x2="34" y2="17" stroke="#9aa59b" />
                </g>
              </g>

              {/* seals */}
              <g style={move("seal", -70, -46)}>
                <rect x="66" y="66" width="328" height="408" rx="4" fill="none" stroke="#1e1e1e" strokeWidth="6" />
              </g>

              {/* glass panes */}
              <g style={move("glassBack", -18, -12)}>
                <rect x="74" y="74" width="312" height="392" fill="url(#xvGlass)" stroke="#ffffff" strokeOpacity=".7" strokeWidth="2" />
              </g>
              <g style={move("glassFront", 30, 20)}>
                <rect x="74" y="74" width="312" height="392" fill="url(#xvGlass)" stroke="#ffffff" strokeWidth="2" />
                <path d="M110 120 L190 92 M110 165 L240 118 M300 410 L370 384" stroke="#ffffff" strokeOpacity=".85" strokeWidth="5" strokeLinecap="round" />
              </g>

              {/* sash: two vents with mullion */}
              <g style={move("sash", 80, 54)} filter="url(#xvShadow)">
                <rect x="74" y="74" width="312" height="392" fill="none" stroke="#f8f8f6" strokeWidth="18" />
                <line x1="230" y1="74" x2="230" y2="466" stroke="#f8f8f6" strokeWidth="18" />
              </g>

              {/* hardware */}
              <g style={move("handle", 130, 88)}>
                <rect x="238" y="240" width="14" height="64" rx="7" fill="#3b3b3b" />
                <rect x="234" y="258" width="22" height="22" rx="4" fill="#5c5c5c" />
              </g>

              {/* callouts: each fades in with its own layer */}
              <g>
                <text x="-128" y="-60" className="xv-label" style={{ opacity: "var(--frame, 0)" }}>Profile frame</text>
                <text x="-110" y="565" className="xv-label" style={{ opacity: "var(--seal, 0)" }}>Weather seals</text>
                <text x="440" y="40" className="xv-label" style={{ opacity: "var(--glassFront, 0)" }}>Saint-Gobain glass</text>
                <text x="486" y="320" className="xv-label" style={{ opacity: "var(--handle, 0)" }}>Hardware</text>
                <text x="482" y="572" className="xv-label" style={{ opacity: "var(--sash, 0)" }}>Sash</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
