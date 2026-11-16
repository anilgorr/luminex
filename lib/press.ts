// Press coverage (client, 4 and 16 Nov 2026). Headlines and facts are as the outlets published them:
// the syndicated PTI release is headlined for Fenova and names Luminex Windows, Siliguri as
// Fenova's authorised channel partner executing the Gyalsung project.
export type PressLink = { outlet: string; url: string };

export const press = [
  {
    id: "gyalsung-academy",
    date: "2026-01-24",
    dateLabel: "24 January 2026",
    headline: "Fenova uPVC Door and Window Systems Powers Bhutan's Gyalsung Project with Forbes-Recognized Co-Extrusion Technology",
    summary:
      "Press Trust of India carried the announcement, also published by The Tribune, The Week and The Wire, that Fenova will supply about 55,000 sq ft of wooden-finish uPVC windows for the Gyalsung Academy project in Bhutan, made with its co-extrusion (laminate-free) technology.",
    quote: "The project will be executed in collaboration with Fenova's authorized channel partner, Luminex Windows, Siliguri.",
    links: [
      { outlet: "Press Trust of India", url: "https://www.ptinews.com/press-release/fenova-upvc-door-and-window-systems-powers-bhutan%E2%80%99s-gyalsung-project-with-forbes-recognized-co-extrusion-technology/3306803" },
      { outlet: "The Tribune", url: "https://www.tribuneindia.com/news/business/fenova-upvc-door-and-window-systems-powers-bhutans-gyalsung-project-with-forbes-recognized-co-extrusion-technology/" },
      { outlet: "The Week", url: "https://www.theweek.in/wire-updates/business/2026/01/24/fenova-upvc-door-and-window-systems-powers-bhutan%E2%80%99s-gyalsung-project-with-forbes-recognized-co-extrusion-technology.html" },
      { outlet: "The Wire", url: "https://thewire.in/ptiprnews/fenova-upvc-door-and-window-systems-powers-bhutans-gyalsung-project-with-forbes-recognized-co-extrusion-technology" },
    ] as PressLink[],
  },
  {
    id: "forbes-select-200",
    date: "2026",
    dateLabel: "2026",
    headline: "Forbes India recognises Fenova as a Select 200 company",
    summary:
      "Forbes India named Fenova, Luminex's uPVC profile partner, a DGEMS Select 200 company for 2026, for co-extrusion technology that replaces laminates on uPVC door and window profiles. The recognition is reported in the same PTI release.",
    links: [{ outlet: "Press Trust of India", url: "https://www.ptinews.com/press-release/fenova-upvc-door-and-window-systems-powers-bhutan%E2%80%99s-gyalsung-project-with-forbes-recognized-co-extrusion-technology/3306803" }] as PressLink[],
    image: { src: "/images/press/forbes-india-select-200-fenova-luminex.jpg", alt: "Press coverage news board: Forbes India recognises Fenova as a Select 200 company, with the Luminex and Fenova logos and the Forbes India DGEMS 2026 mark", w: 708, h: 825 },
  },
];
