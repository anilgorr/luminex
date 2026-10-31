import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import CtaBox from "@/components/CtaBox";
import { reasons } from "@/lib/site";
import { ComparisonTable, FenovaPartner, PerformanceBand } from "@/components/BrochureBlocks";

export const metadata: Metadata = {
  title: "The Luminex Difference – Why Choose Luminex Windows",
  description: "How Luminex uPVC and aluminium windows compare with standard aluminium and other uPVC windows: up to 40% better insulation, 38 dB noise reduction, 600 Pa air tightness and 2400 Pa wind load resistance.",
  alternates: { canonical: "/luminex-difference" },
};


export default function Difference() {
  return (
    <>
      <PageHeader title="Luminex Difference" crumbs={[{ label: "Luminex Difference" }]} />
      <section className="section reasons">
        <div className="container">
          <SectionTitle eyebrow="Choose Luminex" title="So many reasons to choose Luminex" center />
          <div className="reason-grid">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 100}><div className="reason"><div className="icon"><img src={r.icon} alt="" width={52} height={52} /></div><div><h3>{r.title}</h3><p>{r.text}</p></div></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <PerformanceBand />
      <ComparisonTable />
      <FenovaPartner />
      <CtaBox />
    </>
  );
}
