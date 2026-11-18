"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel, useReducedMotion } from "@/components/layout/motion";
import { cashBoxOverview, hrCoreOverview, hrRecruitmentOverview, products, simsOverview, hrPerformanceOverview, hrAIOverview } from "@/features/products/data";

const overviewHeadline = "Software Shaped Around your Business";
const peopleHeadline = "Simplify HR, Timekeeping and Payroll";
const operationsHeadline = "Connect Your Operations and Finance";
const heroHeadlines = [overviewHeadline, peopleHeadline, operationsHeadline];

const heroProducts = products.filter(product => product.id !== "hr-mobile" && product.id !== "hr-analytics");

function headlineFor(index: number) {
  const product = heroProducts[index];
  if (product.id === "hr-core") return overviewHeadline;
  return product.pillar === "People & Workforce" ? peopleHeadline : operationsHeadline;
}

function Headline({ title, visibleCount, reduced }: { title: string; visibleCount: number; reduced: boolean }) {
  return (
    <h1 id="hero-title">
      <span className="sr-only">{title}</span>
      <span className="headline-grid" aria-hidden="true">
        {heroHeadlines.map(headline => {
          let start = 0;
          return (
            <span className="headline-line" key={headline}>
              {headline.split(" ").map((word, index) => {
                const offset = start;
                start += word.length + 1;
                return (
                  <span key={offset}>
                    {index > 0 && " "}
                    <span className="headline-word">
                      <span className="headline-measure">{word}</span>
                      {headline === title && visibleCount >= offset && <span className="headline-ink">
                        {index === 0 ? (
                          <span className="hero-title-gradient">{word.slice(0, visibleCount - offset)}</span>
                        ) : word.slice(0, visibleCount - offset)}
                        {!reduced && visibleCount <= offset + word.length && <span className="type-caret" />}
                      </span>}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </h1>
  );
}


export function Hero() {
  const carousel = useCarousel(heroProducts.length, 5000);
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState({ index: 0, count: 1 });
  const previewIndex = reduced ? carousel.index : displayed.index;
  const headline = headlineFor(previewIndex);

  useEffect(() => {
    if (reduced) return;
    const changing = displayed.index !== carousel.index;
    if (!changing && displayed.count >= headline.length) return;

    const delay = changing ? (displayed.count > 0 ? 24 : 90) : (displayed.count === 0 ? 150 : 44);
    const timer = window.setTimeout(() => {
      if (!changing) {
        setDisplayed({ index: displayed.index, count: displayed.count + 1 });
      } else if (displayed.count > 0) {
        setDisplayed({ index: displayed.index, count: displayed.count - 1 });
      } else {
        setDisplayed({ index: carousel.index, count: 0 });
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [carousel.index, displayed, headline, reduced]);

  function movePreview(direction: number) {
    carousel.setHovered(false);
    carousel.move(direction);
  }

  return (
    <section id="top" tabIndex={-1} className="overview" aria-labelledby="hero-title">
      <div className="container overview-inner">
        <div className="overview-copy">
          <p className="eyebrow">Software &amp; technology services</p>
          <Headline title={headline} visibleCount={reduced ? headline.length : displayed.count} reduced={reduced} />
          <p className="overview-description">Manage people, operations and finance with software that fits the way you work.</p>
          <div className="actions">
            <a className="button button-primary explore-solutions" href="#products">
              Explore solutions <span className="explore-arrow" aria-hidden="true"><ArrowDown size={18} /></span>
            </a>
            <a className="button button-secondary" href="#services">Technology services</a>
          </div>
        </div>
        <div className="preview-carousel" ref={carousel.frame} role="group" aria-label="Product previews"
          onFocusCapture={() => carousel.setPaused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) carousel.setPaused(false);
          }}>
          <div className="preview-track"
            onPointerEnter={event => { if (event.pointerType === "mouse") carousel.setHovered(true); }}
            onPointerLeave={() => carousel.setHovered(false)}>
            {heroProducts.map((product, index) => {
              const count = heroProducts.length;
              const middle = Math.floor(count / 2);
              const offset = (index - previewIndex + middle + count) % count - middle;
              const depth = Math.abs(offset);
              const overview = product.id === "hr-core" ? hrCoreOverview : product.id === "hr-recruitment" ? hrRecruitmentOverview : product.id === "cashbox" ? cashBoxOverview : product.id === "sims" ? simsOverview : product.id === "hr-performance" ? hrPerformanceOverview : product.id === "hr-ai" ? hrAIOverview : undefined;
              return (
                <div className="preview-slide" key={product.id} data-depth={depth} aria-hidden={depth > 0}
                  style={{ "--slide-offset": offset,
                    "--preview-aspect-ratio": overview ? overview.width / overview.height : undefined,
                  } as CSSProperties}>
                  {overview ? (
                    <Image src={overview.preview} alt={overview.previewAlt} fill unoptimized
                      loading={index < 2 ? "eager" : "lazy"} />
                  ) : (
                    <Image src={"/media/hero/" + product.id + "-clear.webp"} alt={product.name + ": " + product.image.description} fill unoptimized
                      loading={index < 2 ? "eager" : "lazy"} />
                  )}
                </div>
              );
            })}
          </div>
          <button type="button" className="preview-arrow preview-arrow-previous" aria-label="Previous product preview" onClick={() => movePreview(-1)}>
            <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <button type="button" className="preview-arrow preview-arrow-next" aria-label="Next product preview" onClick={() => movePreview(1)}>
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
