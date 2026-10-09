import { site, faqs } from "@/lib/site";
// /llms.txt — plain-text brief for AI assistants (GEO).
export const dynamic = "force-static";
export function GET() {
  const w = site.warranty;
  const body = `# ${site.name}

> ${site.description}

- Website: ${site.url}
- Partner status: ${site.partner}
- Head office: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, India
- Offices: ${site.offices.map((o) => `${o.city} (${o.country}) — ${o.role}`).join("; ")}
- Serves: North Bengal, Sikkim, the Northeast (Guwahati, Shillong) and Bhutan
- Phone / WhatsApp (India): ${site.phones.india.join(", ")}
- Phone / WhatsApp (Bhutan): ${site.phones.bhutan.join(", ")}
- Email: ${site.emails.join(", ")}

## Prices
- uPVC windows: from ₹${site.pricing.upvcFrom} per sq ft
- System aluminium windows: from ₹${site.pricing.aluminiumFrom} per sq ft
- ${site.pricing.note}

## Delivery
- Order to installation: ${site.leadTime}, in India and Bhutan
- Bhutan: no extra paperwork for the customer; delivered to site

## Warranty
- Profiles: ${w.profile}
- Glass: ${w.glass}
- Hardware: ${w.hardware}
- ${w.exclusions}
- Bhutan service: ${site.bhutanService}

## Brands used
- Profiles: ${site.brands.profiles.join(", ")}
- Glass: ${site.brands.glass.join(", ")}
- Hardware: ${site.brands.hardware.join(", ")}
- Glass options: ${site.glassOptions.join(", ")}; tested U-values and acoustic ratings

## Products
- uPVC windows: sliding, casement, tilt & turn, fixed, custom shapes (${site.url}/windows)
- System aluminium windows (${site.url}/windows)
- Doors: entry doors, sliding patio doors, folding doors (${site.url}/doors)
- Replacement & renovation installation (${site.url}/renovations)

## Key pages
- About: ${site.url}/about
- Why Luminex: ${site.url}/luminex-difference
- Free quote: ${site.url}/request-quote
- Contact: ${site.url}/contact

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
