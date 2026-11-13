import { edition } from "@/content/edition";

export function EditionHeading() {
  return (
    <div className="relative z-10 flex w-[34%] flex-col items-center pt-[1vw] pb-[4.1vw] pl-[2vw] text-pepino lg:w-auto lg:p-[4.2vw]">
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
