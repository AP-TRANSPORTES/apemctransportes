import { CLIENTES } from "@/lib/logos";

export function Clientes() {
  return (
    <section id="clientes" aria-labelledby="clientes-titulo" className="border-b border-border bg-card py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="clientes-titulo" className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Prestamos serviços para
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CLIENTES.map((c) => (
            <li key={c.nome} className="flex h-24 items-center justify-center rounded-xl border border-border bg-background px-6">
              <img src={c.logo} alt={`Logo da ${c.nome}`} loading="lazy" className="h-12 w-auto max-w-full object-contain md:h-14" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
