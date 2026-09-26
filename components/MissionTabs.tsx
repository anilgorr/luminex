"use client";
import Image from "next/image";
import { useState } from "react";
const tabs = [
  { key: "mission", label: "Our mission", icon: "/images/icon-mission-nav.svg", img: "/images/mission-image.jpg",
    text: "Our mission is to offer premium windows and doors that combine durability, style, and energy efficiency. We aim to enhance spaces with innovative designs and reliable installation." },
  { key: "vision", label: "Our vision", icon: "/images/icon-vision-nav.svg", img: "/images/vision-image.jpg",
    text: "Our vision is to be the most trusted window and door brand in India and Bhutan — known for products that make homes quieter, cooler and more secure for decades." },
  { key: "value", label: "Our value", icon: "/images/icon-value-nav.svg", img: "/images/value-image.jpg",
    text: "We value honest advice, precise workmanship and long-term relationships. Every project is measured, manufactured and installed by our own team, and backed by a written warranty." },
];
const points = ["Energy-efficient window and door solutions", "Innovative designs tailored to your needs", "Trusted craftsmanship with lasting quality", "Enhanced security features for peace of mind"];
export default function MissionTabs() {
  const [a, setA] = useState(0);
  const t = tabs[a];
  return (
    <div>
      <div className="tabs" role="tablist" style={{ justifyContent: "center" }}>
        {tabs.map((x, i) => (
          <button key={x.key} role="tab" aria-selected={i === a} className={i === a ? "active" : ""} onClick={() => setA(i)}>
            <img src={x.icon} alt="" />{x.label}
          </button>
        ))}
      </div>
      <div className="grid-2" role="tabpanel">
        <div><p>{t.text}</p><ul className="check-list">{points.map((p) => <li key={p}>{p}</li>)}</ul></div>
        <div className="shine"><Image src={t.img} alt={t.label} width={590} height={337} style={{ width: "100%", aspectRatio: "590/337", objectFit: "cover" }} /></div>
      </div>
    </div>
  );
}
