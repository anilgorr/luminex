"use client";
import Link from "next/link";
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

// Floating A–F bar on every design preview, so the client can flip between options in one click.
export default function DesignSwitcher() {
  const path = usePathname() ?? "";
  const current = path.match(/design-([a-f])/)?.[1];
  if (!current) return null;
  return (
    <nav className={s.bar} aria-label="Switch homepage design">
      <Link href="/preview" className={s.all}>All options</Link>
      <ul>
        {DESIGNS.map((d) => (
          <li key={d.id}>
            <Link href={`/preview/design-${d.id}`} className={d.id === current ? s.on : ""} aria-current={d.id === current ? "page" : undefined} title={`Option ${d.id.toUpperCase()}: ${d.name}`}>
              {d.id.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
