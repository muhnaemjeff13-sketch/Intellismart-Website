import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrPerformanceOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

const assetRoot = "/media/solutions/hrdotnet-performance";
const features = [
  {
    title: "See the review cycle at a glance",
    description: "Check total review assignments, the completion rate, pending reviews, and verified accomplishments for the selected evaluation period.",
    image: "review-totals",
    alt: "Performance summary cards for review assignments, completion rate, pending reviews, and verified accomplishments",
    width: 1259,
    height: 212,
  },
  {
    title: "Know where reviews stand",
    description: "Follow assignments from not started through completion. The review status chart shows how many are in progress, submitted, completed, or locked, with an overdue count below.",
    image: "review-status",
    alt: "Review Status chart with completion percentage, assignment status counts, and overdue reviews",
    width: 632,
    height: 426,
  },
  {
    title: "Track accomplishment verification",
    description: "Review employee submissions for the selected cycle. Compare draft, submitted, returned, and verified records to see what is ready and what still needs attention.",
    image: "accomplishments",
    alt: "Accomplishment Verification showing draft, submitted, returned, and verified employee records",
    width: 632,
    height: 426,
  },
];

export const metadata: Metadata = {
  title: "HRDotNet Performance | Intellismart Technology",
  description: "Explore review completion, pending assignments, and accomplishment verification in HRDotNet Performance.",
  ...(siteUrl && { alternates: { canonical: hrPerformanceOverview.href } }),
};

export default function HRDotNetPerformancePage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={hrPerformanceOverview.heroId} className="hr-core-opening" aria-labelledby="performance-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-performance">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet Performance</p>
              <h1 id="performance-title"><span className="hero-title-gradient">Clear</span> goals. Better performance.</h1>
              <p className="hr-core-hero-description">Keep review activity and accomplishment verification in view. See progress across your organization and identify the work that needs attention.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={hrPerformanceOverview.preview} alt={hrPerformanceOverview.previewAlt}
                width={hrPerformanceOverview.width} height={hrPerformanceOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>
        <section className="hr-core-detail" id="performance-reviews" data-overview-gradient-end aria-labelledby="performance-reviews-title">
          <div className="container">
            <h2 id="performance-reviews-title">Keep Every Review Cycle Moving</h2>
            {features.map((feature, index) => (
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
      </main>
      <SiteFooter />
    </>
  );
}
