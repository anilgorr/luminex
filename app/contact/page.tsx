import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us – Luminex Windows, Siliguri",
  description: "Contact Luminex Windows in Siliguri, West Bengal for uPVC and aluminium windows and doors in India and Bhutan. Call, email or send us a message for a free consultation.",
  alternates: { canonical: "/contact" },
};

const a = site.address;
export default function Contact() {
  return (
    <>
      <PageHeader title="Contact us" crumbs={[{ label: "Contact us" }]} />
      <section className="section section-bg-lines">
        <div className="container">
          <SectionTitle eyebrow="Contact details" title="Happy to answer all your questions" center />
          <div className="grid-3">
            <Reveal><div className="info-card"><figure><Image src="/images/contact-info-img-1.jpg" alt="" width={413} height={400} /></figure><h3>Our Location:</h3>
              <address style={{ fontStyle: "normal" }}><p>{a.street}, {a.locality}, {a.region} {a.postalCode}, {a.countryName}</p></address></div></Reveal>
            <Reveal delay={100}><div className="info-card"><figure><Image src="/images/contact-info-img-2.jpg" alt="" width={413} height={400} /></figure><h3>Emails:</h3>
              {site.emails.map((e) => <p key={e}><a href={`mailto:${e}`}>{e}</a></p>)}</div></Reveal>
            <Reveal delay={200}><div className="info-card"><figure><Image src="/images/contact-info-img-3.jpg" alt="" width={413} height={400} /></figure><h3>Phones:</h3>
              {site.phones.india.map((p) => <p key={p}>India: <a href={telHref(p)}>{p}</a></p>)}
              {site.phones.bhutan.map((p) => <p key={p}>Bhutan: <a href={telHref(p)}>{p}</a></p>)}</div></Reveal>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2" style={{ alignItems: "stretch" }}>
          <div className="form-wrap">
            <SectionTitle eyebrow="Contact now" title="Get in touch with us" />
            <LeadForm type="contact" fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email Address", type: "email", required: true },
              { name: "phone", label: "Your Phone", type: "tel", required: true, full: true },
              { name: "message", label: "Your Message", textarea: true, full: true },
            ]} />
          </div>
          <iframe className="map" style={{ height: "100%", minHeight: 450 }} loading="lazy" title="Luminex Windows location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${a.street}, ${a.locality}, ${a.region} ${a.postalCode}`)}&output=embed`} />
        </div>
      </section>
    </>
  );
}
