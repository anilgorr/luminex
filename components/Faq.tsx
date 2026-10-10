import { faqs } from "@/lib/site";
import { ArrowDown } from "./Icons";
import JsonLd from "./JsonLd";
// Native <details>: answers stay in the HTML (crawlable by Google and AI bots) and work without JS.
// `limit` shows the first N questions; `schema` is off where the same Q&A is already marked up
// on /faq (Google asks for FAQPage markup on one page per question set).
export default function Faq({ limit, schema = true }: { limit?: number; schema?: boolean }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div>
      {list.map((f, i) => (
        <details className="faq-item" key={i} open={i === 0}>
          <summary><span>{i + 1}. {f.q}</span><span className="arrow"><ArrowDown /></span></summary>
          <div className="answer"><p>{f.a}</p></div>
        </details>
      ))}
      {schema && <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }} />}
    </div>
  );
}
