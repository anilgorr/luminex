import type { Metadata } from "next";
import DesignDView from "./preview/design-d/DesignDView";
import { site } from "@/lib/site";

// Homepage = Option D on white, approved by the client (16 Nov 2026). The previous homepage
// is in git history (before this commit).
export const metadata: Metadata = {
  title: { absolute: "uPVC & Aluminium Windows and Doors | Luminex Windows" },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return <DesignDView light chrome={false} />;
}
