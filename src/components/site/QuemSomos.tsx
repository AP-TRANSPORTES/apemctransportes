import { ShieldCheck, HeartHandshake, BadgeCheck, Target } from "lucide-react";
import equipeReuniao from "@/assets/equipe-reuniao.jpeg";
import { TituloSecao } from "./Secao";

const VALORES = [
  { icone: Target, rotulo: "Responsabilidade" },
  { icone: ShieldCheck, rotulo: "Segurança operacional" },
  { icone: HeartHandshake, rotulo: "Comprometimento" },
  { icone: BadgeCheck, rotulo: "Qualidade nos serviços" },
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="section-pad bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <img
          src={equipeReuniao}
          alt="Equipe do grupo reunida no escritório"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
        />
        <div>
          <TituloSecao
            eyebrow="Quem somos"
            titulo="Uma parceria movida por propósito e responsabilidade."
            descricao="AP Transportes, MC Transportes e Elizabete Transportes atuam juntas no transporte e nas operações logísticas de GLP. Trabalhamos com seriedade em cada etapa, valorizando a segurança, a organização e a confiança com clientes e parceiros."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {VALORES.map(({ icone: Icone, rotulo }) => (
              <li key={rotulo} className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3">
                <Icone className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-semibold leading-tight text-foreground">{rotulo}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-4 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
            Nossa identidade une a força do transporte ao símbolo de fé representado pelo escudo da AP Transportes.
          </p>
        </div>
      </div>
    </section>
  );
}
