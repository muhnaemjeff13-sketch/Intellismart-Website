"use client";

import { useEffect, useRef } from "react";

const milestones = [
  { label: "Years in the industry", value: 24, suffix: "" },
  { label: "Dedicated employees", value: 500, suffix: "+" },
  { label: "B2B clients", value: 2000, suffix: "+" },
  { label: "Projects completed", value: 50000, suffix: "+" },
];

const format = new Intl.NumberFormat("en-US");

export function Milestones() {
  const list = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const element = list.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const numbers = Array.from(element.querySelectorAll("[data-count-up]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reducedMotion.matches) return;

      let start: number | undefined;
      function tick(time: number) {
        start ??= time;
        const progress = reducedMotion.matches ? 1 : Math.min(1, (time - start) / 1300);
        const eased = 1 - (1 - progress) ** 3;
        numbers.forEach((number, index) => {
          const { value } = milestones[index];
          number.textContent = format.format(Math.round(value * eased));
        });
        if (progress < 1) frame = requestAnimationFrame(tick);
      }

      frame = requestAnimationFrame(tick);
    }, { threshold: .2 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="milestones" className="container milestone-section" aria-labelledby="milestones-title">
      <h2 id="milestones-title">Our Milestones</h2>
      <dl ref={list} className="milestone-list">
        {milestones.map(({ label, value, suffix }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              <span className="sr-only">{format.format(value)}{suffix}</span>
              <span aria-hidden="true"><span data-count-up>{format.format(value)}</span>{suffix && <span className="milestone-suffix">{suffix}</span>}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
