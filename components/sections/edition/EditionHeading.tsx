import { edition } from "@/content/edition";

export function EditionHeading() {
  return (
    <div
      data-reveal
      className="anim-pop relative z-10 flex w-[34%] flex-col items-center pt-[1vw] pb-[4.1vw] pl-[2vw] text-pepino [filter:url(#edition-heading-texture-mobile)] lg:w-auto lg:p-[4.2vw] lg:[filter:url(#edition-heading-texture)]"
    >
      <span
        aria-hidden
        className="flex h-fit w-fit font-gluten text-[13.3vw] leading-[0.88] font-bold lg:text-[11vw] lg:leading-none"
      >
        13ª
      </span>
      <h2 className="font-alternates text-[5.1vw] leading-none font-black lg:text-[4.4vw]">
        Edição
      </h2>
      <span className="sr-only">{edition.title}</span>
    </div>
  );
}
