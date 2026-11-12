import Image from "next/image";
import { Cloud, CodeXml, Globe2 } from "lucide-react";

const services = [
  { title: "Digital Experiences", icon: Globe2, image: "service-digital", offerings: [["Mobile & Web Development", "Applications for customers and business teams."], ["e-Commerce", "Online storefronts and digital sales."]] },
  { title: "Software & AI", icon: CodeXml, image: "service-software", offerings: [["Custom Software Development", "Software designed around your business workflows."], ["AI Solutions", "AI assistance for everyday business processes."]] },
  { title: "Cloud & IT Support", icon: Cloud, image: "service-cloud", offerings: [["Cloud Computing", "Cloud environments for business applications."], ["IT Consulting & Support", "Technical guidance and ongoing support."]] },
];

export function Services() {
  return (
    <section id="services" tabIndex={-1} className="section technology-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-intro"><p className="eyebrow">Technology services</p><h2 id="services-title">Build and support the technology your business needs</h2><p>From customer-facing apps to custom software, cloud environments and ongoing IT support.</p></div>
        <div className="services-grid">
          {services.map(({ title, image, icon: Icon, offerings }) => (
            <article className="service-card" key={title} tabIndex={0} aria-label={title}>
              <div className="service-visual">
                <Image src={"/media/" + image + ".webp"} alt="" width={468} height={263} sizes="(max-width: 780px) 90vw, 32vw" />
              </div>
              <div className="service-details">
                <div className="service-summary" aria-hidden="true">
                  <p className="service-summary-title"><Icon size={21} aria-hidden="true" />{title}</p>
                  <p>{offerings.map(([label]) => label).join(" · ")}</p>
                </div>
                <div className="service-copy">
                  <h3><Icon size={21} aria-hidden="true" />{title}</h3>
                  {offerings.map(([label, copy]) => <div className="offering" key={label}><h4>{label}</h4><p>{copy}</p></div>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
