"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { booksOverview, cashBoxOverview, hrCoreOverview, hrMobileOverview, hrMobileScreens, hrRecruitmentOverview, products, simsOverview, hrAnalyticsOverview, hrPerformanceOverview, hrAIOverview } from "./data";

type Product = (typeof products)[number];

const mobileScreens = [hrMobileScreens.gps, hrMobileScreens.clockIn, hrMobileScreens.payslip];

const projectFamilies = [
  { name: "HRDotNet", first: "hr-core" },
  { name: "SIMSDotNet", first: "sims" },
  { name: "BooksDotNet", first: "books" },
  { name: "CashBoxDotNet", first: "cashbox" },
];

const familyStarts = projectFamilies.map(({ first }) => products.findIndex(({ id }) => id === first));

function getFamilyIndex(productIndex: number) {
  const nextFamily = familyStarts.findIndex((start) => start > productIndex);
  return nextFamily === -1 ? familyStarts.length - 1 : nextFamily - 1;
}

function screenshot(product: Product) {
  if (product.id === "hr-analytics") return "/media/solutions/analytics-workforce-clear.webp";
  return "/media/hero/" + product.id + "-clear.webp";
}

const screenshotDimensions: Record<string, readonly [number, number]> = {
  "hr-performance": [1440, 815],
  "hr-ai": [1600, 859],
  sims: [1920, 918],
  books: [1900, 959],
  "hr-analytics": [1600, 765],
};

function ProjectPreview({ product, desktop = false, active = true }: { product: Product; desktop?: boolean; active?: boolean }) {
  const dashboardOverview = product.id === "hr-core" ? hrCoreOverview : product.id === "hr-recruitment" ? hrRecruitmentOverview : product.id === "cashbox" ? cashBoxOverview : product.id === "books" ? booksOverview : product.id === "sims" ? simsOverview : product.id === "hr-analytics" ? hrAnalyticsOverview : product.id === "hr-performance" ? hrPerformanceOverview : product.id === "hr-ai" ? hrAIOverview : undefined;
  const isMobile = product.id === "hr-mobile";
  const isAnalytics = product.id === "hr-analytics";
  const [width, height] = dashboardOverview
    ? [dashboardOverview.width, dashboardOverview.height]
    : screenshotDimensions[product.id] ?? [802, 422];

  return (
    <figure className={desktop ? "solution-preview solution-preview--sticky" : "solution-preview solution-preview--inline"}>
      {dashboardOverview ? (
        <Link href={dashboardOverview.href + "#" + dashboardOverview.heroId} aria-label={"Explore the " + product.name + " product overview"}
          tabIndex={active ? 0 : -1} className="solution-browser solution-core-preview">
          <Image src={dashboardOverview.preview} alt={dashboardOverview.previewAlt} width={width} height={height}
            sizes="(min-width: 900px) 700px, 92vw" unoptimized />
        </Link>
      ) : isMobile ? (
        <Link href={hrMobileOverview.href + "#" + hrMobileOverview.heroId}
          aria-label="Explore the HRDotNet Mobile product overview" tabIndex={active ? 0 : -1} className="solution-iphone-trio">
          {mobileScreens.map(({ src, alt }) => (
            <div className="solution-iphone" key={src}>
              <Image src={src} alt={alt}
                width={720} height={1600} sizes="(min-width: 900px) 210px, 35vw" unoptimized />
            </div>
          ))}
        </Link>
      ) : (
        <div className="solution-browser" style={{ "--solution-preview-ratio": width / height } as CSSProperties}>
          <div className="solution-browser-bar" aria-hidden="true">
            <span className="solution-browser-dots" />
            <span className="solution-browser-name">{product.name}</span>
          </div>
          <div className="solution-browser-screen">
            <Image src={screenshot(product)} alt={isAnalytics ? "HRDotNet Analytics workforce dashboard" : product.image.description}
              width={width} height={height} sizes="(min-width: 900px) 700px, 92vw" unoptimized />
          </div>
        </div>
      )}
      <figcaption>Product preview · Illustrative data</figcaption>
    </figure>
  );
}

