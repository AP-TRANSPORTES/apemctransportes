import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRASIL, PINOS, ROTULOS, ZOOM } from "@/lib/mapa-abrangencia";
import { TituloSecao } from "./Secao";

// Estados atendidos pelo grupo; os demais aparecem só como referência, em cinza.
const ATENDIDOS = {
  PE: { nome: "Pernambuco", detalhe: "Base da AP em Vicência", cor: "var(--primary)" },
  AL: { nome: "Alagoas", detalhe: "Base da MC em Maceió", cor: "color-mix(in oklab, var(--primary) 78%, var(--navy-deep))" },
  PB: { nome: "Paraíba", detalhe: "Base em Campina Grande", cor: "color-mix(in oklab, var(--primary) 70%, var(--primary-foreground))" },
} as const;

// Os nomes ficam à direita do ponto, sobre o mar, para não cobrir o nome dos estados.
const BASES = [
  { id: "maceio", nome: "Maceió" },
  { id: "vicencia", nome: "Vicência" },
  { id: "campina-grande", nome: "Campina Grande" },
] as const;

function MapaZoom() {
  return (
    <svg viewBox={`0 0 ${ZOOM.largura} ${ZOOM.altura}`} className="h-auto w-full" role="img" aria-labelledby="mapa-titulo">
      <title id="mapa-titulo">Mapa do Nordeste com Alagoas, Pernambuco e Paraíba destacados</title>
      <defs>
        <radialGradient id="mapa-fade" cx="55%" cy="50%" r="62%">
          <stop offset="70%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="mapa-mascara">
          <rect width="100%" height="100%" fill="url(#mapa-fade)" />
        </mask>
      </defs>
      <g mask="url(#mapa-mascara)">
        {Object.entries(ZOOM.estados)
          .filter(([sigla]) => !(sigla in ATENDIDOS))
          .map(([sigla, d]) => (
            <path key={sigla} d={d} fill="var(--border)" stroke="var(--card)" strokeWidth={2} strokeLinejoin="round" />
          ))}
        {Object.entries(ROTULOS)
          .filter(([sigla]) => !(sigla in ATENDIDOS))
          .map(([sigla, [x, y]]) => (
            <text key={sigla} x={x} y={y} textAnchor="middle" className="fill-muted-foreground text-[15px] font-bold">
              {sigla}
            </text>
          ))}
      </g>
      {(Object.keys(ATENDIDOS) as (keyof typeof ATENDIDOS)[]).map((sigla) => (
        <path
          key={sigla}
          d={ZOOM.estados[sigla]}
          fill={ATENDIDOS[sigla].cor}
          stroke="var(--card)"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
      ))}
      {(Object.keys(ATENDIDOS) as (keyof typeof ATENDIDOS)[]).map((sigla) => {
        const rotulo = ROTULOS[sigla];
        if (!rotulo) return null;
        const [x, y] = rotulo;
        return (
          <text
            key={sigla}
            x={x}
            y={y}
            textAnchor="middle"
            className="fill-primary-foreground font-display text-[22px] font-extrabold uppercase tracking-wide"
          >
            {ATENDIDOS[sigla].nome}
          </text>
        );
      })}
      {BASES.map(({ id, nome }) => {
        const pino = PINOS[id];
        if (!pino) return null;
        const [x, y] = pino;
        return (
          <g key={id}>
            <circle cx={x} cy={y} r={14} className="fill-navy" opacity={0.18} />
            <circle cx={x} cy={y} r={6.5} className="fill-navy stroke-card" strokeWidth={2.5} />
            <text
              x={x + 14}
              y={y + 5}
              className="fill-navy-deep text-[18px] font-bold"
              paintOrder="stroke"
              stroke="var(--card)"
              strokeWidth={4}
            >
              {nome}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MapaBrasil() {
  const [x, y, w, h] = BRASIL.recorte;
  return (
    <svg viewBox={`0 0 ${BRASIL.largura} ${BRASIL.altura}`} className="h-auto w-full" aria-hidden="true">
      {Object.entries(BRASIL.estados).map(([sigla, d]) => (
        <path
          key={sigla}
          d={d}
          fill={sigla in ATENDIDOS ? "var(--primary)" : "var(--border)"}
          stroke="var(--card)"
          strokeWidth={0.6}
        />
      ))}
      <rect x={x} y={y} width={w} height={h} fill="none" className="stroke-navy" strokeWidth={1.4} rx={2} />
    </svg>
  );
}

export function Abrangencia() {
  return (
    <section id="abrangencia" className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <TituloSecao
            eyebrow="Abrangência"
            titulo="Onde a nossa operação chega."
            descricao="Com bases em Maceió (AL), Vicência (PE) e Campina Grande (PB), o grupo atende Alagoas, Pernambuco e Paraíba com transporte, destroca, qualificação de vasilhames, distribuição e transferência de GLP."
          />
          <ul className="mt-8 space-y-3">
            {(Object.keys(ATENDIDOS) as (keyof typeof ATENDIDOS)[]).map((sigla) => (
              <li key={sigla} className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 shadow-card">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold text-primary-foreground"
                  style={{ background: ATENDIDOS[sigla].cor }}
                >
                  {sigla}
                </span>
                <div>
                  <p className="font-bold text-foreground">{ATENDIDOS[sigla].nome}</p>
                  <p className="text-sm text-muted-foreground">{ATENDIDOS[sigla].detalhe}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <a href="#contato">
              Entrar em contato <ArrowRight />
            </a>
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card md:p-5">
          <MapaZoom />
          <div className="absolute left-3 top-3 w-20 rounded-lg border border-border bg-card/90 p-1.5 shadow-card backdrop-blur md:left-5 md:top-5 md:w-28">
            <MapaBrasil />
            <p className="mt-1 text-center text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground">Brasil</p>
          </div>
          <p className="mt-2 flex items-center justify-end gap-1.5 text-xs font-semibold text-muted-foreground">
            <MapPin className="size-3.5 text-navy" /> Bases operacionais
          </p>
        </div>
      </div>
    </section>
  );
}
