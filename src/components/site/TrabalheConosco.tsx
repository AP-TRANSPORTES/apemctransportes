import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import equipe from "@/assets/equipe.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { linkWhatsApp, mensagemCandidatura } from "@/lib/empresa";
import { TituloSecao } from "./Secao";

const FUNCOES = ["Motorista", "Ajudante de entrega", "Operações e logística", "Administrativo", "Outra função"];

export function TrabalheConosco() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [funcao, setFuncao] = useState(FUNCOES[0] ?? "Motorista");
  const [mensagem, setMensagem] = useState("");

  function enviar(e: FormEvent) {
    e.preventDefault();
    const texto = mensagemCandidatura({ nome, telefone, funcao, mensagem });
    window.open(linkWhatsApp(texto), "_blank", "noopener");
  }

  return (
    <section id="trabalhe-conosco" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <div>
          <TituloSecao
            eyebrow="Trabalhe conosco"
            titulo="Faça parte da nossa equipe."
            descricao="Envie seu nome, telefone e a função desejada. Respondemos pelo WhatsApp."
          />
          <img
            src={equipe}
            alt="Equipe de motoristas e colaboradores em frente a um caminhão"
            width={1200}
            height={912}
            loading="lazy"
            className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
          />
        </div>
        <form onSubmit={enviar} className="self-start rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
          <h3 className="text-xl font-bold text-foreground">Candidatura rápida</h3>
          <div className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} className="h-11" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                inputMode="tel"
                required
                placeholder="(82) 90000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="funcao">Função desejada</Label>
              <select
                id="funcao"
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
                className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {FUNCOES.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="mensagem">Mensagem (opcional)</Label>
              <Textarea id="mensagem" rows={3} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </div>
          </div>
          <Button type="submit" variant="whatsapp" size="xl" className="mt-6 w-full">
            <Send /> Enviar pelo WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
