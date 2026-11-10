import { Faq } from "@/components/sections/faq/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Café com Case",
  description:
    "Tire suas dúvidas sobre o Café com Case, a 13ª edição e o Prêmio Expresso.",
};

export default function FaqPage() {
  return (
    <main>
      <Faq />
    </main>
  );
}
