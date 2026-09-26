# Sitemap — existing vs proposed

As of 26 Sep 2026

## Existing sitemap (luminexwindow.com, live)

The live site has 8 working pages and 6 dead ones — 4 of the 7 main-menu links return 404. There is no sitemap.xml or robots.txt, the home page has an empty meta description, and every working page checked shares the same title, "Luminex - Windows and Doors", so Google sees them as interchangeable.

| URL | Status | In menu | Problem |
| --- | --- | --- | --- |
| / (index.php) | 200 | Home | Empty meta description; generic title |
| /about.php | 200 | Footer | Template filler: fake testimonials, fake team, "free shipping over $100" |
| /doors.php | 200 | Doors | Copy mentions another maker ("Lux", "Alberta"); sometimes shows a bot-check page to crawlers |
| /contact.php | 200 | Contact Us | Phone numbers and email domain differ from the footer |
| /request-quote.php | 200 | Top bar | Generic title |
| /blog.php | 200 | — | No page title |
| /blog-single.php | 200 | — | One URL for all three posts — the posts don't have pages of their own |
| /service-single.php | 200 | — | Theme placeholder page, linked 7 times |
| /windows.php | 404 | Windows | Dead main-menu link |
| /renovations.php | 404 | Renovations | Dead main-menu link |
| /gallery.php | 404 | Gallery | Dead main-menu link |
| /luminex-difference.php | 404 | Luminex Difference | Dead main-menu link |
| /services.php | 404 | Footer "Products" | Dead footer link |
| /team-single.php | 404 | — | Dead link from the team section |
| /sitemap.xml, /robots.txt | 404 | — | Missing |

## Proposed sitemap

31 pages in five groups. 13 are already built in the new Next.js site; 18 are new — the 17 pages from the keyword strategy plus a privacy policy — and each goes live in the phase shown. Every green keyword maps to exactly one URL.

**Core pages**

| URL | Page | Target keyword | Status |
| --- | --- | --- | --- |
| / | Home | uPVC windows and doors India Bhutan (brand) | Built |
| /about | About Luminex | Luminex Windows manufacturer | Built |
| /windows | Windows range | uPVC windows, aluminium windows | Built |
| /doors | Doors range | uPVC doors | Built |
| /renovations | Replacement and renovation | window replacement | Built |
| /gallery | Project gallery | — (supports every city page with real photos) | Built, needs real photos |
| /luminex-difference | Why Luminex, uPVC vs wood vs aluminium | uPVC vs aluminium windows | Built |
| /warranty | Warranty and service | window warranty service bhutan | New — Phase 2 |
| /request-quote | Free quote | — | Built |
| /contact | Contact | — | Built |
| /privacy-policy | Privacy policy | — | New — needed because the forms collect personal data |

**Siliguri and Guwahati (Phase 1)**

| URL | Target keyword | Also covers |
| --- | --- | --- |
| /siliguri/upvc-windows | upvc windows Siliguri | dealers in Siliguri, best upvc windows in Siliguri, sliding windows price in Siliguri |
| /siliguri/aluminium-windows | aluminium windows Siliguri | dealers, manufacturers, price in Siliguri |
| /siliguri/window-replacement | window replacement Siliguri | — |
| /guwahati/upvc-windows | upvc windows Guwahati | — |
| /guwahati/aluminium-windows-price | aluminium windows price in Guwahati | — |

**Bhutan (Phase 2, guides in Phase 3)**

| URL | Target keyword | Also covers |
| --- | --- | --- |
| /bhutan | upvc windows bhutan | windows and doors bhutan, door manufacturers bhutan, double glazed windows bhutan, window installation bhutan, upvc windows price bhutan |
| /bhutan/thimphu | upvc windows Thimphu | aluminium, sliding and casement windows Thimphu; manufacturers; prices; windows suppliers in thimphu |
| /bhutan/phuentsholing | upvc windows Phuentsholing | aluminium windows, manufacturers, prices, best in Phuentsholing |
| /bhutan/paro | upvc windows Paro | window and door dealers and manufacturers, sliding windows Paro |
| /bhutan/hotel-projects | windows for hotel project bhutan | — |
| /bhutan/best-windows-for-climate | best windows for bhutan climate | — |
| /bhutan/importing-windows-from-india | importing windows to bhutan | — |

**North Bengal and Northeast hill towns (Phase 3)**

| URL | Target keyword | Also covers |
| --- | --- | --- |
| /shillong | upvc windows Shillong | upvc windows manufacturers in Shillong |
| /gangtok | upvc windows Gangtok | upvc doors manufacturers in Gangtok |
| /darjeeling | upvc windows Darjeeling | upvc doors manufacturers, sliding windows Darjeeling |
| /jalpaiguri | upvc windows Jalpaiguri | manufacturers, upvc doors manufacturers, sliding windows Jalpaiguri |

**Blog and machine-readable files**

| URL | Status |
| --- | --- |
| /blog | Built |
| /blog/energy-efficient-door-design | Built — placeholder post, replace |
| /blog/window-aesthetics-trends | Built — placeholder post, replace |
| /blog/durable-window-frame-materials | Built — placeholder post, replace |
| /sitemap.xml | Built — auto-generated, new pages added automatically |
| /robots.txt | Built — allows AI crawlers |
| /llms.txt | Built — add each new city page |

Menu change: replace "Renovations" and "Gallery" in the top menu with a **Locations** dropdown (Siliguri, Guwahati, Bhutan, Hill towns), and move Renovations and Gallery to the footer. City pages need a menu link, not just footer links, or both Google and AI crawlers treat them as low priority.

## Redirect map

Every old URL gets a permanent (301) redirect at launch, so any ranking or backlink the old site earned passes to the new page. The dead URLs are redirected too — people and old links still hit them.

| Old URL | New URL |
| --- | --- |
| /index.php | / |
| /about.php | /about |
| /doors.php | /doors |
| /windows.php | /windows |
| /renovations.php | /renovations |
| /gallery.php | /gallery |
| /luminex-difference.php | /luminex-difference |
| /contact.php | /contact |
| /request-quote.php | /request-quote |
| /services.php | /windows |
| /blog.php | /blog |
| /blog-single.php | /blog |
| /service-single.php | /windows |
| /team-single.php | /about |

All 14 redirects are in `next.config.mjs`.

After launch: submit /sitemap.xml in Google Search Console and Bing Webmaster Tools, then check the Pages report weekly for a month for any old URL still returning 404.
