import { describe, expect, it } from "vitest";
import { EMPRESA, linkWhatsApp, mensagemCandidatura } from "./empresa";

describe("contato via WhatsApp", () => {
  it("abre o WhatsApp da equipe no número (82) 99999-2245", () => {
    expect(linkWhatsApp()).toBe("https://wa.me/5582999992245");
  });

  it("o e-mail de contato é transportadoramct@gmail.com", () => {
    expect(EMPRESA.email).toBe("transportadoramct@gmail.com");
  });

  it("o crédito do site vai para Rhuan Marcos", () => {
    expect(EMPRESA.criadorSite).toBe("Rhuan Marcos");
  });

  it("o site cita as quatro empresas, incluindo a VP", () => {
    expect(EMPRESA.nomes).toContain("VP Transportes");
    expect(EMPRESA.marcaCurta).toContain("VP");
  });

  it("a candidatura envia nome, telefone e função; mensagem só quando preenchida", () => {
    const sem = mensagemCandidatura({ nome: "João", telefone: "82 98888-0000", funcao: "Motorista" });
    expect(sem).toContain("Nome: João");
    expect(sem).toContain("Telefone: 82 98888-0000");
    expect(sem).toContain("Função desejada: Motorista");
    expect(sem).not.toContain("Mensagem:");
    const com = mensagemCandidatura({ nome: "Ana", telefone: "1", funcao: "Administrativo", mensagem: "Tenho CNH E" });
    expect(com).toContain("Mensagem: Tenho CNH E");
  });
});
