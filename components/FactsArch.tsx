import { site } from "@/lib/site";
// Original brand panel for the home "About" section: Luminex × Schüco + headline facts (client-confirmed).
export default function FactsArch() {
  return (
    <div className="facts-arch">
      <div className="lockup">Luminex<span>×</span>Schüco</div>
      <div className="sub">{site.partner}</div>
      <dl>
        <div><dt>₹{site.pricing.upvcFrom}</dt><dd>uPVC windows from, per sq ft</dd></div>
        <hr />
        <div><dt>{site.leadTime}</dt><dd>From order to installation</dd></div>
        <hr />
        <div><dt>25 yrs</dt><dd>Profile warranty, up to</dd></div>
      </dl>
    </div>
  );
}
