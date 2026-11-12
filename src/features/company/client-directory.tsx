"use client";

import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

export function ClientDirectory({ names }: { names: string[] }) {
  return (
    <Accordion.Root className="client-directory">
      <Accordion.Item value="more-clients">
        <Accordion.Header className="client-directory-heading">
          <Accordion.Trigger>View more clients <ChevronDown size={16} aria-hidden="true" /></Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <ul>{names.map(name => <li key={name}>{name}</li>)}</ul>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
