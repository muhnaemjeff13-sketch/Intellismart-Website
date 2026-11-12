import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";

export const metadata: Metadata = {
  title: "About | Intellismart Technology",
  robots: { index: false },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader about />
      <main id="main" tabIndex={-1} className="about-placeholder" aria-label="About" />
      <SiteFooter about />
    </>
  );
}
