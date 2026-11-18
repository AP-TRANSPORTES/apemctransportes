import { MapPin, Mail, ExternalLink, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMPRESA, linkMapa } from "@/lib/empresa";
import { TituloSecao } from "./Secao";

const BASES = [
  {
    empresa: "MC Transportes",
    cidade: "Maceió • Alagoas",
    endereco: "Rua José Augusto Lessa, 110 — CS 04, CD Passione",
    cep: "CEP 57072-800",
    busca: "Rua José Augusto Lessa, 110, CD Passione, Maceió, AL, 57072-800",
  },
  {
    empresa: "AP Transportes",
    cidade: "Vicência • Pernambuco",
    endereco: "Rua Antonio de Oliveira Mota, 09/A — Centro",
    cep: "CEP 55850-000",
    busca: "Rua Antonio de Oliveira Mota, 09/A, Centro, Vicência, PE, 55850-000",
  },
  {
    empresa: "Base Paraíba",
    cidade: "Campina Grande • Paraíba",
    endereco: "Avenida Deputado Raimundo Asfora, 1000 — Sala 10, Velame",
    cep: "CEP 58420-000",
    busca: "Avenida Deputado Raimundo Asfora, 1000, Velame, Campina Grande, PB, 58420-000",
  },
];

export function OndeEstamos() {
  return (
    <section id="onde-estamos" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSecao
          eyebrow="Onde estamos"
          titulo="Três bases: Maceió (AL), Vicência (PE) e Campina Grande (PB)."
          descricao="Daqui apoiamos a movimentação de GLP em Alagoas, Pernambuco e Paraíba."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BASES.map((b) => (
            <article key={b.empresa} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{b.empresa}</p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{b.cidade}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {b.endereco}
                    <br />
                    {b.cep}
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-5 self-start">
                <a href={linkMapa(b.busca)} target="_blank" rel="noreferrer">
                  Ver no mapa <ExternalLink />
                </a>
              </Button>
            </article>
          ))}
        </div>
        <article className="mt-4 flex flex-col gap-5 rounded-2xl bg-hero p-6 text-navy-foreground shadow-card md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ClipboardCheck className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Local de triagem</p>
              <h3 className="mt-1 text-lg font-bold">{EMPRESA.triagem.nome}</h3>
              <p className="mt-1 text-sm text-navy-muted">
                {EMPRESA.triagem.local} — onde é feita a triagem e a qualificação dos vasilhames.
              </p>
            </div>
          </div>
          <Button asChild variant="hero" className="self-start md:self-center">
            <a href={EMPRESA.triagem.mapa} target="_blank" rel="noreferrer">
              Ver no mapa <ExternalLink />
            </a>
          </Button>
        </article>
        <div className="mt-4 flex items-start gap-4 rounded-2xl border border-dashed border-input bg-card/60 p-5">
          <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">Para correspondência: </span>
            {EMPRESA.razaoSocial} — Rua Antonio de Oliveira Mota, 09/A, Centro, Vicência/PE, CEP 55850-000.
          </p>
        </div>
      </div>
    </section>
  );
}
