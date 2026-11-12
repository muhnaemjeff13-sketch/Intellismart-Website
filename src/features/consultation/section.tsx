import { Mail, MapPin, Phone } from "lucide-react";
import { ConsultationForm } from "./consultation";

const offices = [
  {
    name: "Head Office",
    address: "12 Catanduanes Street, Brgy. Paltok, West Avenue, Quezon City 1105",
    phones: [
      { label: "+63 2 8350 5986 ext. 348", href: "tel:+63283505986;ext=348" },
      { label: "+63 2 8352 0377", href: "tel:+63283520377" },
    ],
    email: "sales@intellismartinc.com",
  },
  {
    name: "Cebu Office",
    address: "Units 02A–02B, Pacific Square Building, F. Cabahug Street, Mabolo, Cebu City 6000",
    phones: [{ label: "+63 32 255 2678", href: "tel:+63322552678" }],
    email: "cebusales@intellismartinc.com",
  },
];

export function ConsultationSection() {
  return (
    <section id="contact" tabIndex={-1} className="container consultation-section" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Book a Free Consultation</h2>
        <p className="consultation-intro">Tell us what you need help with, and we’ll find a starting point for your team.</p>
        <ul className="consultation-offices">
          {offices.map(({ name, address, phones, email }) => (
            <li key={name}>
              <h3>{name}</h3>
              <p><MapPin size={17} aria-hidden="true" />{address}</p>
              <div className="consultation-office-phones">
                <Phone size={17} aria-hidden="true" />
                <div>{phones.map(phone => <a key={phone.href} href={phone.href}>{phone.label}</a>)}</div>
              </div>
              <p><Mail size={17} aria-hidden="true" /><a href={"mailto:" + email}>{email}</a></p>
            </li>
          ))}
        </ul>
      </div>
      <div className="consultation-panel">
        <ConsultationForm />
      </div>
    </section>
  );
}
