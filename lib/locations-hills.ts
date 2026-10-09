// Step 4 — North Bengal / Northeast hill towns and the two Bhutan guides.
// Hill towns are served from the Siliguri head office (no local offices).

import { site } from "./site";
import { P, example, sharedFacts, type LocationPage } from "./location-common";

const hillFaqs = (city: string) => [
  {
    q: `What is the price of uPVC windows in ${city}?`,
    a: `Luminex uPVC windows start at ₹${P.upvcFrom} per sq ft in ${city} for standard sizes, so a 4 ft × 5 ft window starts at about ${example(P.upvcFrom)}. System aluminium windows start at ₹${P.aluminiumFrom} per sq ft. Message +91 96099 88749 on WhatsApp for a quote.`,
  },
  {
    q: `Who installs uPVC windows in ${city}?`,
    a: `Luminex Windows, an official Schüco channel partner, supplies and installs uPVC windows and doors in ${city} with its own team, served from its head office in Siliguri. Delivery and installation take 15–30 days from order.`,
  },
  {
    q: `Does Luminex make uPVC doors for ${city}?`,
    a: `Yes. Luminex supplies uPVC and system aluminium doors — entrance, sliding, casement and folding — for homes and buildings in ${city}, made to measure and installed by its own team.`,
  },
  {
    q: "What warranty do the windows carry?",
    a: "Profiles carry a 15–25 year warranty depending on the brand, glass 15 years and hardware 5 years. Physical damage, modification and mishandling are not covered.",
  },
];

const hill = (
  city: string,
  slug: string,
  region: string,
  metaTitle: string,
  metaDescription: string,
  answer: string,
  climate: { h2: string; body: string; bullets: string[] },
  extra: { h2: string; body: string[] }[],
  image: string,
  related: { href: string; label: string }[],
): LocationPage => ({
  path: `/${slug}`,
  city,
  region,
  country: "India",
  product: "uPVC windows and doors",
  price: "upvc",
  h1: `uPVC Windows and Doors in ${city}`,
  metaTitle,
  metaDescription,
  answer,
  facts: [
    ["Price", `uPVC windows from ₹${P.upvcFrom}/sq ft · system aluminium from ₹${P.aluminiumFrom}/sq ft`],
    ...sharedFacts("Luminex head office, Siliguri"),
  ],
  sections: [
    {
      h2: `uPVC window prices in ${city}`,
      body: [
        `Standard uPVC windows start at ₹${P.upvcFrom} per sq ft — a 4 ft × 5 ft window starts at about ${example(P.upvcFrom)}. System aluminium windows start at ₹${P.aluminiumFrom} per sq ft. The same prices apply across North Bengal, the Northeast and Bhutan.`,
      ],
    },
    { h2: climate.h2, body: [climate.body], bullets: climate.bullets },
    ...extra,
    {
      h2: `uPVC door manufacturers and suppliers for ${city}`,
      body: [
        "Luminex supplies uPVC and system aluminium doors — entrance, sliding, casement and folding — made to measure and installed by its own team, so windows and doors come from one company with one warranty.",
      ],
    },
  ],
  faqs: hillFaqs(city),
  related,
  image,
  crumbs: [{ label: city }],
});

