"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/features/products/data";
import { email } from "@/lib/site";

function openEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Intellismart consultation request");
  const body = encodeURIComponent([
    "Hello Intellismart,",
    "",
    "I’d like to request a free consultation.",
    "",
    "Name: " + fields.get("name"),
    "Work email: " + fields.get("email"),
    "Company: " + fields.get("company"),
    "Product or service: " + fields.get("interest"),
    "Phone: " + fields.get("phone"),
    "Priorities: " + fields.get("priorities"),
  ].join("\n"));

  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

export function ConsultationForm() {
  return (
    <form className="consultation-form" onSubmit={openEmail} aria-describedby="consultation-draft-note">
      <label>Full name<input name="name" autoComplete="name" required maxLength={120} /></label>
      <label>Work email<input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
      <label>Company<input name="company" autoComplete="organization" required maxLength={160} /></label>
      <label>
        Product or service
        <select name="interest" defaultValue="" required>
          <option value="" disabled>Choose a product or service</option>
          {products.map(product => <option key={product.id}>{product.name}</option>)}
          <option>Technology Services</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      <label>How can we help? (optional)<textarea name="priorities" rows={3} maxLength={750} /></label>
      <button className="button button-primary" type="submit">Open email draft <ArrowUpRight size={19} aria-hidden="true" /></button>
      <p id="consultation-draft-note">Opens an email draft for you to review and send.</p>
    </form>
  );
}
