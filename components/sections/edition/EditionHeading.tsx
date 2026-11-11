import { edition } from "@/content/edition";

export function EditionHeading() {
  return (
    <div className="flex flex-col items-center p-20 text-pepino">
      <span
        aria-hidden
        className="line- flex h-fit w-fit font-gluten text-[13.125rem] leading-none font-bold"
      >
        13ª
      </span>
      <h2 className="font-alternates text-[5.25rem] leading-none font-black">
        Edição
      </h2>
      <span className="sr-only">{edition.title}</span>
    </div>
  );
}
