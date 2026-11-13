import Image from "next/image";
import Link from "next/link";
import { companyUrl, email } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { StickyHeader } from "./sticky-header";

const aboutHref = "/about#top";

const links = [
  { href: "#products", label: "Solutions" },
  { href: "#services", label: "Technology Services" },
  { href: aboutHref, label: "About" },
];

function Logo() {
  return <Image src="/media/intellismart-logo.webp" alt="Intellismart Technology" width={228} height={29} className="brand-logo" priority />;
}

export function SiteHeader({ about = false, innerPage = false }: { about?: boolean; innerPage?: boolean }) {
  const awayFromHome = about || innerPage;
  const navigation = awayFromHome ? links.map(link => ({ ...link, href: link.href.startsWith("#") ? "/" + link.href : link.href })) : links;
  const contactHref = awayFromHome ? "/#contact" : "#contact";
  return (
    <StickyHeader>
      <div className="container header-inner">
        <a href={awayFromHome ? "/#top" : "#top"} className="brand" aria-label="Intellismart Technology home"><Logo /></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(({ href, label }) => awayFromHome || href === aboutHref
            ? <a key={href} href={href} aria-current={about && href === aboutHref ? "page" : undefined}>{label}</a>
            : <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a href={contactHref} className="button button-primary header-action">Book a Free Consultation</a>
        <MobileNav links={navigation} contactHref={contactHref} />
      </div>
    </StickyHeader>
  );
}


const footerSocials = [
  { label: "Facebook", href: "https://www.facebook.com/Intellismartinc", mark: <path fill="currentColor" d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.3 0-1.5-.2-2.8-.2-2.9 0-4.9 1.8-4.9 5v2.3H7V13h3v9z" /> },
  { label: "Instagram", href: "https://www.instagram.com/intellismart_technology/", mark: <g fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></g> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/intellismarttechnology/", mark: <path fill="currentColor" d="M3 9h4v12H3zm2-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4 6h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.5 4.7 5.8V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9z" /> },
];

export function SiteFooter() {
  const groups = [
    { title: "Explore", items: [["Solutions", "/#products"], ["Technology Services", "/#services"], ["About", aboutHref]] },
    { title: "Contact", items: [["Book a Free Consultation", "/#contact"], ["Email Software Sales", "mailto:" + email], ["Corporate Website", companyUrl]] },
    { title: "Legal", items: [["Privacy Policy", companyUrl + "/privacy-policy/"], ["Terms of Service", companyUrl + "/terms-conditions/"]] },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {groups.map(({ title, items }) => (
            <nav key={title} aria-label={title + " footer links"}>
              <h2>{title}</h2>
              <ul>
                {items.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
              </ul>
            </nav>
          ))}
          <nav aria-label="Social footer links">
            <h2>Social</h2>
            <ul className="footer-socials">
              {footerSocials.map(({ label, href, mark }) => (
                <li key={href}>
                  <a href={href} aria-label={label}>
                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{mark}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="footer-copyright">@2026 Intellismart Technology Inc. All rights reserved</p>
      </div>
    </footer>
  );
}
