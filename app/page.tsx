import type { Metadata } from "next";
import DesignDView from "./preview/design-d/DesignDView";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/home-v2";
import { site } from "@/lib/site";
import { metaFor } from "@/lib/meta";

// Homepage = Option D on white, approved by the client (16 Nov 2026). The previous homepage
// is in git history (before this commit).
export const metadata: Metadata = metaFor("/", { title: "uPVC & Aluminium Windows and Doors | Luminex Windows", description: site.description });

// FAQPage schema built from the same array that renders the homepage FAQ, so they always match.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n\n/g, " ") } })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <DesignDView light chrome={false} />
    </>
  );
}
