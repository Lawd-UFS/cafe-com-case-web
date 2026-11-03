import { award } from "@/content/award";

// Prêmio Expresso award: issues #7 (desktop), #14 (mobile)
export function Award() {
  return (
    <section id="award">
      <p>{award.title}</p>
    </section>
  );
}
