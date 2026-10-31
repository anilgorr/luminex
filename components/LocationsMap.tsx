"use client";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { locations } from "@/lib/site";
import s from "./footer.module.css";

// "Where we work" map (client, 31 Oct): one pin per city, each opening the city's pages.
// Leaflet and the map tiles load only when the footer scrolls into view, so the map costs
// nothing on first load. The same links stay in the HTML as a plain list for crawlers.
const pins = locations
  .filter((l) => l.lat !== undefined)
  .map((l) => ({ ...l, pages: locations.filter((p) => p.place === l.place) }));

export default function LocationsMap() {
  const box = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!show || !box.current) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !box.current) return;
      map = L.map(box.current, { scrollWheelZoom: false, attributionControl: true, zoomControl: true });
      // OpenStreetMap tiles (no key, light use). Swap for a Google My Maps embed or a keyed
      // Google Maps layer at launch if the client prefers Google's look.
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      const icon = L.divIcon({ className: s.pin, html: "<span></span>", iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -8] });
      const bounds = L.latLngBounds([]);
      pins.forEach((p) => {
        const ll = L.latLng(p.lat as number, p.lng as number);
        bounds.extend(ll);
        const links = p.pages.map((pg) => `<a href="${pg.href}">${pg.label.replace(" · ", " – ")}</a>`).join("<br>");
        L.marker(ll, { icon, title: p.place, alt: p.place }).addTo(map!).bindPopup(`<strong>${p.place}</strong><br>${links}`).bindTooltip(p.place, { direction: "top", offset: [0, -8] });
      });
      map.fitBounds(bounds, { padding: [24, 24] });
    });
    return () => { cancelled = true; map?.remove(); };
  }, [show]);

  return <div ref={box} className={s.map} role="region" aria-label="Map of the cities where Luminex works" />;
}
