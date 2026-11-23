import type { Metadata } from "next";
import { metaFor } from "@/lib/meta";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import PressCoverage from "@/components/PressCoverage";
import CtaBox from "@/components/CtaBox";

export const metadata: Metadata = metaFor("/press", {
  title: "Press Coverage – Luminex Windows in the News | Luminex Windows",
  description: "Luminex Windows in the news: Bhutan's Gyalsung Academy project with Fenova, reported by PTI, The Tribune, The Week and The Wire (January 2026), and Forbes India's Select 200 recognition of Fenova.",
});

export default function Press() {
  return (
    <>
      <PageHeader image="/images/headers/press-facade-skyline.jpg" title="Press coverage" crumbs={[{ label: "Press coverage" }]} />
      <section className="section section-bg-lines">
        <div className="container">
          <SectionTitle eyebrow="In the news" title="Luminex® in the press" />
          <PressCoverage headingLevel={2} schema />
        </div>
      </section>
      <CtaBox />
    </>
  );
}
