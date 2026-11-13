import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { cashBoxOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";
import "./overview.css";

const assetRoot = "/media/solutions/cashboxdotnet";
const description = "Explore cash balances, expenses, and the cash request approval workflow in CashBoxDotNet.";

export const metadata: Metadata = {
  title: "CashBoxDotNet | Intellismart Technology",
  description,
  ...(siteUrl && { alternates: { canonical: cashBoxOverview.href } }),
};

export default function CashBoxDotNetPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={cashBoxOverview.heroId} className="hr-core-opening" aria-labelledby="cashbox-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-cashbox">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">CashBoxDotNet</p>
              <h1 id="cashbox-title"><span className="hero-title-gradient">Track</span> petty cash from release to expense</h1>
              <p className="hr-core-hero-description">See recorded cash, compare replenishments and releases, and review where petty cash was spent.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={cashBoxOverview.preview} alt={cashBoxOverview.previewAlt}
                width={cashBoxOverview.width} height={cashBoxOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="cashbox-features" data-overview-gradient-end aria-labelledby="cashbox-features-title">
          <div className="container">
            <h2 id="cashbox-features-title">Cash Balances, Movement, and Expense Breakdown</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Check recorded cash and outstanding advances</h3>
                <p>See recorded cash in the funds you oversee alongside the amount tied up in outstanding advances.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/cash-balances.webp"} alt="Recorded cash and outstanding advance exposure cards"
                  width={854} height={165} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Compare replenishments and cash releases</h3>
                <p>Use Cash Movement to compare cash coming in through replenishments with cash going out through releases over the selected period.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/cash-movement.webp"} alt="Cash Movement chart showing replenishments and cash releases"
                  width={985} height={401} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>See where petty cash was spent</h3>
                <p>Review the total accepted expenses and compare how much was spent in each category, such as office supplies and transportation.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/expense-breakdown.webp"} alt="Expense Breakdown chart with accepted expenses grouped by category"
                  width={570} height={401} unoptimized />
              </figure>
            </div>
          </div>
        </section>

        <section className="hr-core-detail" id="cashbox-requests" aria-labelledby="cashbox-requests-title">
          <div className="container">
            <h2 id="cashbox-requests-title">Create, Review, and Approve Cash Requests</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Create a cash request</h3>
                <p>Choose the petty cash fund, explain the purpose, and itemize estimated expenses. Save a draft or submit the request for approval.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/create-cash-request.webp"} alt="Create Cash Request form with general information, an estimated expense item, and Save as Draft and Submit actions"
                  width={1629} height={804} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Review the request and estimated expenses</h3>
                <p>Approvers can check the requested amount, purpose, and itemized estimates before deciding whether to approve or reject the request.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/cash-request-review.webp"} alt="Pending Approval request details with estimated expenses and Reject and Approve Request actions"
                  width={1200} height={917} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Confirm the approval</h3>
                <p>The confirmation shows the amount and requester. The cash balance changes when the custodian records the release.</p>
              </div>
              <figure className="cashbox-approval-preview" aria-label="Cash request approval confirmation preview">
                <div className="cashbox-approval-copy">
                  <CircleCheck size={22} aria-hidden="true" />
                  <strong>Approve Cash Request?</strong>
                  <p>Authorize ₱2,850.00 for Isabella Reyes. Cash will change only when the custodian records the release.</p>
                </div>
                <div className="cashbox-approval-actions">
                  <span>Cancel</span>
                  <span>Approve Cash Request</span>
                </div>
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>View released request details</h3>
                <p>After release, the request shows the release date, cash voucher, and liquidation due date. Start liquidation from the same record.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/cash-request-details.webp"} alt="Released cash request showing the voucher, liquidation due date, and Create Liquidation action"
                  width={1207} height={918} unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
