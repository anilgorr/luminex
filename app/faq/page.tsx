import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Faq from "@/components/Faq";
import CtaBox from "@/components/CtaBox";

export const metadata: Metadata = {
  title: "FAQs — uPVC & Aluminium Windows, Prices, Warranty, Bhutan",
  description: "Answers to the questions Luminex customers ask most: where we are based, Bhutan service, prices from ₹495/sq ft, warranty, glass options, delivery time and maintenance.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="FAQs" crumbs={[{ label: "FAQs" }]} />
      <section className="section section-bg-lines faq-page">
        <div className="container" style={{ maxWidth: 960 }}>
          <SectionTitle eyebrow="Frequently asked questions" title="Answers to your most asked questions" center>
            <p>Can&apos;t find your answer? Message us on WhatsApp — India +91 96099 88749, Bhutan +975 1772 8800.</p>
          </SectionTitle>
          <Faq />
        </div>
      </section>
      <CtaBox />
    </>
  );
}
