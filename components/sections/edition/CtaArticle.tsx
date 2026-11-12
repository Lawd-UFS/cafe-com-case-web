import { MainButton } from "@/components/ui/MainButton";
import { edition } from "@/content/edition";

export function CtaArticle() {
  return (
    <article className="relative z-10 flex w-full flex-col gap-8 text-pepino lg:mt-[2vw] lg:ml-auto lg:w-[max(24%,300px)] lg:items-start lg:gap-[1.7vw] lg:self-end">
      <p className="font-alternates text-3xl leading-tight font-medium italic lg:text-[clamp(22px,2.08vw,40px)]">
        Aqui, quando falamos de
        <span className="font-extrabold"> {edition.ctaHighlight} </span>
        também entram na conversa.
      </p>
      <p className="max-w-5/6 text-xl font-medium lg:text-[clamp(14px,1.04vw,20px)]">
        {edition.ctaText}
      </p>
      <MainButton
        href={edition.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:h-[clamp(40px,3vw,58px)] lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
      >
        {edition.cta}
      </MainButton>
    </article>
  );
}
