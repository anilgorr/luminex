"use client";
import { usePathname } from "next/navigation";

// Hides the site-wide header, footer and WhatsApp button on /preview/* routes, which render
// their own redesigned chrome. Everywhere else the children render unchanged.
export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  if (path?.startsWith("/preview")) return null;
  return <>{children}</>;
}
