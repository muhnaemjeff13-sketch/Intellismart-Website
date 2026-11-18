import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { simsOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

const assetRoot = "/media/solutions/simsdotnet";
const description = "Explore purchase orders, goods receiving, sales orders, delivery receipts, and inventory in SIMSDotNet.";

export const metadata: Metadata = {
  title: "SIMSDotNet | Intellismart Technology",
  description,
  ...(siteUrl && { alternates: { canonical: simsOverview.href } }),
};

export default function SIMSDotNetPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={simsOverview.heroId} className="hr-core-opening" aria-labelledby="sims-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-sims">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">SIMSDotNet</p>
              <h1 id="sims-title"><span className="hero-title-gradient">Connect</span> purchasing, sales, and inventory</h1>
              <p className="hr-core-hero-description">Keep purchase orders, received goods, customer orders, and stock details in one management view.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={simsOverview.preview} alt={simsOverview.previewAlt}
                width={simsOverview.width} height={simsOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="sims-purchasing" data-overview-gradient-end aria-labelledby="sims-purchasing-title">
          <div className="container">
            <h2 id="sims-purchasing-title">Purchase Orders and Receiving</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Review what you’re ordering</h3>
                <p>Check item names, particulars, unit costs, quantities, and units of measure together in the purchase order.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/purchase-orders.webp"} alt="Purchase order items with product names, particulars, unit costs, quantities, and units of measure"
                  width={1410} height={328} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Record what arrives, down to the packaging</h3>
                <p>Goods receipts capture each item’s received quantity, unit of measure, and packaging. Review totals separately for kilograms and pieces.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/receiving.webp"} alt="Goods receipt table with quantities, packaging counts, and separate totals for kilograms and pieces"
                  width={1410} height={460} unoptimized />
              </figure>
            </div>
          </div>
        </section>

        <section className="hr-core-detail" id="sims-sales" aria-labelledby="sims-sales-title">
          <div className="container">
            <h2 id="sims-sales-title">Sales Orders and Delivery Receipts</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Keep customer order details together</h3>
                <p>Review the products, particulars, unit prices, and quantities requested by your customer before preparing the delivery.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/sales-orders.webp"} alt="Sales order item table showing customer order particulars, unit prices, and quantities"
                  width={1410} height={328} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Document the items sent out</h3>
                <p>Delivery receipts record item quantities and packaging, with separate totals by unit of measure so your team can review the outgoing goods.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/delivery-receipts.webp"} alt="Delivery receipt showing outgoing item quantities, packaging, and totals by unit of measure"
                  width={1410} height={472} unoptimized />
              </figure>
            </div>
          </div>
        </section>

        <section className="hr-core-detail" id="sims-inventory" aria-labelledby="sims-inventory-title">
          <div className="container">
            <h2 id="sims-inventory-title">Inventory You Can Trace</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>See the detail behind stock on hand</h3>
                <p>Open an item’s information to check its warehouse, available quantity, and unit of measure. Review stock by country of origin, best-before date, and packaging.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/inventory.webp"} alt="Inventory item information with warehouse, quantity, country of origin, best-before dates, and packaging"
                  width={970} height={676} unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
