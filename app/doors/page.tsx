import type { Metadata } from "next";
import { metaFor } from "@/lib/meta";
import PageHeader from "@/components/PageHeader";
import ProductGroups from "@/components/ProductGroups";
import CtaBox from "@/components/CtaBox";
import { doorGroups } from "@/lib/content";

export const metadata: Metadata = metaFor("/doors", {
  title: "uPVC & Aluminium Doors – Entry, Sliding Patio & Folding Doors | Luminex Windows",
  description: "Explore Luminex entry doors, sliding patio doors and folding door systems in uPVC, hybrid and aluminium-clad — custom made and professionally installed across India and Bhutan.",
});
export default function Doors() {
  return (<><PageHeader image="/images/headers/doors-courtyard-sliding.jpg" title="Doors" crumbs={[{ label: "Doors" }]} /><ProductGroups groups={doorGroups} /><CtaBox /></>);
}
