import type { Metadata } from "next";
import DesignDView from "./DesignDView";

export const metadata: Metadata = {
  title: "Homepage design D: Obsidian (preview)",
  robots: { index: false, follow: false },
};

export default function DesignD() {
  return <DesignDView />;
}
