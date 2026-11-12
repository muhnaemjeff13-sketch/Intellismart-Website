"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/components/layout/motion";
import { company } from "./data";
import { ClientDirectory } from "./client-directory";

const clients = [
  ["Jollibee Group", "jollibee"], ["SM Investments Corporation", "sm"], ["Philex Mining Corporation", "philex"],
  ["Magellan Solutions", "magellan"], ["UCC Coffee", "ucc"], ["MOS Burger", "mos"],
];

export function Clients({ about = false }: { about?: boolean }) {
  const id = about ? "about-clients" : "client-logos";
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  return (
    <section id={id} className={"client-loop-section" + (about ? " about-client-loop" : "")} aria-label={about ? undefined : "Our Clients"} aria-labelledby={about ? id + "-title" : undefined}>
      {about && <div className="container client-loop-heading">
        <h2 id={id + "-title"}>Our Clients</h2>
        {!reduced && <button type="button" className="carousel-button" aria-label={paused ? "Play client logo loop" : "Pause client logo loop"} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
      </div>}
      <div className="client-loop" data-paused={paused}>
        <div className="client-loop-track">
          {[false, true].map(duplicate => <ul className="client-loop-list" key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {clients.map(([name, asset]) => <li key={asset}><Image src={"/media/" + asset + ".webp"} alt={name} width={160} height={55} /></li>)}
          </ul>)}
        </div>
        <span className="gradual-blur gradual-blur-start" aria-hidden="true" />
        <span className="gradual-blur gradual-blur-end" aria-hidden="true" />
      </div>
      {about && <div className="container"><ClientDirectory names={company.names.filter(name => !clients.some(([featured]) => featured === name))} /></div>}
    </section>
  );
}
