// Central business data. Update here once and it flows to every page, the footer,
// JSON-LD schema, sitemap and llms.txt.
// TODO(client): confirm phone numbers + emails — the live site shows two different sets.

export const site = {
  name: "Luminex Windows",
  shortName: "Luminex",
  tagline: "Windows to the World, Doors to Your Dreams.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.luminexwindow.com",
  description:
    "Luminex Windows manufactures premium uPVC and system aluminium windows and doors in India and Bhutan — sliding, casement and tilt & turn systems with professional installation and a 15-year limited warranty.",
  topbarText: "There's no better time than now to upgrade your windows and doors",
  phones: {
    india: ["+91 960 9988 749", "+91 993 3581 666"],
    bhutan: ["+975 171 28800"],
  },
  primaryPhone: "+91 960 9988 749",
  emails: ["info@allyunitygroup.com", "ally.unity.group@gmail.com"],
  address: {
    street: "Ground Floor, Jeewandeep Building, Salugara",
    locality: "Siliguri",
    region: "West Bengal",
    postalCode: "734008",
    country: "IN",
    countryName: "India",
  },
  areaServed: ["India", "Bhutan"],
  social: {
    facebook: "https://www.facebook.com/luminex.ind",
    instagram: "https://www.instagram.com/luminex.india/",
  },
  warrantyYears: 15,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  { href: "/renovations", label: "Renovations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/luminex-difference", label: "Luminex Difference" },
  { href: "/contact", label: "Contact Us" },
];

export const telHref = (p: string) => "tel:" + p.replace(/[^\d+]/g, "");

export const reasons = [
  {
    icon: "/images/I1.png",
    title: "Professional Installation",
    text: "Even the highest quality windows and doors will underperform if they are installed incorrectly; this can lead to exposure to the elements, thermal heat loss, or issues with structural integrity.",
  },
  {
    icon: "/images/I3.png",
    title: "Product Diversity",
    text: "Luminex Windows offers the most complete line of windows and doors, customized to suit your home, style and budget. From classic to modern, you are sure to find the right products for you.",
  },
  {
    icon: "/images/I1.png",
    title: "Best Value For Money",
    text: "We are confident that our product offers the best value for money in terms of quality, performance, and price.",
  },
  {
    icon: "/images/I2.png",
    title: "Peace Of Mind Warranties",
    text: "Luminex customers enjoy total peace-of-mind, confident our products and services will stand the test of time. Luminex Windows offers an industry-leading 15 YEARS Limited WARRANTY from the date of manufacture.",
  },
  {
    icon: "/images/I4.png",
    title: "Excellent Weather Insulation",
    text: "Luminex windows provide excellent weather insulation, making homes more comfortable in all seasons. The multi-chambered design of Luminex windows reduces heat transfer, helping keep interiors cool during summer and warm during winter.",
  },
  {
    icon: "/images/I2.png",
    title: "Sound & Dust Protection",
    text: "Airtight multi-point sealing and multi-chamber profiles keep out traffic noise, dust and driving rain — ideal for Indian city homes and monsoon conditions.",
  },
];

// FAQ answers rewritten as short, self-contained answers (40–80 words) so search
// engines and AI assistants can quote them directly. Questions match the live site.
export const faqs = [
  {
    q: "What exactly are uPVC windows and doors?",
    a: "uPVC (unplasticized polyvinyl chloride) is a rigid, lead-free plastic used to make window and door frames. It does not rust, rot, swell or need painting, and its multi-chamber profiles insulate against heat and noise. That combination of durability, insulation and low maintenance is why uPVC has replaced wood and plain aluminium in most modern Indian homes.",
  },
  {
    q: "Types of uPVC frames: what are the options?",
    a: "Luminex makes uPVC sliding windows, casement windows, tilt & turn windows, fixed and combination windows, French and balcony doors, sliding patio doors and entrance doors. Frames can be fitted into existing wall openings for renovations or into new construction, and are made to custom sizes, colours and glazing specifications.",
  },
  {
    q: "Are uPVC windows and doors good for me?",
    a: "For most homes, yes. uPVC gives strong thermal and acoustic insulation, handles rain and humidity well and needs almost no upkeep. Very large openings or extremely sun-exposed façades may need reinforced profiles or a system-aluminium option — our team will recommend the right system after a site visit.",
  },
  {
    q: "Why do uPVC windows get condensation and mold?",
    a: "Condensation after installing new windows usually means the home is now well sealed, so indoor moisture from cooking, bathing and breathing has nowhere to go. Airing each room for a few minutes two or three times a day, using tilt ventilation, or choosing windows with micro-ventilation prevents it.",
  },
  {
    q: "Curtains and shading systems: what works best?",
    a: "Avoid drilling into uPVC frames. Use wall- or ceiling-mounted curtain rods and roller blinds, pressure-fit or adhesive brackets on the sash, blinds integrated inside the glass unit, or external roller shutters. Each protects the frame's seals and warranty while giving you privacy and sun control.",
  },
  {
    q: "How long do uPVC doors and windows last?",
    a: "Good-quality uPVC windows and doors typically last 25 years or more. Luminex backs its products with a 15-year limited warranty from the date of manufacture. Periodic cleaning, checking seals and lubricating hardware once a year keeps them performing like new.",
  },
  {
    q: "What is the best energy rating for uPVC windows?",
    a: "Energy performance depends on the whole window — frame, glass and installation — and is measured by its U-value (lower is better). Multi-chamber uPVC frames with double glazing and warm-edge spacers deliver the best results, cutting air-conditioning load in summer and heat loss in winter.",
  },
  {
    q: "Why does professional installation matter?",
    a: "A window only performs as well as it is installed. Correct installation means preparing the wall opening, levelling and anchoring the frame precisely, sealing with certified insulating materials and meeting thermal and acoustic standards. Every Luminex project is installed by our own trained team.",
  },
  {
    q: "How to maintain uPVC windows and doors?",
    a: "Clean frames every six months with a soft cloth and mild detergent — never abrasives or solvents. Wipe glass monthly with an ammonia-free cleaner, keep drainage slots and seals free of dust, and lubricate hinges, locks and sliding tracks once a year.",
  },
  {
    q: "How much should uPVC windows cost?",
    a: "Price depends on the window type and opening style, size, profile system, glass specification, hardware, colour and installation conditions, so it is quoted per project rather than a flat rate per square foot. Request a free quote and Luminex will measure your openings and send a detailed estimate.",
  },
];

export const partners = [
  { src: "/images/web/partner/schueco-vektor-data.svg", alt: "Schüco" },
  { src: "/images/web/partner/saint-gobain.jpg", alt: "Saint-Gobain" },
  { src: "/images/web/partner/pego.webp", alt: "Pego" },
  { src: "/images/web/partner/kinlong.png", alt: "Kin Long" },
  { src: "/images/web/partner/fenova-logo-200.png", alt: "Fenova" },
  { src: "/images/web/partner/alu_king.jpeg", alt: "AluKing" },
];
