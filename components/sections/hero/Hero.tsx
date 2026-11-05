import { BottomPanels } from "./BottomPanels";
import { ContentBand } from "./ContentBand";
import { SunflowerTexture } from "./SunflowerTexture";
import { TopPanels } from "./TopPanels";

export function Hero() {
  return (
    <section className="relative flex h-screen w-screen items-center overflow-hidden bg-laranja">
      <SunflowerTexture />
      <TopPanels />
      <BottomPanels />
      <ContentBand />
    </section>
  );
}
