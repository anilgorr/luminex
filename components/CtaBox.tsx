import Link from "next/link";
import Image from "next/image";
import { site, telHref } from "@/lib/site";
export default function CtaBox() {
  return (
    <section className="cta-box">
      <div className="container">
        <div>
          <h2>Have Questions? Call us <a href={telHref(site.primaryPhone)}>{site.primaryPhone}</a></h2>
          <p>Luminex Windows is one of the largest manufacturers of premium uPVC and system aluminium doors and windows in India and Bhutan, with a state-of-the-art manufacturing facility.</p>
          <Link href="/request-quote" className="btn btn-light">Get Your Free Quote</Link>
        </div>
        <Image src="/images/cta-img.png" alt="Luminex uPVC window profile" width={601} height={378} />
      </div>
    </section>
  );
}
