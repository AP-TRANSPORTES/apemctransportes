import { MapPin, Mail, ExternalLink } from "lucide-react";
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
];

export function OndeEstamos() {
  return (
    <section id="onde-estamos" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSecao
          eyebrow="Onde estamos"
          titulo="Duas bases: Maceió (AL) e Vicência (PE)."
          descricao="Daqui apoiamos a movimentação de GLP em Alagoas e Pernambuco."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
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
