import { TextureFilter } from "@/components/ui/TextureFilter";
import { TitleTexture } from "@/components/ui/TitleTexture";
import { RevealScene } from "@/components/ui/RevealScene";
import { BeanPanel } from "./BeanPanel";
import { CtaArticle } from "./CtaArticle";
import { EditionHeading } from "./EditionHeading";
import { TablePanel } from "./TablePanel";

const paperEdges = [
  "inset-x-0 top-0 h-6",
  "inset-y-0 left-0 w-6",
  "inset-y-0 right-0 w-6",
  "inset-x-0 bottom-0 h-6",
];

export function Edition() {
  return (
    <RevealScene id="edition">
      <div className="flex w-full pt-[3.1vw] lg:px-[3.75vw] lg:pt-[5vw]">
        <div className="relative mx-auto flex w-[calc(100%-8.2vw)] flex-col pt-[7.2vw] pb-[14.4vw] lg:left-1/2 lg:mx-0 lg:min-h-[90vw] lg:w-screen lg:max-w-none lg:-translate-x-1/2 lg:flex-row lg:pt-10 lg:pr-[3.75vw] lg:pb-[calc(8rem+6vw)] lg:pl-10 lg:overflow-b-clip">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-2 bg-areia"
          />
          {paperEdges.map((edge) => (
            <div
              key={edge}
              aria-hidden
              className={`pointer-events-none absolute bg-areia filter-[url(#edition-texture)] ${edge}`}
            />
          ))}
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
          <TitleTexture
            id="edition-heading-texture-mobile"
            size={5.6}
            scale={1.26}
            speckles="1.57 2.36"
            color="var(--color-damasco)"
          />
          <TitleTexture
            id="edition-heading-texture"
            size={24.79}
            scale={5.57}
            speckles="0.36 0.53"
            color="var(--color-damasco)"
          />
          <TitleTexture
            id="edition-title-texture"
            size={29.4}
            scale={6.6}
            speckles="0.3 0.45"
            color="#8e4300"
          />
        </defs>
      </svg>
    </RevealScene>
  );
}
