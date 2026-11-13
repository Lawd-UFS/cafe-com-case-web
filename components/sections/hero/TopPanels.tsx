import Image from "next/image";

import { CashewCluster } from "./CashewCluster";

export function TopPanels() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <div className="relative h-[32%] w-[34%] md:h-full md:w-1/6">
        <div
          aria-hidden
          className="absolute inset-0 bg-pepino [filter:url(#hero-panels-texture)]"
        />
        <CashewCluster />
      </div>
      <div className="relative -left-[34%] h-[42%] w-[61%] md:left-0 md:h-full md:w-1/3">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cafe [filter:url(#hero-panels-texture)] md:z-0"
        />
        <Image
          src="/images/illustrations/cup.png"
          alt=""
          width={400}
          height={400}
          className="absolute top-4 right-5 h-[19%] w-[26%] -scale-x-100 object-contain md:-top-4 md:right-6 md:h-[25.2%] md:w-[37.8%]"
        />
      </div>
    </div>
  );
}
