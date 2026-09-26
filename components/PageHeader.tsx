import Image from "next/image";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

export default function PageHeader({ title, crumbs }: { title: string; crumbs: { label: string; href?: string }[] }) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="page-header">
      <Image src="/images/page-header-bg.jpg" alt="" fill priority sizes="100vw" />
      <div className="container">
        <h1>{title}</h1>
        <ol className="breadcrumb">
          {all.map((c, i) => <li key={i}>{c.href && i < all.length - 1 ? <Link href={c.href}>{c.label}</Link> : c.label}</li>)}
        </ol>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, ...(c.href ? { item: site.url + c.href } : {}) })),
      }} />
    </section>
  );
}
