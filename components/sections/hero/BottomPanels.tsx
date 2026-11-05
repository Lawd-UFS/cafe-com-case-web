import Image from "next/image";

export function BottomPanels() {
  return (
    <div className="absolute bottom-0 z-20 flex h-1/3 w-full items-end">
      <div className="relative h-full w-1/4 bg-azul [clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)]">
        <Image
          src="/images/illustrations/fish.png"
          alt=""
          width={600}
          height={400}
          className="absolute inset-0 m-auto h-2/3 w-[90%] translate-y-4 object-contain"
        />
      </div>
      <div className="absolute left-3/13 h-3/4 w-2/7 overflow-hidden bg-tomate [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]">
        <Image
          src="/images/illustrations/pot.png"
          alt=""
          width={600}
          height={400}
          className="absolute inset-0 m-auto h-2/3 w-[90%] object-contain"
        />
      </div>
    </div>
  );
}
