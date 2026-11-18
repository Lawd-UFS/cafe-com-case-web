import Image from "next/image";

export function BottomPanels() {
  return (
    <div className="absolute bottom-0 z-20 flex h-full w-full items-end lg:h-1/3">
      <div className="absolute bottom-[10%] left-0 h-[48%] w-1/4 lg:relative lg:bottom-0 lg:h-[110%]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [filter:url(#hero-panels-texture)]"
        >
          <div className="size-full bg-azul [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)]" />
        </div>
        <Image
          src="/images/illustrations/fish.png"
          alt=""
          width={600}
          height={400}
          sizes="18vw"
          className="absolute inset-0 m-auto hidden h-4/7 w-[72%] translate-y-10 -rotate-10 object-contain lg:block"
        />
      </div>
      <div className="absolute right-0 bottom-[9%] h-[37%] w-1/3 lg:right-auto lg:bottom-0 lg:left-3/13 lg:h-[82.5%]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [filter:url(#hero-panels-texture)]"
        >
          <div className="size-full bg-tomate [clip-path:polygon(0_0,100%_1.5rem,100%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]" />
        </div>
        <div className="absolute inset-0 hidden overflow-hidden [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)] lg:block">
          <Image
            src="/images/illustrations/pot.png"
            alt=""
            width={600}
            height={400}
            sizes="22vw"
            className="absolute top-1/3 right-10 h-[69.2%] w-auto translate-x-[-15%] translate-y-[-15%] rotate-8 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
