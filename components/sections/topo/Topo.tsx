import { topo } from "@/content/topo";

// Topo: issues #5 (desktop), #12 (mobile)
export function Topo() {
  return (
    <section id="topo">
      <p>{topo.titulo}</p>
    </section>
  );
}
