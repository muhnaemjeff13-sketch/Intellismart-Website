"use client";

import { useEffect, useState, type ReactNode } from "react";

export function StickyHeader({ children }: { children: ReactNode }) {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const reasons = document.getElementById("why-us");

    function update() {
      frame = 0;
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const reasonsTop = reasons ? reasons.getBoundingClientRect().top + y : viewport;
      const start = Math.max(0, reasonsTop - viewport * .85);
      const end = Math.max(start + 1, reasonsTop - 80);
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
