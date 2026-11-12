import { BeanPanel } from "./BeanPanel";
import { CtaArticle } from "./CtaArticle";
import { EditionHeading } from "./EditionHeading";
import { TablePanel } from "./TablePanel";

export function Edition() {
  return (
    <section id="edition">
      <div className="flex w-full px-4 pt-12 md:px-10 lg:px-[3.75vw] lg:pt-[5vw]">
        <div className="relative left-1/2 grid w-screen -translate-x-1/2 grid-cols-1 gap-12 bg-areia px-4 pt-10 pb-16 overflow-b-clip md:px-10 lg:flex lg:min-h-[90vw] lg:gap-0 lg:pr-[3.75vw] lg:pb-[calc(8rem+6vw)]">
          <EditionHeading />
          <TablePanel />
          <BeanPanel />
          <CtaArticle />
        </div>
      </div>
    </section>
  );
}
