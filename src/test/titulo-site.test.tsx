import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

describe("título e descrição do site", () => {
  const head = Route.options.head?.({} as never) as {
    meta: { title?: string; name?: string; property?: string; content?: string }[];
  };
  const meta = head.meta;

  it("o título traz o transporte e a logística de GLP nos três estados", () => {
    const titulo = meta.find((m) => "title" in m)?.title ?? "";
    expect(titulo).toContain("Transporte e logística de GLP em Alagoas, Pernambuco e Paraíba");
  });

  it("a descrição cita os três estados, incluindo a Paraíba", () => {
    const descricao = meta.find((m) => m.name === "description")?.content ?? "";
    expect(descricao).toContain("Alagoas, Pernambuco e Paraíba");
  });

  it("a prévia do link no WhatsApp usa a foto do caminhão", () => {
    const og = meta.find((m) => m.property === "og:image")?.content;
    expect(og).toBe("https://apemctransportes.lovable.app/previa-caminhao-glp.jpg");
    expect(meta.find((m) => m.name === "twitter:image")?.content).toBe(og);
  });
});
