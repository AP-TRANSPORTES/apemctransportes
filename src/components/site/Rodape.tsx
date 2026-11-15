import { Mail, MessageCircle } from "lucide-react";
import { EMPRESA, linkWhatsApp } from "@/lib/empresa";
import { LOGOS } from "@/lib/logos";

export function Gratidao() {
  return (
    <section className="section-pad">
      <figure className="mx-auto max-w-3xl px-4 text-center">
        <p className="eyebrow">Nossa gratidão</p>
        <blockquote className="mt-5 font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
          “Tomou, então, Samuel uma pedra, e a pôs entre Mispa e Sem, e lhe chamou Ebenézer, e disse: Até aqui nos ajudou
          o SENHOR.”
        </blockquote>
        <figcaption className="mt-4 text-sm font-bold text-primary">1 Samuel 7:12</figcaption>
      </figure>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-card p-1.5">
            <img src={LOGOS.ap} alt="" className="h-9 w-auto" />
          </span>
          <div>
            <p className="font-display font-extrabold">{EMPRESA.nomes.join(" • ")}</p>
            <p className="text-xs text-navy-muted">
              Transporte e logística de GLP • Alagoas, Pernambuco e Paraíba
              {EMPRESA.cnpj ? ` • CNPJ ${EMPRESA.cnpj}` : ""}
            </p>
          </div>
        </div>
        <ul className="space-y-2 text-sm font-semibold">
          <li>
            <a href={linkWhatsApp()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
              <MessageCircle className="size-5 text-primary" /> {EMPRESA.telefoneExibicao}
            </a>
          </li>
          {EMPRESA.email && (
            <li>
              <a href={`mailto:${EMPRESA.email}`} className="flex items-center gap-3 break-all hover:text-primary">
                <Mail className="size-5 shrink-0 text-primary" /> {EMPRESA.email}
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-navy-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="opacity-70">Site criado por {EMPRESA.criadorSite}</p>
        </div>
      </div>
    </footer>
  );
}

export function BotaoWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
