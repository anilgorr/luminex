# Luminex Windows — Next.js website

Rebuild of luminexwindow.com in Next.js 15 (App Router), same visual design (Plus Jakarta Sans, #1c4722 green, #F1EFF0, #4D4D4D), with SEO / AEO / GEO built in.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Where to edit
- `lib/site.ts` — phones, emails, address, social links, "why choose" reasons, FAQs, partner logos
- `lib/content.ts` — windows/doors product groups and blog posts
- `app/globals.css` — all styling (design tokens at the top)
- `public/images/` — all images

## SEO / AEO / GEO included
- Per-page titles, descriptions, canonical URLs, Open Graph
- JSON-LD: Organization + HomeAndConstructionBusiness, WebSite, BreadcrumbList on every inner page, FAQPage, BlogPosting
- `/sitemap.xml`, `/robots.txt` (AI crawlers explicitly allowed), `/llms.txt`
- FAQ answers in native `<details>` so they are in the HTML for crawlers
- 301 redirects from every old `.php` URL to the new clean URL (next.config.mjs)
- next/image (AVIF/WebP), next/font (no layout shift)

## Before going live (Vercel)
1. Set env `NEXT_PUBLIC_SITE_URL=https://www.luminexwindow.com` and `NEXT_PUBLIC_SITE_ENV=production` (without it the site is hidden from Google — right for preview links, wrong for launch)
2. Forms post to `/api/contact`. Set `LEAD_WEBHOOK_URL` (n8n / Zapier / Sheets webhook) to receive leads — otherwise they are only logged.
3. Analytics: set `NEXT_PUBLIC_GA_ID=G-XXXXXXX` (GA4 measurement ID). GA only loads in production. In GA4 → Admin → Key events, mark `whatsapp_click` and `generate_lead`; `phone_click` and `email_click` are tracked too. AI-search visits appear as referrals from chatgpt.com, perplexity.ai, gemini.google.com and claude.ai.
4. Have the client review `/privacy-policy` and add the registered company name.
5. Confirm phone numbers + emails in `lib/site.ts` (live site shows two different sets).
6. Replace placeholder blog posts, gallery photos and the stock "craftsman" images.
7. Check the door photos in `public/images/web/doors/` are owned/licensed by Luminex.
