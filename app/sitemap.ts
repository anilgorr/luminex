import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/content";
import { locations, locationPath } from "@/lib/locations";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/windows", "/doors", "/renovations", "/gallery", "/luminex-difference", "/faq", "/contact", "/request-quote", "/blog"];
  return [
    ...pages.map((p) => ({ url: site.url + p, lastModified: new Date(), changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...locations.map((l) => ({ url: site.url + locationPath(l), lastModified: new Date("2026-10-09"), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
