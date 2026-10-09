"use client";
import { useEffect, useRef } from "react";

// Original scroll-triggered "exploded view" of a Luminex window: as the section scrolls into
// view the window separates into its layers (frame, seal, two glass panes, sash, hardware)
// and labels fade in. Pure SVG + one CSS variable, so it costs almost nothing to load.
// Labels avoid unconfirmed specs (reinforcement material etc.) until the client confirms them.

type Layer = { id: string; dx: number; dy: number; label?: string; lx?: number; ly?: number };
const layers: Layer[] = [
  { id: "frame", dx: -38, dy: -30 },
  { id: "seal", dx: -20, dy: -16 },
  { id: "glass1", dx: -4, dy: -3 },
  { id: "glass2", dx: 12, dy: 10 },
  { id: "sash", dx: 28, dy: 22 },
  { id: "handle", dx: 46, dy: 36 },
];
// Callouts sit in a column to the right of the window so they never overlap it.
const callouts = [
  { y: 110, lines: ["Multi-chamber", "profile frame"] },
  { y: 200, lines: ["Weather seal"] },
  { y: 270, lines: ["Double glazing"] },
  { y: 340, lines: ["Sash"] },
  { y: 410, lines: ["Schüco · Pego ·", "Kinlong hardware"] },
];

export default function ProfileExplode() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.style.setProperty("--p", "1"); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.55)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const t = (l: Layer) => ({ transform: `translate(calc(${l.dx}px * var(--p)), calc(${l.dy}px * var(--p)))` });

  return (
    <div className="explode" ref={ref} role="img" aria-label="Exploded view of a Luminex window: multi-chamber profile frame, weather seal, double glazing, sash and hardware">
      <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dbeef3" stopOpacity=".75" />
            <stop offset="1" stopColor="#9fc6cf" stopOpacity=".45" />
          </linearGradient>
        </defs>
        {/* frame: thick outer profile with chamber lines */}
        <g style={t(layers[0])} className="ex-layer">
          <rect x="90" y="80" width="260" height="400" rx="6" fill="none" stroke="#ffffff" strokeWidth="26" />
          <rect x="80" y="70" width="280" height="420" rx="8" fill="none" stroke="#cfd8d0" strokeWidth="1.5" />
          <rect x="100" y="90" width="240" height="380" rx="3" fill="none" stroke="#cfd8d0" strokeWidth="1.5" />
          <rect x="90" y="80" width="260" height="400" rx="6" fill="none" stroke="#cfd8d0" strokeWidth="1" strokeDasharray="4 6" />
        </g>
        {/* seal */}
        <g style={t(layers[1])} className="ex-layer">
          <rect x="106" y="96" width="228" height="368" rx="3" fill="none" stroke="#2b2b2b" strokeWidth="4" />
        </g>
        {/* glass panes */}
        <g style={t(layers[2])} className="ex-layer">
          <rect x="112" y="102" width="216" height="356" fill="url(#glass)" stroke="#ffffff" strokeOpacity=".7" />
        </g>
        <g style={t(layers[3])} className="ex-layer">
          <rect x="112" y="102" width="216" height="356" fill="url(#glass)" stroke="#ffffff" strokeOpacity=".9" />
          <path d="M140 140 L200 120 M140 175 L235 140 M250 380 L310 360" stroke="#ffffff" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* sash: two sashes with mullion */}
        <g style={t(layers[4])} className="ex-layer">
          <rect x="112" y="102" width="216" height="356" fill="none" stroke="#f7f7f5" strokeWidth="12" />
          <line x1="220" y1="102" x2="220" y2="458" stroke="#f7f7f5" strokeWidth="12" />
        </g>
        {/* hardware */}
        <g style={t(layers[5])} className="ex-layer">
          <rect x="226" y="262" width="10" height="44" rx="5" fill="#3a3a3a" />
          <rect x="223" y="276" width="16" height="16" rx="3" fill="#5a5a5a" />
        </g>
        {/* callouts */}
        <g className="ex-labels">
          {callouts.map((c) => (
            <g key={c.y}>
              <circle cx="392" cy={c.y - 5} r="4" fill="#ffffff" />
              {c.lines.map((line, i) => <text key={line} x="404" y={c.y + i * 19} className="ex-label">{line}</text>)}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
