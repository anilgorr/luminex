"use client";
import { useState } from "react";
import { site, waLink } from "@/lib/site";

export const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>
  </svg>
);

// Floating WhatsApp button — the client's primary enquiry channel. Lets visitors pick India or Bhutan.
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wa-float">
      {open && (
        <div className="wa-menu" role="menu">
          <p>Chat with Luminex on WhatsApp</p>
          {(["india", "bhutan"] as const).map((r) => (
            <a key={r} role="menuitem" href={waLink(r)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> <span><strong>{site.whatsapp[r].label}</strong> {site.whatsapp[r].display}</span>
            </a>
          ))}
        </div>
      )}
      <button className="wa-btn" aria-label="Chat on WhatsApp" aria-expanded={open} onClick={() => setOpen(!open)}>
        <WhatsAppIcon size={30} />
      </button>
    </div>
  );
}
