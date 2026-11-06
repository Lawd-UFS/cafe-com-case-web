import { WideButton } from "@/components/ui/WideButton";

export function CtaArticle() {
  return (
    <article className="relative mt-10 ml-auto flex w-1/5 flex-col gap-8 self-end text-pepino">
      <p className="font-nunito text-[2.5rem] leading-tight font-medium italic">
        Aqui, quando falamos de
        <span className="font-extrabold">
          {" "}
          alimentação, o direito e a cultura{" "}
        </span>
        também entram na conversa.
      </p>
      <p className="max-w-5/6 text-xl font-medium">
        E não acaba por aqui! Descubra o que mais acontece no Café com Case.
      </p>
      <WideButton>Conheça mais</WideButton>
    </article>
  );
}
