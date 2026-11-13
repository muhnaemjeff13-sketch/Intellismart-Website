import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { booksOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

export const metadata: Metadata = {
  title: "BooksDotNet | Intellismart Technology",
  description: "Explore the financial dashboard and Journal Voucher module in BooksDotNet.",
  ...(siteUrl && { alternates: { canonical: booksOverview.href } }),
};

export default function BooksDotNetPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={booksOverview.heroId} className="hr-core-opening" aria-labelledby="books-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-books">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">BooksDotNet</p>
              <h1 id="books-title"><span className="hero-title-gradient">See</span> where your business stands</h1>
              <p className="hr-core-hero-description">Track revenue, expenses, net profit, and outstanding invoices from one financial dashboard.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={booksOverview.preview} alt={booksOverview.previewAlt}
                width={booksOverview.width} height={booksOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="books-dashboard" data-overview-gradient-end aria-labelledby="books-dashboard-title">
          <div className="container">
            <h2 id="books-dashboard-title">Financial Dashboard</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Monitor financial totals</h3>
                <p>See total revenue, expenses, and net profit with changes from the previous period. The outstanding invoices card shows the unpaid balance and how many invoices are overdue.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src="/media/solutions/booksdotnet/financial-totals.webp" alt="Financial totals for revenue, expenses, net profit, and outstanding invoices"
                  width={1586} height={157} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Compare revenue and expenses over time</h3>
                <p>Read both series on the same chart to see when income and spending rise or fall and spot unusually large movements.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src="/media/solutions/booksdotnet/revenue-expenses.webp" alt="Line chart comparing revenue and expenses by date"
                  width={1025} height={318} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>See where spending goes</h3>
                <p>The expense breakdown shows total expenses and the share spent on payroll, operations, utilities, marketing, and other costs.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src="/media/solutions/booksdotnet/expense-breakdown.webp" alt="Expense breakdown donut chart with category percentages"
                  width={545} height={318} unoptimized />
              </figure>
            </div>
          </div>
        </section>

        <section className="hr-core-detail" id="books-journal-voucher" aria-labelledby="books-journal-title">
          <div className="container">
            <h2 id="books-journal-title">Journal Vouchers in Books of Accounts</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Find and review journal vouchers</h3>
                <p>Search by voucher number, account name, or reference. Review each voucher’s source, amount, and posting status in the list.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src="/media/solutions/booksdotnet/voucher-list.webp" alt="Journal Voucher list with search fields, amounts, and posting statuses"
                  width={1598} height={417} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Enter and balance journal lines</h3>
                <p>Assign accounts, cost centers, and subsidiaries to each line. Compare debit and credit totals before posting the voucher.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src="/media/solutions/booksdotnet/voucher-lines.webp" alt="Journal lines showing account codes, cost centers, debit and credit totals, and the difference"
                  width={1362} height={394} unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
