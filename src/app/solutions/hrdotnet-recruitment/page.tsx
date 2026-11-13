import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrRecruitmentOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

const assetRoot = "/media/solutions/hrdotnet-recruitment";
const description = "Explore the candidate application process, recruitment funnel, applicant sources, and offer acceptance trends in HRDotNet Recruitment.";

export const metadata: Metadata = {
  title: "HRDotNet Recruitment | Intellismart Technology",
  description,
  ...(siteUrl && { alternates: { canonical: hrRecruitmentOverview.href } }),
};

export default function HRDotNetRecruitmentPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={hrRecruitmentOverview.heroId} className="hr-core-opening" aria-labelledby="hr-recruitment-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-recruitment">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet Recruitment</p>
              <h1 id="hr-recruitment-title"><span className="hero-title-gradient">Follow</span> candidates from application to hire</h1>
              <p className="hr-core-hero-description">Track vacancies, applicants, interviews, and offers in one recruitment workspace.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={hrRecruitmentOverview.preview} alt={hrRecruitmentOverview.previewAlt}
                width={hrRecruitmentOverview.width} height={hrRecruitmentOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>

        <section className="hr-core-detail" id="hr-recruitment-application" data-overview-gradient-end aria-labelledby="hr-recruitment-application-title">
          <div className="container">
            <h2 id="hr-recruitment-application-title">The Candidate Application Process</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Find a vacancy and review the role</h3>
                <p>Browse open positions and check the job description, qualifications, work setup, and employment type. Select Apply Now to start an application for the role.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/job-search.webp"} alt="Vacancy list next to the UI and UX Designer job description and Apply Now button"
                  width={1740} height={466} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Start the application</h3>
                <p>The selected vacancy appears as the first-choice position. Candidates can add a second choice, enter their desired salary and availability, and fill in their personal details.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/application-details.webp"} alt="Application Form step one, General and Personal Information, with the selected position already filled in"
                  width={1382} height={813} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Add education and qualifications</h3>
                <p>In the Education Record step, candidates enter their school, course, and years attended, with room for additional education records, professional licenses, and certifications.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/education-record.webp"} alt="Application Form step two, Education Record, with fields for schools, courses, licenses, and certifications"
                  width={1382} height={813} unoptimized />
              </figure>
            </div>
          </div>
        </section>

        <section className="hr-core-detail" id="hr-recruitment-features" aria-labelledby="hr-recruitment-features-title">
          <div className="container">
            <h2 id="hr-recruitment-features-title">Recruitment Funnel, Sources, and Offer Acceptance</h2>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>See candidates at each hiring stage</h3>
                <p>Compare applicant, interview, offer, hire, and archived counts in the Recruitment Funnel. Switch the view between year, month, and week.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/funnel.webp"} alt="Recruitment Funnel chart showing monthly counts by hiring stage"
                  width={1598} height={439} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature hr-core-feature-reverse">
              <div>
                <h3>Compare where applicants and hires come from</h3>
                <p>Use Source Efficiency to compare applicant and hire counts across channels such as referrals, Jobstreet, and walk-ins.</p>
              </div>
              <figure className="hr-core-visual hr-core-leave">
                <Image src={assetRoot + "/source-efficiency.webp"} alt="Source Efficiency chart comparing applications and hires by recruiting channel"
                  width={786} height={236} unoptimized />
              </figure>
            </div>
            <div className="hr-core-grid hr-core-feature">
              <div>
                <h3>Review offer acceptance trends</h3>
                <p>Use the Offer Acceptance Rate chart to review how acceptance changes over time.</p>
              </div>
              <figure className="hr-core-visual">
                <Image src={assetRoot + "/offer-acceptance.webp"} alt="Offer Acceptance Rate line chart by month"
                  width={792} height={236} unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
