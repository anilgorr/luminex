// Shared types and helpers for location pages (kept separate to avoid circular imports).
import { site } from "./site";

export type Section = { h2: string; body: string[]; bullets?: string[] };
export type LocationPage = {
  path?: string; // explicit URL; defaults to /[citySlug]/[slug]
  city: string; // place name shown in eyebrow / headings
  citySlug?: string;
  slug?: string;
  region: string; // state or country, for schema
  country?: "India" | "Bhutan";
  kind?: "service" | "guide"; // guide pages get Article schema instead of Service
  placeType?: "City" | "Country";
  product: string;
  price?: "upvc" | "aluminium";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answer: string; // 40–60 word answer block under the H1
  facts: [string, string][];
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  image: string;
  crumbs?: { label: string; href?: string }[];
};

export const P = site.pricing;
const wa = "WhatsApp +91 96099 88749";

// Indicative starting price for a common window size, so answers can quote a rupee figure.
export const example = (rate: number, w = 4, h = 5) => `₹${(rate * w * h).toLocaleString("en-IN")}`;

export const sharedFacts = (served: string): [string, string][] => [
  ["Partner status", site.partner],
  ["Delivery and installation", `${site.leadTime} from order`],
  ["Warranty", "Profiles 15–25 years (by brand) · glass 15 years · hardware 5 years"],
  ["Profiles", site.brands.profiles.join(", ")],
  ["Glass", `${site.brands.glass.join(", ")} — double glazing, low-E, toughened, acoustic`],
  ["Hardware", site.brands.hardware.join(", ")],
  ["Served from", served],
  ["Enquiries", `${wa} or call +91 99335 81666`],
];

