import Image from "next/image";

import { CashewCluster } from "./CashewCluster";

export function TopPanels() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <div className="relative z-10 h-[32%] w-[34%] lg:h-full lg:w-1/6">
        <div
          aria-hidden
          className="absolute inset-0 bg-pepino filter-[url(#hero-panels-texture)]"
        />
        <CashewCluster />
      </div>
      <div className="relative left-[-34%] h-[42%] w-[61%] lg:left-0 lg:h-full lg:w-1/3">
        <div
          aria-hidden
          className="absolute inset-0 bg-cafe filter-[url(#hero-panels-texture)]"
        />
        <Image
          src="/images/illustrations/cup.png"
          alt=""
          width={400}
          height={400}
          className="absolute top-4 right-5 h-[19%] w-[26%] -scale-x-100 object-contain lg:-top-4 lg:right-6 lg:h-[25.2%] lg:w-[37.8%]"
        />
      </div>
    </div>
  );
}
