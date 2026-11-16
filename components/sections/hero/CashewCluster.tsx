import Image from "next/image";

export function CashewCluster() {
  return (
    <div className="absolute top-0 h-3/4 w-full lg:h-1/2">
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-[6%] left-[52%] w-[34%] -translate-x-1/2 -rotate-15 object-contain lg:top-[8%] lg:left-1/2"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={160}
        height={160}
        className="absolute top-[34%] left-[14%] w-[29.7%] rotate-55 object-contain lg:top-[32%] lg:left-[10%]"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={140}
        height={140}
        className="absolute top-[62%] left-[11%] w-[23.1%] -rotate-45 object-contain lg:top-[54%] lg:left-[24%]"
      />
    </div>
  );
}
