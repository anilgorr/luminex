import Link from "next/link";
import Image from "next/image";
import { site, telHref, waLink } from "@/lib/site";
export default function CtaBox() {
  return (
    <section className="cta-box">
      <div className="container">
        <div>
          <h2>Have Questions? Call us <a href={telHref(site.primaryPhone)}>{site.primaryPhone}</a></h2>
          <p>Official Schüco channel partner with offices in Siliguri, Thimphu, Paro and Phuentsholing. uPVC windows from ₹{site.pricing.upvcFrom}/sq ft, delivered and installed in {site.leadTime}.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={waLink("india")} target="_blank" rel="noopener noreferrer" className="btn btn-light">WhatsApp India</a>
            <a href={waLink("bhutan")} target="_blank" rel="noopener noreferrer" className="btn btn-light">WhatsApp Bhutan</a>
            <Link href="/request-quote" className="btn">Get Your Free Quote</Link>
          </div>
        </div>
        <Image src="/images/cta-img.png" alt="Luminex uPVC window profile" width={601} height={378} />
      </div>
    </section>
  );
}
