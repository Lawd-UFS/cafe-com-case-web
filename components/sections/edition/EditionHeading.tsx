import { edition } from "@/content/edition";

export function EditionHeading() {
  return (
    <div className="relative z-10 flex w-[34%] flex-col items-center pt-1 pb-4 pl-2 text-pepino lg:w-auto lg:p-[4.2vw]">
      <span
        aria-hidden
        className="flex h-fit w-fit font-gluten text-[3.25rem] leading-[0.88] font-bold lg:text-[11vw] lg:leading-none"
      >
        13ª
      </span>
      <h2 className="font-alternates text-[1.25rem] leading-none font-black lg:text-[4.4vw]">
        Edição
      </h2>
      <span className="sr-only">{edition.title}</span>
    </div>
  );
}
