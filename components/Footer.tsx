import Link from "next/link";
import Image from "next/image";
import { locations, site, telHref, waLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { WhatsAppIcon } from "./WhatsAppButton";
import LocationsMap from "./LocationsMap";
import s from "./footer.module.css";

// Site footer (client, 31 Oct): Luminex green to match the top strip; "Where we work" is a map
// with a pin per city. The location pages stay linked in plain HTML under the map, because
// these links carry the local SEO and the answers AI engines quote.
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.head}>
          <h2>Planning windows for a new build or a replacement?</h2>
          <div className={s.btns}>
            <a href={waLink("india")} target="_blank" rel="noopener noreferrer" className={s.btn}><WhatsAppIcon size={18} /> WhatsApp India</a>
            <a href={waLink("bhutan")} target="_blank" rel="noopener noreferrer" className={s.btn}><WhatsAppIcon size={18} /> WhatsApp Bhutan</a>
            <Link href="/request-quote" className={`${s.btn} ${s.btnSolid}`}>Request a quote</Link>
          </div>
        </div>
        <div className={s.grid}>
          <div>
            <Image src="/images/web/luminex-white.png" alt="Luminex" width={600} height={220} className={s.logo} />
            <p>{site.tagline}</p>
            <div className={s.social}>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Luminex on Facebook"><FacebookIcon size={18} /></a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Luminex on Instagram"><InstagramIcon size={18} /></a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <ul className={s.list}>
              <li><Link href="/windows">Windows</Link></li>
              <li><Link href="/doors">Doors</Link></li>
              <li><Link href="/#schuco">Schüco</Link></li>
              <li><Link href="/renovations">Renovations</Link></li>
              <li><Link href="/luminex-difference">Luminex Difference</Link></li>
              <li><Link href="/warranty">Warranty</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className={s.where}>
            <h3>Where we work</h3>
            <LocationsMap />
            <ul className={s.places}>
              {locations.map((l) => <li key={l.href}><Link href={l.href}>{l.label.replace(" · ", " – ")}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p className={s.label}>India</p>
            {site.phones.india.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
            <p className={s.label}>Bhutan</p>
            {site.phones.bhutan.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
            <p className={s.label}>Email</p>
            <p><a href={`mailto:${site.emails[0]}`}>{site.emails[0]}</a></p>
            <p className={s.label}>Siliguri office</p>
            <address>{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}</address>
          </div>
        </div>
        <div className={s.copy}>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
