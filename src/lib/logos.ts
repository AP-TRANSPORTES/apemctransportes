// Imagens empacotadas no build (funcionam em qualquer hospedagem: Lovable, Vercel etc.)
import ap from "@/assets/ap-transportes-escudo.png";
import mc from "@/assets/mc-transportes-logo.jpg";
import vp from "@/assets/vp-transportes-logo.jpg";
import elizabete from "@/assets/elizabete-transportes-logo.jpg";
import copagaz from "@/assets/copagaz-logo.png";
import copaEnergia from "@/assets/copa-energia-logo.svg";
import supergasbras from "@/assets/supergasbras-logo.svg";

export const LOGOS = { ap, mc, vp, elizabete };

// Empresas para as quais o grupo presta serviço (logos oficiais, Wikimedia Commons)
export const CLIENTES = [
  { nome: "Copagaz", logo: copagaz },
  { nome: "Copa Energia", logo: copaEnergia },
  { nome: "Supergasbras", logo: supergasbras },
];
