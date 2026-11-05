import Image from "next/image";

export function CashewCluster() {
  return (
    <div className="absolute top-0 h-1/2 w-full">
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-[10%] left-1/2 w-[34%] -translate-x-1/2 object-contain"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={160}
        height={160}
        className="absolute top-[38%] left-[18%] w-[27%] rotate-[55deg] object-contain"
      />
      <Image
        src="/images/illustrations/cashew.png"
        alt=""
        width={140}
        height={140}
        className="absolute top-[61%] left-[43%] w-[21%] rotate-[-45deg] object-contain"
      />
    </div>
  );
}
