import Image from "next/image";

export function CashewCluster() {
  return (
    <div className="absolute top-0 h-1/2 w-full">
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-[8%] left-1/2 w-[34%] -translate-x-1/2 -rotate-15 object-contain"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={160}
        height={160}
        className="absolute top-[32%] left-[10%] w-[29.7%] rotate-55 object-contain"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={140}
        height={140}
        className="absolute top-[54%] left-[24%] w-[23.1%] -rotate-45 object-contain"
      />
    </div>
  );
}
