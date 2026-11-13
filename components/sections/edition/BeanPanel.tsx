import Image from "next/image";

import { edition } from "@/content/edition";

export function BeanPanel() {
  return (
    <div className="relative z-20 mx-[-4.1vw] mt-[73.8vw] pt-[16.4vw] pb-[16.4vw] lg:absolute lg:top-[30%] lg:left-0 lg:mx-0 lg:mt-0 lg:h-[70%] lg:w-[60%] lg:overflow-visible lg:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[18%] -bottom-[6%] bg-cafe filter-[url(#edition-texture)] [clip-path:polygon(0_0,62%_12%,88%_34%,100%_64%,100%_92%,74%_100%,35%_95%,0_66%)] lg:hidden"
      />
      <article className="relative z-10 flex flex-col gap-[3.1vw] px-[9.2vw] text-damasco lg:absolute lg:top-[15%] lg:right-[18%] lg:left-auto lg:w-[48%] lg:translate-x-[5%] lg:gap-[2.9vw] lg:p-0">
        <p className="w-[82%] font-alternates text-[7.2vw] leading-[1.12] font-black lg:w-auto lg:text-[clamp(24px,2.5vw,48px)]">
          {edition.beanHighlight}
        </p>
        <p className="w-[68%] self-end text-left text-[3.1vw] leading-[1.35] font-medium lg:w-[67.5%] lg:text-[clamp(14px,1.04vw,20px)] lg:font-semibold">
          {edition.beanText}
        </p>
      </article>
      <Image
        src="/images/illustrations/brown-shape.png"
        alt=""
        width={1189}
        height={1174}
        className="hidden h-full w-full max-w-none -translate-x-1/10 translate-y-[5%] scale-120 -rotate-8 zoom-[1.1] object-cover object-center lg:block"
      />
    </div>
  );
}
