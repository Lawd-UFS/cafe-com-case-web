import { BigButton } from "@/components/ui/BigButton";
import { FaqLettering } from "@/components/ui/FaqLettering";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { BottomPanels } from "./BottomPanels";
import { ContentBand } from "./ContentBand";
import { SunflowerTexture } from "./SunflowerTexture";
import { TopPanels } from "./TopPanels";

export function Hero() {
  return (
    <section className="relative flex min-h-[max(120vh,64rem)] w-full items-center overflow-hidden lg:min-h-[61.25vw]">
      <SunflowerTexture />
      <TopPanels />
      <BottomPanels />
      <div className="absolute top-10 right-0 z-70">
        <BigButton href="/faq" aria-label="FAQ">
          <span className="block size-full text-pepino group-hover:text-areia group-focus-visible:text-areia">
            <FaqLettering />
          </span>
        </BigButton>
      </div>
      <ContentBand />
      <svg aria-hidden className="absolute size-0">
        <defs>
          <TextureFilter id="hero-panels-texture" radius={10} size={16} />
        </defs>
      </svg>
    </section>
  );
}
