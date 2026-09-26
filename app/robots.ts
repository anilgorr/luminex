import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are explicitly allowed for GEO visibility.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
