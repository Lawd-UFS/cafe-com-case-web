import { Contacts } from "./Contacts";

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-x-clip bg-pepino">
      <div className="relative mx-auto max-w-[1920px]">
        <Contacts className="px-6 pt-16 text-2xl lg:absolute lg:bottom-full lg:left-[calc(100%*1019/1920)] lg:mb-[calc(106em/32)] lg:p-0 lg:text-[clamp(22px,1.667vw,32px)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[url(/images/textures/sunflower-seeds.png)] bg-size-[1198px_auto] bg-position-[0_-1728px] opacity-[0.13] mix-blend-soft-light"
      />
    </footer>
  );
}
