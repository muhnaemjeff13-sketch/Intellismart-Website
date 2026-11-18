import Image from "next/image";
import { ArrowDown, ArrowRight, Award, Compass, Handshake, HeartHandshake, Lightbulb, ShieldCheck, Target, UsersRound } from "lucide-react";
import { AwardsTimeline, InnovationCarousel, MilestoneTimeline } from "./about-rails";
import { company } from "./data";

const awards = [
  ["2013", ["Samsung named Intellismart its Enterprise Display Solutions Partner of the Year."]],
  ["2016", ["Dell recognized Intellismart as a Tier 2 Rising Star in its commercial segment."]],
  ["2017", ["Dell EMC named Intellismart Tier 2 Partner of the Year for client solutions."]],
  ["2018", ["Epson Philippines recognized Intellismart for leading POS/TM sales.", "Samsung named Intellismart Corporate Reseller of the Year for professional displays."]],
  ["2019", ["Vimar recognized Intellismart for the best By-Me project in Asia.", "Iontech recognized Intellismart’s support for its enterprise solutions division.", "Samsung again named Intellismart Corporate Reseller of the Year for professional displays."]],
  ["2020", ["Epson Philippines named Intellismart its top projector dealer."]],
  ["2021", ["ASUS recognized Intellismart as a Rising Star at its Zenith Awards.", "Epson recognized Intellismart as a top dealer and pro-AV partner for B2B sales."]],
  ["2022", ["Epson recognized Intellismart for leading enterprise projector sales in FY21."]],
  ["2023", ["ASUS named Intellismart its fastest-growing partner.", "Epson recognized Intellismart for leading HS VI sales in its FY22 corporate and government segment."]],
  ["2025", ["Samsung again recognized Intellismart as its Enterprise Display Solutions Partner of the Year."]],
] as const;

const valueIcons = {
  Innovation: Lightbulb,
  Integrity: ShieldCheck,
  Excellence: Award,
  Collaboration: UsersRound,
  "Customer Focus": HeartHandshake,
  Loyalty: Handshake,
};

export function About() {
  return (
    <div className="company-about">
      <section className="about-hero" aria-labelledby="about-title">
        <Image className="about-hero-background" src="/media/about/conference-hero.webp" alt="" fill sizes="100vw" preload unoptimized />
        <div className="container about-hero-content">
          <p className="eyebrow">About Intellismart Technology</p>
          <h1 id="about-title"><span className="hero-title-gradient">Technology</span> Built Around Your Business.</h1>
          <p className="about-lead">Founded in Ontario in 2000, Intellismart opened its first Philippine office in 2003. Today, our Quezon City team helps businesses plan, implement, and support the technology they use every day.</p>
          <nav className="about-jump-links" aria-label="On this page">
            <a href="#our-story">Our story <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="#innovation">Innovation <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="#ceo-message">CEO message <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="#milestones">Milestones <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="#recognition">Awards <ArrowDown size={15} aria-hidden="true" /></a>
          </nav>
        </div>
      </section>

      <section className="about-story" id="our-story" aria-labelledby="about-story-title">
        <div className="container about-section">
          <div className="about-story-intro">
            <h2 id="about-story-title">Our story</h2>
            <p>Intellismart began as a software development company in Ontario, Canada, in 2000. Three years later, we opened our first Philippine office in Quezon City.</p>
            <p>As our work grew, we added systems integration and partnered with technology brands. Today, we combine software, equipment, and engineering to build integrated solutions around each client’s needs.</p>
          </div>
          <div className="about-principles">
            <div className="about-principle">
              <Target size={26} aria-hidden="true" />
              <h3>Mission</h3>
              <p>{company.mission}</p>
            </div>
            <div className="about-principle">
              <Compass size={26} aria-hidden="true" />
              <h3>Vision</h3>
              <p>{company.vision}</p>
            </div>
            <div className="about-principle about-values">
              <UsersRound size={26} aria-hidden="true" />
              <h3>Core values</h3>
              <ul>
                {company.values.map(value => {
                  const Icon = valueIcons[value];
                  return <li key={value}><Icon size={22} aria-hidden="true" /><span>{value}</span></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section" id="innovation" aria-labelledby="innovation-rail-title">
        <div className="section-intro">
          <h2 id="innovation-rail-title">Our innovation</h2>
        </div>
        <InnovationCarousel />
      </section>

      <section id="ceo-message" className="container about-section" aria-labelledby="about-ceo-title">
        <div className="about-ceo">
          <header className="about-ceo-heading">
            <h2 id="about-ceo-title">A message from our CEO</h2>
          </header>
          <div className="about-ceo-copy">
              <blockquote className="about-ceo-message">
                {company.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </blockquote>
            <p className="about-ceo-attribution"><strong>Mr. Gerry Sy</strong><br />Chief Executive Officer</p>
          </div>
        </div>
      </section>

      <MilestoneTimeline />

      <section className="container about-section about-recognition" id="recognition" aria-labelledby="about-recognition-title">
        <div className="section-intro">
          <h2 id="about-recognition-title">Awards and recognition</h2>
          <p>Recognition from the technology partners we work with.</p>
        </div>
        <AwardsTimeline>
          {awards.map(([year, items]) => (
            <li key={year}>
              <h3>{year}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
            </li>
          ))}
        </AwardsTimeline>
      </section>

      <section className="container about-section" aria-labelledby="about-choose-title">
        <div className="section-intro">
          <h2 id="about-choose-title">Why choose Intellismart?</h2>
          <p>Our engineers work with technology partners to design, implement, and support systems that fit your operations.</p>
        </div>
        <ul className="about-reasons">
          {company.reasons.map(([title, detail]) => (
            <li key={title}><h3>{title}</h3><p>{detail}</p></li>
          ))}
        </ul>
      </section>

      <section className="container about-contact" aria-labelledby="about-contact-title">
        <h2 id="about-contact-title">Let’s talk about what you need</h2>
        <a href="/#contact" className="button button-primary">Book a Free Consultation <ArrowRight size={17} aria-hidden="true" /></a>
      </section>
    </div>
  );
}
