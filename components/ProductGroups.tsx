import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import type { ProductGroup } from "@/lib/content";
export default function ProductGroups({ groups }: { groups: ProductGroup[] }) {
  return (
    <section className="section section-bg-lines">
      <div className="container">
        {groups.map((g) => (
          <div className="product-group" id={g.id} key={g.id}>
            <div className="section-row">
              <div className="section-title"><Reveal><h2>{g.title}</h2></Reveal><Reveal delay={100}><p>{g.intro}</p></Reveal></div>
              <div><Link href="/request-quote" className="btn">Request A Quote</Link></div>
            </div>
            <div className="grid-3">
              {g.items.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <Link href="/request-quote" className="product-card">
                    <Image src={p.image} alt={`${p.title} – Luminex`} width={800} height={900} sizes="(max-width: 767px) 100vw, 33vw" />
                    <div className="overlay"><h3>{p.title}</h3><p>{p.text}</p></div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
