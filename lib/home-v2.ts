// Content for the new homepage (client call, 16 Oct 2026). Used by the three design
// previews under /preview. Once a design is approved this becomes the homepage content
// and the fact changes below move into lib/site.ts so they flow sitewide
// (location pages, FAQ, JSON-LD, llms.txt).
//
// Changes requested on the call:
// - No prices anywhere on the homepage (they stay on the dedicated price pages).
// - Lead time is 30–60 days (client, 28 Oct; earlier 30–60, originally 15–30).
// - Profile warranty headline: up to 25 years.
// - Guwahati / "Northeast" not promoted on the homepage (location pages stay, linked from the footer).
// - Schüco gets its own nav tab; no Luminex × Schüco lockup in the logo.
// - Locations move out of the header into the footer.
// - No text on hero images; the grey third slide is replaced.
// - The 3D window uses a uPVC-style handle.
//
// TODO(client): handle reference photo; Schüco written OK + exact partner wording;
//               real project photos to replace stock images.

import { nav, site, waLink } from "./site";
import { posts } from "./content";

export const facts = {
  leadTime: "30–60 days",
  warrantyHeadline: "Up to 25 years",
  warranty: { profile: "Up to 25 years", glass: "15 years", hardware: "5 years" },
  served: "Siliguri, North Bengal, Sikkim and Bhutan",
};

// WhatsApp: India link goes to +91 99335 81666 (client, 28 Oct). Labels show the country only.
const WA_TEXT = encodeURIComponent("Hi Luminex, I'd like a quote for windows / doors.");
export const whatsapp = {
  india: { href: `https://wa.me/919933581666?text=${WA_TEXT}`, display: "" },
  bhutan: { href: waLink("bhutan"), display: "" },
};

