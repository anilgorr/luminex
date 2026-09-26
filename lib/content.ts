// Page content for product pages and the blog.
// Copy here is original; the live doors page contained text referencing another
// manufacturer ("Lux", "Alberta"), which has been replaced.

export type Product = { title: string; image: string; text: string };
export type ProductGroup = { id: string; title: string; intro: string; items: Product[] };

export const doorGroups: ProductGroup[] = [
  {
    id: "entry-doors",
    title: "Front Entry & Exterior Doors",
    intro:
      "Choose an aluminium-clad, fibreglass or pivot entrance door that matches your taste, budget and security needs. Every Luminex entry door is made to your exact opening, sealed against rain and dust, and fitted with multi-point locking hardware.",
    items: [
      { title: "Aluminum Clad", image: "/images/web/doors/aluminum-clad-exterior.jpg", text: "A slim aluminium skin over an insulated core — strong, weatherproof and available in powder-coated colours." },
      { title: "Fiberglass", image: "/images/web/doors/fibreglass.jpg", text: "Warp-free, dent-resistant and low maintenance, with the look of painted timber." },
      { title: "Pivot Doors", image: "/images/web/doors/pivot.jpg", text: "Oversized statement entrances that swing on a central pivot for a modern façade." },
    ],
  },
  {
    id: "sliding-patio-doors",
    title: "Sliding Patio Doors",
    intro:
      "Bring in daylight and open up balconies, terraces and gardens with an aluminium-clad, hybrid or uPVC sliding door. Smooth-rolling tracks, secure locks and weather seals are built for Indian monsoons and summers alike.",
    items: [
      { title: "Aluminum Clad Patio", image: "/images/web/doors/aluminum-clad-patio.jpg", text: "Slim sightlines and large glass panels for maximum view." },
      { title: "Hybrid", image: "/images/web/doors/hybrid.jpg", text: "uPVC insulation inside, aluminium durability outside." },
      { title: "PVC", image: "/images/web/doors/pvc.jpg", text: "Excellent value with strong thermal and acoustic insulation." },
    ],
  },
  {
    id: "folding-doors",
    title: "Folding Door Systems",
    intro:
      "Open an entire wall to the outdoors. Folding (bi-fold) door panels glide and stack neatly to one side, turning living rooms, lounges and restaurants into seamless indoor–outdoor spaces.",
    items: [
      { title: "Bi-Fold Door System", image: "/images/web/doors/tesoro.jpg", text: "Multi-panel folding doors with low thresholds and concealed hardware." },
    ],
  },
];

export const windowGroups: ProductGroup[] = [
  {
    id: "upvc-windows",
    title: "uPVC Window Systems",
    intro:
      "Luminex uPVC windows use multi-chamber profiles, airtight gaskets and quality hardware to deliver thermal insulation, soundproofing, dust protection and rainwater resistance — engineered for Indian weather. They never warp, rust or swell, and need almost no maintenance.",
    items: [
      { title: "Sliding Windows", image: "/images/luminex-whywork1.jpg", text: "Space-saving sashes that glide horizontally — ideal for balconies and wide openings." },
      { title: "Casement Windows", image: "/images/luminex-about.jpg", text: "Side-hinged sashes that open fully for ventilation and seal tightly when closed." },
      { title: "Tilt & Turn Windows", image: "/images/luminex-whywork2.jpg", text: "Tilt in for secure ventilation, or turn fully open for easy cleaning." },
    ],
  },
  {
    id: "aluminium-windows",
    title: "System Aluminium Windows",
    intro:
      "For large spans, slim sightlines and contemporary façades, Luminex system aluminium windows combine structural strength with thermal-break profiles and premium European hardware partners.",
    items: [
      { title: "Slim Sliding Systems", image: "/images/mission-image.jpg", text: "Minimal frames for floor-to-ceiling glass." },
      { title: "Fixed & Combination Windows", image: "/images/vision-image.jpg", text: "Fixed lights combined with opening sashes for custom elevations." },
      { title: "Custom Shapes", image: "/images/value-image.jpg", text: "Arched, bay and specialty windows made to your drawing." },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  body: { h?: string; p: string }[];
};

// Placeholder posts — replace with the client's real articles.
export const posts: Post[] = [
  {
    slug: "energy-efficient-door-design",
    title: "Enhancing Energy Efficiency in Door Design",
    excerpt: "Discover eco-friendly door solutions that improve insulation and reduce energy costs…",
    image: "/images/post-1.jpg",
    date: "2026-01-15",
    body: [
      { p: "Doors are one of the biggest sources of heat gain and air leakage in a home. Choosing an insulated door system with proper seals can noticeably reduce air-conditioning load." },
      { h: "What makes a door energy efficient?", p: "An insulated core, multi-chamber frame, continuous weather gaskets and double-glazed panels all reduce heat transfer. Correct installation that seals the gap between frame and wall matters just as much." },
      { h: "Which material should you choose?", p: "uPVC gives the best insulation for its price, aluminium-clad doors add strength and slim profiles, and fibreglass resists warping in humid climates." },
    ],
  },
  {
    slug: "window-aesthetics-trends",
    title: "Exploring the Latest Trends in Window Aesthetics and Styles",
    excerpt: "From classic to contemporary, see how different styles enhance your home's appeal…",
    image: "/images/post-2.jpg",
    date: "2026-02-10",
    body: [
      { p: "Windows shape how a home looks from the street and how it feels inside. Today's trends favour larger glass, slimmer frames and colours beyond plain white." },
      { h: "Slim frames and big glass", p: "System aluminium and reinforced uPVC profiles make floor-to-ceiling windows practical without sacrificing insulation." },
      { h: "Colour and finish", p: "Woodgrain foils, anthracite grey and black frames give uPVC windows a premium, architectural look." },
    ],
  },
  {
    slug: "durable-window-frame-materials",
    title: "Durable Materials for Lasting Window Frames",
    excerpt: "Learn about materials like aluminum and wood, each bringing unique benefits…",
    image: "/images/post-3.jpg",
    date: "2026-03-05",
    body: [
      { p: "The frame material decides how long a window lasts, how much maintenance it needs and how well it insulates." },
      { h: "uPVC", p: "Rot-proof, rust-proof and low maintenance with excellent insulation — the best all-round choice for most Indian homes." },
      { h: "Aluminium", p: "Very strong and slim, ideal for large openings; choose thermal-break systems for better insulation." },
      { h: "Wood", p: "Beautiful but needs regular treatment to resist moisture, termites and swelling." },
    ],
  },
];
