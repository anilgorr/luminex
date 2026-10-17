import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./index.module.css";

export const metadata: Metadata = {
  title: "Homepage designs (preview)",
  robots: { index: false, follow: false },
};

const options = [
  { id: "a", name: "Atelier", text: "Cool white and graphite. A large serif headline beside a photo that runs off the right edge; quiet and editorial." },
  { id: "b", name: "Profile", text: "The photo sits inside a white uPVC window frame with a centre rail and slides across like a sash. Specs laid out like a data sheet." },
  { id: "c", name: "Valley", text: "Stone and slate. A big type-led hero, then the photos as a sideways filmstrip; a dark band for the 3D window and key facts." },
  { id: "d", name: "Obsidian", text: "Warm black, ivory and bronze. A full-screen photo slider that slowly zooms in, with the headline on a dark band beneath. Rich and image-led." },
  { id: "e", name: "Anthracite", text: "Anthracite grey, white and aluminium. One wide photo seen through three tall panes like a glazed wall, changing pane by pane." },
  { id: "f", name: "Daylight", text: "Sky white, deep navy and brass. Overlapping photos with a Schüco partner badge; light, airy and hotel-like." },
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
      <header className={s.head}>
        <p className={s.client}>Luminex Windows</p>
        <h1>Homepage options A to F</h1>
        <p className={s.intro}>Same content in every option. Open one and use the A–F bar at the bottom of the screen to switch between them. The current homepage at <Link href="/">/</Link> is unchanged.</p>
      </header>
      <ul className={s.grid}>
        {options.map((o) => (
          <li key={o.id}>
            <Link href={`/preview/design-${o.id}`} className={s.card}>
              <Image src={`/preview-thumbs/${o.id}.jpg`} alt={`Option ${o.id.toUpperCase()}, ${o.name}: top of the homepage`} width={720} height={450} sizes="(max-width: 860px) 100vw, 33vw" />
              <span className={s.cardText}>
                <span className={s.letter}>Option {o.id.toUpperCase()}</span>
                <h2>{o.name}</h2>
                <p>{o.text}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className={s.sub}>Changes from the 16 October call, in every option</h2>
      <ul className={s.changes}>{changes.map((c) => <li key={c}>{c}</li>)}</ul>
    </div>
  );
}
