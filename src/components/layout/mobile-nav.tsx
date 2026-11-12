"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";

export function MobileNav({ links, contactHref }: { links: { label: string; href: string }[]; contactHref: string }) {
  const [open, setOpen] = useState(false);
  const destination = useRef<HTMLElement | null>(null);

  function followLink(event: MouseEvent<HTMLAnchorElement>) {
    const link = event.currentTarget;
    destination.current = link.pathname === window.location.pathname && link.hash
      ? document.getElementById(link.hash.slice(1))
      : null;
    if (destination.current) {
      event.preventDefault();
      history.pushState(null, "", link.hash);
    }
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={next => {
      if (next) destination.current = null;
      setOpen(next);
    }} onOpenChangeComplete={next => {
      if (next || !destination.current) return;
      const section = destination.current;
      requestAnimationFrame(() => {
        section.focus({ preventScroll: true });
        section.scrollIntoView({ block: "start" });
      });
    }}>
      <Dialog.Trigger className="icon-button mobile-menu" aria-label="Open navigation"><Menu size={25} /></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Popup className="dialog-panel mobile-panel" finalFocus={() => !destination.current}>
          <Dialog.Title className="dialog-title">Navigation</Dialog.Title>
          <Dialog.Close className="icon-button dialog-close" aria-label="Close navigation"><X size={22} /></Dialog.Close>
          <nav aria-label="Mobile navigation">
            {links.map(({ label, href }) => <a key={href} href={href} onClick={followLink}>{label}</a>)}
          </nav>
          <a href={contactHref} onClick={followLink} className="button button-primary">Book a Free Consultation</a>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
