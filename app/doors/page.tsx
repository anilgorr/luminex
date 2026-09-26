import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductGroups from "@/components/ProductGroups";
import CtaBox from "@/components/CtaBox";
import { doorGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "uPVC & Aluminium Doors – Entry, Sliding Patio & Folding Doors",
  description: "Explore Luminex entry doors, sliding patio doors and folding door systems in uPVC, hybrid and aluminium-clad — custom made and professionally installed across India and Bhutan.",
  alternates: { canonical: "/doors" },
};
export default function Doors() {
  return (<><PageHeader title="Doors" crumbs={[{ label: "Doors" }]} /><ProductGroups groups={doorGroups} /><CtaBox /></>);
}
