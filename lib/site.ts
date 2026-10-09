// Central business data. Update here once and it flows to every page, the footer,
// JSON-LD schema, sitemap and llms.txt.
// Facts below were confirmed by Luminex on 9 Oct 2026.
// TODO(client): Bhutan office street addresses, Siliguri showroom + factory address,
// warranty start point (manufacture vs installation), confirm website email.

export const site = {
  name: "Luminex Windows",
  shortName: "Luminex",
  tagline: "Windows to the World, Doors to Your Dreams.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.luminexwindow.com",
  description:
    "Luminex Windows, an official Schüco channel partner, supplies and installs premium uPVC and system aluminium windows and doors across North Bengal, the Northeast and Bhutan. uPVC windows from ₹495/sq ft, delivered and installed in 15–30 days.",
  partner: "Official Schüco channel partner",
  topbarText: "Official Schüco channel partner · Delivered and installed in 15–30 days",
  phones: {
    india: ["+91 96099 88749", "+91 99335 81666"],
    bhutan: ["+975 1772 8800"],
  },
  primaryPhone: "+91 96099 88749",
  // WhatsApp is the primary enquiry channel (client instruction).
  whatsapp: {
    india: { number: "919609988749", label: "India", display: "+91 96099 88749" },
    bhutan: { number: "97517728800", label: "Bhutan", display: "+975 1772 8800" },
  },
  emails: ["info@allyunitygroup.com"],
  address: {
    street: "Ground Floor, Jeewandeep Building, Salugara",
    locality: "Siliguri",
    region: "West Bengal",
    postalCode: "734008",
    country: "IN",
    countryName: "India",
  },
  // Offices with their own staff and installation teams (Guwahati is served from Siliguri).
  offices: [
    { city: "Siliguri", country: "India", role: "Head office" },
    { city: "Thimphu", country: "Bhutan", role: "Office, installation team and 24x7 service team" },
    { city: "Paro", country: "Bhutan", role: "Office and installation team" },
    { city: "Phuentsholing", country: "Bhutan", role: "Office and installation team" },
  ],
  areaServed: ["India", "Bhutan"],
  social: {
    facebook: "https://www.facebook.com/luminex.ind",
    instagram: "https://www.instagram.com/luminex.india/",
  },
  pricing: {
    upvcFrom: 495,
    aluminiumFrom: 950,
    note: "Starting price per sq ft for standard sizes; the final price depends on size, window type, glass and hardware. Same price in India and Bhutan, quoted in rupees or ngultrum.",
  },
  leadTime: "15–30 days",
  warranty: {
    profile: "15–25 years, depending on the profile brand",
    hardware: "5 years",
    glass: "15 years",
    exclusions: "Physical damage, modification and mishandling are not covered.",
    summary: "Up to 25 years on profiles, 15 years on glass, 5 years on hardware",
  },
  brands: {
    profiles: ["Schüco", "Luminex", "Fenova"],
    glass: ["Saint-Gobain"],
    hardware: ["Schüco", "Pego", "Luminex", "Kinlong"],
  },
  glassOptions: ["Double glazing", "Low-E glass", "Toughened glass", "Acoustic glass"],
  bhutanService: "A 24x7 service team in Thimphu; service calls are attended within 2 business days.",
};

export const waLink = (region: "india" | "bhutan", text = "Hi Luminex, I'd like a quote for windows / doors.") =>
  `https://wa.me/${site.whatsapp[region].number}?text=${encodeURIComponent(text)}`;

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };
export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  {
    href: "/siliguri/upvc-windows",
    label: "Locations",
    children: [
      { href: "/siliguri/upvc-windows", label: "Siliguri · uPVC" },
      { href: "/siliguri/aluminium-windows", label: "Siliguri · aluminium" },
      { href: "/siliguri/window-replacement", label: "Siliguri · replacement" },
      { href: "/guwahati/upvc-windows", label: "Guwahati · uPVC" },
      { href: "/guwahati/aluminium-windows-price", label: "Guwahati · aluminium prices" },
      { href: "/bhutan", label: "Bhutan · all locations" },
      { href: "/bhutan/thimphu", label: "Thimphu" },
      { href: "/bhutan/paro", label: "Paro" },
      { href: "/bhutan/phuentsholing", label: "Phuentsholing" },
      { href: "/gangtok", label: "Gangtok" },
      { href: "/darjeeling", label: "Darjeeling" },
      { href: "/shillong", label: "Shillong" },
      { href: "/jalpaiguri", label: "Jalpaiguri" },
    ],
  },
  { href: "/luminex-difference", label: "Luminex Difference" },
  { href: "/contact", label: "Contact Us" },
];

export const telHref = (p: string) => "tel:" + p.replace(/[^\d+]/g, "");

