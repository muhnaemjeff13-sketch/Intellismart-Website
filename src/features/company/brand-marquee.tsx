import Image from "next/image";

const partners = [
  ["Samsung", "01.png"],
  ["Harman", "02.png"],
  ["Epson Authorized Dealer", "03.png"],
  ["Apple", "04.png"],
  ["Dell", "05.png"],
  ["ASUS", "06.png"],
  ["Alcatel-Lucent", "07.png"],
  ["Hikvision", "08.png"],
  ["Salto", "09.png"],
  ["Vimar", "10.png"],
  ["Quail", "11.png"],
  ["Honeywell", "12.png"],
  ["Schneider Electric", "13.png"],
  ["Syrius Lighting", "14.png"],
] as const;

const clients = [
  ["SM", "15.png"],
  ["Ayala Land", "16.png"],
  ["MDC", "17.png"],
  ["Robinsons Land", "18.png"],
  ["Cebu Pacific", "19.png"],
  ["BDO", "20.png"],
  ["Philippine National Bank", "21.jpg"],
  ["Concentrix", "22.png"],
  ["Teleperformance", "23.png"],
  ["Accenture", "24.png"],
  ["De La Salle University", "25.png"],
  ["University of the Philippines", "26.png"],
  ["Ateneo", "27.png"],
  ["ABS-CBN", "28.png"],
  ["GMA", "29.png"],
  ["Shell", "30.png"],
  ["Petron", "31.png"],
  ["The Medical City", "32.png"],
  ["St. Luke’s Medical Center", "33.png"],
  ["Okada Manila", "34.png"],
  ["Shangri-La", "35.png"],
  ["Solaire", "36.png"],
  ["Resorts World", "37.png"],
  ["CCF", "38.jpg"],
  ["Coca-Cola", "39.png"],
  ["Alaska", "40.png"],
  ["Nestlé", "41.png"],
  ["Unilever", "42.png"],
  ["Johnson & Johnson", "43.png"],
  ["Boysen", "44.png"],
  ["Mercury Drug", "45.jpg"],
  ["Pascual", "46.png"],
  ["Unilab", "47.png"],
  ["Filinvest", "48.png"],
  ["San Miguel", "49.png"],
  ["Megaworld", "50.png"],
  ["Ortigas & Company", "51.png"],
  ["Villar Group", "52.png"],
  ["Shang Properties", "53.png"],
  ["Jollibee", "54.png"],
  ["KFC", "55.png"],
  ["Starbucks", "56.png"],
  ["National Book Store", "57.png"],
  ["Maynilad", "58.jpg"],
  ["Meralco", "59.png"],
  ["Globe", "60.png"],
  ["Philippine Airlines", "61.png"],
  ["AirAsia", "62.png"],
  ["Light Rail Manila", "63.png"],
  ["2GO", "64.png"],
] as const;

export function BrandMarquee({ kind }: { kind: "partners" | "clients" }) {
  const isPartners = kind === "partners";
  const brands = isPartners ? partners : clients;
  const id = isPartners ? "key-partners" : "clients";

  return (
    <section id={id} className="container brand-marquee" aria-labelledby={id + "-title"}>
      <h2 id={id + "-title"}>{isPartners ? "Our Key Partners" : "Our Clients"}</h2>
      <div className="client-loop" tabIndex={0} role="group" aria-label="Brand logos">
        <div className={isPartners ? "client-loop-track" : "client-loop-track client-loop-track--clients"}>
          {[false, true].map(duplicate => (
            <ul className="client-loop-list" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {brands.map(([name, asset]) => (
                <li key={asset}>
                  <Image src={"/media/company-logos/" + asset} alt={name} width={128} height={52} unoptimized />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
