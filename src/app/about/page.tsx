import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { AnimatedContent } from "@/components/layout/motion";
import { About } from "@/features/company/about";
import { siteUrl } from "@/lib/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About | Intellismart Technology",
  description: "Meet Intellismart Technology and explore our innovation journey, company milestones, and industry recognition.",
  ...(siteUrl && { alternates: { canonical: "/about" } }),
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader about />
      <AnimatedContent as="main" id="main" tabIndex={-1} trigger="mount">
        <About />
      </AnimatedContent>
      <SiteFooter />
    </>
  );
}
