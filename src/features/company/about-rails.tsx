"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { AnimatedContent } from "@/components/layout/motion";

const innovation = [
  { title: "Software roots", label: "Quezon City, Philippines", image: "office.jpg", alt: "Intellismart’s Philippine office building", body: "Intellismart began in Ontario in 2000 as a software development company. That foundation still informs how we build software around the needs of a business." },
  { title: "Growing in the Philippines", label: "Quezon City, Philippines", image: "entrance.jpg", alt: "Entrance to Intellismart’s Philippine office", body: "We opened our first Philippine office in Quezon City in 2003. The move gave us a local team and a base from which to serve businesses in the Philippines." },
  { title: "Integrating technology", label: "Systems integration", image: "conference.jpg", alt: "Conference room at Intellismart", body: "Our work expanded into systems integration. We bring software, equipment, and engineering together around each client’s operations." },
  { title: "Supporting the rollout", label: "Training and local support", image: "interior.jpg", alt: "Interior of the Intellismart office", body: "We work with teams beyond implementation through user training and ongoing local support." },
];

const milestones = [
  ["2000", "Founded in Canada", "Intellismart starts as a software development company in Ontario."],
  ["2003", "First Philippine office", "Operations expand to Quezon City, with an office near Banawe Street."],
  ["2005", "Biometric solutions", "Intellismart introduces biometric technology to the Philippine market."],
  ["2010", "New Quezon City office", "The team moves to 16A Catanduanes Street in Barangay Paltok."],
  ["2014", "Samsung Business", "Intellismart establishes a partnership with Samsung Business."],
  ["2015", "Epson Philippines", "Epson Philippines joins Intellismart’s technology partners."],
  ["2017", "Harman partnership", "Intellismart adds Harman to its partner network."],
  ["2019", "New head office", "The team moves to its head office at 12 Catanduanes Street, Quezon City."],
  ["2026", "A team of 500+", "Intellismart reports more than 500 employees."],
];

export function InnovationCarousel() {
  const rail = useRef<HTMLOListElement>(null);
  const [position, setPosition] = useState({ atStart: true, atEnd: false });

  function move(direction: number) {
    const list = rail.current;
    if (!list) return;
    const first = list.firstElementChild;
    if (!first) return;
    const gap = Number.parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({
      left: direction * (first.getBoundingClientRect().width + gap),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <>
      <ol ref={rail} id="innovation-rail" className="about-rail" tabIndex={0} aria-labelledby="innovation-rail-title"
        onScroll={event => {
          const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
          setPosition({ atStart: scrollLeft <= 2, atEnd: scrollLeft >= scrollWidth - clientWidth - 2 });
        }}>
      {innovation.map(card => (
        <AnimatedContent as="li" key={card.title}>
          <Dialog.Root>
            <Dialog.Trigger className="innovation-card">
              <Image src={"/media/about/" + card.image} alt="" fill sizes="(max-width: 600px) 76vw, 320px" />
              <span className="innovation-card-label">{card.label}</span>
              <span className="innovation-card-title">{card.title}</span>
              <span className="innovation-card-open" aria-hidden="true"><Plus size={19} /></span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="dialog-backdrop" />
              <Dialog.Popup className="dialog-panel innovation-dialog">
                <Dialog.Close className="icon-button dialog-close" aria-label="Close innovation details"><X size={21} /></Dialog.Close>
                <Dialog.Title className="dialog-title">{card.title}</Dialog.Title>
                <Dialog.Description>{card.body}</Dialog.Description>
                <div className="innovation-dialog-image">
                  <Image src={"/media/about/" + card.image} alt={card.alt} fill sizes="(max-width: 600px) 90vw, 540px" />
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </AnimatedContent>
      ))}
      </ol>
      <div className="about-rail-controls">
        <button type="button" aria-label="Previous innovation cards" aria-controls="innovation-rail" disabled={position.atStart} onClick={() => move(-1)}><ArrowLeft size={19} /></button>
        <button type="button" aria-label="Next innovation cards" aria-controls="innovation-rail" disabled={position.atEnd} onClick={() => move(1)}><ArrowRight size={19} /></button>
      </div>
    </>
  );
}

export function MilestoneTimeline() {
  const section = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const sectionElement = section.current;
    const panelElement = panel.current;
    const viewportElement = viewport.current;
    const trackElement = track.current;
    const lastEntry = trackElement?.lastElementChild;
    if (!sectionElement || !panelElement || !viewportElement || !trackElement || !(lastEntry instanceof HTMLElement)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const travel = Math.max(0, viewportElement.scrollWidth - viewportElement.clientWidth);
        const stickyTop = Number.parseFloat(getComputedStyle(panelElement).top);
        const distance = stickyTop - sectionElement.getBoundingClientRect().top;
        const progress = travel ? Math.min(1, Math.max(0, distance / travel)) : 1;
        const length = lastEntry.offsetLeft;
        const reachedDistance = progress * length;
        const scrollDistance = progress * travel;

        sectionElement.style.setProperty("--milestone-travel", `${travel}px`);
        trackElement.style.setProperty("--timeline-length", `${length}px`);
        trackElement.style.setProperty("--timeline-progress", String(progress));

        let reachedOffset = 0;
        for (const entry of trackElement.children) {
          if (!(entry instanceof HTMLElement)) continue;
          const reached = entry.offsetLeft <= reachedDistance + 0.5;
          entry.dataset.reached = String(reached);
          if (reached) reachedOffset = entry.offsetLeft;
        }

        viewportElement.scrollLeft = reducedMotion.matches && length ? reachedOffset / length * travel : scrollDistance;
      });
    };

    const resize = new ResizeObserver(schedule);
    resize.observe(viewportElement);
    resize.observe(trackElement);
    window.addEventListener("scroll", schedule, { passive: true });
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section ref={section} className="about-milestones" id="milestones" aria-labelledby="milestones-title">
      <div ref={panel} className="container about-milestone-panel">
        <h2 id="milestones-title">Our milestones</h2>
        <div ref={viewport} className="about-milestone-viewport">
          <ol ref={track} className="about-milestone-track">
            {milestones.map(([year, title, detail]) => (
              <li className="about-milestone" key={year}>
                <time dateTime={year}>{year}</time>
                <h3>{title}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function setTimelineProgress(
  track: HTMLOListElement,
  distance: number,
  length: number,
) {
  const progress = Math.min(length, Math.max(0, distance));
  track.style.setProperty("--timeline-progress", String(length ? progress / length : 1));
  for (const entry of track.children) {
    if (entry instanceof HTMLElement) {
      entry.dataset.reached = String(distance >= entry.offsetTop - 0.5);
    }
  }
}

function useVerticalTimeline() {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const track = list.current;
    if (!track) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (!track) return;
      const distance = window.innerHeight * 0.6 - track.getBoundingClientRect().top - 8;
      setTimelineProgress(track, distance, track.offsetHeight - 8);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return list;
}

export function AwardsTimeline({ children }: { children: ReactNode }) {
  const list = useVerticalTimeline();
  return <ol ref={list} className="about-awards">{children}</ol>;
}
