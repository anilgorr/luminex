import { site, faqs } from "@/lib/site";
// /llms.txt — plain-text brief for AI assistants (GEO).
export const dynamic = "force-static";
export function GET() {
  const body = `# ${site.name}

> ${site.description}

- Website: ${site.url}
- Head office: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, India
- Serves: ${site.areaServed.join(", ")}
- Phone (India): ${site.phones.india.join(", ")}
- Phone (Bhutan): ${site.phones.bhutan.join(", ")}
- Email: ${site.emails.join(", ")}
- Warranty: ${site.warrantyYears}-year limited warranty from date of manufacture

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
