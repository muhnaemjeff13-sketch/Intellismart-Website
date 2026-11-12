import type { Metadata } from "next";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource-variable/inter";
import { products } from "@/features/products/data";
import { companyName, companyUrl, description, email, siteUrl } from "@/lib/site";
import "./globals.css";
import "./portfolio.css";

const title = "Software Products & Services | Intellismart Technology";

export const metadata: Metadata = {
  title,
  description,
  ...(siteUrl && { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }),
  keywords: ["Intellismart", "HRDotNet", "SIMSDotNet", "BooksDotNet", "CashBoxDotNet", "business software", "systems integration"],
  openGraph: { title, description, type: "website", siteName: companyName, ...(siteUrl && { url: siteUrl, images: ["/media/connected-business.webp"] }) },
  twitter: { card: "summary_large_image", title, description, ...(siteUrl && { images: ["/media/connected-business.webp"] }) },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: companyName, url: companyUrl, email, ...(siteUrl && { logo: new URL("/media/intellismart-logo.webp", siteUrl).href }) },
      ...(siteUrl ? [{ "@type": "WebSite", name: companyName, url: siteUrl }] : []),
      ...products.map(({ name, pillar, description }) => ({ "@type": "SoftwareApplication", name, applicationCategory: "BusinessApplication", description, applicationSubCategory: pillar, publisher: { "@type": "Organization", name: companyName } })),
    ],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\u003c") }} />
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
