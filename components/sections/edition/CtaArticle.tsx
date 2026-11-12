import { MainButton } from "@/components/ui/MainButton";
import { edition } from "@/content/edition";

export function CtaArticle() {
  return (
    <article className="relative z-10 flex w-full flex-col gap-8 text-pepino lg:mt-10 lg:ml-auto lg:w-1/5 lg:self-end">
      <p className="font-alternates text-3xl leading-tight font-medium italic lg:text-[2.5rem]">
        Aqui, quando falamos de
        <span className="font-extrabold"> {edition.ctaHighlight} </span>
        também entram na conversa.
      </p>
      <p className="max-w-5/6 text-xl font-medium">{edition.ctaText}</p>
      <MainButton
        href={edition.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {edition.cta}
      </MainButton>
    </article>
  );
}
