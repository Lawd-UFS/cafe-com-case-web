import { TextureFilter } from "@/components/ui/TextureFilter";
import { RevealScene } from "@/components/ui/RevealScene";
import { BeanPanel } from "./BeanPanel";
import { CtaArticle } from "./CtaArticle";
import { EditionHeading } from "./EditionHeading";
import { TablePanel } from "./TablePanel";

export function Edition() {
  return (
    <RevealScene id="edition">
      <div className="flex w-full pt-[3.1vw] lg:px-[3.75vw] lg:pt-[5vw]">
        <div className="relative mx-auto flex w-[calc(100%-8.2vw)] flex-col pt-[7.2vw] pb-[14.4vw] lg:left-1/2 lg:mx-0 lg:min-h-[90vw] lg:w-screen lg:max-w-none lg:-translate-x-1/2 lg:flex-row lg:bg-areia lg:pt-10 lg:pr-[3.75vw] lg:pb-[calc(8rem+6vw)] lg:pl-10 lg:overflow-b-clip">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-areia filter-[url(#edition-texture)] lg:hidden"
          />
          <EditionHeading />
          <TablePanel />
          <BeanPanel />
          <CtaArticle />
          <div
            aria-hidden
            data-reveal
            className="anim-up pointer-events-none absolute -bottom-1 left-[-4.1vw] z-10 h-[14.4vw] w-[48%] bg-cafe filter-[url(#edition-texture)] [clip-path:polygon(0_0,78%_68%,94%_100%,0_100%)] lg:hidden"
          />
        </div>
      </div>
      <svg aria-hidden className="absolute size-0">
        <defs>
          <TextureFilter id="edition-texture" radius={6} size={14} />
        </defs>
      </svg>
    </RevealScene>
  );
}
