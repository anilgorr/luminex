// Content from the Luminex brochure, pages 9–11 (supplied 29 Oct 2026).
// Used by the homepage (Option D), /luminex-difference and /windows.
// Performance figures are "up to" values exactly as the brochure states them.
// TODO(client): confirm the test basis (system, glass, standard) for 40%, 38 dB, 600 Pa and 2400 Pa.

export const performance = {
  title: "Performance that speaks",
  intro:
    "Luminex systems are engineered with precision, tested for performance and built to deliver unmatched value for years to come.",
  stats: [
    { value: "40", unit: "%", label: "Better thermal insulation", detail: "Up to 40% better insulation for energy efficiency" },
    { value: "38", unit: "dB", label: "Noise reduction", detail: "Up to 38 dB noise reduction for a quieter indoors" },
    { value: "600", unit: "Pa", label: "Air tightness", detail: "Up to 600 Pa air tightness for superior comfort" },
    { value: "2400", unit: "Pa", label: "Wind load resistance", detail: "Up to 2400 Pa for high-rise and extreme conditions" },
  ],
  link: { href: "/luminex-difference", label: "See how Luminex compares" },
};

// Brochure page 9: "The Difference You Deserve" comparison.
export const comparison = {
  title: "The difference you deserve",
  intro:
    "Luminex systems are engineered with precision, tested for performance and built to deliver unmatched value for years to come. From materials to manufacturing, every Luminex system is designed to outperform and outlast conventional solutions.",
  columns: ["Luminex systems (uPVC & aluminium)", "Other standard aluminium windows", "Other uPVC windows"],
  rows: [
    { feature: "Thermal insulation", luminex: "Up to 40% better insulation for energy efficiency", aluminium: "Average insulation, higher heat transfer", upvc: "Good insulation but less durable" },
    { feature: "Acoustic performance", luminex: "Up to 38 dB noise reduction for a quieter indoors", aluminium: "Limited noise reduction", upvc: "Moderate noise reduction" },
    { feature: "Air tightness", luminex: "Up to 600 Pa air tightness for superior comfort", aluminium: "Lower air tightness", upvc: "Average performance" },
    { feature: "Wind load resistance", luminex: "Up to 2400 Pa for high-rise and extreme conditions", aluminium: "Moderate wind resistance", upvc: "Limited for high-rise applications" },
    { feature: "Durability", luminex: "Powder coated, corrosion resistant and built to last", aluminium: "Prone to corrosion over time", upvc: "May warp, crack or fade over time" },
    { feature: "Design flexibility", luminex: "Slim profiles, large openings and modern aesthetics", aluminium: "Limited sizes and thick profiles", upvc: "Limited design possibilities" },
    { feature: "Security", luminex: "Multi-point locking and advanced hardware", aluminium: "Basic locking mechanisms", upvc: "Standard locking systems" },
    { feature: "Maintenance", luminex: "Low maintenance, easy to clean", aluminium: "Requires regular maintenance", upvc: "High maintenance, prone to wear" },
  ],
};

export type Swatch = { name: string; code?: string; hex: string; wood?: boolean };

// Brochure page 11.
export const schucoBrochure = {
  eyebrow: "Stronger together. Better by design.",
  title: "Official Schüco channel partner",
  subtitle: "Global leader in windows, doors and façades",
  body: [
    "Schüco is a global leader in aluminium window, door and façade systems, trusted by architects, developers and leading real estate brands across the world.",
    "Working closely with leaders in the architecture and real estate industry, Schüco delivers innovative German-engineered solutions that combine exceptional design, superior energy efficiency, uncompromising security and long-term durability.",
    "With over 70 years of engineering excellence and a presence in more than 80 countries, Schüco continues to set global benchmarks for premium architectural systems.",
  ],
  points: [
    { title: "German engineering", text: "Precision-engineered systems with unmatched quality and performance." },
    { title: "Innovative solutions", text: "Advanced technology for modern, sustainable and smart building solutions." },
    { title: "Global presence", text: "Trusted in over 80 countries with a legacy of excellence since 1951." },
    { title: "Sustainable design", text: "Energy-efficient systems contributing to a greener tomorrow." },
    { title: "Security you can trust", text: "Robust systems with multi-point locking for enhanced safety and peace of mind." },
    { title: "Complete support", text: "End-to-end consultation and digital solutions for seamless project execution." },
  ],
  coloursTitle: "Aluminium colour palette",
  colours: [
    { name: "Traffic White", code: "RAL 9016", hex: "#F1F0EA" },
    { name: "White Aluminium", code: "RAL 9006", hex: "#A5A5A5" },
    { name: "Light Grey", code: "RAL 7035", hex: "#CBD0CC" },
    { name: "Anthracite Grey", code: "RAL 7016", hex: "#383E42" },
    { name: "Jet Black", code: "RAL 9005", hex: "#0A0A0A" },
    { name: "Bronze", hex: "#6A4A2E" },
    { name: "Champagne", hex: "#D2B791" },
    { name: "Wood finish", hex: "#6E2B1F", wood: true },
  ] as Swatch[],
  coloursNote: "Custom colours on request.",
  image: { src: "/images/brochure/schuco-corner-glazing-living-room.jpg", alt: "Living room with floor-to-ceiling black-framed corner glazing looking out over mountains and a lake", w: 1220, h: 1960 },
};

