# Luminex AEO/GEO Content Strategy — Priority Keywords

26 Sep 2026 · Anil Gorraladaku

## Summary

Build 17 pages, not 64. The green list has 62 unique keywords, but most are the same buyer asking the same question with a different modifier (dealers, manufacturers, price, best). One strong page per city-and-product answers all of them — and 17 deep pages beat 64 thin ones with both Google and AI engines, which punish near-duplicate location pages.

Start with Siliguri and Guwahati. They carry the only keywords above 100 searches a month, and Siliguri is where the factory is, so Luminex can prove local claims there that no competitor can.

Bhutan comes second, and it matters more than its search volume suggests. Every Bhutan keyword sits at 0–10 searches, but almost nobody publishes useful content on buying windows in Bhutan. When someone asks ChatGPT or Perplexity who supplies uPVC windows in Thimphu, the engine has very few sources to cite — a well-built Luminex page can become the default answer within months.

## What the green list contains

64 green rows, 62 unique keywords across 10 locations. Two rows repeat in the Bhutan region block ("upvc windows thimphu", "upvc windows paro") — they map to the city pages, not the hub, so the pages never compete with each other.

| Location | Keywords | Monthly volume band | What searchers want |
| --- | --- | --- | --- |
| Siliguri | 9 | 100–1K (1), 10–100 (7), 0–10 (1) | uPVC + aluminium suppliers, prices, replacement |
| Guwahati | 2 | 100–1K (both) | uPVC windows; aluminium window prices |
| Thimphu | 13 | 0–10 | uPVC, aluminium, sliding, casement — makers and prices |
| Paro | 11 | 0–10 | Dealers and makers for windows and doors |
| Bhutan (country) | 10 | 0–10 | Suppliers, installation, price, climate, import, hotels, warranty |
| Phuentsholing | 6 | 0–10 | uPVC + aluminium makers and prices |
| Jalpaiguri | 4 | 0–10 | uPVC windows and doors makers, sliding |
| Darjeeling | 3 | 0–10 | uPVC windows and doors, sliding |
| Shillong | 2 | 10–100 (1), 0–10 (1) | uPVC windows makers |
| Gangtok | 2 | 0–10 | uPVC windows, door makers |

Intent splits 41 commercial, 18 transactional (price, dealers) and 3 informational. All three informational keywords are about Bhutan — climate, importing, warranty — which is where the guide content goes.

## Page map

Every green keyword lands on exactly one page. Priority 1 pages carry real volume; priority 2 and 3 are AEO/GEO plays where low competition makes Luminex the likely cited source.

| # | URL | Primary keyword | Also covers | Priority |
| --- | --- | --- | --- | --- |
| 1 | /siliguri/upvc-windows | upvc windows Siliguri | upvc windows dealers in Siliguri, best upvc windows in Siliguri, sliding windows price in Siliguri | 1 |
| 2 | /siliguri/aluminium-windows | aluminium windows Siliguri | aluminium windows dealers / manufacturers / price in Siliguri | 1 |
| 3 | /siliguri/window-replacement | window replacement Siliguri | — | 1 |
| 4 | /guwahati/upvc-windows | upvc windows Guwahati | — | 1 |
| 5 | /guwahati/aluminium-windows-price | aluminium windows price in Guwahati | — | 1 |
| 6 | /bhutan | upvc windows bhutan | windows and doors bhutan, door manufacturers bhutan, double glazed windows bhutan, window installation bhutan, upvc windows price bhutan, window warranty service bhutan | 2 |
| 7 | /bhutan/thimphu | upvc windows Thimphu | manufacturers, price, best; aluminium, sliding, casement windows Thimphu + prices; windows suppliers in thimphu | 2 |
| 8 | /bhutan/phuentsholing | upvc windows Phuentsholing | upvc price; aluminium windows, manufacturers, price, best in Phuentsholing | 2 |
| 9 | /bhutan/paro | upvc windows Paro | uPVC and aluminium window dealers + manufacturers; uPVC door dealers + manufacturers; sliding windows Paro | 2 |
| 10 | /bhutan/hotel-projects | windows for hotel project bhutan | — | 2 |
| 11 | /bhutan/best-windows-for-climate | best windows for bhutan climate | — | 2 |
| 12 | /bhutan/importing-windows-from-india | importing windows to bhutan | — | 2 |
| 13 | /shillong | upvc windows Shillong | upvc windows manufacturers in Shillong | 3 |
| 14 | /gangtok | upvc windows Gangtok | upvc doors manufacturers in Gangtok | 3 |
| 15 | /darjeeling | upvc windows Darjeeling | upvc doors manufacturers in Darjeeling, sliding windows Darjeeling | 3 |
| 16 | /jalpaiguri | upvc windows Jalpaiguri | manufacturers, upvc doors manufacturers, sliding windows Jalpaiguri | 3 |
| 17 | /warranty | window warranty service bhutan (section) | Sitewide warranty terms — AI engines quote these often | 2 |

