import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EMPRESA, linkWhatsApp } from "@/lib/empresa";
import { LOGOS } from "@/lib/logos";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#abrangencia", label: "Abrangência" },
  { href: "#onde-estamos", label: "Onde estamos" },
  { href: "#trabalhe-conosco", label: "Trabalhe conosco" },
  { href: "#contato", label: "Contato" },
];

export function Marca() {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <img src={LOGOS.ap} alt="Escudo da AP Transportes" width={30} height={42} className="h-10 w-auto" />
      <span className="leading-tight">
        <span className="block font-display text-[0.95rem] font-extrabold tracking-tight text-foreground">
          {EMPRESA.marcaCurta}
        </span>
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
          Transporte de GLP
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [aberto, setAberto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-18">
        <Marca />
        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.filter((l) => l.href !== "#inicio" && l.href !== "#trabalhe-conosco").map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <a href={linkWhatsApp()} target="_blank" rel="noreferrer">
              <MessageCircle /> Fale conosco
            </a>
          </Button>
          <Sheet open={aberto} onOpenChange={setAberto}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="!size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left font-display">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setAberto(false)}
                    className="border-b border-border py-3 text-base font-semibold text-foreground hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <Button asChild variant="whatsapp" size="xl" className="mt-6 w-full">
                <a href={linkWhatsApp()} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
