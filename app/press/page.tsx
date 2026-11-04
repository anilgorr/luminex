import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import PressCoverage from "@/components/PressCoverage";
import CtaBox from "@/components/CtaBox";

export const metadata: Metadata = {
  title: "Press Coverage – Luminex Windows in the News",
  description: "Luminex in the news: the Gyalsung project press release in The Tribune, The Week and The Wire (January 2026), and Forbes India's Select 200 recognition of Luminex's uPVC profile partner Fenova.",
  alternates: { canonical: "/press" },
};

export default function Press() {
  return (
    <>
      <PageHeader title="Press coverage" crumbs={[{ label: "Press coverage" }]} />
      <section className="section section-bg-lines">
        <div className="container">
          <SectionTitle eyebrow="In the news" title="Luminex® in the press" />
          <PressCoverage headingLevel={2} />
        </div>
      </section>
      <CtaBox />
    </>
  );
}
