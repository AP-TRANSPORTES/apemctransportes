// Dados oficiais do grupo. Campos null ficam ocultos no site até serem informados.
export const EMPRESA = {
  nomes: ["AP Transportes", "MC Transportes", "VP Transportes", "Elizabete Transportes"],
  marcaCurta: "AP • MC • VP • Elizabete",
  direcao: "Maria Cristina e Antonio Pereira",
  whatsapp: "5582999992245",
  telefoneExibicao: "(82) 99999-2245",
  email: null as string | null,
  horario: null as string | null,
  cnpj: null as string | null,
  autorizacaoAnp: null as string | null,
  razaoSocial: "Transportadora A. P. A P de Souza Transportes LTDA",
};

export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${EMPRESA.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export function linkMapa(endereco: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
}

export type Candidatura = {
  nome: string;
  telefone: string;
  funcao: string;
  mensagem?: string;
};

export function mensagemCandidatura(c: Candidatura): string {
  const linhas = [
    "Olá! Gostaria de me candidatar a uma vaga.",
    `Nome: ${c.nome.trim()}`,
    `Telefone: ${c.telefone.trim()}`,
    `Função desejada: ${c.funcao}`,
  ];
  const extra = c.mensagem?.trim();
  if (extra) linhas.push(`Mensagem: ${extra}`);
  return linhas.join("\n");
}
