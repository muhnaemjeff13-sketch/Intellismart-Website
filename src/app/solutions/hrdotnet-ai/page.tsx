import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/layout/site-chrome";
import { hrAIOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";
import "../hrdotnet-core/overview.css";

const assetRoot = "/media/solutions/hrdotnet-ai";
const examples = [
  {
    title: "Ask about company policies",
    description: "The sample conversation starts with “What is the dress code policy?” Ask AI presents an organized response covering business attire and uniform rules.",
    image: "policy-answer", width: 1312, height: 605,
    alt: "Sample dress code question and Ask AI response explaining business attire and uniform rules",
  },
  {
    title: "Read the details in one conversation",
    description: "The policy response continues with clothing and footwear guidance, grouped under clear headings so employees can find the part relevant to their question.",
    image: "policy-details", width: 832, height: 400,
    alt: "Continuation of the sample dress code response with clothing and footwear guidance",
  },
  {
    title: "Find leave history with a question",
    description: "In the second example, the employee asks “What is my latest leave history?” Ask AI returns a table of leave transactions with dates, document numbers, particulars, and received and charged amounts.",
    image: "leave-history", width: 1312, height: 612,
    alt: "Sample leave history question with a tabular response showing leave transactions for 2026",
  },
];

export const metadata: Metadata = {
  title: "HRDotNet AI | Intellismart Technology",
  description: "Explore Ask AI in HRDotNet through sample company policy and leave history conversations.",
  ...(siteUrl && { alternates: { canonical: hrAIOverview.href } }),
};

export default function HRDotNetAIPage() {
  return (
    <>
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1} className="hr-core-overview">
        <section id={hrAIOverview.heroId} className="hr-core-opening" aria-labelledby="ai-title">
          <div className="container hr-core-hero-content">
            <Link className="hr-core-link" href="/#solution-hr-ai">
              <ArrowLeft size={16} aria-hidden="true" /> Back to solutions
            </Link>
            <div className="hr-core-hero-copy">
              <p className="eyebrow">HRDotNet AI</p>
              <h1 id="ai-title">Your HR. A <span className="hero-title-gradient">smarter</span> conversation.</h1>
              <p className="hr-core-hero-description">Ask about company policies and HR information in everyday language. Start with a suggested question or type your own in Ask AI.</p>
              <div className="actions">
                <a className="button button-primary" href="/#contact">Book a free consultation</a>
              </div>
            </div>
          </div>
          <figure className="container hr-core-hero-visual">
            <div className="hr-core-dashboard-stage">
              <div className="hr-core-preview-bar" aria-hidden="true"><span /><span /><span /></div>
              <Image src={hrAIOverview.preview} alt={hrAIOverview.previewAlt}
                width={hrAIOverview.width} height={hrAIOverview.height} unoptimized preload />
            </div>
          </figure>
        </section>
        <section className="hr-core-detail" id="ai-conversations" data-overview-gradient-end aria-labelledby="ai-conversations-title">
          <div className="container">
            <h2 id="ai-conversations-title">See Ask AI in Conversation</h2>
            {examples.map((example, index) => (
              <div key={example.image} className={"hr-core-grid hr-core-feature" + (index % 2 ? " hr-core-feature-reverse" : "")}>
                <div><h3>{example.title}</h3><p>{example.description}</p></div>
                <figure className={"hr-core-visual" + (index % 2 ? " hr-core-leave" : "")}>
                  <Image src={assetRoot + "/" + example.image + ".webp"} alt={example.alt}
                    width={example.width} height={example.height} unoptimized />
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
