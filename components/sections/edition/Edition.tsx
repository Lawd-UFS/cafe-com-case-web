import { BeanPanel } from "./BeanPanel";
import { CtaArticle } from "./CtaArticle";
import { EditionHeading } from "./EditionHeading";
import { TablePanel } from "./TablePanel";

export function Edition() {
  return (
    <section id="edition">
      <div className="flex w-full px-18 pt-24">
        <div className="relative left-1/2 flex min-h-[160vh] w-screen -translate-x-1/2 bg-areia pr-18 pb-26 overflow-b-clip">
          <EditionHeading />
          <TablePanel />
          <BeanPanel />
          <CtaArticle />
        </div>
      </div>
    </section>
  );
}
