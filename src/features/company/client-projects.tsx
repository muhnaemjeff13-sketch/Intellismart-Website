import Image from "next/image";

const clientProjects = [
  ["mactan-cebu", "Mactan-Cebu International Airport"],
  ["midpark-towers", "Midpark Towers"],
  ["novotel-acqua", "Novotel Suites Manila at Acqua"],
  ["okada-manila", "Okada Manila"],
  ["parqal-mall", "Parqal Mall"],
  ["new-clark-city", "New Clark City Athletics Stadium"],
  ["jollibee-tower", "Jollibee Tower"],
];

export function ClientProjects() {
  return (
    <section id="clients" className="client-projects" aria-label="Client projects">
      <div className="client-projects-track">
        {[false, true].map(duplicate => (
          <ul key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {clientProjects.map(([file, name]) => (
              <li key={file}>
                <Image src={"/media/client-projects/" + file + ".webp"} alt={name}
                  width={1200} height={675} sizes="(max-width: 560px) 78vw, (max-width: 1200px) 42vw, 470px"
                  draggable={false} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
