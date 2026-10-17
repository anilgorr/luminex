"use client";
import { usePathname } from "next/navigation";
import s from "./switcher.module.css";

export const DESIGNS = [
  { id: "a", name: "Atelier" },
  { id: "b", name: "Profile" },
  { id: "c", name: "Valley" },
  { id: "d", name: "Obsidian" },
  { id: "e", name: "Anthracite" },
  { id: "f", name: "Daylight" },
];

// The offline zip copy is built with NEXT_PUBLIC_PREVIEW_STATIC=1 and uses flat .html files.
const STATIC = process.env.NEXT_PUBLIC_PREVIEW_STATIC === "1";
const hrefFor = (id: string) => (STATIC ? `design-${id}.html` : `/preview/design-${id}`);
const allHref = STATIC ? "index.html" : "/preview";

// Floating A–F bar on every design preview, so the client can flip between options in one click.
// Plain <a> links (full page loads) so the offline zip copy navigates correctly too.
export default function DesignSwitcher() {
  const path = usePathname() ?? "";
  const current = path.match(/design-([a-f])/)?.[1];
  if (!current) return null;
  return (
    <nav className={s.bar} aria-label="Switch homepage design">
      <a href={allHref} className={s.all}>All options</a>
      <ul>
        {DESIGNS.map((d) => (
          <li key={d.id}>
            <a href={hrefFor(d.id)} className={d.id === current ? s.on : ""} aria-current={d.id === current ? "page" : undefined} title={`Option ${d.id.toUpperCase()}: ${d.name}`}>
              {d.id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
