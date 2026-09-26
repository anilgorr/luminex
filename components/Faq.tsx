import { faqs } from "@/lib/site";
import { ArrowDown } from "./Icons";
import JsonLd from "./JsonLd";
// Native <details>: answers stay in the HTML (crawlable by Google and AI bots) and work without JS.
export default function Faq() {
  return (
    <div>
      {faqs.map((f, i) => (
        <details className="faq-item" key={i} open={i === 0}>
          <summary><span>{i + 1}. {f.q}</span><span className="arrow"><ArrowDown /></span></summary>
          <div className="answer"><p>{f.a}</p></div>
        </details>
      ))}
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }} />
    </div>
  );
}
