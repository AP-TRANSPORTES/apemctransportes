import { ArrowLeftRight, ClipboardCheck, Truck, Warehouse, Check } from "lucide-react";
import { TituloSecao } from "./Secao";

const SERVICOS = [
  {
    icone: ArrowLeftRight,
    titulo: "Destroca de vasilhames",
    texto: "Recolhimento e devolução de vasilhames de outras marcas à distribuidora de origem.",
    itens: ["Separação por marca", "Conferência de quantidades", "Retorno com controle"],
  },
  {
    icone: ClipboardCheck,
    titulo: "Qualificação de vasilhames",
    texto: "Triagem e encaminhamento de vasilhames para manter a frota de botijões segura e regular.",
    itens: ["Inspeção visual", "Separação de vasilhames fora de padrão", "Encaminhamento à requalificação"],
  },
  {
    icone: Truck,
    titulo: "Distribuição de GLP",
    texto: "Entrega a revendas e parceiros com rotas planejadas e atenção aos prazos.",
    itens: ["Rotas em AL, PE e PB", "Cumprimento de horários", "Veículos sinalizados"],
  },
  {
    icone: Warehouse,
    titulo: "Transferência",
    texto: "Movimentação de cargas e vasilhames entre bases, depósitos e distribuidoras.",
    itens: ["Entre Maceió e Vicência", "Cargas cheias e vazias", "Comunicação direta"],
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSecao
          eyebrow="O que fazemos"
          titulo="Soluções completas para a movimentação de GLP."
          descricao="Do recolhimento do vasilhame à entrega na revenda, cuidamos de cada etapa da operação."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map(({ icone: Icone, titulo, texto, itens }) => (
            <article key={titulo} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icone className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {itens.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
