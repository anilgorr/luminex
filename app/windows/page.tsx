import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductGroups from "@/components/ProductGroups";
import CtaBox from "@/components/CtaBox";
import { windowGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "uPVC & Aluminium Windows – Sliding, Casement, Tilt & Turn",
  description: "Luminex uPVC and system aluminium windows: sliding, casement, tilt & turn, fixed and custom shapes. Energy efficient, soundproof, dust- and rain-proof, from ₹495/sq ft, installed in 15–30 days by an official Schüco channel partner.",
  alternates: { canonical: "/windows" },
};
export default function Windows() {
  return (<><PageHeader title="Windows" crumbs={[{ label: "Windows" }]} /><ProductGroups groups={windowGroups} /><CtaBox /></>);
}