// Header: the previous site menu, with Schüco in place of Renovations (client, 28 Oct).
export const navV2 = [
  { href: "/", label: "Home" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  // Points at the homepage section until the dedicated /schuco page is built and Schüco signs off the wording.
  { href: "#schuco", label: "Schüco" },
  { href: "/gallery", label: "Gallery" },
  { href: "/luminex-difference", label: "Luminex Difference" },
  { href: "/contact", label: "Contact Us" },
];

export const quoteHref = "/request-quote";

// Locations live in the footer only (needed for AEO/GEO internal linking).
export const footerLocations = (nav.find((n) => n.children)?.children ?? []).map((c) => ({
  href: c.href,
  label: c.label.replace(" · ", " – "),
}));

export const hero = {
  h1: "uPVC and aluminium windows and doors for Siliguri, Sikkim and Bhutan",
  // 40–60 word answer block: the passage AI engines lift when asked "who makes windows in Siliguri / Bhutan".
  answer:
    "Luminex Windows makes premium uPVC and system aluminium windows and doors at its Siliguri facility and installs them with its own teams across North Bengal, Sikkim and Bhutan. Luminex is an official Schüco channel partner, glazes with Saint-Gobain glass, and delivers and installs in 30–60 days.",
  // No text on these images (client request). The grey texture slide was removed.
  slides: [
    { src: "/images/luminex-banner.jpg", alt: "Double-height hallway with black-framed glazed wall and double doors opening to a garden" },
    { src: "/images/mission-vision-bg.jpg", alt: "Wide glass sliding door opening a living room onto a stone terrace and garden" },
    { src: "/images/hero-bg.jpg", alt: "Living room with floor-to-ceiling windows looking out over trees and a city skyline" },
  ],
};

export const explodeSteps = [
  { title: "One window, built as a system", text: "Profile, seals, glass and hardware chosen to work together. Scroll to take a Luminex window apart." },
  { title: "Multi-chamber profile frame", text: "Schüco, Luminex and Fenova profiles with insulating chambers. They don't rust, rot or swell." },
  { title: "Enhanced Acoustic Comfort", text: "Helps reduce sound leakage through window joints, complementing the acoustic performance of the glass and overall window system." },
  { title: "Saint-Gobain glass", text: "Double glazing, low-E, toughened or acoustic, matched to your climate and the noise outside." },
  { title: "Sashes and uPVC hardware", text: "Sashes on smooth rollers, locked by Schüco, Pego and Kinlong handles and multi-point locks." },
  { title: "Installed by our own team", text: "Delivered and installed in 30–60 days, with up to 25 years' warranty on profiles." },
];

export const about = {
  title: "Windows and doors made in Siliguri, fitted from Siliguri to Thimphu",
  body: [
    "Luminex manufactures uPVC and system aluminium windows and doors in Siliguri: sliding, casement and tilt-and-turn windows, sliding and folding doors, and glazed walls for homes, hotels and offices.",
    "Every opening is measured, made and installed by our own people, so the warranty and the performance hold. Samples are on display at our Siliguri office.",
  ],
  stat: { value: "98%", label: "happy customers" },
  image: { src: "/images/luminex-about.jpg", alt: "Corner of a house with white multi-pane uPVC casement windows" },
};

export const schuco = {
  title: "Official Schüco channel partner",
  intro:
    "Schüco is the window, door and façade systems company headquartered in Bielefeld, Germany. As its channel partner, Luminex supplies and installs Schüco systems for homes, hotels and commercial buildings in North Bengal, Sikkim and Bhutan.",
  items: [
    { title: "Schüco windows", text: "uPVC and aluminium window systems with tested thermal and acoustic performance." },
    { title: "Schüco doors", text: "Sliding, folding and entrance door systems for large openings." },
    { title: "Schüco façades", text: "Glazed façade systems for hotels, offices and commercial buildings." },
  ],
  note: "Performance data sheets for each system are available on request.",
  image: { src: "/images/service-img.png", alt: "White uPVC casement window with one sash open, showing the multi-chamber frame and handle" },
};

export const products = [
  { href: "/windows", title: "Windows", text: "Sliding, casement, tilt-and-turn, fixed and custom shapes in uPVC or system aluminium.", image: { src: "/images/hero-bg.jpg", alt: "Floor-to-ceiling windows in a living room" } },
  { href: "/doors", title: "Doors", text: "Sliding patio doors, folding doors and entrance doors with multi-point locking.", image: { src: "/images/mission-vision-bg.jpg", alt: "Glass sliding door opening onto a terrace" } },
  { href: "/renovations", title: "Replacements", text: "Old wooden or aluminium windows replaced with uPVC, fitted into the existing openings.", image: { src: "/images/our-testimonial-bg.jpg", alt: "Living room with wooden doors and windows" } },
];

export const reasons = [
  { title: "Schüco channel partner", text: "Schüco, Luminex and Fenova profiles with Saint-Gobain glass and Schüco, Pego and Kinlong hardware." },
  { title: "Our own installation teams", text: "Teams in Siliguri, Thimphu, Paro and Phuentsholing measure, fit and service every window." },
  { title: "Warranty you can read", text: "Up to 25 years on profiles, 15 years on glass and 5 years on hardware. Physical damage, modification and mishandling are excluded." },
  { title: "Built for this climate", text: "Multi-chamber profiles, airtight seals and double, low-E or acoustic glass for monsoon rain, hill winters and traffic noise." },
  { title: "Service in Bhutan", text: "A 24x7 service team in Thimphu attends service calls within 2 business days. No extra paperwork for Bhutan customers." },
  { title: "30–60 days, order to install", text: "The same timeline across North Bengal, Sikkim and Bhutan, from order to installed windows." },
];

// Short, price-free fact list. Replaces the green "quick facts" panel.
export const glance: [string, string][] = [
  ["Partner status", "Official Schüco channel partner"],
  ["Delivery and installation", "30–60 days from order"],
  ["Profile warranty", "Up to 25 years"],
  ["Glass", "Saint-Gobain: double glazing, low-E, toughened, acoustic"],
  ["Offices", "Siliguri, India and Thimphu, Bhutan"],
  ["Bhutan service", "24x7 team, calls attended within 2 business days"],
];

// Homepage FAQ: no prices, corrected lead time, no Guwahati. FAQPage schema stays on /faq only.
export const faqs = [
  {
    q: "Where is Luminex Windows based?",
    a: "Luminex Windows is headquartered in Siliguri, West Bengal.\n\nIn Bhutan, our coordination desk in Changbangdu, Thimphu, supports project coordination and customer communication, backed by dedicated installation teams serving across Bhutan.\n\nWith our base in Siliguri and an established on-ground presence in Bhutan, we are well-positioned to serve residential, commercial and architectural projects across the region.",
  },
  {
    q: "Is Luminex an official Schüco partner?",
    a: "Yes. Luminex Windows is an official channel partner of Schüco, offering the supply and installation of premium Schüco window, door and façade systems across West Bengal, Sikkim, Guwahati and Bhutan.\n\nAlongside Schüco's advanced architectural systems, we offer our multiple profile ranges, providing solutions tailored to diverse architectural styles, project specifications and performance requirements.",
  },
  {
    q: "How long do delivery and installation take?",
    a: "Our typical delivery and installation timeline is 30–60 days from order confirmation, depending on the project size, product specifications and site requirements.\n\nFor our customers in Bhutan, Luminex offers convenient direct-to-site delivery, simplifying the customs process and minimising the need for customers to coordinate transportation independently. Our team coordinates the delivery and installation process to ensure a smooth, hassle-free experience.",
  },
  {
    q: "What warranty do Luminex windows come with?",
    a: "At Luminex, we stand behind the quality of our window and door systems with product-specific warranty coverage for added peace of mind.\n\nuPVC & Aluminium Profiles: Warranty coverage of up to 25 years, depending on the profile brand and applicable warranty terms.\n\nGlass: 15-year warranty, subject to the applicable product warranty conditions.\n\nHardware: 5-year warranty, covering eligible hardware components as specified in the warranty documentation.\n\nWarranty coverage is subject to the respective manufacturer's terms and conditions. Physical damage, unauthorised modifications, improper handling and damage resulting from misuse are excluded from coverage.",
  },
  {
    q: "Should I choose uPVC or system aluminium windows?",
    a: "uPVC suits most homes: it insulates well against heat, cold and noise and needs almost no maintenance. System aluminium suits very large openings, slim frames and commercial façades. Luminex recommends the system after measuring your openings.",
  },
  {
    q: "Which glass options do you offer?",
    a: "Luminex glazes with Saint-Gobain glass and offers double glazing, low-E, toughened and acoustic glass. The systems have tested U-values and acoustic ratings, so the glass can be matched to your climate and noise level.",
  },
];

export const partners = [
  { src: "/images/web/partner/schueco-vektor-data.svg", alt: "Schüco" },
  { src: "/images/web/partner/saint-gobain.jpg", alt: "Saint-Gobain" },
  { src: "/images/web/partner/fenova-logo-200.png", alt: "Fenova" },
  { src: "/images/web/partner/pego.webp", alt: "Pego" },
  { src: "/images/web/partner/kinlong.png", alt: "Kinlong" },
  { src: "/images/web/partner/alu_king.jpeg", alt: "AluKing" },
];

export const latestPosts = posts.slice(0, 3);

export const contact = {
  phonesIndia: site.phones.india,
  phonesBhutan: site.phones.bhutan,
  email: site.emails[0],
  address: `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`,
  social: site.social,
};

// From first visit to after-sales: a real sequence, so the designs may number it.
export const process = [
  { title: "Site Visit & Precision Measurement", text: ["Our technical team visits your site to assess the openings, take accurate measurements and recommend the right uPVC or system aluminium windows and doors for your space. We consider your design preferences, functional requirements and site conditions to help determine the most suitable solution."] },
  { title: "State-of-the-Art Manufacturing", text: ["Our state-of-the-art manufacturing facility in Siliguri is equipped with advanced German-engineered machinery, bringing exceptional precision, consistency and manufacturing excellence to uPVC and system aluminium windows and doors.", "Our investment in advanced German machinery reflects our commitment to raising manufacturing standards and delivering window and door solutions engineered for quality, performance and lasting reliability."] },
  { title: "Delivery & Professional Installation", text: ["Our in-house installation team coordinates delivery and fitting to ensure your windows and doors are installed with care and precision. The typical delivery and installation timeline is 30–60 days, depending on the product type, specifications and project requirements."] },
  { title: "After-Sales Service & Long-Term Support", text: ["Our relationship with you continues beyond installation. We provide after-sales assistance for our supplied window and door systems, with a dedicated service touchpoint in Thimphu supporting our customers in Bhutan. Eligible profile systems carry warranties of up to 25 years, subject to the applicable product, warranty terms and conditions."] },
];

// Body-copy internal links to the location pages (helps crawlers and AI engines map coverage).
// Guwahati is left out on purpose (client: large projects only).
export const regions = [
  { href: "/siliguri/upvc-windows", place: "Siliguri", note: "Office, samples and installation" },
  { href: "/jalpaiguri", place: "Jalpaiguri", note: "Served from Siliguri" },
  { href: "/darjeeling", place: "Darjeeling", note: "Hill homes and hotels" },
  { href: "/gangtok", place: "Gangtok", note: "Sikkim homes and hotels" },
  { href: "/bhutan/thimphu", place: "Thimphu", note: "Coordination desk and service team" },
  { href: "/bhutan/paro", place: "Paro", note: "Installation team" },
  { href: "/bhutan/phuentsholing", place: "Phuentsholing", note: "Installation team" },
];

// Extra photography for richer layouts (stock until Luminex project photos arrive).
export const craftImage = { src: "/images/vision-image.jpg", alt: "Craftsman cutting a sheet of glass on a workshop table", w: 414, h: 337 };
export const detailImage = { src: "/images/luminex-about.jpg", alt: "Corner of a house with white multi-pane uPVC casement windows", w: 430, h: 623 };

// Band under the hero photos (client, 28 Oct), replacing the headline block.
export const trust = {
  years: "20",
  unit: "YEARS",
  tagline: "of trust",
  title: "A lifetime of possibilities",
  body: [
    "With over two decades of experience and established relationships in Bhutan, our leadership brings a deep understanding of the region's needs, expectations and evolving architectural landscape.",
    "Today, that experience finds new expression through Luminex — a brand dedicated to premium system aluminium and uPVC doors and windows. Luminex combines years of industry insight with contemporary design, precision engineering and a commitment to lasting quality.",
  ],
  cta: { href: "/about", label: "Learn more" },
};

// "So many reasons to choose Luminex", restored from the previous site's design (client, 28 Oct).
// Titles and copy follow the old site; the warranty line is updated and the duplicated
// "Excellent Weather Insulation" card is replaced with the Schüco partnership.
export const classicReasons = {
  title: "So many reasons to choose Luminex",
  intro: "Luminex is proud to offer the expert guidance and peace-of-mind warranties needed to make your project a \u201chappily ever after\u201d.",
  items: [
    { icon: "/images/I1.png", title: "Professional Installation", text: "Even the highest quality windows and doors will underperform if they are installed incorrectly; this can lead to exposure to the elements, thermal heat loss, or issues with structural integrity." },
    { icon: "/images/I2.png", title: "Product Diversity", text: "Luminex Windows offers the most complete line of windows and doors, customized to suit your home, style and budget. From classic to modern, you are sure to find the right products for you." },
    { icon: "/images/I1.png", title: "Best Value For Money", text: "We are confident that our product offers the best value for money in terms of quality, performance, and price." },
    { icon: "/images/I3.png", title: "Peace Of Mind Warranties", text: "Luminex customers enjoy total peace of mind, confident our products and services will stand the test of time. Profiles carry warranties of up to 25 years depending on the profile brand, glass 15 years and hardware 5 years." },
    { icon: "/images/I4.png", title: "Excellent Weather Insulation", text: "Luminex windows provide excellent weather insulation, making homes more comfortable in all seasons. The multi-chambered design of Luminex windows reduces heat transfer, helping keep interiors cool during summer and warm during winter." },
    { icon: "/images/I3.png", title: "Official Schüco Channel Partner", text: "Luminex is an official channel partner of Schüco, the German window, door and façade systems company, supplying and installing premium Schüco systems alongside our own profile ranges." },
  ],
};
