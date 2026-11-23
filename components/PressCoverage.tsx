import Image from "@/components/Img";
import { press } from "@/lib/press";
import JsonLd from "./JsonLd";
import s from "./press.module.css";

// Press coverage as text with links to the published articles, so readers, search engines and
// AI engines can check each claim at its source.
export default function PressCoverage({ headingLevel = 2, schema = false }: { headingLevel?: 2 | 3; schema?: boolean }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className={s.list}>
      {press.map((p) => (
        <article key={p.id} className={`${s.item} ${p.image ? "" : s.noImg}`}>
          {p.image && (
            <div className={s.img}>
              <Image src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
          )}
          <div>
            <p className={s.meta}><time dateTime={p.date}>{p.dateLabel}</time> · {p.links.map((l) => l.outlet).join(", ")}</p>
            <H className={s.title}>{p.headline}</H>
            <p>{p.summary}</p>
            {p.quote && <blockquote className={s.quote}><p>&ldquo;{p.quote}&rdquo;</p></blockquote>}
            <ul className={s.links}>
              {p.links.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener">Read on {l.outlet} →</a></li>)}
            </ul>
          </div>
        </article>
      ))}
      {schema && (
        <JsonLd data={{
          "@context": "https://schema.org", "@type": "ItemList", name: "Luminex Windows press coverage",
          itemListElement: press[0].links.map((l, i) => ({
            "@type": "ListItem", position: i + 1,
            item: { "@type": "NewsArticle", headline: press[0].headline, url: l.url, datePublished: press[0].date, publisher: { "@type": "Organization", name: l.outlet }, mentions: { "@type": "Organization", name: "Luminex Windows" } },
          })),
        }} />
      )}
    </div>
  );
}
