import { FileCheck2, ShieldAlert, HardHat, FileText } from "lucide-react";
import { EMPRESA } from "@/lib/empresa";
import { TituloSecao } from "./Secao";

const PRATICAS = [
  { icone: FileCheck2, titulo: "Normas da ANP", texto: "Operação de transporte de GLP conforme as regras do setor." },
  { icone: ShieldAlert, titulo: "Carga perigosa", texto: "Veículos sinalizados e manuseio adequado de produto inflamável." },
  { icone: HardHat, titulo: "Equipe orientada", texto: "Uso de equipamentos de proteção e procedimentos de segurança." },
  { icone: FileText, titulo: "Documentação", texto: "Documentos da operação disponíveis para clientes e parceiros." },
];

export function Seguranca() {
  const dados = [
    EMPRESA.cnpj && { rotulo: "CNPJ", valor: EMPRESA.cnpj },
    EMPRESA.autorizacaoAnp && { rotulo: "Autorização ANP", valor: EMPRESA.autorizacaoAnp },
  ].filter(Boolean) as { rotulo: string; valor: string }[];

  return (
    <section id="seguranca" className="section-pad bg-hero text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="eyebrow">Segurança e regularidade</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[2.6rem]">
            GLP exige cuidado. Nós levamos isso a sério.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted md:text-lg">
            Cada carga envolve produto inflamável, por isso seguimos procedimentos claros do carregamento à entrega.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRATICAS.map(({ icone: Icone, titulo, texto }) => (
            <div key={titulo} className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-5">
              <Icone className="size-7 text-primary" />
              <h3 className="mt-4 font-bold">{titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-navy-muted">{texto}</p>
            </div>
          ))}
        </div>
        {dados.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-navy-foreground/10 pt-6 text-sm">
            {dados.map((d) => (
              <div key={d.rotulo}>
                <dt className="text-xs font-bold uppercase tracking-wider text-primary">{d.rotulo}</dt>
                <dd className="mt-1 font-semibold">{d.valor}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
