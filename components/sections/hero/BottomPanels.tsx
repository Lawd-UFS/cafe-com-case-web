import Image from "next/image";

export function BottomPanels() {
  return (
    <div className="absolute bottom-0 z-20 flex h-1/3 w-full items-end">
      <div className="relative h-[110%] w-1/4 bg-azul [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)]">
        <Image
          src="/images/illustrations/fish.png"
          alt=""
          width={600}
          height={400}
          className="absolute inset-0 m-auto h-4/7 w-[72%] translate-y-10 -rotate-10 object-contain"
        />
      </div>
      <div className="absolute left-3/13 h-[82.5%] w-1/3 overflow-hidden bg-tomate [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]">
        <Image
          src="/images/illustrations/pot.png"
          alt=""
          width={600}
          height={400}
          className="absolute top-1/3 right-10 h-[69.2%] w-auto translate-x-[-15%] translate-y-[-15%] rotate-8 object-contain"
        />
      </div>
    </div>
  );
}
