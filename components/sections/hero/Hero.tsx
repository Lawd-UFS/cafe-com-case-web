import { hero } from "@/content/hero";

// Hero: issues #5 (desktop), #12 (mobile)
export function Hero() {
  return (
    <section id="hero">
      <p>{hero.title}</p>
    </section>
  );
}
