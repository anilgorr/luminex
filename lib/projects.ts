// Projects for /gallery and the city pages. Add entries here; no code changes needed.
// `city` is the city as named on its city page (e.g. "Siliguri", "Thimphu", "Guwahati"); projects
// with country "Bhutan" also show on /bhutan. Photos: 3–6 real project photos in /public/images/projects/.
export type Project = {
  id: string;
  title: string;
  city: string;
  locality?: string;
  country: "India" | "Bhutan";
  product: string;
  year: number;
  description: string;
  photos: { src: string; alt: string }[];
  source?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    id: "gyalsung-academy",
    title: "Gyalsung Academy",
    city: "Bhutan",
    country: "Bhutan",
    product: "Wooden-finish co-extruded uPVC windows (Fenova profiles)",
    year: 2026,
    description:
      "About 55,000 sq ft of wooden-finish uPVC windows for Bhutan's Gyalsung Academy project, supplied by Fenova and executed by Luminex Windows, Siliguri as Fenova's authorised channel partner.",
    photos: [],
    source: { label: "Press Trust of India, 24 January 2026", url: "https://www.ptinews.com/press-release/fenova-upvc-door-and-window-systems-powers-bhutan%E2%80%99s-gyalsung-project-with-forbes-recognized-co-extrusion-technology/3306803" },
  },
];

/** Projects for a city page: same city, or every Bhutan project on the Bhutan country page. */
export function projectsFor(city: string, country?: string, isCountryPage = false) {
  return projects.filter((p) => p.city === city || (isCountryPage && country && p.country === country));
}
