// Step 3 — Bhutan pages. Facts confirmed by Luminex (9 Oct 2026): offices with installation teams
// in Thimphu, Paro and Phuentsholing; 24x7 service team in Thimphu; service calls attended within
// 2 business days; same prices as India, quoted in rupees or ngultrum; no extra paperwork for the
// customer; delivered to site in 15–30 days. TODO(client): street addresses for each Bhutan office.

import { site } from "./site";
import { P, example, type LocationPage } from "./location-common";

const BT_WA = "WhatsApp +975 1772 8800";

const bhutanFacts = (office: string): [string, string][] => [
  ["Prices", `uPVC from ₹${P.upvcFrom}/sq ft · system aluminium from ₹${P.aluminiumFrom}/sq ft — same as India, quoted in rupees or ngultrum`],
  ["In Bhutan", office],
  ["Delivery and installation", `${site.leadTime} from order, delivered to your site`],
  ["Paperwork", "None for the customer — Luminex handles delivery to site"],
  ["Service", "24x7 service team in Thimphu; calls attended within 2 business days"],
  ["Warranty", "Profiles 15–25 years (by brand) · glass 15 years · hardware 5 years"],
  ["Brands", "Schüco, Luminex and Fenova profiles · Saint-Gobain glass · Schüco, Pego, Kinlong hardware"],
  ["Partner status", site.partner],
  ["Enquiries", BT_WA],
];

const bhutanCityFaqs = (city: string) => [
  {
    q: `What is the price of uPVC windows in ${city}?`,
    a: `Luminex uPVC windows start at ₹${P.upvcFrom} per sq ft in ${city} — the same price as in India — and system aluminium windows start at ₹${P.aluminiumFrom} per sq ft. A 4 ft × 5 ft uPVC window starts at about ${example(P.upvcFrom)} (about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}). Quotes are given in rupees or ngultrum.`,
  },
  {
    q: `Does Luminex have a team in ${city}?`,
    a: `Yes. Luminex's own team installs and services windows in ${city}, coordinated from its Bhutan Liaison & Coordination Desk in Changbangdu, Thimphu, with a 24x7 service team in Thimphu. Message Luminex Bhutan on WhatsApp at +975 1772 8800.`,
  },
  {
    q: `How long does delivery to ${city} take?`,
    a: `Luminex delivers and installs windows in ${city} within 15–30 days of order. There is no extra paperwork for the customer — the windows are delivered to your site.`,
  },
  {
    q: `Who services Luminex windows in ${city}?`,
    a: "Luminex's own team. A 24x7 service team is based in Thimphu, and service calls in Bhutan are generally attended within 2 business days.",
  },
];

