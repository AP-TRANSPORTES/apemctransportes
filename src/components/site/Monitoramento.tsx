import { BellRing, Cctv, Gauge, MapPinned, ScanEye } from "lucide-react";
import { TituloSecao } from "./Secao";

const RECURSOS = [
  {
    icone: Cctv,
    titulo: "Câmeras embarcadas",
    texto:
      "Videomonitoramento nos caminhões, com gravação em alta qualidade e armazenamento contínuo das imagens para verificar acidentes, roubos ou vandalismo.",
  },
  {
    icone: Gauge,
    titulo: "Telemetria",
    texto:
      "Velocidade, aceleração, frenagens bruscas e tempo parado com o motor ligado registrados em cada viagem, direto da leitura do veículo.",
  },
  {
    icone: MapPinned,
    titulo: "Localização em tempo real",
    texto: "Acompanhamento da posição de cada caminhão durante as rotas em Alagoas, Pernambuco e Paraíba.",
  },
  {
    icone: ScanEye,
    titulo: "Sensor de fadiga",
    texto: "Câmera voltada ao motorista identifica sinais de cansaço, distração e uso de celular ao volante.",
  },
  {
    icone: BellRing,
    titulo: "Alertas e relatórios",
    texto:
      "Comportamentos de risco geram alertas na hora e relatórios por gravidade, que orientam treinamentos e ações corretivas.",
  },
];

export function Monitoramento() {
  return (
    <section id="monitoramento" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <TituloSecao
            eyebrow="Monitoramento e telemetria"
            titulo="Caminhões monitorados com tecnologia Trimble."
            descricao="Câmeras e telemetria acompanham cada viagem para prevenir acidentes, proteger a carga de GLP e garantir que a entrega chegue no prazo."
          />
          <aside className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Sobre a Trimble</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Empresa global de tecnologia, com sede na Califórnia (EUA), referência em posicionamento, conectividade e
              análise de dados. No Brasil, sua solução para o transporte reúne telemetria, videomonitoramento e sensor de
              fadiga em uma única plataforma, usada por grandes operações de cargas e combustíveis.
            </p>
          </aside>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {RECURSOS.map(({ icone: Icone, titulo, texto }) => (
            <article key={titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icone className="size-5" />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
