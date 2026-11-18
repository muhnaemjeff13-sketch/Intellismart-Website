import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrAnalyticsOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

const assetRoot = "/media/solutions/hrdotnet-analytics";
const sections = [
  {
    id: "workforce",
    title: "Understand Your Workforce",
    features: [
      { title: "Follow headcount and hiring trends", description: "Compare headcount over time and review new hires alongside separations to understand how your workforce is changing.", image: "workforce-trends", alt: "Headcount Trend and New Hires versus Separations charts", width: 1104, height: 358 },
      { title: "See how your people are distributed", description: "Review employee distribution by department and position level to understand the makeup of your organization.", image: "workforce-distribution", alt: "Employee distribution charts grouped by department and position level", width: 1650, height: 309 },
    ],
  },
  {
    id: "timekeeping",
    title: "See Attendance Patterns Across Teams",
    features: [
      { title: "Compare attendance by department", description: "Review present, absent, tardy, on-leave, and undertime counts together to see attendance patterns across departments.", image: "attendance", alt: "Attendance by Department chart with present, absent, tardy, leave, and undertime counts", width: 828, height: 348 },
      { title: "Follow perfect attendance over time", description: "Track the perfect attendance trend across the selected period and use the dashboard’s date and frequency filters to focus your review.", image: "attendance-trend", alt: "Perfect Attendance Trend line chart across the selected month", width: 827, height: 348 },
    ],
  },
  {
    id: "payroll",
    title: "Put Payroll Figures in Context",
    features: [
      { title: "Track payroll trends and department totals", description: "Compare payroll across months and review its distribution by department to understand how pay amounts vary across the organization.", image: "payroll-trends", alt: "Payroll Trend line chart and Payroll Distribution by Department chart", width: 1104, height: 357 },
      { title: "Review the gross tax trend", description: "See how gross tax changes across the year alongside the payroll dashboard’s other financial trends.", image: "payroll-tax", alt: "Gross Tax area chart showing monthly values throughout the year", width: 1650, height: 309 },
    ],
  },
];

export const metadata: Metadata = {
  title: "HRDotNet Analytics | Intellismart Technology",
  description: "Explore workforce trends, department attendance, and payroll insights in HRDotNet Analytics.",
  ...(siteUrl && { alternates: { canonical: hrAnalyticsOverview.href } }),
};

export default function HRDotNetAnalyticsPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={hrAnalyticsOverview.heroId} className="hr-core-opening" aria-labelledby="analytics-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-analytics">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet Analytics</p>
              <h1 id="analytics-title"><span className="hero-title-gradient">See</span> the bigger picture of your workforce</h1>
              <p className="hr-core-hero-description">Bring HR, timekeeping, and payroll data into view. Follow trends, compare departments, and make informed decisions about your people.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={hrAnalyticsOverview.preview} alt={hrAnalyticsOverview.previewAlt}
                width={hrAnalyticsOverview.width} height={hrAnalyticsOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>
        {sections.map((section, sectionIndex) => (
          <section key={section.id} id={"analytics-" + section.id} className="hr-core-detail"
            data-overview-gradient-end={sectionIndex === 0 ? "" : undefined}
            aria-labelledby={"analytics-" + section.id + "-title"}>
            <div className="container">
              <h2 id={"analytics-" + section.id + "-title"}>{section.title}</h2>
              {section.features.map((feature, index) => (
                <div key={feature.image} className={"hr-core-grid hr-core-feature" + (index % 2 ? " hr-core-feature-reverse" : "")}>
                  <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
                  <figure className={"hr-core-visual" + (index % 2 ? " hr-core-leave" : "")}>
                    <Image src={assetRoot + "/" + feature.image + ".webp"} alt={feature.alt}
                      width={feature.width} height={feature.height} unoptimized />
                  </figure>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
