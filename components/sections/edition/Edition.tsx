import { edition } from "@/content/edition";

// 13th Edition: issues #6 (desktop), #13 (mobile)
export function Edition() {
  return (
    <section id="edition">
      <p>{edition.title}</p>
    </section>
  );
}
