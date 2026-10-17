import type { Metadata } from "next";
import Link from "next/link";
import s from "./index.module.css";

export const metadata: Metadata = {
  title: "Homepage designs (preview)",
  robots: { index: false, follow: false },
};

const round2 = [
  { href: "/preview/design-d", name: "D. Obsidian", text: "Warm black, ivory and anodised bronze. A full-screen cinematic photo slider with a slow push-in; Bodoni headlines on the dark band beneath. Dark, rich and image-led." },
  { href: "/preview/design-e", name: "E. Anthracite", text: "Anthracite grey (RAL 7016), white and aluminium. The hero is a glazed wall: one panoramic photo seen through three tall panes, changing pane by pane. Precise and architectural." },
  { href: "/preview/design-f", name: "F. Daylight", text: "Sky white, Himalayan navy and brass. A layered photo collage with a Schüco partner plaque; overlapping photographs and cards throughout. Light, airy, hotel-like." },
];

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
  "Green kept for the top strip, the logo and the header quote button",
];

export default function PreviewIndex() {
  return (
    <div className={s.page}>
      <h1>Luminex homepage designs</h1>
      <p className={s.intro}>Same content in every design. The current homepage at <Link href="/">/</Link> is unchanged.</p>
      <h2 className={s.sub}>Round 2: premium (17 October)</h2>
      <ul className={s.list}>
        {round2.map((d) => (
          <li key={d.href}>
            <Link href={d.href}><h2>{d.name}</h2></Link>
            <p>{d.text}</p>
          </li>
        ))}
      </ul>
      <h2 className={s.sub}>Round 1 (16 October)</h2>
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
