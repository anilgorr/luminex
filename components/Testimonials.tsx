import Image from "@/components/Img";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import s from "./projects.module.css";

// Customer quotes. Hidden while lib/testimonials.ts is empty. Pass `city` to show only that city's.
export default function Testimonials({ city, title = "What our customers say" }: { city?: string; title?: string }) {
  const items: Testimonial[] = city ? testimonials.filter((t) => t.city === city) : testimonials;
  if (!items.length) return null;
  return (
    <section className="section" aria-label={title}>
      <div className="container">
        <h2>{title}</h2>
        <ul className={s.grid}>
          {items.map((t) => (
            <li key={t.name + t.locality} className={s.card}>
              <figure className={s.text} style={{ margin: 0 }}>
                {t.photo && <Image src={t.photo} alt={`${t.name}, ${t.locality}`} width={96} height={96} style={{ borderRadius: "50%" }} />}
                <blockquote style={{ margin: "0 0 14px" }}><p>&ldquo;{t.quote}&rdquo;</p></blockquote>
                <figcaption><strong>{t.name}</strong>, {t.locality} · {t.product}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
