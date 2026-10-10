"use client";
import Script from "next/script";
import { useEffect } from "react";

// Google Analytics 4 + enquiry tracking.
// - GA4 loads only when NEXT_PUBLIC_GA_ID is set AND NEXT_PUBLIC_SITE_ENV=production,
//   so previews and local runs never send data.
// - Events always go to window.dataLayer, so Google Tag Manager can be added later without code changes.
// - Tracked: whatsapp_click (India/Bhutan), phone_click, email_click, generate_lead (form sent to WhatsApp).
//   Mark whatsapp_click and generate_lead as key events in GA4 to count enquiries.
// - Visits from ChatGPT, Perplexity, Gemini and Claude show up in GA4 as referral traffic
//   (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai), which is how AI-search wins are measured.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ENABLED = Boolean(GA_ID) && process.env.NEXT_PUBLIC_SITE_ENV === "production";

type Params = Record<string, string | number | undefined>;
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...params, page_path: window.location.pathname };
  if (window.gtag) window.gtag("event", event, payload);
  else (window.dataLayer = window.dataLayer || []).push({ event, ...payload });
}

export const regionOf = (href: string) => (href.includes("975") ? "bhutan" : "india");

export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.textContent || "").trim().slice(0, 60);
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) track("whatsapp_click", { region: regionOf(href), link_text: label });
      else if (href.startsWith("tel:")) track("phone_click", { region: regionOf(href), link_text: label });
      else if (href.startsWith("mailto:")) track("email_click", { link_text: label });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!ENABLED) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { allow_google_signals: false });
      `}</Script>
    </>
  );
}
