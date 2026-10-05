import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are explicitly allowed for GEO visibility.
// Previews (Netlify/Vercel test links) are hidden from search engines so they don't
// compete with luminexwindow.com. Set NEXT_PUBLIC_SITE_ENV=production on the real launch.
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
