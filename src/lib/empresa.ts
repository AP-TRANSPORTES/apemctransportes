// Dados oficiais do grupo. Campos null ficam ocultos no site até serem informados.
export const EMPRESA = {
  nomes: ["AP Transportes", "MC Transportes", "Elizabete Transportes"],
  marcaCurta: "AP • MC • Elizabete",
  direcao: "Maria Cristina e Antonio Pereira",
  whatsapp: "5582999992245",
  telefoneExibicao: "(82) 99999-2245",
  email: "transportadoramct@gmail.com" as string | null,
  horario: null as string | null,
  cnpjs: [
    { empresa: "AP Transportes", cnpj: "10.459.153/0001-55" },
    { empresa: "MC Transportes", cnpj: "35.796.963/0001-28" },
    { empresa: "Elizabete Transportes", razaoSocial: "Elizabete Transportes LTDA - EPP", cnpj: "48.336.573/0001-17" },
  ] as { empresa: string; razaoSocial?: string; cnpj: string }[],
  autorizacaoAnp: null as string | null,
  criadorSite: "Rhuan Marcos",
  razaoSocial: "Transportadora A. P. A P de Souza Transportes LTDA",
  // Pátio onde é feita a triagem dos vasilhames
  triagem: {
    nome: "SULOG — Pátio de Triagem",
    local: "Rodovia PE-009 • Cabo de Santo Agostinho • PE",
    mapa: "https://maps.app.goo.gl/6d2c9Nwa3L8MuShJ9",
  },
};

export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${EMPRESA.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export function cnpjDa(empresa: string): string | undefined {
  return EMPRESA.cnpjs.find((c) => c.empresa === empresa)?.cnpj;
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
