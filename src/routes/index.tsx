import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Clientes } from "@/components/site/Clientes";
import { Servicos } from "@/components/site/Servicos";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Empresas } from "@/components/site/Empresas";
import { Seguranca } from "@/components/site/Seguranca";
import { Monitoramento } from "@/components/site/Monitoramento";
import { Abrangencia } from "@/components/site/Abrangencia";
import { OndeEstamos } from "@/components/site/OndeEstamos";
import { TrabalheConosco } from "@/components/site/TrabalheConosco";
import { Contato } from "@/components/site/Contato";
import { BotaoWhatsApp, Gratidao, Rodape } from "@/components/site/Rodape";

const TITULO = "AP • MC • Elizabete | Transporte e logística de GLP em Alagoas, Pernambuco e Paraíba";
const DESCRICAO =
  "AP, MC e Elizabete Transportes: destroca e qualificação de vasilhames, distribuição e transferência de GLP em Alagoas, Pernambuco e Paraíba, com caminhões monitorados por câmeras e telemetria.";
// Prévia ao compartilhar o link (WhatsApp etc.): foto do caminhão prateado, sem placas, 1200x630.
const IMAGEM_PREVIA = "https://grupoapdesouza.lovable.app/previa-caminhao-glp.jpg";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGEM_PREVIA },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Caminhão prateado do grupo carregado de botijões de GLP" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGEM_PREVIA },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clientes />
        <Servicos />
        <QuemSomos />
        <Empresas />
        <Seguranca />
        <Monitoramento />
        <Abrangencia />
        <OndeEstamos />
        <Contato />
        <TrabalheConosco />
        <Gratidao />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
