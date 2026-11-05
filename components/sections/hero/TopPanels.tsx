import Image from "next/image";

import { CashewCluster } from "./CashewCluster";

export function TopPanels() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <div className="relative h-full w-1/6 bg-pepino">
        <CashewCluster />
      </div>
      <div className="relative h-full w-2/7 bg-cafe">
        <Image
          src="/images/illustrations/cup.png"
          alt=""
          width={400}
          height={400}
          className="absolute -top-4 right-6 h-1/3 w-1/2 object-contain"
        />
      </div>
    </div>
  );
}
