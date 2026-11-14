import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Servicos } from "@/components/site/Servicos";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Empresas } from "@/components/site/Empresas";
import { Seguranca } from "@/components/site/Seguranca";
import { OndeEstamos } from "@/components/site/OndeEstamos";
import { TrabalheConosco } from "@/components/site/TrabalheConosco";
import { Contato } from "@/components/site/Contato";
import { BotaoWhatsApp, Gratidao, Rodape } from "@/components/site/Rodape";

const TITULO = "AP • MC • VP • Elizabete | Transporte e logística de GLP em Alagoas, Pernambuco e Paraíba";
const DESCRICAO =
  "AP, MC, VP e Elizabete Transportes: destroca e qualificação de vasilhames, distribuição e transferência de GLP em Alagoas, Pernambuco e Paraíba.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Servicos />
        <QuemSomos />
        <Empresas />
        <Seguranca />
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