export const hillPages: LocationPage[] = [
  hill(
    "Shillong",
    "shillong",
    "Meghalaya",
    "uPVC Windows in Shillong — Rain-Tight, From ₹495/sq ft",
    "uPVC windows and doors in Shillong from ₹495 per sq ft. Rain-tight, double-glazed options from Luminex, an official Schüco channel partner, installed in 15–30 days.",
    "Luminex Windows supplies and installs uPVC windows and doors in Shillong, served from its Siliguri head office. Standard uPVC windows start at ₹495 per sq ft and are installed by Luminex's own team within 15–30 days of order. Luminex is an official Schüco channel partner using Schüco, Luminex and Fenova profiles.",
    {
      h2: "Windows for Shillong's rain and cold",
      body: "Meghalaya is one of the wettest regions in India, and Shillong's hill climate brings cool, damp nights. Windows there should keep water out and warmth in:",
      bullets: [
        "Multi-chamber uPVC profiles with tight gaskets and proper drainage",
        "Double glazing to keep rooms warm and reduce condensation",
        "Frames that do not rot or swell — the main failure of timber windows in wet climates",
      ],
    },
    [
      {
        h2: "uPVC window manufacturers serving Shillong",
        body: [
          "Luminex is an official Schüco channel partner headquartered in Siliguri. It supplies and installs uPVC windows in Shillong with its own team, so the same company measures, installs and stands behind the warranty.",
        ],
      },
    ],
    "/images/our-faqs-img.jpg",
    [
      { href: "/guwahati/upvc-windows", label: "uPVC windows in Guwahati" },
      { href: "/gangtok", label: "uPVC windows in Gangtok" },
      { href: "/windows", label: "All window types" },
    ],
  ),
  hill(
    "Gangtok",
    "gangtok",
    "Sikkim",
    "uPVC Windows & Doors in Gangtok — From ₹495/sq ft",
    "uPVC windows and doors in Gangtok from ₹495 per sq ft, double glazed for hill winters. Supplied and installed by Luminex, an official Schüco channel partner, in 15–30 days.",
    "Luminex Windows supplies and installs uPVC windows and doors in Gangtok from its Siliguri head office. Standard uPVC windows start at ₹495 per sq ft, double glazing is available for cold winters, and Luminex's own team installs within 15–30 days. Luminex is an official Schüco channel partner.",
    {
      h2: "Windows for Gangtok's hill climate",
      body: "Gangtok sits on steep hillsides at well over 1,000 m, with cold winters and a long monsoon. The right windows make a noticeable difference to comfort:",
      bullets: [
        "Double or low-E glazing to hold heat in winter",
        "Tight gaskets against wind-driven rain",
        "uPVC or system aluminium frames that will not warp or rot",
      ],
    },
    [],
    "/images/vision-image.jpg",
    [
      { href: "/darjeeling", label: "uPVC windows in Darjeeling" },
      { href: "/siliguri/upvc-windows", label: "uPVC windows in Siliguri" },
      { href: "/doors", label: "Doors range" },
    ],
  ),
  hill(
    "Darjeeling",
    "darjeeling",
    "West Bengal",
    "uPVC Windows & Doors in Darjeeling — From ₹495/sq ft",
    "uPVC windows, doors and sliding windows in Darjeeling from ₹495 per sq ft. Replace old timber windows with double-glazed uPVC from Luminex, an official Schüco channel partner.",
    "Luminex Windows supplies and installs uPVC windows, sliding windows and doors in Darjeeling, served from its Siliguri head office. Standard uPVC windows start at ₹495 per sq ft, with double glazing for Darjeeling's cold, damp weather, installed by Luminex's own team within 15–30 days.",
    {
      h2: "Windows for Darjeeling's cold and damp",
      body: "At around 2,000 m, Darjeeling is cold, foggy and damp for much of the year, and many homes, hotels and homestays still have old timber windows. Replacing them with uPVC brings:",
      bullets: [
        "Frames that do not rot, swell or need repainting",
        "Double glazing that keeps rooms warmer and quieter",
        "Airtight seals that stop draughts and damp",
      ],
    },
    [
      {
        h2: "Sliding windows in Darjeeling",
        body: [
          "Sliding windows suit wide hill views and save space in compact rooms. Luminex makes them in uPVC and system aluminium, with double, low-E, toughened or acoustic glass, sized to each opening.",
        ],
      },
    ],
    "/images/value-image.jpg",
    [
      { href: "/gangtok", label: "uPVC windows in Gangtok" },
      { href: "/siliguri/window-replacement", label: "Window replacement" },
      { href: "/bhutan/hotel-projects", label: "Windows for hotel projects" },
    ],
  ),
  hill(
    "Jalpaiguri",
    "jalpaiguri",
    "West Bengal",
    "uPVC Windows & Doors in Jalpaiguri — Near Siliguri, From ₹495/sq ft",
    "uPVC windows, sliding windows and doors in Jalpaiguri from ₹495 per sq ft, from Luminex's nearby Siliguri head office. Official Schüco channel partner, installed in 15–30 days.",
    "Luminex Windows supplies and installs uPVC windows, sliding windows and doors in Jalpaiguri from its nearby head office in Siliguri. Standard uPVC windows start at ₹495 per sq ft and Luminex's own team installs within 15–30 days of order. Luminex is an official Schüco channel partner.",
    {
      h2: "Windows for Jalpaiguri's humid plains climate",
      body: "Jalpaiguri is hot and humid, with a heavy monsoon and river flooding in some areas. Windows there need to handle moisture:",
      bullets: [
        "uPVC frames that do not rot, rust or swell",
        "Tight gaskets and drainage to keep monsoon rain out",
        "Double or low-E glass to keep rooms cooler",
      ],
    },
    [
      {
        h2: "uPVC window manufacturers near Jalpaiguri",
        body: [
          "Luminex's head office is in Salugara, Siliguri, close to Jalpaiguri. Customers can see samples there, and Luminex's own team measures, supplies and installs.",
        ],
      },
      {
        h2: "Sliding windows in Jalpaiguri",
        body: [
          "uPVC sliding windows are the most popular choice for Jalpaiguri homes — they save space and seal well against rain and dust. They start from the standard uPVC rate of ₹495 per sq ft.",
        ],
      },
    ],
    "/images/luminex-whywork2.jpg",
    [
      { href: "/siliguri/upvc-windows", label: "uPVC windows in Siliguri" },
      { href: "/siliguri/window-replacement", label: "Window replacement" },
      { href: "/windows", label: "All window types" },
    ],
  ),
  // -------------------------------------------------------------- Guides
  {
    path: "/bhutan/best-windows-for-climate",
    kind: "guide",
    city: "Bhutan",
    region: "Bhutan",
    country: "Bhutan",
    placeType: "Country",
    product: "Buying guide",
    h1: "Best Windows for Bhutan's Climate",
    metaTitle: "Best Windows for Bhutan's Climate — Glass and Frame Guide",
    metaDescription:
      "Which windows work best in Bhutan? Double-glazed uPVC for Thimphu and Paro, rain-tight frames for Phuentsholing — with prices, glass options and frame comparisons.",
    answer:
      "For most homes in Bhutan's high valleys, such as Thimphu and Paro, the best choice is multi-chamber uPVC windows with double glazing, adding low-E glass where heat loss matters most. In warmer, wetter southern towns like Phuentsholing, prioritise tight gaskets and drainage. System aluminium suits very large openings.",
    facts: [
      ["High valleys (Thimphu, Paro)", "uPVC + double glazing; low-E glass for maximum warmth"],
      ["Southern towns (Phuentsholing)", "uPVC or system aluminium with tight gaskets and drainage; low-E glass against heat"],
      ["Large openings / hotels", "System aluminium (incl. Schüco); acoustic glass for guest rooms"],
      ["Starting prices", `uPVC ₹${P.upvcFrom}/sq ft · system aluminium ₹${P.aluminiumFrom}/sq ft (same in ngultrum)`],
      ["Glass options", site.glassOptions.join(", ")],
    ],
    sections: [
      {
        h2: "Bhutan's climate zones and what they mean for windows",
        body: [
          "Bhutan's climate changes sharply with altitude. The high central valleys — Thimphu and Paro — have cold winters, strong sun and dry air. The southern foothills around Phuentsholing are lower, warmer and much wetter during the monsoon. The right window depends on which of these you are building in.",
        ],
      },
      {
        h2: "Frame material: uPVC vs aluminium vs timber",
        body: ["How the main frame materials compare for Bhutan:"],
        bullets: [
          `uPVC — best insulation for the price, does not rot or swell, almost no maintenance; from ₹${P.upvcFrom}/sq ft`,
          `System aluminium — strongest and slimmest, for large openings and commercial buildings; from ₹${P.aluminiumFrom}/sq ft`,
          "Timber — traditional look, but swells, rots and needs regular treatment in wet seasons",
        ],
      },
      {
        h2: "Choosing the glass",
        body: ["Glass does most of the work in keeping a room warm or cool:"],
        bullets: [
          "Double glazing — the baseline for cold valleys; traps air between two panes",
          "Low-E glass — reflects heat back into the room in winter and blocks heat in summer",
          "Acoustic glass — for hotel rooms and roads with traffic",
          "Toughened glass — for large panes and doors, for safety",
        ],
      },
    ],
    faqs: [
      {
        q: "What type of windows are best for cold climates like Thimphu?",
        a: "Multi-chamber uPVC windows with double glazing are the best value for cold valleys like Thimphu and Paro. Adding low-E glass reduces heat loss further, and tight gaskets stop draughts.",
      },
      {
        q: "Are uPVC windows good for Bhutan?",
        a: "Yes. uPVC does not rot, rust or swell, insulates well and needs almost no maintenance, which suits both Bhutan's cold valleys and its wet southern towns.",
      },
      {
        q: "Is double glazing worth it in Bhutan?",
        a: "In Thimphu, Paro and other high valleys, yes — double glazing noticeably reduces heat loss in winter and cuts noise. In warmer southern towns, low-E glass helps keep rooms cool.",
      },
      {
        q: "How much do double-glazed windows cost in Bhutan?",
        a: `Luminex uPVC windows start at ₹${P.upvcFrom} per sq ft (the same in ngultrum) for standard sizes. Double, low-E or acoustic glass adds to the starting price depending on the specification.`,
      },
    ],
    related: [
      { href: "/bhutan/thimphu", label: "Windows in Thimphu" },
      { href: "/bhutan/phuentsholing", label: "Windows in Phuentsholing" },
      { href: "/bhutan/hotel-projects", label: "Windows for hotel projects" },
    ],
    image: "/images/mission-image.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Best windows for Bhutan's climate" }],
  },
  {
    path: "/bhutan/importing-windows-from-india",
    kind: "guide",
    city: "Bhutan",
    region: "Bhutan",
    country: "Bhutan",
    placeType: "Country",
    product: "Buying guide",
    h1: "Buying Windows from India for Your Bhutan Project",
    metaTitle: "Importing Windows to Bhutan from India — How It Works with Luminex",
    metaDescription:
      "Buying windows from India for a home or hotel in Bhutan? With Luminex there is no paperwork for you: same prices as India, quotes in rupees or ngultrum, delivered to site in 15–30 days.",
    answer:
      "With Luminex, buying windows from India for a project in Bhutan needs no paperwork from the customer. Prices are the same as in India, quoted in rupees or ngultrum, and the windows are delivered to your site and installed by Luminex's Bhutan teams within 15–30 days of order.",
    facts: [
      ["Paperwork for the customer", "None"],
      ["Prices", `Same as India — uPVC from ₹${P.upvcFrom}/sq ft, system aluminium from ₹${P.aluminiumFrom}/sq ft`],
      ["Currency", "Rupees or ngultrum (pegged 1:1)"],
      ["Delivery", `To your site, ${site.leadTime} from order`],
      ["Installation", "Luminex's own teams in Thimphu, Paro and Phuentsholing"],
      ["After-sales", "24x7 service team in Thimphu; calls attended within 2 business days"],
    ],
    sections: [
      {
        h2: "How ordering works, step by step",
        body: ["Ordering windows for Bhutan through Luminex follows five steps:"],
        bullets: [
          "Send your drawings or window sizes on WhatsApp (+975 1772 8800)",
          "Luminex recommends systems and glass and quotes in rupees or ngultrum",
          "Confirm the order; the windows are made to your sizes",
          "Luminex delivers to your site — no paperwork for you",
          "Luminex's local team installs, and the Thimphu team services after handover",
        ],
      },
      {
        h2: "Why buy from a supplier with offices in Bhutan",
        body: [
          "Buying from a supplier that only sells across the border leaves you to arrange transport, installation and service yourself. Luminex has offices and installation teams in Thimphu, Paro and Phuentsholing, so one company is responsible from quote to service.",
        ],
      },
      {
        h2: "What it costs",
        body: [
          `There is no Bhutan premium: uPVC windows start at ₹${P.upvcFrom} per sq ft and system aluminium at ₹${P.aluminiumFrom} per sq ft, the same as in India. A 4 ft × 5 ft uPVC window starts at about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Can I buy windows from India for a house in Bhutan?",
        a: "Yes. Luminex supplies windows to Bhutan with no paperwork needed from the customer, delivers to site within 15–30 days, and installs with its own teams in Thimphu, Paro and Phuentsholing.",
      },
      {
        q: "Are window prices in Bhutan higher than in India?",
        a: `Not with Luminex. Prices are the same — uPVC from ₹${P.upvcFrom} per sq ft and system aluminium from ₹${P.aluminiumFrom} per sq ft — quoted in rupees or ngultrum.`,
      },
      {
        q: "Who installs the windows in Bhutan?",
        a: "Luminex's own installation teams based in Thimphu, Paro and Phuentsholing. After handover, a 24x7 service team in Thimphu handles service calls, generally within 2 business days.",
      },
    ],
    related: [
      { href: "/bhutan", label: "Windows across Bhutan" },
      { href: "/bhutan/hotel-projects", label: "Windows for hotel projects" },
      { href: "/warranty", label: "Warranty and service" },
    ],
    image: "/images/page-header-bg.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Buying windows from India" }],
  },
];
