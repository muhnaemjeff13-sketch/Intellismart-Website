"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const preference = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(preference);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(preference).matches, () => false);
}

export function useCarousel(length: number, interval: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || hovered || !visible) return;
    const timer = window.setTimeout(() => setIndex((index + 1) % length), interval);
    return () => window.clearTimeout(timer);
  }, [hovered, index, interval, length, paused, reduced, visible]);

  function move(delta: number) {
    setIndex(current => (current + delta + length) % length);
  }

  return { index, setIndex, move, setPaused, setHovered, frame };
}

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      node.animate([
        { opacity: .45, transform: "translateY(16px)", filter: "blur(3px)" },
        { opacity: 1, transform: "none", filter: "none" },
      ], { duration: 440, easing: "cubic-bezier(.22,.8,.25,1)" });
      observer.disconnect();
    }, { threshold: .14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);
  return <div ref={ref}>{children}</div>;
}
