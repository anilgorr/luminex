import type { Metadata } from "next";
import { site } from "./site";

// Page titles (≤ 60 characters) and meta descriptions (120–160) from the Digipuush developer guide,
// Appendix A (23 Nov 2026). Titles are absolute, so the layout's " | Luminex Windows" is not added again.
// Where the guide says "keep", only the title is listed and the page keeps its own description.
type Entry = { title: string; description?: string };

export const pageMeta: Record<string, Entry> = {
  "/": { title: "uPVC & Aluminium Windows and Doors | Luminex Windows", description: "Official Schüco channel partner supplying and installing uPVC and aluminium windows and doors across North Bengal, the Northeast and Bhutan. From ₹495/sq ft." },
  "/about": { title: "About Luminex Windows – Siliguri uPVC & Aluminium", description: "Luminex Windows supplies premium uPVC and system aluminium windows and doors from Siliguri, with a Bhutan desk in Thimphu. Official Schüco channel partner." },
  "/windows": { title: "uPVC & Aluminium Windows – Sliding, Casement | Luminex", description: "Sliding, casement, tilt & turn and fixed windows in uPVC and system aluminium. Soundproof, rain-tight and energy efficient, from ₹495/sq ft." },
  "/doors": { title: "uPVC & Aluminium Doors – Sliding, Folding | Luminex", description: "Entry, sliding patio and folding doors in uPVC and aluminium, made to measure and installed by Luminex across North Bengal, the Northeast and Bhutan." },
  "/gallery": { title: "Project Gallery – Windows & Doors | Luminex Windows", description: "Completed Luminex uPVC and aluminium window and door projects in homes, hotels and offices across Siliguri, the Northeast and Bhutan." },
  "/press": { title: "Luminex Windows in the News – Press Coverage", description: "Luminex in the news: Bhutan's Gyalsung Academy project with Fenova, reported by PTI, The Tribune, The Week and The Wire in January 2026." },
  "/luminex-difference": { title: "Why Choose Luminex Windows – The Luminex Difference", description: "How Luminex windows compare: up to 40% better insulation, 38 dB noise reduction, 600 Pa air tightness and 2400 Pa wind load resistance." },
  "/faq": { title: "uPVC & Aluminium Window FAQs – Prices, Warranty | Luminex", description: "Answers on Luminex window prices (from ₹495/sq ft), warranty, glass options, delivery time, maintenance and service in Bhutan." },
  "/contact": { title: "Contact Luminex Windows – Salugara, Siliguri", description: "Visit or call Luminex Windows in Salugara, Siliguri for uPVC and aluminium windows and doors in India and Bhutan. Free consultation and quote." },
  "/request-quote": { title: "Free Quote – uPVC & Aluminium Windows | Luminex" },
  "/blog": { title: "Window & Door Tips and Guides | Luminex Windows", description: "Practical guides on uPVC and aluminium windows and doors: prices, glass, energy efficiency, design trends and maintenance for Indian and Bhutan homes." },
  "/siliguri/upvc-windows": { title: "uPVC Windows in Siliguri – From ₹495/sq ft | Luminex", description: "uPVC windows in Siliguri from ₹495/sq ft. Sliding and casement windows supplied and installed in 30–60 days by Luminex, Salugara. Official Schüco partner." },
  "/siliguri/aluminium-windows": { title: "Aluminium Windows in Siliguri – From ₹950/sq ft | Luminex", description: "System aluminium windows in Siliguri from ₹950/sq ft. Schüco systems with slim frames and large glass, supplied and installed by Luminex in 30–60 days." },
  "/siliguri/window-replacement": { title: "Window Replacement in Siliguri – uPVC & Aluminium", description: "Replace old wooden or steel windows in Siliguri with uPVC (from ₹495/sq ft) or aluminium (from ₹950/sq ft). Measured and installed by Luminex." },
  "/guwahati/upvc-windows": { title: "uPVC Windows in Guwahati – From ₹495/sq ft | Luminex", description: "uPVC windows in Guwahati from ₹495/sq ft, supplied and installed in 30–60 days by Luminex Windows, an official Schüco channel partner serving Assam." },
  "/guwahati/aluminium-windows-price": { title: "Aluminium Window Price in Guwahati (2026) | Luminex", description: "System aluminium windows in Guwahati start at ₹950/sq ft. See what changes the price, worked examples, and how Luminex delivers in 30–60 days." },
  "/bhutan": { title: "uPVC Windows & Doors in Bhutan – Thimphu Desk | Luminex", description: "uPVC and aluminium windows and doors across Bhutan, with a Thimphu desk and teams in Paro and Phuentsholing. From ₹495/sq ft, no paperwork for you." },
  "/bhutan/thimphu": { title: "uPVC Windows in Thimphu – From ₹495/sq ft | Luminex", description: "uPVC and aluminium windows in Thimphu from Luminex: local coordination desk, own installation team and 24x7 service. From ₹495/sq ft." },
  "/bhutan/phuentsholing": { title: "Windows in Phuentsholing – uPVC & Aluminium | Luminex" },
  "/bhutan/paro": { title: "uPVC Windows & Doors in Paro – Installer | Luminex" },
  "/bhutan/hotel-projects": { title: "Hotel Windows in Bhutan – Acoustic Glass | Luminex", description: "uPVC and aluminium windows and doors for hotels and resorts in Bhutan: acoustic and double glazing, own teams in Thimphu, Paro and Phuentsholing." },
  "/warranty": { title: "Luminex Warranty – Up to 25 Years on Profiles" },
  "/shillong": { title: "uPVC Windows in Shillong – From ₹495/sq ft | Luminex", description: "Rain-tight uPVC windows and doors in Shillong from ₹495/sq ft, with double-glazed options. Installed in 30–60 days by Luminex, official Schüco partner." },
  "/gangtok": { title: "uPVC Windows & Doors in Gangtok – From ₹495/sq ft", description: "Double-glazed uPVC windows and doors for Gangtok's hill winters, from ₹495/sq ft. Supplied and installed by Luminex in 30–60 days." },
  "/darjeeling": { title: "uPVC Windows & Doors in Darjeeling – From ₹495/sq ft", description: "Replace old timber windows in Darjeeling with double-glazed uPVC from ₹495/sq ft. Supplied and installed by Luminex, official Schüco partner." },
  "/jalpaiguri": { title: "uPVC Windows in Jalpaiguri – From ₹495/sq ft | Luminex", description: "uPVC windows, sliding windows and doors in Jalpaiguri from ₹495/sq ft, served from Luminex's nearby Siliguri office. Installed in 30–60 days." },
  "/bhutan/best-windows-for-climate": { title: "Best Windows for Bhutan's Climate – Guide | Luminex", description: "Which windows suit Bhutan? Double-glazed uPVC for Thimphu and Paro, rain-tight frames for Phuentsholing, with prices and glass options." },
  "/bhutan/importing-windows-from-india": { title: "Importing Windows to Bhutan from India | Luminex", description: "Buying windows from India for a home or hotel in Bhutan? With Luminex: no paperwork, India prices, quotes in rupees or ngultrum, 30–60 day delivery." },
  "/blog/energy-efficient-door-design": { title: "Energy-Efficient Door Design: A Guide | Luminex", description: "How door materials, glazing and seals cut heat loss and energy bills, and which uPVC and aluminium door options work best for Indian homes." },
  "/blog/window-aesthetics-trends": { title: "Window Design Trends for Modern Homes | Luminex", description: "The window styles, frame colours and glass trends shaping modern homes, from slim aluminium frames to wood-finish uPVC, and how to choose." },
  "/blog/durable-window-frame-materials": { title: "Best Window Frame Materials Compared | Luminex", description: "uPVC vs aluminium vs wood window frames compared on durability, insulation, maintenance and cost, to help you choose the right frame." },
};

const ogImage = { url: "/images/luminex-banner.jpg", width: 1920, height: 1280, alt: "Luminex premium windows and doors" };

/** Title, description, canonical, Open Graph and Twitter for a path, with matching text everywhere. */
export function metaFor(path: string, fallback: { title: string; description: string; image?: string }): Metadata {
  const e = pageMeta[path];
  const title = e?.title ?? fallback.title;
  const description = e?.description ?? fallback.description;
  const images = fallback.image ? [fallback.image] : [ogImage];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_IN", url: path, title, description, images },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => (typeof i === "string" ? i : i.url)) },
  };
}
