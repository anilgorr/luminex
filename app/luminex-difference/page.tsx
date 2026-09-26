import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import CtaBox from "@/components/CtaBox";
import { reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Luminex Difference – Why Choose Luminex Windows",
  description: "Professional installation, a complete product range, weather-proof multi-chamber profiles and a 15-year limited warranty — what sets Luminex windows and doors apart.",
  alternates: { canonical: "/luminex-difference" },
};

const compare = [
  ["Rust, rot & swelling", "Never", "Wood swells & rots", "Can corrode"],
  ["Thermal insulation", "Excellent (multi-chamber)", "Good", "Poor without thermal break"],
  ["Sound insulation", "Excellent", "Moderate", "Moderate"],
  ["Maintenance", "Wipe clean", "Regular polishing / treatment", "Low"],
  ["Warranty", "15 years (limited)", "Varies", "Varies"],
];

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
      <section className="section section-bg-lines">
        <div className="container">
          <SectionTitle eyebrow="Compare" title="uPVC vs wood vs aluminium windows" center />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead><tr style={{ background: "var(--primary)", color: "#fff", textAlign: "left" }}>
                {["", "Luminex uPVC", "Wood", "Basic aluminium"].map((h) => <th key={h} style={{ padding: 16 }}>{h}</th>)}
              </tr></thead>
              <tbody>{compare.map((r) => (
                <tr key={r[0]} style={{ borderBottom: "1px solid var(--divider)" }}>
                  {r.map((c, i) => <td key={i} style={{ padding: 16, fontWeight: i < 2 ? 600 : 400, color: i === 1 ? "var(--primary)" : undefined }}>{c}</td>)}
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBox />
    </>
  );
}
