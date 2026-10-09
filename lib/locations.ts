// Location pages (AEO/GEO). One entry = one URL at /[city]/[slug].
// Every fact here must come from the client (see docs/client-questions.md answers, 9 Oct 2026)
// or be general, verifiable knowledge. Add Bhutan and hill-town pages here in later phases.

import { site } from "./site";
import { bhutanPages } from "./locations-bhutan";
import { hillPages } from "./locations-hills";

import { P, example, sharedFacts, type LocationPage } from "./location-common";
export type { LocationPage, Section } from "./location-common";
const wa = "WhatsApp +91 96099 88749";

const phase1: LocationPage[] = [
  // ---------------------------------------------------------------- Siliguri
  {
    city: "Siliguri",
    citySlug: "siliguri",
    slug: "upvc-windows",
    region: "West Bengal",
    product: "uPVC windows",
    price: "upvc",
    h1: "uPVC Windows in Siliguri",
    metaTitle: "uPVC Windows in Siliguri — Prices from ₹495/sq ft",
    metaDescription:
      "uPVC windows in Siliguri from ₹495 per sq ft. Luminex, an official Schüco channel partner headquartered in Salugara, supplies and installs sliding and casement uPVC windows in 15–30 days.",
    answer:
      "Luminex Windows supplies and installs uPVC windows in Siliguri from its head office in Salugara. Standard uPVC windows start at ₹495 per sq ft, are installed by Luminex's own team within 15–30 days of order, and carry a 15–25 year profile warranty. Luminex is an official Schüco channel partner.",
    facts: [
      ["Price", `uPVC windows from ₹${P.upvcFrom} per sq ft (standard sizes)`],
      ...sharedFacts("Luminex head office, Salugara, Siliguri"),
    ],
    sections: [
      {
        h2: "uPVC window prices in Siliguri",
        body: [
          `Standard uPVC windows start at ₹${P.upvcFrom} per sq ft. As a guide, a 4 ft × 5 ft window (20 sq ft) starts at about ${example(P.upvcFrom)}. The final price depends on the window size, the opening type, the glass and the hardware you choose.`,
          "Sliding windows are the most common choice in Siliguri homes because they save space on balconies and wide openings. Bigger panes, acoustic or low-E glass and premium hardware move the price above the starting rate.",
        ],
      },
      {
        h2: "uPVC window dealers in Siliguri vs buying direct",
        body: [
          "Many uPVC windows in Siliguri are sold through dealers who buy profiles from one brand and fabricate locally. Luminex supplies directly: the same team measures your openings, supplies the windows and installs them, so one company is responsible for the fit and the warranty.",
        ],
      },
      {
        h2: "What makes the best uPVC windows for Siliguri homes",
        body: [
          "Siliguri has hot, humid summers and a heavy monsoon, and homes near busy roads deal with dust and traffic noise. The windows that hold up best combine three things:",
        ],
        bullets: [
          "Multi-chamber profiles from established brands — Luminex uses Schüco, Luminex and Fenova profiles",
          "Airtight gaskets and good drainage, so monsoon rain and dust stay out",
          "The right glass for the room: double glazing for heat, acoustic glass for road-facing rooms, toughened glass for large panes",
        ],
      },
      {
        h2: "Window types available",
        body: [
          "Luminex installs uPVC sliding windows, casement windows, fixed and combination windows, and custom shapes, along with uPVC sliding and casement doors. Every window is made to the measured size of your opening.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the price of uPVC windows in Siliguri?",
        a: `Luminex uPVC windows in Siliguri start at ₹${P.upvcFrom} per sq ft for standard sizes, so a 4 ft × 5 ft window starts at about ${example(P.upvcFrom)}. The final price depends on size, opening type, glass and hardware. Message Luminex on WhatsApp at +91 96099 88749 for a quote.`,
      },
      {
        q: "Where can I buy uPVC windows in Siliguri?",
        a: "Luminex Windows is headquartered at Ground Floor, Jeewandeep Building, Salugara, Siliguri 734008. You can see samples there and order directly — Luminex measures, supplies and installs the windows with its own team.",
      },
      {
        q: "How long does uPVC window installation take in Siliguri?",
        a: "Luminex delivers and installs uPVC windows in Siliguri within 15–30 days of the order, depending on the number and size of windows. Installation of a typical home is done by Luminex's own team.",
      },
      {
        q: "Which brand of uPVC windows is best in Siliguri?",
        a: "Look for windows made with multi-chamber profiles from established brands, good gaskets and the right glass. Luminex is an official Schüco channel partner and uses Schüco, Luminex and Fenova profiles with Saint-Gobain glass and Schüco, Pego and Kinlong hardware.",
      },
      {
        q: "What warranty do uPVC windows in Siliguri come with?",
        a: "Luminex uPVC window profiles carry a 15–25 year warranty depending on the profile brand. Glass is covered for 15 years and hardware for 5 years. Physical damage, modification and mishandling are not covered.",
      },
    ],
    related: [
      { href: "/siliguri/aluminium-windows", label: "Aluminium windows in Siliguri" },
      { href: "/siliguri/window-replacement", label: "Window replacement in Siliguri" },
      { href: "/windows", label: "All window types" },
    ],
    image: "/images/luminex-about.jpg",
  },
  {
    city: "Siliguri",
    citySlug: "siliguri",
    slug: "aluminium-windows",
    region: "West Bengal",
    product: "System aluminium windows",
    price: "aluminium",
    h1: "Aluminium Windows in Siliguri",
    metaTitle: "Aluminium Windows in Siliguri — System Aluminium from ₹950/sq ft",
    metaDescription:
      "System aluminium windows in Siliguri from ₹950 per sq ft. Schüco systems, slim frames and large glass, supplied and installed by Luminex, an official Schüco channel partner, in 15–30 days.",
    answer:
      "Luminex Windows supplies and installs system aluminium windows in Siliguri, including Schüco systems. Prices start at ₹950 per sq ft for standard sizes, installation by Luminex's own team takes 15–30 days from order, and profiles carry a 15–25 year warranty. Luminex is an official Schüco channel partner based in Salugara.",
    facts: [
      ["Price", `System aluminium windows from ₹${P.aluminiumFrom} per sq ft (standard sizes)`],
      ...sharedFacts("Luminex head office, Salugara, Siliguri"),
    ],
    sections: [
      {
        h2: "Aluminium window prices in Siliguri",
        body: [
          `System aluminium windows start at ₹${P.aluminiumFrom} per sq ft. A 4 ft × 5 ft window (20 sq ft) starts at about ${example(P.aluminiumFrom)}. Larger spans, thermal-break profiles, acoustic or low-E glass and premium hardware raise the price.`,
          `If budget is the deciding factor, uPVC windows start at ₹${P.upvcFrom} per sq ft and insulate just as well for standard openings.`,
        ],
      },
      {
        h2: "System aluminium vs ordinary aluminium windows",
        body: [
          "Ordinary aluminium windows are made from basic sections cut and joined on site. System aluminium windows use engineered profiles, gaskets and hardware designed to work together, which gives better sealing, smoother operation and a longer life. Luminex supplies system aluminium, including Schüco systems.",
        ],
      },
      {
        h2: "Aluminium window dealers and manufacturers in Siliguri",
        body: [
          "Luminex is an official Schüco channel partner headquartered in Siliguri. It supplies system aluminium windows and doors directly and installs them with its own team, so you deal with one company from measurement to warranty.",
        ],
      },
      {
        h2: "When to choose aluminium over uPVC",
        body: ["System aluminium is the better choice when you need:"],
        bullets: [
          "Very large windows or floor-to-ceiling glass",
          "Slim frames for maximum view",
          "Commercial façades, showrooms and offices",
          "Large sliding or folding doors",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the price of aluminium windows in Siliguri?",
        a: `System aluminium windows from Luminex start at ₹${P.aluminiumFrom} per sq ft in Siliguri, so a 4 ft × 5 ft window starts at about ${example(P.aluminiumFrom)}. Size, profile system, glass and hardware decide the final price. Message +91 96099 88749 on WhatsApp for a quote.`,
      },
      {
        q: "Who supplies Schüco aluminium windows in Siliguri?",
        a: "Luminex Windows is an official Schüco channel partner headquartered in Salugara, Siliguri. It supplies and installs Schüco and other system aluminium windows across Siliguri, North Bengal and Bhutan.",
      },
      {
        q: "Are aluminium windows better than uPVC?",
        a: `Neither is better for every home. uPVC (from ₹${P.upvcFrom}/sq ft) gives excellent insulation at a lower price for standard openings. System aluminium (from ₹${P.aluminiumFrom}/sq ft) suits very large openings, slim frames and commercial buildings.`,
      },
      {
        q: "How long does aluminium window installation take?",
        a: "Luminex delivers and installs aluminium windows within 15–30 days of the order, depending on the size of the project.",
      },
    ],
    related: [
      { href: "/siliguri/upvc-windows", label: "uPVC windows in Siliguri" },
      { href: "/guwahati/aluminium-windows-price", label: "Aluminium window prices in Guwahati" },
      { href: "/luminex-difference", label: "uPVC vs aluminium vs wood" },
    ],
    image: "/images/hero-bg.jpg",
  },
  {
    city: "Siliguri",
    citySlug: "siliguri",
    slug: "window-replacement",
    region: "West Bengal",
    product: "Window replacement",
    price: "upvc",
    h1: "Window Replacement in Siliguri",
    metaTitle: "Window Replacement in Siliguri — uPVC & Aluminium",
    metaDescription:
      "Replace old wooden or steel windows in Siliguri with uPVC (from ₹495/sq ft) or system aluminium (from ₹950/sq ft). Measured, supplied and installed by Luminex in 15–30 days.",
    answer:
      "Luminex Windows replaces old wooden, steel and aluminium windows in Siliguri with uPVC or system aluminium windows made to the size of your existing openings. uPVC replacements start at ₹495 per sq ft, and Luminex's own team completes the job within 15–30 days of order.",
    facts: [
      ["Price", `uPVC from ₹${P.upvcFrom}/sq ft · system aluminium from ₹${P.aluminiumFrom}/sq ft`],
      ...sharedFacts("Luminex head office, Salugara, Siliguri"),
    ],
    sections: [
      {
        h2: "Signs your windows need replacing",
        body: ["Most Siliguri homeowners replace windows when they notice one of these:"],
        bullets: [
          "Wooden frames that swell and stick after every monsoon",
          "Rust on steel frames and grills",
          "Rain or dust coming in around the frame",
          "Rooms that stay hot in summer or noisy from the road",
        ],
      },
      {
        h2: "How window replacement works",
        body: [
          "Luminex measures each existing opening, manufactures the new windows to size, then removes the old frames and installs, seals and finishes the new ones. The whole process takes 15–30 days from order, and the fitting itself is done by Luminex's own installation team.",
        ],
      },
      {
        h2: "Replacement window prices",
        body: [
          `Replacement uPVC windows start at ₹${P.upvcFrom} per sq ft and system aluminium windows at ₹${P.aluminiumFrom} per sq ft for standard sizes. A 4 ft × 5 ft uPVC replacement window starts at about ${example(P.upvcFrom)}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How much does window replacement cost in Siliguri?",
        a: `Replacement uPVC windows from Luminex start at ₹${P.upvcFrom} per sq ft and system aluminium at ₹${P.aluminiumFrom} per sq ft for standard sizes. The final cost depends on the number of windows, their sizes, the glass and the hardware.`,
      },
      {
        q: "Can old windows be replaced without breaking the walls?",
        a: "Yes. Luminex manufactures new windows to the measured size of each existing opening, so they fit the opening you already have. Our installation team removes the old frame, fits the new window and seals it.",
      },
      {
        q: "How long does window replacement take?",
        a: "From order to installation, window replacement with Luminex takes 15–30 days, depending on the number and size of windows.",
      },
      {
        q: "Should I replace wooden windows with uPVC or aluminium?",
        a: "For most homes uPVC is the best replacement for wood: it does not swell, rot or need painting, and it insulates well. System aluminium suits very large openings and slim-frame designs.",
      },
    ],
    related: [
      { href: "/siliguri/upvc-windows", label: "uPVC windows in Siliguri" },
      { href: "/renovations", label: "Renovations" },
      { href: "/request-quote", label: "Request a quote" },
    ],
    image: "/images/our-faqs-img.jpg",
  },
  // ---------------------------------------------------------------- Guwahati
  {
    city: "Guwahati",
    citySlug: "guwahati",
    slug: "upvc-windows",
    region: "Assam",
    product: "uPVC windows",
    price: "upvc",
    h1: "uPVC Windows in Guwahati",
    metaTitle: "uPVC Windows in Guwahati — From ₹495/sq ft, Installed in 15–30 Days",
    metaDescription:
      "uPVC windows in Guwahati from ₹495 per sq ft, supplied and installed in 15–30 days by Luminex Windows, an official Schüco channel partner serving Assam from Siliguri.",
    answer:
      "Luminex Windows supplies and installs uPVC windows in Guwahati, served from its head office in Siliguri. Standard uPVC windows start at ₹495 per sq ft, delivery and installation take 15–30 days from order, and profiles carry a 15–25 year warranty. Luminex is an official Schüco channel partner.",
    facts: [
      ["Price", `uPVC windows from ₹${P.upvcFrom} per sq ft (standard sizes)`],
      ...sharedFacts("Luminex head office, Siliguri (no Guwahati office)"),
    ],
    sections: [
      {
        h2: "uPVC window prices in Guwahati",
        body: [
          `Luminex charges the same in Guwahati as in Siliguri: standard uPVC windows start at ₹${P.upvcFrom} per sq ft. A 4 ft × 5 ft window starts at about ${example(P.upvcFrom)}. Size, opening type, glass and hardware decide the final price.`,
        ],
      },
      {
        h2: "How Luminex serves Guwahati",
        body: [
          "Luminex does not have an office in Guwahati. Orders are handled from the Siliguri head office: share your requirements on WhatsApp, the team confirms sizes and specifications, and the windows are delivered and installed within 15–30 days.",
        ],
      },
      {
        h2: "Choosing windows for Guwahati's climate",
        body: [
          "Guwahati is humid for much of the year, has a long monsoon, and lies in India's highest seismic zone (Zone V). Windows there should be:",
        ],
        bullets: [
          "Sealed with quality gaskets and drained properly to keep monsoon rain out",
          "Anchored firmly and sealed with flexible materials that tolerate building movement",
          "Fitted with double or acoustic glass for heat and traffic noise",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the price of uPVC windows in Guwahati?",
        a: `Luminex uPVC windows start at ₹${P.upvcFrom} per sq ft in Guwahati — the same as in Siliguri. A 4 ft × 5 ft window starts at about ${example(P.upvcFrom)}. Message +91 96099 88749 on WhatsApp for a quote.`,
      },
      {
        q: "Does Luminex have an office in Guwahati?",
        a: "No. Luminex serves Guwahati from its head office in Siliguri, West Bengal. Enquiries are handled on WhatsApp and phone, and windows are delivered and installed within 15–30 days of order.",
      },
      {
        q: "How long does delivery to Guwahati take?",
        a: "Luminex delivers and installs uPVC windows in Guwahati within 15–30 days of the order, depending on the size of the project.",
      },
      {
        q: "Are uPVC windows suitable for Guwahati's weather?",
        a: "Yes. uPVC does not rust, rot or swell in humidity, and multi-chamber profiles with good gaskets keep out monsoon rain. Double or acoustic glass adds heat and noise insulation.",
      },
    ],
    related: [
      { href: "/guwahati/aluminium-windows-price", label: "Aluminium window prices in Guwahati" },
      { href: "/siliguri/upvc-windows", label: "uPVC windows in Siliguri" },
      { href: "/windows", label: "All window types" },
    ],
    image: "/images/luminex-whywork1.jpg",
  },
  {
    city: "Guwahati",
    citySlug: "guwahati",
    slug: "aluminium-windows-price",
    region: "Assam",
    product: "System aluminium windows",
    price: "aluminium",
    h1: "Aluminium Window Prices in Guwahati",
    metaTitle: "Aluminium Window Price in Guwahati — From ₹950/sq ft (2026)",
    metaDescription:
      "System aluminium window prices in Guwahati start at ₹950 per sq ft. See what changes the price, worked examples and how Luminex, an official Schüco channel partner, delivers in 15–30 days.",
    answer:
      "System aluminium windows in Guwahati start at ₹950 per sq ft with Luminex Windows, so a 4 ft × 5 ft window starts at about ₹19,000. Size, profile system, glass and hardware decide the final price. Luminex, an official Schüco channel partner, delivers and installs in Guwahati within 15–30 days.",
    facts: [
      ["Price", `System aluminium windows from ₹${P.aluminiumFrom} per sq ft (standard sizes)`],
      ...sharedFacts("Luminex head office, Siliguri (no Guwahati office)"),
    ],
    sections: [
      {
        h2: "Starting prices for common window sizes",
        body: [
          `These are starting prices at ₹${P.aluminiumFrom} per sq ft for standard system aluminium windows. Your quote can be higher depending on the options below.`,
        ],
        bullets: [
          `3 ft × 4 ft (12 sq ft): from ${example(P.aluminiumFrom, 3, 4)}`,
          `4 ft × 5 ft (20 sq ft): from ${example(P.aluminiumFrom, 4, 5)}`,
          `5 ft × 6 ft (30 sq ft): from ${example(P.aluminiumFrom, 5, 6)}`,
        ],
      },
      {
        h2: "What changes the price of aluminium windows",
        body: ["The starting rate covers a standard system aluminium window. These choices move the price up:"],
        bullets: [
          "Larger spans and floor-to-ceiling sizes",
          "Thermal-break or premium profile systems such as Schüco",
          "Double, low-E, toughened or acoustic glass",
          "Premium hardware and special finishes",
        ],
      },
      {
        h2: "Aluminium vs uPVC on price",
        body: [
          `uPVC windows start at ₹${P.upvcFrom} per sq ft — about half the starting rate of system aluminium. For standard home windows, uPVC usually gives the best value; aluminium earns its price on very large openings, slim frames and commercial buildings.`,
        ],
      },
    ],
    faqs: [
      {
        q: "What is the price of aluminium windows per sq ft in Guwahati?",
        a: `System aluminium windows from Luminex start at ₹${P.aluminiumFrom} per sq ft in Guwahati for standard sizes. A 4 ft × 5 ft window starts at about ${example(P.aluminiumFrom)}; larger spans, thermal-break profiles and special glass cost more.`,
      },
      {
        q: "Why are system aluminium windows more expensive than uPVC?",
        a: "System aluminium uses engineered profiles, gaskets and hardware designed as one system, which allows bigger spans and slimmer frames. That engineering costs more than a standard uPVC window, which starts at ₹495 per sq ft.",
      },
      {
        q: "Do prices in Guwahati differ from Siliguri?",
        a: "No. Luminex quotes the same starting prices in Guwahati as in Siliguri: ₹950 per sq ft for system aluminium and ₹495 per sq ft for uPVC.",
      },
      {
        q: "How do I get an exact quote?",
        a: "Send your window sizes, locations and preferred glass to Luminex on WhatsApp at +91 96099 88749. The team will confirm the specification and quote; delivery and installation take 15–30 days from order.",
      },
    ],
    related: [
      { href: "/guwahati/upvc-windows", label: "uPVC windows in Guwahati" },
      { href: "/siliguri/aluminium-windows", label: "Aluminium windows in Siliguri" },
      { href: "/request-quote", label: "Request a quote" },
    ],
    image: "/images/cta-bg.jpg",
  },
];

export const locationPath = (l: LocationPage) => l.path ?? `/${l.citySlug}/${l.slug}`;
export const getLocationByPath = (segments: string[]) => all().find((l) => locationPath(l) === "/" + segments.join("/"));

function all(): LocationPage[] { return [...phase1, ...bhutanPages, ...hillPages]; }
export const locations: LocationPage[] = all();
