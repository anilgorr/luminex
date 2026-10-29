import type { Swatch } from "@/lib/brochure";
import s from "./swatches.module.css";

// Colour palette chips (brochure pages 10–11). Names and RAL codes are real text for search and AI answers.
export default function Swatches({ colours }: { colours: Swatch[] }) {
  return (
    <ul className={s.list}>
      {colours.map((c) => (
        <li key={c.name} className={s.item}>
          <span className={`${s.chip}${c.wood ? ` ${s.wood}` : ""}`} style={{ background: c.wood ? undefined : c.hex, ["--wood" as string]: c.hex }} aria-hidden="true" />
          <span className={s.label}>
            {c.code && <span className={s.code}>{c.code}</span>}
            <span>{c.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