function ProjectIndex({ active, inline = false }: { active: number; inline?: boolean }) {
  return (
    <nav className={inline ? "solution-index solution-index--inline" : "solution-index"} aria-label="Jump to a solution">
      <ul>
        {projectFamilies.map(({ name, first }, index) => (
          <li key={first}>
            <a href={"#solution-" + first} aria-current={index === active ? "true" : undefined}
              data-complete={index < active || undefined}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ProductExplorer() {
  const scope = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = list.current;
    if (!container) return;
    const rows = Array.from(container.querySelectorAll("article"));
    let frame = 0;
    let settleTimer = 0;
    let lastScroll = window.scrollY;
    let scrollStart: number | undefined;
    let touching = false;
    let snapping = false;

    function update() {
      frame = 0;
      const scrollScope = scope.current;
      scrollScope?.toggleAttribute("data-blur-active", scrollScope.getBoundingClientRect().top <= 0);
      const threshold = window.innerHeight * 0.48;
      let next = 0;
      for (let index = 1; index < rows.length; index += 1) {
        if (rows[index].getBoundingClientRect().top > threshold) break;
        next = index;
      }
      const family = getFamilyIndex(next);

      const start = rows[familyStarts[family]].getBoundingClientRect().top;
      const nextFamily = rows[familyStarts[family + 1]];
      const end = nextFamily ? nextFamily.getBoundingClientRect().top : rows[rows.length - 1].getBoundingClientRect().bottom;
      const progress = Math.max(0, Math.min(1, (threshold - start) / Math.max(1, end - start)));
      scope.current?.style.setProperty("--solution-family-progress", String(progress));
      setActive(next);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function settle() {
      window.clearTimeout(settleTimer);
      if (!window.matchMedia("(min-width: 900px)").matches) {
        scrollStart = undefined;
        snapping = false;
        return;
      }
      if (touching) return;
      if (snapping) {
        snapping = false;
        return;
      }
      if (scrollStart === undefined) return;
      const current = window.scrollY;
      const origin = scrollStart;
      scrollStart = undefined;
      lastScroll = current;

      const navbar = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const desktop = window.matchMedia("(min-width: 900px)").matches;
      const stops = rows.map(row => {
        const margin = Number.parseFloat(getComputedStyle(row).scrollMarginTop) || 0;
        const bounds = row.getBoundingClientRect();
        if (desktop && bounds.height <= window.innerHeight - navbar) {
          const copy = row.querySelector(".solution-copy")?.getBoundingClientRect() ?? bounds;
          const center = current + copy.top + copy.height / 2 - (window.innerHeight + navbar) / 2;
          return { start: center, end: center };
        }
        const start = current + bounds.top - navbar - margin;
        // A project taller than the viewport must still be readable end to end.
        return { start, end: Math.max(start, current + bounds.bottom - window.innerHeight + margin) };
      });

      const first = stops[0];
      const last = stops[stops.length - 1];
      if (current <= first.start || current >= last.end) return;

      const distance = (position: number, stop: (typeof stops)[number]) =>
        Math.max(0, stop.start - position, position - stop.end);
      const nearest = stops.reduce((best, stop) =>
        distance(current, stop) < distance(current, best) ? stop : best);

      if (distance(current, nearest) <= 5) return;
      let target = current < nearest.start ? nearest.start : nearest.end;

      // A short wheel or keyboard gesture from a stop advances in that direction.
      const direction = Math.sign(current - origin);
      const from = stops.findIndex(stop => Math.abs(origin - (direction > 0 ? stop.end : stop.start)) <= 4);
      const adjacent = stops[from + direction];
      if (from >= 0 && adjacent && nearest === stops[from] && Math.abs(current - origin) >= 24) {
        target = direction > 0 ? adjacent.start : adjacent.end;
      }

      const focused = document.activeElement;
      if (focused?.matches(":focus-visible") && rows.some(row => row.contains(focused))) {
        const bounds = focused.getBoundingClientRect();
        const shift = target - current;
        if (bounds.top - shift < navbar || bounds.bottom - shift > window.innerHeight) return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Scroll events from this animation update the preview without starting another snap.
      snapping = true;
      window.scrollTo({ top: Math.round(target), behavior: reduced ? "instant" : "smooth" });
      queueSettle();
    }

    function onScroll() {
      if (!snapping) scrollStart ??= lastScroll;
      lastScroll = window.scrollY;
      schedule();
      queueSettle();
    }

    function queueSettle() {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, 220);
    }

    function resumeUserScroll() {
      if (!snapping) return;
      snapping = false;
      lastScroll = window.scrollY;
    }

    function handleScrollKey(event: KeyboardEvent) {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeUserScroll();
      }
    }

    function startTouch() {
      resumeUserScroll();
      touching = true;
    }

    function endTouch(event: TouchEvent) {
      touching = event.touches.length > 0;
      if (!touching && scrollStart !== undefined) queueSettle();
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", startTouch, { passive: true });
    window.addEventListener("touchend", endTouch, { passive: true });
    window.addEventListener("touchcancel", endTouch, { passive: true });
    window.addEventListener("wheel", resumeUserScroll, { passive: true });
    window.addEventListener("keydown", handleScrollKey);
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", resumeUserScroll);
      window.removeEventListener("keydown", handleScrollKey);
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchend", endTouch);
      window.removeEventListener("touchcancel", endTouch);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const activeFamily = getFamilyIndex(active);

  return (
    <div className="solution-scroll-scope" ref={scope}>
      <div className="solution-scroll-blur" aria-hidden="true"><span /><span /><span /></div>
      <div className="solution-catalog">
        <div className="solution-projects" ref={list}>
          {products.map((product, index) => {
            const overview = product.id === "hr-core" ? hrCoreOverview : product.id === "hr-mobile" ? hrMobileOverview : product.id === "hr-recruitment" ? hrRecruitmentOverview : product.id === "cashbox" ? cashBoxOverview : product.id === "books" ? booksOverview : product.id === "sims" ? simsOverview : product.id === "hr-analytics" ? hrAnalyticsOverview : product.id === "hr-performance" ? hrPerformanceOverview : product.id === "hr-ai" ? hrAIOverview : undefined;
            return (
              <article key={product.id} id={"solution-" + product.id} className="solution-project" tabIndex={-1} data-focused={index === active} aria-labelledby={"title-" + product.id}>
                <ProjectPreview product={product} />
                {index === 0 && <ProjectIndex active={activeFamily} inline />}
                <div className="solution-copy">
                  <p className="solution-project-meta">
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    {product.pillar}
                  </p>
                  <h3 id={"title-" + product.id}>{product.name}</h3>
                  <p className="solution-project-title">{product.title}</p>
                  <p className="solution-project-description">{product.description}</p>
                  <ul className="solution-highlights" aria-label="Key capabilities">
                    {product.highlights.slice(0, 3).map(([title]) => <li key={title}>{title}</li>)}
                  </ul>
                  {overview ? (
                    <Link className="solution-preview-link" href={overview.href + "#" + overview.heroId}>
                      Explore {product.name} <span aria-hidden="true">↗</span>
                    </Link>
                  ) : (
                    <a className="solution-preview-link" href={screenshot(product)} target="_blank" rel="noreferrer"
                    aria-label={"View " + product.name + " screenshot (opens in a new tab)"}>
                    View screenshot <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="solution-preview-column">
          <div className="solution-preview-stage">
            <div className="solution-preview-content">
              <div className="solution-preview-stack">
                {products.map((product, index) => (
                  <div key={product.id} className="solution-preview-layer" data-current={index === active} aria-hidden={index !== active}>
                    <ProjectPreview product={product} desktop active={index === active} />
                  </div>
                ))}
              </div>
              <ProjectIndex active={activeFamily} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
