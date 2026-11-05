import { BottomPanels } from "./BottomPanels";
import { ContentBand } from "./ContentBand";
import { SunflowerTexture } from "./SunflowerTexture";
import { TopPanels } from "./TopPanels";

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
      <SunflowerTexture />
      <TopPanels />
      <BottomPanels />
      <ContentBand />
    </section>
  );
}
