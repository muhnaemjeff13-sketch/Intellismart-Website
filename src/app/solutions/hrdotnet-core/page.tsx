import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrCoreOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "./overview.css";

const assetRoot = "/media/solutions/hrdotnet-core";
const description = "Explore the HRDotNet Core employee dashboard and see how timekeeping and payroll processing work.";

export const metadata: Metadata = {
  title: "HRDotNet Core | Intellismart Technology",
  description,
  ...(siteUrl && { alternates: { canonical: hrCoreOverview.href } }),
};

export default function HRDotNetCorePage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={hrCoreOverview.heroId} className="hr-core-opening" aria-labelledby="hr-core-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-core"><ArrowLeft size={16} aria-hidden="true" /> Back to solutions</Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet Core</p>
              <h1 id="hr-core-title"><span className="hero-title-gradient">HR</span>, timekeeping, and payroll in one place</h1>
              <p className="hr-core-hero-description">Employees can check leave and attendance. HR teams can review timekeeping and run payroll.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={assetRoot + "/dashboard-sneak-peek-sharp.webp"} alt="HRDotNet Core Leave Credits and the upper portions of the Time at work and Time Record charts"
                width={802} height={388} unoptimized preload />
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="hr-core-dashboard" data-overview-gradient-end aria-labelledby="hr-core-dashboard-title">
          <div className="container">
            <h2 id="hr-core-dashboard-title">Employee Dashboard, Timekeeping, and Payroll</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Check leave balances at a glance</h3>
                <p>Employees can see their vacation leave, sick leave, and compensatory time off together before planning time away.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/leave-clear.webp"} alt="Leave Credits card showing vacation leave, sick leave, and compensatory time off"
                  width={802} height={138} sizes="(min-width: 900px) 55vw, 92vw" unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>See how work hours are recorded</h3>
                <p>Compare hours across the week and see how the selected period breaks down into attendance, absences, tardiness, and undertime.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/attendance-clear.webp"} alt="Weekly time-at-work bar chart and a time record chart broken down by attendance status"
                  width={802} height={455} sizes="(min-width: 900px) 55vw, 92vw" unoptimized />
              </figure>
            </div>
            <div id="hr-core-workflow-title" className="hr-core-grid hr-core-feature">
              <div>
                <h3>Review a completed timekeeping period</h3>
                <p>Open a timekeeping record to check its cutoff period, coverage dates, and posting status.</p>
              </div>
              <figure className="hr-core-visual hr-core-workflow-visual hr-core-workflow-visual-right">
                <Image src={assetRoot + "/timekeeping-processing-clear.webp"} alt="Timekeeping Processing overview showing a completed record, cutoff period, and posting date"
                  width={875} height={502} sizes="(min-width: 900px) 55vw, 92vw" unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Start a payroll run from a timekeeping record</h3>
                <p>Select a timekeeping process, then review the payroll period, group, and pay date before generating payroll.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave hr-core-workflow-visual hr-core-workflow-visual-left">
                <Image src={assetRoot + "/payroll-processing-clear.webp"} alt="New Payroll Processing form showing the selected timekeeping process, payroll period, and pay date"
                  width={876} height={502} sizes="(min-width: 900px) 55vw, 92vw" unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
