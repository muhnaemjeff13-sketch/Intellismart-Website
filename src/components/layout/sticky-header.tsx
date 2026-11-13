"use client";

import { useEffect, useState, type ReactNode } from "react";

export function StickyHeader({ children }: { children: ReactNode }) {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const gradientEnd = document.getElementById("why-us") ?? document.querySelector("[data-overview-gradient-end]");

    function update() {
      frame = 0;
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const gradientEndTop = gradientEnd ? gradientEnd.getBoundingClientRect().top + y : viewport;
      const start = Math.max(0, gradientEndTop - viewport * .85);
      const end = Math.max(start + 1, gradientEndTop - 80);
      const progress = Math.min(1, Math.max(0, (y - start) / (end - start)));
      const fade = progress * progress * (3 - 2 * progress);
      document.body.style.setProperty("--opening-gradient-opacity", (1 - fade).toFixed(4));
      setCompact(y > 24);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.body.style.removeProperty("--opening-gradient-opacity");
    };
  }, []);

  return <header className="site-header" data-compact={compact}>{children}</header>;
}