export const bhutanPages: LocationPage[] = [
  // ------------------------------------------------------------------ hub
  {
    path: "/bhutan",
    city: "Bhutan",
    region: "Bhutan",
    country: "Bhutan",
    placeType: "Country",
    product: "Windows and doors",
    price: "upvc",
    h1: "uPVC Windows and Doors in Bhutan",
    metaTitle: "uPVC Windows & Doors in Bhutan — Thimphu Desk, Local Teams",
    metaDescription:
      "Luminex supplies and installs uPVC and system aluminium windows and doors across Bhutan, with a coordination desk in Thimphu and teams in Paro and Phuentsholing. From ₹495/sq ft, delivered in 15–30 days, no paperwork for you.",
    answer:
      "Luminex Windows supplies and installs uPVC and system aluminium windows and doors across Bhutan, with a liaison and coordination desk in Changbangdu, Thimphu, and installation teams serving Thimphu, Paro and Phuentsholing. uPVC windows start at ₹495 per sq ft — the same as in India — delivered to site in 15–30 days with no paperwork for the customer.",
    facts: bhutanFacts("Thimphu, Paro and Phuentsholing"),
    sections: [
      {
        h2: "Windows and doors across Bhutan",
        body: [
          "Luminex is an official Schüco channel partner with a Bhutan liaison and coordination desk in Changbangdu, Thimphu, and installation teams serving Thimphu, Paro and Phuentsholing. Homes, hotels and commercial buildings across Bhutan are served from these offices, backed by the Siliguri office in India.",
        ],
        bullets: [
          "uPVC sliding and casement windows",
          "System aluminium windows, including Schüco systems",
          "uPVC and aluminium sliding, casement and folding doors",
          "Double, low-E, toughened and acoustic glass",
        ],
      },
      {
        h2: "uPVC window prices in Bhutan",
        body: [
          `Prices in Bhutan are the same as in India: uPVC windows from ₹${P.upvcFrom} per sq ft and system aluminium windows from ₹${P.aluminiumFrom} per sq ft for standard sizes. Because the ngultrum is pegged 1:1 to the Indian rupee, a 4 ft × 5 ft uPVC window starts at about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}. Luminex quotes in either currency.`,
        ],
      },
      {
        h2: "Window installation in Bhutan",
        body: [
          "Every window is measured, supplied and installed by Luminex's own teams. Delivery to site and installation take 15–30 days from order, and there is no import paperwork for the customer.",
        ],
      },
      {
        h2: "Double glazed windows in Bhutan",
        body: [
          "Bhutan's high valleys have cold winters and strong sun, so double glazing — with low-E glass where heat loss matters most — is the usual recommendation for homes and hotels in Thimphu and Paro. Read the full guide to choosing windows for Bhutan's climate.",
        ],
      },
      {
        h2: "Door manufacturers and suppliers in Bhutan",
        body: [
          "Luminex supplies uPVC and system aluminium doors — entrance, sliding, casement and folding — alongside its windows, so a whole building can be fitted by one company with one warranty.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who supplies uPVC windows in Bhutan?",
        a: "Luminex Windows supplies and installs uPVC and system aluminium windows and doors across Bhutan, with a liaison and coordination desk in Changbangdu, Thimphu, and installation teams serving Thimphu, Paro and Phuentsholing. It is an official Schüco channel partner. Contact Luminex Bhutan on WhatsApp at +975 1772 8800.",
      },
      {
        q: "What is the price of uPVC windows in Bhutan?",
        a: `uPVC windows from Luminex start at ₹${P.upvcFrom} per sq ft in Bhutan — the same as in India — and system aluminium at ₹${P.aluminiumFrom} per sq ft. The ngultrum is pegged 1:1 to the rupee, and Luminex quotes in either currency.`,
      },
      {
        q: "Do I need any paperwork to buy windows from Luminex in Bhutan?",
        a: "No. There is no additional paperwork for the customer. Luminex delivers the windows to your site and installs them within 15–30 days of order.",
      },
      {
        q: "How does window warranty service work in Bhutan?",
        a: "Luminex has a 24x7 service team in Thimphu, and service calls in Bhutan are generally attended within 2 business days. Profiles carry a 15–25 year warranty, glass 15 years and hardware 5 years.",
      },
    ],
    related: [
      { href: "/bhutan/thimphu", label: "Windows in Thimphu" },
      { href: "/bhutan/paro", label: "Windows in Paro" },
      { href: "/bhutan/phuentsholing", label: "Windows in Phuentsholing" },
      { href: "/bhutan/hotel-projects", label: "Windows for hotel projects" },
      { href: "/bhutan/best-windows-for-climate", label: "Best windows for Bhutan's climate" },
      { href: "/bhutan/importing-windows-from-india", label: "Buying windows from India" },
    ],
    image: "/images/luminex-banner.jpg",
    crumbs: [{ label: "Bhutan" }],
  },
  // --------------------------------------------------------------- Thimphu
  {
    path: "/bhutan/thimphu",
    city: "Thimphu",
    region: "Bhutan",
    country: "Bhutan",
    product: "Windows and doors",
    price: "upvc",
    h1: "uPVC and Aluminium Windows in Thimphu",
    metaTitle: "uPVC Windows in Thimphu — Local Desk & 24x7 Service, From ₹495/sq ft",
    metaDescription:
      "uPVC, aluminium, sliding and casement windows in Thimphu from Luminex — Bhutan coordination desk in Changbangdu, own installation team and 24x7 service. From ₹495/sq ft, installed in 15–30 days.",
    answer:
      "Luminex Windows has its Bhutan Liaison & Coordination Desk in Changbangdu, Thimphu, with an installation team and a 24x7 service team. It supplies uPVC windows from ₹495 per sq ft and system aluminium windows from ₹950 per sq ft — sliding and casement — installed within 15–30 days. Luminex is an official Schüco channel partner.",
    facts: bhutanFacts("Bhutan Liaison & Coordination Desk, Changbangdu, Thimphu · installation team · 24x7 service team"),
    sections: [
      {
        h2: "uPVC window prices in Thimphu",
        body: [
          `Standard uPVC windows start at ₹${P.upvcFrom} per sq ft (the same in ngultrum). A 4 ft × 5 ft window starts at about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}. Size, opening type, glass and hardware decide the final price.`,
        ],
      },
      {
        h2: "Aluminium windows in Thimphu",
        body: [
          `System aluminium windows, including Schüco systems, start at ₹${P.aluminiumFrom} per sq ft (about Nu ${(P.aluminiumFrom * 20).toLocaleString("en-IN")} for a 4 ft × 5 ft window). They suit large openings, slim frames and commercial buildings.`,
        ],
      },
      {
        h2: "Sliding and casement windows in Thimphu",
        body: [
          "Sliding windows save space and suit wide openings; casement windows open fully and seal tightly, which helps in Thimphu's cold winters. Both are available in uPVC and system aluminium, made to the measured size of each opening.",
        ],
      },
      {
        h2: "Window manufacturers and suppliers in Thimphu",
        body: [
          "Luminex supplies directly through its Thimphu desk in Changbangdu: the same company measures, supplies, installs and services your windows. Its 24x7 service team is based in Thimphu.",
        ],
      },
      {
        h2: "Windows for Thimphu's climate",
        body: [
          "Thimphu sits at more than 2,000 m, with cold winter nights and strong sun at altitude. Double glazing keeps rooms warmer, low-E glass cuts heat loss further, and good gaskets keep out draughts and dust.",
        ],
      },
    ],
    faqs: [
      ...bhutanCityFaqs("Thimphu"),
      {
        q: "What is the price of aluminium windows in Thimphu?",
        a: `System aluminium windows from Luminex start at ₹${P.aluminiumFrom} per sq ft in Thimphu, the same in ngultrum, so a 4 ft × 5 ft window starts at about Nu ${(P.aluminiumFrom * 20).toLocaleString("en-IN")}.`,
      },
    ],
    related: [
      { href: "/bhutan", label: "Windows across Bhutan" },
      { href: "/bhutan/paro", label: "Windows in Paro" },
      { href: "/bhutan/best-windows-for-climate", label: "Best windows for Bhutan's climate" },
    ],
    image: "/images/hero-bg.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Thimphu" }],
  },
  // --------------------------------------------------------- Phuentsholing
  {
    path: "/bhutan/phuentsholing",
    city: "Phuentsholing",
    region: "Bhutan",
    country: "Bhutan",
    product: "Windows and doors",
    price: "upvc",
    h1: "uPVC and Aluminium Windows in Phuentsholing",
    metaTitle: "uPVC & Aluminium Windows in Phuentsholing — Local Installation Team",
    metaDescription:
      "uPVC windows from ₹495/sq ft and system aluminium from ₹950/sq ft in Phuentsholing. Luminex's own installation team, delivered in 15–30 days.",
    answer:
      "Luminex Windows supplies and installs windows in Phuentsholing with its own installation team, coordinated from its Thimphu desk. uPVC windows start at ₹495 per sq ft and system aluminium windows at ₹950 per sq ft, quoted in rupees or ngultrum, and are installed within 15–30 days of order. Luminex is an official Schüco channel partner.",
    facts: bhutanFacts("Installation team serving Phuentsholing · coordination desk in Changbangdu, Thimphu"),
    sections: [
      {
        h2: "uPVC window prices in Phuentsholing",
        body: [
          `uPVC windows start at ₹${P.upvcFrom} per sq ft for standard sizes; a 4 ft × 5 ft window starts at about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}. Prices are the same as in India.`,
        ],
      },
      {
        h2: "Aluminium window manufacturers and prices in Phuentsholing",
        body: [
          `System aluminium windows, including Schüco systems, start at ₹${P.aluminiumFrom} per sq ft. Luminex supplies and installs them with its own team in Phuentsholing — a good fit for the town's shops, offices and mixed-use buildings.`,
        ],
      },
      {
        h2: "The best aluminium and uPVC windows for Phuentsholing",
        body: [
          "Phuentsholing lies low in the southern foothills, so it is warmer and more humid than Thimphu or Paro, with a heavy monsoon. Windows there should prioritise:",
        ],
        bullets: [
          "Tight gaskets and good drainage for monsoon rain",
          "Materials that do not rust or swell in humidity — uPVC or system aluminium",
          "Low-E or double glazing to keep rooms cooler",
        ],
      },
    ],
    faqs: bhutanCityFaqs("Phuentsholing"),
    related: [
      { href: "/bhutan", label: "Windows across Bhutan" },
      { href: "/bhutan/thimphu", label: "Windows in Thimphu" },
      { href: "/bhutan/importing-windows-from-india", label: "Buying windows from India" },
    ],
    image: "/images/cta-bg.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Phuentsholing" }],
  },
  // ------------------------------------------------------------------ Paro
  {
    path: "/bhutan/paro",
    city: "Paro",
    region: "Bhutan",
    country: "Bhutan",
    product: "Windows and doors",
    price: "upvc",
    h1: "uPVC Windows and Doors in Paro",
    metaTitle: "uPVC Windows & Doors in Paro — Local Dealer and Installer",
    metaDescription:
      "uPVC and aluminium windows and doors in Paro from Luminex — own installation team, from ₹495/sq ft, delivered in 15–30 days. Official Schüco channel partner.",
    answer:
      "Luminex Windows supplies and installs windows in Paro with its own installation team, supplying uPVC and system aluminium windows and doors — including sliding windows. uPVC windows start at ₹495 per sq ft and are installed within 15–30 days. Luminex is an official Schüco channel partner, with a 24x7 service team in Thimphu.",
    facts: bhutanFacts("Installation team serving Paro · coordination desk in Changbangdu, Thimphu"),
    sections: [
      {
        h2: "uPVC window and door dealers in Paro",
        body: [
          "Luminex works directly rather than through resellers: its team measures, supplies, installs and services uPVC and system aluminium windows and doors.",
        ],
      },
      {
        h2: "Window prices in Paro",
        body: [
          `uPVC windows start at ₹${P.upvcFrom} per sq ft and system aluminium at ₹${P.aluminiumFrom} per sq ft — the same as in India, quoted in rupees or ngultrum. A 4 ft × 5 ft uPVC window starts at about Nu ${(P.upvcFrom * 20).toLocaleString("en-IN")}.`,
        ],
      },
      {
        h2: "Sliding windows in Paro",
        body: [
          "Sliding windows suit wide valley views and save space inside. Luminex makes them in uPVC and system aluminium, with double, low-E, toughened or acoustic glass.",
        ],
      },
      {
        h2: "Windows for hotels and homes in Paro",
        body: [
          "Paro's valley has cold winters, and many of its buildings are hotels and guesthouses. Double glazing keeps rooms warm, and acoustic glass keeps guest rooms quiet. See windows for hotel projects for how Luminex handles larger jobs.",
        ],
      },
    ],
    faqs: bhutanCityFaqs("Paro"),
    related: [
      { href: "/bhutan/hotel-projects", label: "Windows for hotel projects" },
      { href: "/bhutan", label: "Windows across Bhutan" },
      { href: "/bhutan/thimphu", label: "Windows in Thimphu" },
    ],
    image: "/images/mission-vision-bg.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Paro" }],
  },
  // --------------------------------------------------------- Hotel projects
  {
    path: "/bhutan/hotel-projects",
    city: "Bhutan",
    region: "Bhutan",
    country: "Bhutan",
    placeType: "Country",
    product: "Windows for hotel projects",
    price: "upvc",
    h1: "Windows and Doors for Hotel Projects in Bhutan",
    metaTitle: "Windows for Hotel Projects in Bhutan — Acoustic Glass, Local Teams",
    metaDescription:
      "uPVC and system aluminium windows and doors for hotels and resorts in Bhutan. Acoustic and double glazing, own installation teams in Thimphu, Paro and Phuentsholing, 24x7 service.",
    answer:
      "Luminex Windows supplies and installs windows and doors for hotels, resorts and commercial projects in Bhutan, using uPVC and system aluminium — including Schüco systems — with acoustic, double and low-E glass. Its own teams in Thimphu, Paro and Phuentsholing install, and a 24x7 Thimphu team services the windows after handover.",
    facts: [
      ["Systems", "uPVC and system aluminium windows and doors, including Schüco systems"],
      ["Glass", "Saint-Gobain — acoustic, double glazing, low-E, toughened"],
      ["Installation", "Luminex's own teams in Thimphu, Paro and Phuentsholing"],
      ["After handover", "24x7 service team in Thimphu; calls attended within 2 business days"],
      ["Prices", `uPVC from ₹${P.upvcFrom}/sq ft · system aluminium from ₹${P.aluminiumFrom}/sq ft; project pricing on request`],
      ["Delivery", `${site.leadTime} from order, delivered to site, no paperwork for the client`],
      ["Project references", "Hotel and commercial project catalog available on request"],
      ["Enquiries", BT_WA],
    ],
    sections: [
      {
        h2: "What hotel projects need from windows",
        body: ["Hotel windows are judged by guests every night, so the specification matters more than in a home:"],
        bullets: [
          "Acoustic glass so rooms stay quiet",
          "Double or low-E glazing for warm rooms in cold valley winters",
          "Large sliding and folding doors for views, balconies and restaurants",
          "Hardware built for heavy daily use — Schüco, Pego and Kinlong",
          "Fast local service when something needs adjusting",
        ],
      },
      {
        h2: "How Luminex runs a hotel project",
        body: [
          "Share your drawings or room list on WhatsApp. Luminex reviews the openings, recommends systems and glass for each area, and quotes per project. Windows are delivered to site and installed by Luminex's own Bhutan teams, and the Thimphu service team supports the property after handover.",
        ],
      },
      {
        h2: "Project references",
        body: [
          "Luminex has completed hotel, resort and commercial projects in Bhutan. Ask for the project catalog on WhatsApp at +975 1772 8800.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who supplies windows for hotel projects in Bhutan?",
        a: "Luminex Windows supplies and installs uPVC and system aluminium windows and doors for hotels and resorts in Bhutan, with its own teams in Thimphu, Paro and Phuentsholing and a 24x7 service team in Thimphu. It is an official Schüco channel partner.",
      },
      {
        q: "What glass is best for hotel rooms?",
        a: "Acoustic glass keeps guest rooms quiet, and double glazing or low-E glass keeps them warm in cold months. Luminex supplies Saint-Gobain acoustic, double-glazed, low-E and toughened glass, and recommends a mix by room type.",
      },
      {
        q: "How are hotel window projects priced?",
        a: `Hotel projects are quoted per project from the drawings. As a reference, uPVC windows start at ₹${P.upvcFrom} per sq ft and system aluminium at ₹${P.aluminiumFrom} per sq ft for standard sizes.`,
      },
      {
        q: "Can I see past hotel projects?",
        a: "Yes. Luminex has a catalog of hotel and commercial projects in Bhutan. Request it on WhatsApp at +975 1772 8800.",
      },
    ],
    related: [
      { href: "/bhutan/paro", label: "Windows in Paro" },
      { href: "/bhutan/best-windows-for-climate", label: "Best windows for Bhutan's climate" },
      { href: "/doors", label: "Doors range" },
    ],
    image: "/images/our-testimonial-bg.jpg",
    crumbs: [{ label: "Bhutan", href: "/bhutan" }, { label: "Hotel projects" }],
  },
  // --------------------------------------------------------------- Warranty
  {
    path: "/warranty",
    kind: "guide",
    city: "India and Bhutan",
    region: "India",
    product: "Warranty and service",
    h1: "Luminex Warranty and Service",
    metaTitle: "Luminex Windows Warranty — Up to 25 Years on Profiles",
    metaDescription:
      "Luminex window warranty: profiles 15–25 years by brand, glass 15 years, hardware 5 years. What's covered, what isn't, and how service works in India and Bhutan.",
    answer:
      "Luminex windows and doors carry a profile warranty of 15 to 25 years depending on the profile brand, a 15-year warranty on glass and a 5-year warranty on hardware. Physical damage, modification and mishandling are not covered. In Bhutan, a 24x7 team in Thimphu attends service calls within 2 business days.",
    facts: [
      ["Profiles", site.warranty.profile],
      ["Glass", site.warranty.glass],
      ["Hardware", site.warranty.hardware],
      ["Not covered", "Physical damage, modification, mishandling"],
      ["Service in Bhutan", "24x7 team in Thimphu; calls attended within 2 business days"],
      ["Service contact", "India: WhatsApp +91 96099 88749 · Bhutan: WhatsApp +975 1772 8800"],
    ],
    sections: [
      {
        h2: "What the warranty covers",
        body: [
          "The warranty is split by component, because each part of a window wears differently. Window profiles — the frames and sashes — carry the longest cover, 15 to 25 years depending on whether they are Schüco, Luminex or Fenova profiles. Glass is covered for 15 years and hardware such as handles, hinges and locks for 5 years.",
        ],
      },
      {
        h2: "What is not covered",
        body: ["The warranty does not cover:"],
        bullets: ["Physical damage", "Modifications made to the window or door", "Mishandling or misuse"],
      },
      {
        h2: "Window warranty service in Bhutan",
        body: [
          "Luminex has a 24x7 service team in Thimphu, and service calls in Bhutan are generally attended within 2 business days. Raise a service request on WhatsApp at +975 1772 8800.",
        ],
      },
      {
        h2: "Keeping your warranty valid",
        body: [
          "Clean frames with a soft cloth and mild detergent, avoid drilling into frames or modifying them, and keep drainage slots clear. Contact Luminex for any adjustment rather than altering the window yourself.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long is the warranty on Luminex windows?",
        a: "Profiles carry a 15–25 year warranty depending on the profile brand, glass is covered for 15 years and hardware for 5 years.",
      },
      {
        q: "What does the Luminex warranty not cover?",
        a: "Physical damage, modifications to the window or door, and mishandling are not covered by the warranty.",
      },
      {
        q: "How quickly are service calls attended in Bhutan?",
        a: "Luminex has a 24x7 service team in Thimphu, and service calls in Bhutan are generally attended within 2 business days.",
      },
    ],
    related: [
      { href: "/luminex-difference", label: "Why Luminex" },
      { href: "/bhutan", label: "Windows in Bhutan" },
      { href: "/contact", label: "Contact" },
    ],
    image: "/images/luminex-about.jpg",
    crumbs: [{ label: "Warranty" }],
  },
];
