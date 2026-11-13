import Image from "next/image";

export function BottomPanels() {
  return (
    <div className="absolute bottom-0 z-20 flex h-full w-full items-end md:h-1/3">
      <div className="absolute bottom-[10%] left-0 h-[48%] w-1/4 md:relative md:bottom-0 md:h-[110%]">
        <div
          aria-hidden
          className="absolute inset-0 bg-azul [filter:url(#hero-panels-texture)] [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)]"
        />
        <Image
          src="/images/illustrations/fish.png"
          alt=""
          width={600}
          height={400}
          className="absolute inset-0 m-auto hidden h-4/7 w-[72%] translate-y-10 -rotate-10 object-contain md:block"
        />
      </div>
      <div className="absolute right-0 bottom-[9%] h-[37%] w-1/3 md:right-auto md:bottom-0 md:left-3/13 md:h-[82.5%]">
        <div
          aria-hidden
          className="absolute inset-0 bg-tomate [filter:url(#hero-panels-texture)] [clip-path:polygon(0_0,100%_1.5rem,100%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]"
        />
        <div className="absolute inset-0 hidden overflow-hidden [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)] md:block">
          <Image
            src="/images/illustrations/pot.png"
            alt=""
            width={600}
            height={400}
            className="absolute top-1/3 right-10 h-[69.2%] w-auto translate-x-[-15%] translate-y-[-15%] rotate-8 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
