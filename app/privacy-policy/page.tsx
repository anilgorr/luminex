import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

// Plain-language policy written for the site as built (WhatsApp enquiries, newsletter, GA4).
// Have the client (or their lawyer) review it before launch, and add the registered company name.

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Luminex Windows collects, uses and protects the details you share through our website, WhatsApp enquiries and newsletter.",
  alternates: { canonical: "/privacy-policy" },
};

const UPDATED = "10 October 2026";

export default function PrivacyPolicy() {
  const email = site.emails[0];
  return (
    <>
      <PageHeader title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section legal">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="legal-updated">Last updated: {UPDATED}</p>
          <p>This policy explains what information {site.name} (&quot;Luminex&quot;, &quot;we&quot;) collects when you use <strong>{site.url.replace(/^https?:\/\//, "")}</strong>, why we collect it, and the choices you have. It covers customers in India and Bhutan.</p>

          <h2>Information we collect</h2>
          <ul>
            <li><strong>Enquiries you send us.</strong> When you use our contact or quote forms, your name, phone number, email, city or country, and project details are passed to WhatsApp so you can send them to us, and a copy is recorded on our website so no enquiry is lost.</li>
            <li><strong>WhatsApp, phone and email.</strong> When you message or call us, we receive your number or email and whatever you choose to share in the conversation.</li>
            <li><strong>Newsletter.</strong> If you subscribe, we keep your email address to send updates.</li>
            <li><strong>Website usage.</strong> We use Google Analytics to understand how the site is used: pages visited, approximate location (city level), device and browser type, the site that referred you, and which contact buttons were clicked. This uses cookies. Advertising features and Google signals are turned off.</li>
            <li><strong>Technical logs.</strong> Our hosting provider keeps standard server logs, such as IP address and request times, for security and reliability.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry, prepare quotes, arrange site measurements, deliver and install your windows and doors.</li>
            <li>To provide after-sales service and handle warranty claims.</li>
            <li>To send our newsletter, if you asked for it.</li>
            <li>To improve the website and understand which pages help visitors.</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it for advertising profiles.</p>

          <h2>Who we share it with</h2>
          <ul>
            <li><strong>WhatsApp (Meta)</strong>, when you choose to contact us there. Its use of your data is covered by WhatsApp&apos;s own privacy policy.</li>
            <li><strong>Google</strong>, for website analytics.</li>
            <li><strong>Our hosting and email providers</strong>, who store data on our behalf.</li>
            <li><strong>Our installation teams</strong> in India and Bhutan, only the details needed to carry out your job.</li>
            <li>Authorities, where the law requires it.</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>We keep enquiry and customer records for as long as needed to serve you, including for the length of your product warranty, and as required for tax and accounting records. Newsletter emails are kept until you unsubscribe. Analytics data is retained for 14 months.</p>

          <h2>Your rights</h2>
          <p>You can ask us to show you the personal data we hold about you, correct it, delete it, or stop using it for the newsletter. Under India&apos;s Digital Personal Data Protection Act, 2023, you may also withdraw consent and raise a grievance with us. Email <a href={`mailto:${email}`}>{email}</a> and we will respond within 30 days.</p>

          <h2>Cookies</h2>
          <p>Google Analytics sets cookies (named <code>_ga</code> and <code>_ga_*</code>) to tell visits apart. You can block or delete cookies in your browser settings; the site works without them.</p>

          <h2>Security</h2>
          <p>The site is served only over HTTPS, and access to enquiry records is limited to our team. No method of transmission is completely secure, but we take reasonable steps to protect your information.</p>

          <h2>Children</h2>
          <p>Our services are meant for adults. We do not knowingly collect information from children under 18.</p>

          <h2>Changes to this policy</h2>
          <p>If we change how we handle your information, we will update this page and the date at the top.</p>

          <h2>Contact</h2>
          <p>{site.name}, {site.address.street}, {site.address.locality} {site.address.postalCode}, {site.address.region}, India.<br />
            Email: {site.emails.map((e, i) => <span key={e}>{i > 0 && " · "}<a href={`mailto:${e}`}>{e}</a></span>)}<br />
            Phone: {site.phones.india[0]} (India) · {site.phones.bhutan[0]} (Bhutan)</p>
          <p>See also our <Link href="/warranty">warranty terms</Link>.</p>
        </div>
      </section>
    </>
  );
}
