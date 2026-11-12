import Image from "next/image";

import { CashewCluster } from "./CashewCluster";

export function TopPanels() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <div className="relative h-full w-1/6">
        <div
          aria-hidden
          className="absolute inset-0 bg-pepino [filter:url(#hero-panels-texture)]"
        />
        <CashewCluster />
      </div>
      <div className="relative h-full w-1/3">
        <div
          aria-hidden
          className="absolute inset-0 bg-cafe [filter:url(#hero-panels-texture)]"
        />
        <Image
          src="/images/illustrations/cup.png"
          alt=""
          width={400}
          height={400}
          className="absolute -top-4 right-6 h-[25.2%] w-[37.8%] -scale-x-100 object-contain"
        />
      </div>
    </div>
  );
}