In the Next.js build these become one data file (`lib/locations.ts`) feeding a single page template, so adding a city later is a content task, not a dev task. Old keyword-stuffed variants ("dealers in X", "manufacturers in X") should never get their own URLs — they are H2s and FAQ questions on the page above.

## Page blueprint for AEO/GEO

AI engines lift self-contained facts, not marketing paragraphs. Every location page follows the same eight blocks, top to bottom, so each one can be quoted on its own.

1. **Answer block (40–60 words) under the H1.** Who, what, where, proof. Example for page 1: "Luminex Windows manufactures uPVC windows at its own factory in Salugara, Siliguri, and installs them across Siliguri and North Bengal. Sliding, casement and tilt & turn systems come with a 15-year limited warranty, free site measurement and delivery in about [X] weeks."
2. **Key facts table.** Price range per sq ft, lead time, warranty, service radius, installation team, profile and glass partners. Tables are the single most-cited format in AI answers.
3. **Price section with real ranges.** Transactional keywords (18 of 62) all ask "price". A range such as "₹X–₹Y per sq ft for a standard 2-track sliding window" with the factors that move it beats "contact us for price" every time — the engine will quote a competitor that publishes a number.
4. **Product sections as H2s phrased as the query.** "uPVC window dealers in Siliguri", "Sliding window prices in Siliguri". This is where the secondary keywords live.
5. **Local proof.** 3–6 real projects in that city: photo, locality, product, year. One line each.
6. **Comparison.** uPVC vs aluminium vs wood for that city's climate — short table.
7. **FAQ (5–8 questions)** with FAQPage schema, answers 40–80 words, written from real customer questions.
8. **Contact + service-area block** with NAP matching Google Business Profile exactly, plus a quote form.

Schema on every page: `Service` with `areaServed` set to the city, `LocalBusiness` referencing the Siliguri head office, `FAQPage`, `BreadcrumbList`. Each page also gets a line in `/llms.txt` so AI crawlers find the full city list in one fetch.

## City angles — what makes each page unique

Swapping the city name into one template is exactly what gets location pages ignored. Each page leads with a hook only that city has; at least 60% of its text should be unique. Distances and altitudes below are approximate and should be checked before publishing.

