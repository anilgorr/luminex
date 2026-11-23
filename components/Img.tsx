"use client";
import ExportedImage from "next-image-export-optimizer";
import type { ComponentProps } from "react";

// next/image replacement for the static export: responsive WebP made at build time.
// No blur placeholder: it adds a request per image and delays the main image's paint (LCP).
export default function Img(props: ComponentProps<typeof ExportedImage>) {
  return <ExportedImage placeholder="empty" {...props} />;
}
