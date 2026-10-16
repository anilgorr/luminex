import type { Metadata } from "next";
import Link from "next/link";
import s from "./index.module.css";

export const metadata: Metadata = {
  title: "Homepage designs (preview)",
  robots: { index: false, follow: false },
};

const designs = [
  { href: "/preview/design-a", name: "A. Atelier", text: "Cool paper-white and graphite. One large serif headline beside photography that runs off the right edge; quiet, editorial sections." },
  { href: "/preview/design-b", name: "B. Profile", text: "The language of window engineering. Photos framed by a white uPVC frame with a meeting rail, a sash-slide between photos, and specs set out like a data sheet." },
  { href: "/preview/design-c", name: "C. Valley", text: "Stone and slate. A big type-led hero, then the photos as a sideways filmstrip; a dark band for the 3D window and the key facts." },
];

const changes = [
  "Luminex logo on its own; Schüco has its own menu tab and section",
  "Locations removed from the header and listed in the footer",
  "No text on the hero photos; the grey third slide is replaced",
  "uPVC-style handle on the 3D window",
  "No prices on the homepage",
  "Delivery and installation: 30–45 days",
  "Profile warranty: up to 25 years",
  "Guwahati and the Northeast are not promoted on the homepage",
  "Green kept for the top strip, logo and buttons only",
];

export default function PreviewIndex() {
  return (
    <div className={s.page}>
      <h1>Luminex homepage: three designs</h1>
      <p className={s.intro}>Same content in all three. The current homepage at <Link href="/">/</Link> is unchanged.</p>
      <ul className={s.list}>
        {designs.map((d) => (
          <li key={d.href}>
            <Link href={d.href}><h2>{d.name}</h2></Link>
            <p>{d.text}</p>
          </li>
        ))}
      </ul>
      <h2 className={s.sub}>Changes from the 16 October call, in every design</h2>
      <ul className={s.changes}>{changes.map((c) => <li key={c}>{c}</li>)}</ul>
    </div>
  );
}
