import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-caminhao-glp.jpg";
import { LOGOS } from "@/lib/logos";

const NUMEROS = [
  { valor: "4", rotulo: "empresas integradas" },
  { valor: "2", rotulo: "bases operacionais" },
  { valor: "AL, PE e PB", rotulo: "estados atendidos" },
  { valor: "4", rotulo: "serviços em GLP" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hero text-navy-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
        <div>
          <p className="eyebrow">Logística • Transporte • Distribuição</p>
          <h1 className="mt-4 text-[2.4rem] font-extrabold leading-[1.02] md:text-6xl">
            Transporte e logística de <span className="text-primary">GLP</span> em Alagoas, Pernambuco e Paraíba.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-muted md:text-lg">
            Destroca e qualificação de vasilhames, distribuição e transferência de GLP — com segurança,
            controle e compromisso em cada operação.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#servicos">
                Conheça nossos serviços <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#empresas">Nossas empresas</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Caminhão carregado de botijões de GLP em pátio de distribuição"
            width={1600}
            height={1072}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-4 items-center gap-2 rounded-xl bg-card p-3 shadow-card sm:left-8 sm:right-8">
            {[
              { src: LOGOS.ap, alt: "AP Transportes" },
              { src: LOGOS.mc, alt: "MC Transportes" },
              { src: LOGOS.vp, alt: "VP Transportes" },
              { src: LOGOS.elizabete, alt: "Elizabete Transportes" },
            ].map((l) => (
              <img key={l.alt} src={l.src} alt={`Logo da ${l.alt}`} className="mx-auto h-12 w-full object-contain md:h-14" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 bg-navy-deep/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-8 pt-12 md:grid-cols-4 md:pt-10">
          {NUMEROS.map((n) => (
            <div key={n.rotulo} className="text-center">
              <dt className="sr-only">{n.rotulo}</dt>
              <dd className="font-display text-3xl font-extrabold text-primary md:text-4xl">{n.valor}</dd>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-muted">{n.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
