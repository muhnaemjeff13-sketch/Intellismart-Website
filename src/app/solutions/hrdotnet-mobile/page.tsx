import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrMobileOverview, hrMobileScreens } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";
import "./overview.css";

const description = "Explore GPS clock-in, employee requests, manager approvals, and released payslips in HRDotNet Mobile.";

export const metadata: Metadata = {
  title: "HRDotNet Mobile | Intellismart Technology",
  description,
  ...(siteUrl && { alternates: { canonical: hrMobileOverview.href } }),
};

const requestScreen = {
  src: "/media/solutions/change-of-schedule.webp",
  alt: "Filed Change of Schedule request showing the requested hours and Cancel Request action",
  width: 921,
  height: 2048,
};

const approvalScreen = {
  src: "/media/solutions/schedule-approval.webp",
  alt: "Pending Change of Schedule approval showing the requested hours and approval actions",
  width: 921,
  height: 2048,
};

const featureDetails = {
  gps: {"src":"/media/solutions/hrdotnet-mobile/gps-map.webp","alt":"Captured GPS location shown with a map pin and accuracy reading","width":662,"height":474},
  request: {"src":"/media/solutions/hrdotnet-mobile/schedule-filed.webp","alt":"Change of Schedule request summary with the Filed status","width":839,"height":340},
  approval: {"src":"/media/solutions/hrdotnet-mobile/schedule-actions.webp","alt":"Manager actions to approve or cancel the request","width":839,"height":295},
  payslip: {"src":"/media/solutions/hrdotnet-mobile/payslip-summary.webp","alt":"Payslip summary with cutoff period, net pay, and pay date","width":656,"height":627},
};

export default function HRDotNetMobilePage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview hr-mobile-overview">
        <section id={hrMobileOverview.heroId} className="hr-core-opening" aria-labelledby="hr-mobile-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-mobile">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet Mobile</p>
              <h1 id="hr-mobile-title"><span className="hero-title-gradient">HR</span>, timekeeping, and payroll on your phone</h1>
              <p className="hr-core-hero-description">Clock in, submit requests, review approvals, and view released payslips from HRDotNet Mobile.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual hr-mobile-hero-visual">
            <div className="hr-mobile-phone-trio">
              {[hrMobileScreens.gps, hrMobileScreens.clockIn, hrMobileScreens.payslip].map(screen => (
                <div className="hr-mobile-device" key={screen.src}>
                  <Image {...screen} width={720} height={1600} unoptimized />
                </div>
              ))}
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="hr-mobile-features" data-overview-gradient-end aria-labelledby="hr-mobile-features-title">
          <div className="container">
            <h2 id="hr-mobile-features-title">Mobile Attendance, Requests, Approvals, and Payslips</h2>

            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Check your schedule and confirm clock-in</h3>
                <p>See your assigned schedule and attendance status on Home. When you clock in, review the captured GPS location on the map before confirming.</p>
              </div>
              <figure className="hr-core-visual hr-mobile-screen">
                <div className="hr-mobile-device"><Image {...hrMobileScreens.gps} width={720} height={1600} unoptimized /></div>
                <div className="hr-mobile-screen-callout">
                  <Image {...featureDetails.gps} unoptimized />
                </div>
              </figure>
            </div>

            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>File a Change of Schedule request</h3>
                <p>Review the requested hours, date, and reason after filing a Change of Schedule request. The details screen shows its current status.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave hr-mobile-screen hr-mobile-screen-reverse">
                <div className="hr-mobile-device"><Image {...requestScreen} unoptimized /></div>
                <div className="hr-mobile-screen-callout">
                  <Image {...featureDetails.request} unoptimized />
                </div>
              </figure>
            </div>

            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Review a schedule change for approval</h3>
                <p>Open a pending Change of Schedule request to check the requested hours and submission date before approving it.</p>
              </div>
              <figure className="hr-core-visual hr-mobile-screen">
                <div className="hr-mobile-device"><Image {...approvalScreen} unoptimized /></div>
                <div className="hr-mobile-screen-callout">
                  <Image {...featureDetails.approval} unoptimized />
                </div>
              </figure>
            </div>

            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>View your released payslip</h3>
                <p>See your latest cutoff period, net pay, and pay date, then open the payslip for earnings and deductions.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave hr-mobile-screen hr-mobile-screen-reverse">
                <div className="hr-mobile-device"><Image {...hrMobileScreens.payslip} width={720} height={1600} unoptimized /></div>
                <div className="hr-mobile-screen-callout">
                  <Image {...featureDetails.payslip} unoptimized />
                </div>
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
