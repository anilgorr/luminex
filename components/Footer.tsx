import Link from "next/link";
import Image from "next/image";
import { site, telHref, waLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-head">
            <h2>Let&apos;s make your custom product!</h2>
            <Link href="/contact" className="btn btn-light">Contact Us Today</Link>
          </div>
          <div className="footer-grid">
            <div>
              <div className="footer-logo"><Image src="/images/web/luminex-white.png" alt="Luminex" width={600} height={220} /></div>
              <p>{site.tagline}</p>
              <div className="footer-social">
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/windows">Windows</Link></li>
                <li><Link href="/doors">Doors</Link></li>
                <li><Link href="/renovations">Renovations</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/siliguri/upvc-windows">uPVC windows Siliguri</Link></li>
                <li><Link href="/guwahati/upvc-windows">uPVC windows Guwahati</Link></li>
                <li><Link href="/bhutan">Windows in Bhutan</Link></li>
                <li><Link href="/warranty">Warranty</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <div className="contact-row">
                <img src="/images/icon-phone.svg" alt="" />
                <div>
                  <p><strong>India</strong> · <a href={waLink("india")} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                  {site.phones.india.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
                  <p><strong>Bhutan</strong> · <a href={waLink("bhutan")} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                  {site.phones.bhutan.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
                  <p style={{ marginTop: 10 }}>Offices: {site.offices.map((o) => o.city).join(" · ")}</p>
                </div>
              </div>
              <div className="contact-row">
                <img src="/images/icon-mail.svg" alt="" />
                <div>{site.emails.map((e) => <p key={e}><a href={`mailto:${e}`}>{e}</a></p>)}</div>
              </div>
            </div>
            <div>
              <h3>Get The Latest Trending News</h3>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container"><p>Copyright © {new Date().getFullYear()} {site.name}. All Rights Reserved.</p></div>
        </div>
      </footer>
    </>
  );
}
