import { MapPin } from "lucide-react";
import { EMPRESA, cnpjDa } from "@/lib/empresa";
import { LOGOS } from "@/lib/logos";
import { TituloSecao } from "./Secao";

const EMPRESAS = [
  {
    nome: "AP Transportes",
    logo: LOGOS.ap,
    base: "Vicência • PE",
    texto: "Representada pelo escudo da fé, une propósito, firmeza e compromisso no transporte de GLP a partir de Pernambuco.",
  },
  {
    nome: "MC Transportes",
    logo: LOGOS.mc,
    base: "Maceió • AL",
    texto: "Base em Maceió, com foco em eficiência e responsabilidade no transporte e na logística de GLP em Alagoas.",
  },
  {
    nome: "Elizabete Transportes",
    logo: LOGOS.elizabete,
    base: "Operação conjunta",
    texto: "Atua no transporte de cargas e soma estrutura e experiência à operação integrada.",
  },
];

export function Empresas() {
  return (
    <section id="empresas" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSecao
          eyebrow="Nossas empresas"
          titulo="Três nomes, uma operação integrada."
          descricao="Marcas que trabalham juntas para levar GLP com segurança a Alagoas, Pernambuco e Paraíba."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EMPRESAS.map((e) => (
            <article key={e.nome} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-24 items-center justify-center rounded-xl bg-secondary">
                <img src={e.logo} alt={`Logo da ${e.nome}`} loading="lazy" className="h-20 w-auto max-w-[80%] object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{e.nome}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
                <MapPin className="size-3.5" /> {e.base}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
              {cnpjDa(e.nome) && (
                <p className="mt-3 text-xs font-semibold text-foreground">CNPJ {cnpjDa(e.nome)}</p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl bg-secondary px-5 py-4 text-center text-sm text-foreground">
          <span className="font-bold">Direção:</span> {EMPRESA.direcao}
        </p>
      </div>
    </section>
  );
}