export const reasons = [
  {
    icon: "/images/I3.png",
    title: "Official Schüco Channel Partner",
    text: "Luminex is an official channel partner of Schüco, the German window and façade brand. We combine Schüco, Luminex and Fenova profiles with Saint-Gobain glass and Schüco, Pego and Kinlong hardware.",
  },
  {
    icon: "/images/I1.png",
    title: "Professional Installation",
    text: "Even the highest quality windows and doors underperform if installed incorrectly. Our own installation teams in Siliguri, Thimphu, Paro and Phuentsholing fit every window, so the warranty and the performance hold.",
  },
  {
    icon: "/images/I1.png",
    title: "Clear Pricing",
    text: "uPVC windows start at ₹495 per sq ft and system aluminium windows at ₹950 per sq ft for standard sizes. The price is the same in India and Bhutan, and we quote in rupees or ngultrum.",
  },
  {
    icon: "/images/I2.png",
    title: "Peace Of Mind Warranties",
    text: "Profiles carry a 15–25 year warranty depending on the brand, glass 15 years and hardware 5 years. In Bhutan, a 24x7 service team in Thimphu attends service calls within 2 business days.",
  },
  {
    icon: "/images/I4.png",
    title: "Excellent Weather Insulation",
    text: "Multi-chamber profiles and double, low-E or acoustic glass keep homes cool in summer, warm in winter and quiet all year. Our systems have tested U-values and acoustic ratings.",
  },
  {
    icon: "/images/I2.png",
    title: "Delivered In 15–30 Days",
    text: "From order to installation in 15–30 days across North Bengal, Sikkim, the Northeast and Bhutan. Bhutan customers need no extra paperwork — we deliver to site.",
  },
];

// FAQ answers are short and self-contained (40–80 words) so search engines and
// AI assistants can quote them directly. The first eight follow the questions
// Luminex's sales team hears most often.
export const faqs = [
  {
    q: "Where are you based?",
    a: "Luminex Windows is headquartered in Siliguri, West Bengal, at Ground Floor, Jeewandeep Building, Salugara (PIN 734008). We also have offices and installation teams in Thimphu, Paro and Phuentsholing in Bhutan, and serve North Bengal, Sikkim, the Northeast — including Guwahati, Shillong, Gangtok and Darjeeling — from Siliguri.",
  },
  {
    q: "Do you have a partner or dealer in Bhutan?",
    a: "Luminex does not work through dealers in Bhutan — it has its own offices and installation teams in Thimphu, Paro and Phuentsholing, plus a 24x7 service team in Thimphu. Service calls in Bhutan are attended within 2 business days. Contact Luminex Bhutan on WhatsApp at +975 1772 8800.",
  },
  {
    q: "How much do uPVC windows cost?",
    a: "Luminex uPVC windows start at ₹495 per sq ft and system aluminium windows start at ₹950 per sq ft for standard sizes. The final price depends on the size, window type, glass and hardware you choose. Prices are the same in India and Bhutan, and we quote in rupees or ngultrum.",
  },
  {
    q: "What warranty do Luminex windows come with?",
    a: "Window profiles carry a 15 to 25 year warranty depending on the profile brand, glass is covered for 15 years and hardware for 5 years. The warranty does not cover physical damage, modification or mishandling. In Bhutan, our Thimphu service team attends warranty calls within 2 business days.",
  },
  {
    q: "How is Luminex different from other window brands?",
    a: "Luminex is an official Schüco channel partner and builds with Schüco, Luminex and Fenova profiles, Saint-Gobain glass and Schüco, Pego and Kinlong hardware. Our systems have tested U-values and acoustic ratings, we install with our own teams, and we have offices in both India and Bhutan.",
  },
  {
    q: "Can I see a sample before ordering?",
    a: "Yes. You can see window and door samples at our Siliguri office, or message us on WhatsApp — India +91 96099 88749, Bhutan +975 1772 8800 — to arrange a sample viewing near you before you order.",
  },
  {
    q: "Where is your showroom in Siliguri?",
    a: "Our Siliguri office is at Ground Floor, Jeewandeep Building, Salugara, Siliguri, West Bengal 734008. Message us on WhatsApp at +91 96099 88749 before you visit so the team can have samples ready for you.",
  },
  {
    q: "How long do delivery and installation take?",
    a: "Delivery and installation take 15 to 30 days from order, depending on the size of the project. This applies across North Bengal, the Northeast and Bhutan. Bhutan customers do not need any extra paperwork — Luminex delivers to the site.",
  },
  {
    q: "Which glass options do you offer?",
    a: "Luminex offers double glazing, low-E glass, toughened glass and acoustic glass, using Saint-Gobain glass. Our window systems have tested U-values and acoustic ratings, so we can match the glass to your climate, noise level and budget.",
  },
  {
    q: "What exactly are uPVC windows and doors?",
    a: "uPVC (unplasticized polyvinyl chloride) is a rigid, lead-free material used to make window and door frames. It does not rust, rot, swell or need painting, and its multi-chamber profiles insulate against heat and noise. That combination of durability, insulation and low maintenance is why uPVC has replaced wood and plain aluminium in most modern homes.",
  },
  {
    q: "Should I choose uPVC or system aluminium windows?",
    a: "uPVC is the best value for most homes: strong insulation and almost no maintenance from ₹495 per sq ft. System aluminium, from ₹950 per sq ft, suits very large openings, slim frames and commercial façades. Our team recommends the right system after seeing your openings.",
  },
  {
    q: "How to maintain uPVC windows and doors?",
    a: "Clean frames every six months with a soft cloth and mild detergent — never abrasives or solvents. Wipe glass monthly with an ammonia-free cleaner, keep drainage slots and seals free of dust, and lubricate hinges, locks and sliding tracks once a year.",
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
