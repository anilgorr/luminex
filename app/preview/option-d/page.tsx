import type { Metadata } from "next";
import DesignD from "../design-d/page";

// Standalone link for client review of Option D: the same page as /preview/design-d,
// without the A–F switcher (the switcher only shows on /preview/design-* paths).
export const metadata: Metadata = {
  title: "Luminex homepage: Option D (preview)",
  robots: { index: false, follow: false },
};

export default DesignD;
