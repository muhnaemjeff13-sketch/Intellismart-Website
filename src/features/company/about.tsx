import Image from "next/image";
import { company } from "./data";
import { Clients } from "./clients";
import { companyName } from "@/lib/site";

const process = [
  ["Plan", "Understand your team’s workflows and priorities."],
  ["Implement", "Configure and integrate your solution."],
  ["Support", "Train users and provide ongoing local assistance."],
];

export function About() {
  return <section id="about" tabIndex={-1} className="about-sections" aria-labelledby="about-title">
    <div className="container about-overview">
      <div><p className="eyebrow">About</p><h2 id="about-title">About Intellismart Technology</h2><p>Business software, integration, training and ongoing local support.</p></div>
      <Image src="/media/integration-team.webp" alt="Technology team collaborating around business dashboards" width={416} height={384} sizes="(max-width: 780px) 90vw, 45vw" />
    </div>
    <div className="container about-work">
      <h3>How we work with clients</h3>
      <div className="process-grid">{process.map(([title, description]) => <article key={title}><h4>{title}</h4><p>{description}</p></article>)}</div>
    </div>
    <article className="container about-work">
      <h3>A message from our CEO</h3>
      {company.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <p><strong>Mr. Gerry Sy</strong><br />Chief Executive Officer, {companyName}</p>
    </article>
    <div className="container about-work">
      <h3>Mission, vision and values</h3>
      <div className="process-grid">
        <article><h4>Mission</h4><p>{company.mission}</p></article>
        <article><h4>Vision</h4><p>{company.vision}</p></article>
        <article><h4>Values</h4><p>{company.values.join(" · ")}</p></article>
      </div>
    </div>
    <Clients about />
  </section>;
}
