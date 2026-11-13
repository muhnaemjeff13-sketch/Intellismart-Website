"use client";

import { useRef, useState, type PointerEvent } from "react";

const wordmark = "INTELLISMART";

export function FooterWordmark() {
  const [painted, setPainted] = useState<number[]>([]);
  const erasing = useRef(false);
  const previousLetter = useRef<number | null>(null);

  function brush(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = event.target;
    if (!(target instanceof HTMLElement) || target.dataset.letter === undefined) return;
    const index = Number(target.dataset.letter);
    const previous = previousLetter.current ?? index;
    previousLetter.current = index;
    const start = Math.min(previous, index);
    const end = Math.max(previous, index);
    const erase = erasing.current;

    setPainted(current => {
      const next = [...current];
      for (let letter = start; letter <= end; letter += 1) {
        const position = next.indexOf(letter);
        if (erase && position !== -1) next.splice(position, 1);
        if (!erase && position === -1) next.push(letter);
      }
      return next.length === current.length ? current : next;
    });
  }

  return (
    <div className="footer-wordmark" aria-hidden="true"
      onPointerEnter={event => {
        if (event.pointerType !== "mouse") return;
        if (painted.length === wordmark.length) erasing.current = true;
        if (painted.length === 0) erasing.current = false;
        brush(event);
      }}
      onPointerMove={brush}
      onPointerLeave={() => { previousLetter.current = null; }}>
      <span className="footer-wordmark-letters">
        {[...wordmark].map((letter, index) => (
          <span key={index} data-letter={index} data-painted={painted.includes(index) || undefined}>{letter}</span>
        ))}
      </span>
    </div>
  );
}
