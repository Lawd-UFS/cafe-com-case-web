import { BottomPanels } from "./BottomPanels";
import { ContentBand } from "./ContentBand";
import { SunflowerTexture } from "./SunflowerTexture";
import { TopPanels } from "./TopPanels";

export function Hero() {
  return (
    <section className="relative w-screen">
      <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-laranja">
        <SunflowerTexture />
        <TopPanels />
        <BottomPanels />
        <ContentBand />
      </div>
    </section>
  );
}