| Page | Local hook | Climate / building angle to write about |
| --- | --- | --- |
| Siliguri | The factory is in Salugara — site visit within a day, direct-from-maker pricing, no dealer margin | Hot, humid summers and heavy monsoon; road dust along the highways — sealing and dust protection |
| Siliguri replacement | Old timber and steel windows in older neighbourhoods; replacement without breaking walls | Swollen wooden frames after monsoon, rust on steel grills |
| Guwahati | Largest city in the Northeast, roughly 450 km from the factory — explain delivery and install schedule | Seismic zone V: frame anchoring and flexible sealing; very high humidity |
| Guwahati aluminium price | A clear price table by system (sliding, casement, slim, thermal-break) | Why thermal-break aluminium costs more and when it's worth it |
| Shillong | Hill town with some of the wettest weather in India | Driving rain, condensation, cold nights — double glazing and drainage |
| Gangtok | Around 115 km up NH10 from the factory | Altitude ~1,650 m, cold winters, landslide-season logistics |
| Darjeeling | Hotels, homestays and colonial-era buildings replacing old timber windows | Cold, damp, foggy; keeping a heritage look with woodgrain uPVC |
| Jalpaiguri | About 45 km from the factory — same-day visits | Plains humidity and flooding — rot-proof frames |
| Thimphu | Capital; highest density of government, commercial and residential builds in Bhutan | Altitude ~2,300 m, sub-zero winter nights; traditional façade rules — confirm what window styles are permitted |
| Phuentsholing | Border town and main entry point for goods from India — fastest delivery in Bhutan | Lower, hotter and wetter than Thimphu; commercial and mixed-use buildings |
| Paro | Airport town with many tourist hotels and resorts | Cold valley winters; hotels need acoustic glazing and a traditional look |
| Bhutan hub | How ordering from India works end to end: survey, pricing in Ngultrum (pegged 1:1 to the rupee), transport, installation, service | Links out to all Bhutan city pages and guides |

## Bhutan guides and the hotel-project page

The hotel page is the most valuable page on this list despite its 0–10 volume. One hotel or resort order is worth dozens of homes, and the people searching for it are architects and project managers — the buyers who ask AI assistants for shortlists.

**/bhutan/hotel-projects** — a B2B landing page, not a blog post.

- What hotels need: acoustic glazing for rooms, large sliding doors for views, a traditional exterior look, fast replacement parts
- How Luminex runs a project: drawings review, sample window, phased delivery, on-site installation team, snag list, handover
- Case studies from real Bhutan hotel or commercial jobs (the page is not credible without at least two)
- A "project enquiry" form asking for room count, drawings upload and timeline

**/bhutan/best-windows-for-climate** — answers "best windows for bhutan climate".

- One-line answer first: multi-chamber uPVC with double glazing for Thimphu and Paro; the reasoning after
- Climate by region: high valleys (cold, dry winters, strong sun) vs southern towns such as Phuentsholing (hot, humid, heavy monsoon)
- uPVC vs aluminium vs timber table for Bhutan conditions
- Glazing choices: double glazing, low-E glass, toughened glass

**/bhutan/importing-windows-from-india** — answers "importing windows to bhutan".

- Step-by-step: site survey, quote in Ngultrum, order, manufacturing time, transport via Phuentsholing, installation
- Paperwork and any taxes or fees — Luminex's logistics team must confirm these; we should not publish from assumption
- Typical door-to-door timeline to Thimphu, Paro and Phuentsholing
- Why buy direct from a manufacturer instead of a local reseller

**/warranty** covers "window warranty service bhutan": the 15-year limited warranty terms in plain language, what is and isn't covered, and how service calls work in Bhutan (who comes, how fast).

## Off-site GEO signals

AI engines rarely trust a brand's own site alone — they cross-check it against listings, reviews and third-party mentions. The on-site pages get Luminex into the answer; these get it cited with confidence.

- **Google Business Profile** for the Siliguri office, fully filled: categories (window supplier, door supplier, uPVC manufacturer), service areas listing every city above, weekly photo posts. A Bhutan profile only if there is a real staffed address — a fake one gets suspended.
- **Reviews that name the city and product.** Ask every customer after installation; a review like "uPVC sliding windows installed in our Thimphu home" is exactly the sentence an engine lifts. Target 5 new reviews a month.
- **Directories with identical NAP:** IndiaMART, Justdial, Sulekha, TradeIndia for India; Bhutan business directories for the Bhutan side. One wrong phone number across these weakens every page.
- **Partner locators.** Ask profile and hardware partners (Fenova, Kinlong, AluKing and others) to list Luminex as a fabricator or dealer for North Bengal and Bhutan — a brand-owned domain vouching for Luminex carries weight.
- **YouTube.** Short installation videos titled by city and product ("uPVC sliding window installation in Gangtok"). Video transcripts are indexed and increasingly cited.
- **Quora and Reddit answers** on questions like "best uPVC windows in Siliguri" or "buying windows in Bhutan", written by a named Luminex person, linking to the matching page.
- **Local press.** One project story a quarter — a hotel in Paro, a school in Siliguri — pitched to regional outlets, and to Kuensel for Bhutan.

