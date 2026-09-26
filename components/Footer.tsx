import Link from "next/link";
import Image from "next/image";
import { site, telHref } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <div className="ticker-move" key={k}>
              <span>Schedule a Free Consultation for Window and Door Replacement</span>
              <span>Schedule a Free Consultation for Window and Door Replacement</span>
            </div>
          ))}
        </div>
      </div>
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
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <div className="contact-row">
                <img src="/images/icon-phone.svg" alt="" />
                <div>
                  <p><strong>India</strong></p>
                  {site.phones.india.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
                  <p><strong>Bhutan</strong></p>
                  {site.phones.bhutan.map((p) => <p key={p}><a href={telHref(p)}>{p}</a></p>)}
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
