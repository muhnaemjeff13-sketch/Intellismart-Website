"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function MobileNav({ links, contactHref }: { links: { label: string; href: string }[]; contactHref: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    const desktop = matchMedia("(min-width: 1071px)");
    function resize() { if (desktop.matches) setOpen(false); }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <div className="mobile-nav" ref={root} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <button ref={trigger} type="button" className="icon-button mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls={panelId}
        onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={25} />}
      </button>
      {open && (
        <div id={panelId} className="mobile-nav-dropdown">
          <nav aria-label="Mobile navigation">
            {links.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <a href={contactHref} onClick={() => setOpen(false)} className="button button-primary">Book a Free Consultation</a>
        </div>
      )}
    </div>
  );
}