// Brochure page 10. Fenova's own award and "first and only" claims are left out on purpose.
export const fenova = {
  eyebrow: "Our partner. Your advantage.",
  title: "In association with Fenova",
  subtitle: "uPVC profiles with German technology",
  body: [
    "Fenova is one of India's most trusted uPVC profile manufacturers, known for innovation, quality and German technology.",
    "Our collaboration with Fenova enables us to deliver premium uPVC doors and windows that are engineered for performance and built to last.",
  ],
  badges: ["German technology", "ISO certified", "Quality you can trust"],
  compareTitle: "Co-extruded profiles vs traditional laminated profiles",
  laminated: {
    title: "Traditional laminated profiles",
    lead: "A woodgrain laminate film pasted onto the uPVC profile.",
    points: ["Laminate can peel over time", "Prone to bubbling and chipping", "Affects the overall look of doors and windows"],
  },
  coextruded: {
    title: "Fenova co-extruded profiles",
    lead: "The colour layer is fused with the uPVC during extrusion, so there is no film to peel.",
    points: ["Virtually zero maintenance", "Long-lasting colour and finish", "Enhanced durability and weather resistance", "Consistent aesthetics for years"],
  },
  coloursTitle: "uPVC colour palette",
  colours: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#111111" },
    { name: "Walnut D-Brown", hex: "#5E2A1C", wood: true },
    { name: "Grey", hex: "#9E9E9E" },
    { name: "Graphite Grey", hex: "#4A4A4A" },
  ] as Swatch[],
  image: { src: "/images/brochure/upvc-french-door-lake-view.jpg", alt: "Black-framed uPVC French door opening onto a balcony with a mountain and lake view", w: 1150, h: 1560 },
};

export const performanceImage = { src: "/images/brochure/sliding-glass-wall-mountain-view.jpg", alt: "Floor-to-ceiling sliding glass wall opening onto a pool terrace at sunset", w: 1385, h: 860 };

// FAQs built from the brochure (plain text so they can feed FAQPage schema).
export const brochureFaqs = {
  performance: {
    q: "How well do Luminex windows insulate against heat, noise and wind?",
    a: "Luminex uPVC and aluminium systems offer up to 40% better thermal insulation, up to 38 dB noise reduction, up to 600 Pa air tightness and up to 2400 Pa wind load resistance, depending on the system and glass chosen.",
  },
  colours: {
    q: "What colours do Luminex windows and doors come in?",
    a: "Schüco aluminium systems come in RAL 9016 Traffic White, RAL 9006 White Aluminium, RAL 7035 Light Grey, RAL 7016 Anthracite Grey, RAL 9005 Jet Black, bronze, champagne and wood finish, with custom colours on request. Fenova uPVC profiles come in white, black, walnut D-brown, grey and graphite grey.",
  },
  coextruded: {
    q: "What is the difference between laminated and co-extruded uPVC profiles?",
    a: "A laminated uPVC profile has a woodgrain or colour film pasted on its surface, which can peel, bubble or chip over time. A co-extruded profile, such as Fenova's, fuses the colour layer with the uPVC during extrusion, so there is no film to peel and the colour and finish last with virtually no maintenance.",
  },
  upvcColours: {
    q: "What colours do uPVC windows come in?",
    a: "Luminex uPVC windows and doors use Fenova co-extruded profiles in white, black, walnut D-brown, grey and graphite grey.",
  },
  aluminiumColours: {
    q: "What colours do aluminium windows come in?",
    a: "Luminex supplies Schüco aluminium systems in RAL 9016 Traffic White, RAL 9006 White Aluminium, RAL 7035 Light Grey, RAL 7016 Anthracite Grey, RAL 9005 Jet Black, bronze, champagne and wood finish. Custom colours are available on request.",
  },
};
