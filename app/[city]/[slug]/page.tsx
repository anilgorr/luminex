import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { ArrowDown } from "@/components/Icons";
import { locations, getLocation, locationPath } from "@/lib/locations";
import { site, waLink } from "@/lib/site";

type Params = { params: Promise<{ city: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locations.map((l) => ({ city: l.citySlug, slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city, slug } = await params;
  const l = getLocation(city, slug);
  if (!l) return {};
  return {
    title: { absolute: `${l.metaTitle} | Luminex Windows` },
    description: l.metaDescription,
    alternates: { canonical: locationPath(l) },
    openGraph: { title: l.metaTitle, description: l.metaDescription, images: [l.image], type: "website" },
  };
}

export default async function LocationPageView({ params }: Params) {
  const { city, slug } = await params;
  const l = getLocation(city, slug);
  if (!l) notFound();
  const url = site.url + locationPath(l);
  const updated = "October 2026";
  const isBhutan = l.region === "Bhutan";

  return (
    <>
      <PageHeader title={l.h1} crumbs={[{ label: l.city }, { label: l.product }]} />

      <section className="section section-bg-lines">
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">{l.city} · {l.product}</span>
            <p className="answer-block">{l.answer}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "28px 0" }}>
              <a href={waLink(isBhutan ? "bhutan" : "india", `Hi Luminex, I'd like a quote for ${l.product.toLowerCase()} in ${l.city}.`)} target="_blank" rel="noopener noreferrer" className="btn">Get a quote on WhatsApp</a>
              <Link href="/request-quote" className="btn btn-light">Request a quote</Link>
            </div>
            <p className="meta">Prices and details updated {updated}</p>
          </div>
          <div>
            <h2 className="facts-title">Key facts — {l.product} in {l.city}</h2>
            <table className="facts">
              <tbody>
                {l.facts.map(([k, v]) => (<tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container loc-body">
          <article>
            {l.sections.map((s) => (
              <Reveal key={s.h2}>
                <h2>{s.h2}</h2>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
                {s.bullets && <ul className="check-list">{s.bullets.map((b) => <li key={b} style={{ textTransform: "none" }}>{b}</li>)}</ul>}
              </Reveal>
            ))}
          </article>
          <aside>
            <div className="shine loc-img"><Image src={l.image} alt={`${l.product} — Luminex, ${l.city}`} width={600} height={700} sizes="(max-width: 991px) 100vw, 35vw" /></div>
            <div className="loc-related">
              <h3>Related</h3>
              <ul>{l.related.map((r) => <li key={r.href}><Link href={r.href}>{r.label} →</Link></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section faqs">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="dark">
            <div className="section-title">
              <span className="eyebrow">Frequently asked questions</span>
              <h2>{l.product} in {l.city}: your questions answered</h2>
            </div>
            {l.faqs.map((f, i) => (
              <details className="faq-item" key={f.q} open={i === 0}>
                <summary><span>{f.q}</span><span className="arrow"><ArrowDown /></span></summary>
                <div className="answer"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: `${l.product} in ${l.city}`,
            serviceType: l.product,
            description: l.answer,
            url,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: { "@type": "City", name: l.city, containedInPlace: { "@type": "AdministrativeArea", name: l.region } },
            brand: site.brands.profiles.map((b) => ({ "@type": "Brand", name: b })),
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                minPrice: l.product === "System aluminium windows" ? site.pricing.aluminiumFrom : site.pricing.upvcFrom,
                priceCurrency: "INR",
                unitText: "per sq ft",
              },
            },
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ],
      }} />
    </>
  );
}
