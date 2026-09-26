import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { posts } from "@/lib/content";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt.replace("…", ""), alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: "article", images: [p.image] } };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageHeader title={p.title} crumbs={[{ label: "Blog", href: "/blog" }, { label: p.title }]} />
      <section className="section">
        <article className="article container">
          <figure><Image src={p.image} alt={p.title} width={1366} height={768} priority /></figure>
          <time className="meta" dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>
          {p.body.map((b, i) => (<div key={i}>{b.h && <h2>{b.h}</h2>}<p>{b.p}</p></div>))}
        </article>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, image: site.url + p.image, datePublished: p.date,
        author: { "@type": "Organization", name: site.name }, publisher: { "@id": `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/blog/${p.slug}` }} />
    </>
  );
}
