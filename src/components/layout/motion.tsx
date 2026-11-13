"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";

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

export function AnimatedContent({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  id,
  tabIndex,
  trigger = "scroll",
}: {
  as?: "div" | "li" | "main";
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  tabIndex?: number;
  trigger?: "mount" | "scroll";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (trigger !== "scroll" || reduced || !node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio < .12) return;
      node.dataset.animatedContent = "enter";
      observer.disconnect();
    }, { threshold: .12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, trigger]);

  return (
    <Tag
      ref={(node: HTMLElement | null) => { ref.current = node; }}
      id={id}
      tabIndex={tabIndex}
      className={className}
      data-animated-content={trigger === "mount" ? "mount" : undefined}
      style={delay ? { "--content-enter-delay": `${delay}ms` } as CSSProperties : undefined}
    >
      {children}
    </Tag>
  );
}
