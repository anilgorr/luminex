import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBox from "@/components/CtaBox";
import SectionTitle from "@/components/SectionTitle";
import PressCoverage from "@/components/PressCoverage";

export const metadata: Metadata = {
  title: "Project Gallery – Windows & Doors Installed by Luminex",
  description: "See completed Luminex uPVC and aluminium window and door projects across homes and businesses in India and Bhutan.",
  alternates: { canonical: "/gallery" },
};

// TODO(client): replace with real project photos + locations.
const items = [
  ["/images/luminex-about.jpg", "uPVC bay window"],
  ["/images/luminex-whywork1.jpg", "Sliding window"],
  ["/images/luminex-whywork2.jpg", "Casement window"],
];

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" crumbs={[{ label: "Gallery" }]} />
      <section className="section section-bg-lines">
        <div className="container gallery-grid">
          {items.map(([src, cap], i) => (
            <Reveal key={src} delay={(i % 3) * 100}>
              <figure><Image src={src} alt={`${cap} – Luminex project`} width={800} height={800} sizes="(max-width: 767px) 100vw, 33vw" /><figcaption>{cap}</figcaption></figure>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Press coverage (client, 4 Nov); the full list lives on /press. */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="In the news" title="Press coverage" />
          <PressCoverage headingLevel={3} />
        </div>
      </section>
      <CtaBox />
    </>
  );
}
