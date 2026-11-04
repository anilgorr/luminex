import Image from "next/image";
import { press } from "@/lib/press";
import s from "./press.module.css";

// Press items as real text (headline, outlets, date, summary) beside each image, so search and AI
// engines can read and quote the coverage rather than only seeing a picture.
export default function PressCoverage({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className={s.list}>
      {press.map((p) => (
        <article key={p.id} className={s.item}>
          <a href={p.image.src} target="_blank" rel="noopener" className={s.img} aria-label={`Open the full image: ${p.title}`}>
            <Image src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} sizes="(max-width: 900px) 100vw, 40vw" />
          </a>
          <div>
            <p className={s.meta}><time dateTime={p.date}>{p.dateLabel}</time> · {p.outlets.join(", ")}</p>
            <H className={s.title}>{p.title}</H>
            <p>{p.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
