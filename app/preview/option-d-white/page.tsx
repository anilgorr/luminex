import type { Metadata } from "next";
import DesignDView from "../design-d/DesignDView";

// Standalone review link: Option D on a white background (client request, 28 Oct).
export const metadata: Metadata = {
  title: "Luminex homepage: Option D, white (preview)",
  robots: { index: false, follow: false },
};

export default function OptionDWhite() {
  return <DesignDView light />;
}