## Rollout

All 17 pages live in 12 weeks, by 18 December 2026. Each phase starts only when Luminex has supplied that phase's prices and project photos — a page without them is thin, and publishing thin pages is worse than waiting.

| Phase | Dates | Pages | Also |
| --- | --- | --- | --- |
| 0 — Inputs + template | 28 Sep – 9 Oct | Location template and `lib/locations.ts` in the Next.js site | Collect client data (next section); set up Google Business Profile |
| 1 — Volume | 12 Oct – 30 Oct | Siliguri × 3, Guwahati × 2 | Start review requests; IndiaMART / Justdial clean-up |
| 2 — Bhutan | 2 Nov – 27 Nov | Bhutan hub, Thimphu, Phuentsholing, Paro, hotel projects, warranty | Partner locator requests; first two YouTube install videos |
| 3 — Hills + guides | 30 Nov – 18 Dec | Shillong, Gangtok, Darjeeling, Jalpaiguri, Bhutan climate guide, importing guide | First Quora/Reddit answers; first press pitch |

After launch: refresh the price tables every quarter (AI engines favour pages with a recent date and current numbers), add one project per city per quarter, and review which FAQs people actually ask.

## What we need from Luminex

None of the pages can be written honestly without these. Prices and real projects matter most — they are what separate a citable page from a doorway page.

- [ ] Price ranges per sq ft for uPVC sliding, casement, tilt & turn, and aluminium sliding / casement / thermal-break — in INR, and whether Bhutan pricing differs
- [ ] Typical lead time from order to installation for Siliguri, Guwahati, the hill towns and each Bhutan city
- [ ] 3–6 completed projects per city: photo, locality, product, year (client name optional)
- [ ] At least two hotel or commercial projects in Bhutan for the hotel page
- [ ] Correct phone numbers and emails — the live site shows two different sets
- [ ] Whether there is a staffed office, dealer or install team in Guwahati, Thimphu, Paro or Phuentsholing (decides what we can claim)
- [ ] Bhutan logistics: route, paperwork, any taxes or fees, typical door-to-door time
- [ ] Full warranty terms and how service calls work in Bhutan
- [ ] Glass and profile specs (chambers, glass options, U-values if tested)
- [ ] The 10 questions customers ask most on sales calls

## Measurement

Track two scoreboards: Google rankings for the volume keywords, and AI answers for everything else — most Bhutan keywords will never show meaningful Search Console numbers, so judging them on clicks would kill the best part of this plan.

| What | Tool | Target by 31 Mar 2027 |
| --- | --- | --- |
| Rankings for the 11 Siliguri + Guwahati keywords | Search Console, per-page filter | Top 5 for "upvc windows Siliguri"; top 10 for the rest |
| Impressions and clicks per location page | Search Console | Every page indexed and earning impressions within 4 weeks of launch |
| AI answer share for a fixed prompt set | LoomRank, monthly | Luminex named in at least half of answers to the Bhutan prompts |
| Quote requests by page | Form submissions tagged with the page URL | A monthly count per city, so the next round of pages follows the leads |
| Reviews naming a city | Google Business Profile | 5 new per month |

The prompt set for AI tracking should be about 20 prompts phrased the way buyers ask — "who makes uPVC windows in Siliguri", "best windows for a hotel in Paro", "how much do aluminium windows cost in Guwahati" — run monthly across ChatGPT, Perplexity, Gemini and Google AI Overviews, logging whether Luminex is named and which page is cited.

See also: [sitemap.md](sitemap.md) and [client-questions.md](client-questions.md).
