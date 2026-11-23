import type { Metadata } from "next";
import { metaFor } from "@/lib/meta";
import { authors } from "@/lib/authors";

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
import Image from "@/components/Img";
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
  const m = metaFor(`/blog/${p.slug}`, { title: `${p.title} | Luminex Windows`, description: p.excerpt.replace("…", ""), image: p.image });
  return { ...m, openGraph: { ...m.openGraph, type: "article" } };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const author = p.author ? authors[p.author] : undefined;
  return (
    <>
      <PageHeader title={p.title} crumbs={[{ label: "Blog", href: "/blog" }, { label: p.title }]} />
      <section className="section">
        <article className="article container">
          <figure><Image src={p.image} alt={p.title} width={1200} height={630} sizes="(max-width: 1000px) 100vw, 960px" priority /></figure>
          <p className="meta">
            {author && <>By <strong>{author.name}</strong>, {author.role} · </>}
            Published <time dateTime={p.date}>{fmt(p.date)}</time>
            {p.updated && <> · Last updated <time dateTime={p.updated}>{fmt(p.updated)}</time></>}
          </p>
          {p.body.map((b, i) => (<div key={i}>{b.h && <h2>{b.h}</h2>}<p>{b.p}</p></div>))}
        </article>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, image: site.url + p.image, datePublished: p.date, dateModified: p.updated ?? p.date,
        author: author ? { "@type": "Person", name: author.name, jobTitle: author.role, url: `${site.url}/about` } : { "@type": "Organization", name: site.name, url: site.url }, publisher: { "@id": `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/blog/${p.slug}` }} />
    </>
  );
}
