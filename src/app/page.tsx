import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { Reveal } from "@/components/layout/motion";
import { Clients } from "@/features/company/clients";
import { ClientProjects } from "@/features/company/client-projects";
import { Milestones } from "@/features/company/milestones";
import { ConsultationSection } from "@/features/consultation/section";
import { Hero } from "@/features/hero/hero";
import { ProductExplorer } from "@/features/products/product-explorer";
import { products } from "@/features/products/data";
import { Services } from "@/features/tech-services/services";
import { WhyIntellismart } from "@/features/why-intellismart/why";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Clients />
        <Reveal><WhyIntellismart /></Reveal>
        <section id="products" tabIndex={-1} className="container solution-section" aria-labelledby="products-title">
          <div className="solution-heading">
            <p className="eyebrow">Solutions</p>
            <h2 id="products-title">Software for the way your teams work</h2>
            <div className="solution-heading-bottom">
              <p>Find a product for people, operations or finance.</p>
              <p className="solution-count">{products.length} products</p>
            </div>
          </div>
          <ProductExplorer />
        </section>
        <Reveal><Services /></Reveal>
        <Milestones />
        <ClientProjects />
        <ConsultationSection />
      </main>
      <SiteFooter />
    </>
  );
}
