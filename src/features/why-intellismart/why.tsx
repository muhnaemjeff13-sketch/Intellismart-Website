import { Headset, Settings2, Workflow } from "lucide-react";
import { company } from "@/features/company/data";

const reasonIcons = [Settings2, Workflow, Headset];

export function WhyIntellismart() {
  return (
    <section id="why-us" className="why-feature" aria-labelledby="why-title">
      <div className="container why-inner">
        <div className="section-intro">
          <h2 id="why-title">Why Choose Intellismart?</h2>
          <p>Business software that fits your operations, backed by integration expertise and local support beyond implementation.</p>
        </div>
        <ul className="why-reasons">
          {company.reasons.map(([title, description], index) => {
            const Icon = reasonIcons[index];
            return (
              <li key={title} className="why-reason">
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
