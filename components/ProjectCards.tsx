"use client";
import { useState } from "react";
import Image from "@/components/Img";
import type { Project } from "@/lib/projects";
import s from "./projects.module.css";

// Project cards with a city filter. Every card is in the HTML; the filter only hides cards,
// so search engines still see all projects.
export default function ProjectCards({ items, filter = true }: { items: Project[]; filter?: boolean }) {
  const cities = [...new Set(items.map((p) => p.city))];
  const [city, setCity] = useState<string>("All");
  if (!items.length) return null;
  return (
    <div>
      {filter && cities.length > 1 && (
        <div className={s.filter} role="group" aria-label="Filter projects by city">
          {["All", ...cities].map((c) => (
            <button key={c} type="button" aria-pressed={city === c} onClick={() => setCity(c)}>{c}</button>
          ))}
        </div>
      )}
      <ul className={s.grid}>
        {items.map((p) => (
          <li key={p.id} hidden={city !== "All" && p.city !== city} className={s.card}>
            {p.photos.length > 0 && (
              <div className={s.photos}>
                {p.photos.slice(0, 6).map((ph) => (
                  <Image key={ph.src} src={ph.src} alt={ph.alt} width={800} height={600} sizes="(max-width: 768px) 100vw, 33vw" />
                ))}
              </div>
            )}
            <div className={s.text}>
              <p className={s.meta}>{[p.locality, p.city].filter(Boolean).join(", ")} · {p.year}</p>
              <h3>{p.title}</h3>
              <p className={s.product}>{p.product}</p>
              <p>{p.description}</p>
              {p.source && <p className={s.source}>Source: <a href={p.source.url} target="_blank" rel="noopener">{p.source.label}</a></p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
