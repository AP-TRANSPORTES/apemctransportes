import { Check, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMPRESA, linkWhatsApp } from "@/lib/empresa";
import { TituloSecao } from "./Secao";

const COMPROMISSOS = ["Cumprimento de prazos", "Organização nas operações", "Comunicação direta", "Foco em segurança"];

export function Contato() {
  const canais = [
    { icone: Phone, rotulo: "WhatsApp e telefone", valor: EMPRESA.telefoneExibicao, href: linkWhatsApp() },
    EMPRESA.email && { icone: Mail, rotulo: "E-mail", valor: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
    EMPRESA.horario && { icone: Clock, rotulo: "Atendimento", valor: EMPRESA.horario, href: undefined },
  ].filter(Boolean) as { icone: typeof Phone; rotulo: string; valor: string; href: string | undefined }[];

  return (
    <section id="contato" className="section-pad bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <div>
          <TituloSecao
            eyebrow="Clientes e contato"
            titulo="Compromisso com quem confia na nossa operação."
            descricao="Atendemos distribuidoras, revendas e parceiros que precisam de transporte, destroca, qualificação de vasilhames, distribuição e transferência de GLP com regularidade."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {COMPROMISSOS.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Check className="size-4 shrink-0 text-primary" strokeWidth={3} /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-hero p-6 text-navy-foreground shadow-card md:p-8">
          <h3 className="text-xl font-bold">É cliente ou quer ser?</h3>
          <p className="mt-2 text-sm text-navy-muted">Fale com a equipe para alinhar rotas, prazos e necessidade operacional.</p>
          <ul className="mt-6 space-y-4">
            {canais.map(({ icone: Icone, rotulo, valor, href }) => (
              <li key={rotulo} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-foreground/10">
                  <Icone className="size-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-muted">{rotulo}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="break-all font-semibold hover:text-primary"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="font-semibold">{valor}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Button asChild variant="whatsapp" size="xl" className="mt-8 w-full">
            <a href={linkWhatsApp("Olá! Gostaria de falar sobre os serviços de transporte de GLP.")} target="_blank" rel="noreferrer">
              <MessageCircle /> Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
