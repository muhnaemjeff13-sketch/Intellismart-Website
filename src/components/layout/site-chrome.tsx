import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { companyName, companyUrl } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { StickyHeader } from "./sticky-header";

const links = [
  { href: "#products", label: "Solutions" },
  { href: "#services", label: "Technology Services" },
  { href: "/about", label: "About" },
];

function Logo() {
  return <Image src="/media/intellismart-logo.webp" alt="Intellismart Technology" width={228} height={29} className="brand-logo" priority />;
}

export function SiteHeader({ about = false }: { about?: boolean }) {
  const navigation = about ? links.map(link => ({ ...link, href: link.href.startsWith("#") ? "/" + link.href : link.href })) : links;
  const contactHref = about ? "/#contact" : "#contact";
  return (
    <StickyHeader>
      <div className="container header-inner">
        <a href={about ? "/#top" : "#top"} className="brand" aria-label="Intellismart Technology home"><Logo /></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={about && href === "/about" ? "page" : undefined}>{label}</Link>)}
        </nav>
        <a href={contactHref} className="button button-primary header-action">Book a Free Consultation</a>
        <MobileNav links={navigation} contactHref={contactHref} />
      </div>
    </StickyHeader>
  );
}

export function SiteFooter({ about = false }: { about?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href={about ? "/#top" : "#top"} aria-label="Intellismart Technology home"><Logo /></a>
        <p>{companyName}</p>
        <a href={companyUrl}>intellismartinc.com <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
