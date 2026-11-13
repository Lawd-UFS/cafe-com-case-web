import { MainButton } from "@/components/ui/MainButton";
import { edition } from "@/content/edition";

export function CtaArticle() {
  return (
    <article
      data-reveal
      className="anim-up relative z-10 mt-[18vw] flex w-full flex-col items-center gap-[5.1vw] px-[7.2vw] text-center text-pepino lg:mt-[2vw] lg:ml-auto lg:w-[max(24%,300px)] lg:items-start lg:gap-[1.7vw] lg:self-end lg:px-0 lg:text-left"
    >
      <p className="font-alternates text-[4.1vw] leading-snug font-medium italic lg:text-[clamp(22px,2.08vw,40px)] lg:leading-tight">
        Aqui, quando falamos de
        <span className="font-extrabold"> {edition.ctaHighlight} </span>
        também entram na conversa.
      </p>
      <p className="text-[3.1vw] leading-snug font-semibold lg:max-w-5/6 lg:text-[clamp(14px,1.04vw,20px)] lg:font-medium">
        {edition.ctaText}
      </p>
      <MainButton
        data-reveal
        href={edition.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="anim-pop [animation-delay:150ms] lg:h-[clamp(40px,3vw,58px)] lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
      >
        {edition.cta}
      </MainButton>
    </article>
  );
}
