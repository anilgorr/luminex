import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/content";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Blog – Window & Door Tips and Insights",
  description: "Expert advice on uPVC and aluminium windows and doors: energy efficiency, design trends, materials and maintenance.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" crumbs={[{ label: "Blog" }]} />
      <section className="section section-bg-lines">
        <div className="container grid-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <article className="post">
                <Link href={`/blog/${p.slug}`}><figure><Image src={p.image} alt={p.title} width={1366} height={768} sizes="(max-width: 767px) 100vw, 33vw" /></figure></Link>
                <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="read-more">Read more <span className="circle"><ArrowRight /></span></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
