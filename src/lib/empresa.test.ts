import { describe, expect, it } from "vitest";
import { EMPRESA, cnpjDa, linkWhatsApp, mensagemCandidatura } from "./empresa";

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

  it("o site cita só AP, MC e Elizabete — a VP saiu", () => {
    expect(EMPRESA.nomes).toEqual(["AP Transportes", "MC Transportes", "Elizabete Transportes"]);
    expect(EMPRESA.marcaCurta).not.toContain("VP");
    expect(cnpjDa("VP Transportes")).toBeUndefined();
  });

  it("a triagem dos vasilhames é no pátio da SULOG", () => {
    expect(EMPRESA.triagem.nome).toContain("SULOG");
    expect(EMPRESA.triagem.mapa).toBe("https://maps.app.goo.gl/6d2c9Nwa3L8MuShJ9");
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

  it("cada empresa mostra o CNPJ informado", () => {
    expect(cnpjDa("AP Transportes")).toBe("10.459.153/0001-55");
    expect(cnpjDa("MC Transportes")).toBe("35.796.963/0001-28");
    expect(cnpjDa("Elizabete Transportes")).toBe("48.336.573/0001-17");
  });

  it("a razão social da Elizabete é Elizabete Transportes LTDA - EPP", () => {
    expect(EMPRESA.cnpjs.find((c) => c.empresa === "Elizabete Transportes")?.razaoSocial).toBe(
      "Elizabete Transportes LTDA - EPP",
    );
  });
});
