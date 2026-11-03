import { rodape } from "@/content/rodape";

// Rodapé: issues #11 (desktop), #17 (mobile)
export function Rodape() {
  return (
    <footer id="rodape">
      <p>{rodape.titulo}</p>
    </footer>
  );
}
