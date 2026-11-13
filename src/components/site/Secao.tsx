import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TituloSecao({
  eyebrow,
  titulo,
  descricao,
  centro = false,
}: {
  eyebrow: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  centro?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", centro && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-[2.6rem]">{titulo}</h2>
      {descricao && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{descricao}</p>}
    </div>
  );
}
