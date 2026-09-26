import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Request a Free Quote – uPVC Windows & Doors",
  description: "Get a free, no-obligation quote for Luminex uPVC and aluminium windows and doors for new construction or renovation projects in India and Bhutan.",
  alternates: { canonical: "/request-quote" },
};

export default function Quote() {
  return (
    <>
      <PageHeader title="Request A Quote" crumbs={[{ label: "Request a quote" }]} />
      <section className="section section-bg-lines">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="form-wrap">
            <SectionTitle eyebrow="Reach us" title="Request a free quote" center>
              <p>Tell us about your project and our team will call you to schedule a free site measurement.</p>
            </SectionTitle>
            <LeadForm type="quote" submitLabel="Request My Quote" fields={[
              { name: "firstName", label: "First Name", required: true },
              { name: "lastName", label: "Last Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Contact", type: "tel", required: true },
              { name: "address", label: "Address", full: true },
              { name: "city", label: "City", required: true },
              { name: "state", label: "State", required: true },
              { name: "buildingType", label: "Type of building", options: ["Residential", "Commercial"] },
              { name: "constructionType", label: "Type of construction", options: ["New", "Renovation"] },
              { name: "details", label: "What are you looking to buy?", textarea: true, full: true },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
