// Content for the new homepage (client call, 16 Oct 2026). Used by the three design
// previews under /preview. Once a design is approved this becomes the homepage content
// and the fact changes below move into lib/site.ts so they flow sitewide
// (location pages, FAQ, JSON-LD, llms.txt).
//
// Changes requested on the call:
// - No prices anywhere on the homepage (they stay on the dedicated price pages).
// - Lead time is 30–45 days, not 15–30.
// - Profile warranty headline: up to 25 years.
// - Guwahati / "Northeast" not promoted on the homepage (location pages stay, linked from the footer).
// - Schüco gets its own nav tab; no Luminex × Schüco lockup in the logo.
// - Locations move out of the header into the footer.
// - No text on hero images; the grey third slide is replaced.
// - The 3D window uses a uPVC-style handle.
//
// TODO(client): MJ's WhatsApp number for India (replaces the current India number).
// TODO(client): handle reference photo; Schüco written OK + exact partner wording;
//               real project photos to replace stock images.

import { nav, site, waLink } from "./site";
import { posts } from "./content";

export const facts = {
  leadTime: "30–45 days",
  warrantyHeadline: "Up to 25 years",
  warranty: { profile: "Up to 25 years", glass: "15 years", hardware: "5 years" },
  served: "Siliguri, North Bengal, Sikkim and Bhutan",
};

// India WhatsApp: swap the number here when MJ shares hers. Kept in one place on purpose.
export const whatsapp = {
  india: { href: waLink("india"), display: site.whatsapp.india.display },
  bhutan: { href: waLink("bhutan"), display: site.whatsapp.bhutan.display },
};

export const navV2 = [
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  // Points at the homepage section until the dedicated /schuco page is built and Schüco signs off the wording.
  { href: "#schuco", label: "Schüco" },
  { href: "/luminex-difference", label: "Luminex difference" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
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
    "Luminex Windows makes premium uPVC and system aluminium windows and doors at its Siliguri facility and installs them with its own teams across North Bengal, Sikkim and Bhutan. Luminex is an official Schüco channel partner, glazes with Saint-Gobain glass, and delivers and installs in 30–45 days.",
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
  { title: "Airtight weather seals", text: "Continuous seals keep monsoon rain, dust and draughts out." },
  { title: "Saint-Gobain glass", text: "Double glazing, low-E, toughened or acoustic, matched to your climate and the noise outside." },
  { title: "Sashes and uPVC hardware", text: "Sashes on smooth rollers, locked by Schüco, Pego and Kinlong handles and multi-point locks." },
  { title: "Installed by our own team", text: "Delivered and installed in 30–45 days, with up to 25 years' warranty on profiles." },
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
  { title: "30–45 days, order to install", text: "The same timeline across North Bengal, Sikkim and Bhutan, from order to installed windows." },
];

// Short, price-free fact list. Replaces the green "quick facts" panel.
export const glance: [string, string][] = [
  ["Partner status", "Official Schüco channel partner"],
  ["Delivery and installation", "30–45 days from order"],
  ["Profile warranty", "Up to 25 years"],
  ["Glass", "Saint-Gobain: double glazing, low-E, toughened, acoustic"],
  ["Offices", "Siliguri, India and Thimphu, Bhutan"],
  ["Bhutan service", "24x7 team, calls attended within 2 business days"],
];

// Homepage FAQ: no prices, corrected lead time, no Guwahati. FAQPage schema stays on /faq only.
export const faqs = [
  {
    q: "Where is Luminex Windows based?",
    a: "Luminex Windows is based in Siliguri, West Bengal, at Ground Floor, Jeewandeep Building, Salugara (PIN 734008), where it also keeps window and door samples. It has a coordination desk in Changbangdu, Thimphu, and installation teams serving Thimphu, Paro and Phuentsholing.",
  },
  {
    q: "Is Luminex an official Schüco partner?",
    a: "Yes. Luminex is an official Schüco channel partner and supplies and installs Schüco window, door and façade systems in North Bengal, Sikkim and Bhutan, alongside its own Luminex and Fenova profile ranges.",
  },
  {
    q: "How long do delivery and installation take?",
    a: "Delivery and installation take 30 to 45 days from order, depending on the size of the project. The same timeline applies in Siliguri, Sikkim and Bhutan, and Bhutan customers need no extra paperwork because Luminex delivers to site.",
  },
  {
    q: "What warranty do Luminex windows come with?",
    a: "Profiles carry a warranty of up to 25 years depending on the profile brand, glass is covered for 15 years and hardware for 5 years. The warranty does not cover physical damage, modification or mishandling.",
  },
  {
    q: "Do you have a dealer in Bhutan?",
    a: "No dealer is involved. Luminex has its own coordination desk in Changbangdu, Thimphu, installation teams for Thimphu, Paro and Phuentsholing, and a 24x7 service team that attends calls within 2 business days. WhatsApp Luminex Bhutan on +975 1772 8800.",
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
