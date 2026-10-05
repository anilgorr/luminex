import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "uPVC & Aluminium Windows and Doors in India & Bhutan | Luminex Windows", template: "%s | Luminex Windows" },
  description: site.description,
  applicationName: site.name,
  keywords: ["uPVC windows", "uPVC doors", "aluminium windows", "sliding windows", "casement windows", "tilt and turn windows", "Siliguri", "West Bengal", "Bhutan", "Luminex Windows"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_IN", url: site.url, images: [{ url: "/images/luminex-banner.jpg", width: 2400, height: 1600, alt: "Luminex premium windows and doors" }] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/web/Luminex.png" },
  robots: process.env.NEXT_PUBLIC_SITE_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#1c4722", width: "device-width", initialScale: 1 };

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HomeAndConstructionBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "Luminex",
      url: site.url,
      logo: `${site.url}/images/web/Luminex.png`,
      image: `${site.url}/images/luminex-banner.jpg`,
      slogan: site.tagline,
      description: site.description,
      telephone: site.primaryPhone,
      email: site.emails[0],
      address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.locality, addressRegion: site.address.region, postalCode: site.address.postalCode, addressCountry: site.address.country },
      areaServed: site.areaServed.map((c) => ({ "@type": "Country", name: c })),
      sameAs: [site.social.facebook, site.social.instagram],
      contactPoint: [
        ...site.phones.india.map((t) => ({ "@type": "ContactPoint", telephone: t, contactType: "sales", areaServed: "IN" })),
        ...site.phones.bhutan.map((t) => ({ "@type": "ContactPoint", telephone: t, contactType: "sales", areaServed: "BT" })),
      ],
      makesOffer: ["uPVC windows", "uPVC doors", "System aluminium windows", "Sliding patio doors", "Folding doors", "Window and door installation"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: n } })),
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#organization` }, inLanguage: "en-IN" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
