import Image from "next/image";

import { edition } from "@/content/edition";

export function BeanPanel() {
  return (
    <div className="relative z-20 -mx-4 mt-72 pt-16 pb-16 lg:absolute lg:top-[30%] lg:left-0 lg:mx-0 lg:mt-0 lg:h-[70%] lg:w-[60%] lg:overflow-visible lg:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cafe [filter:url(#edition-texture)] [clip-path:polygon(0_0,60%_14%,100%_62%,100%_91%,77%_96%,40%_93%,0_63%)] lg:hidden"
      />
      <article className="relative z-10 flex flex-col gap-3 px-9 text-damasco lg:absolute lg:top-[15%] lg:right-[18%] lg:left-auto lg:w-[48%] lg:translate-x-[5%] lg:gap-[2.9vw] lg:p-0">
        <p className="w-[82%] font-alternates text-[1.75rem] leading-[1.12] font-black lg:w-auto lg:text-[clamp(24px,2.5vw,48px)]">
          {edition.beanHighlight}
        </p>
        <p className="w-[68%] self-end text-left text-xs leading-[1.35] font-medium lg:w-[67.5%] lg:text-[clamp(14px,1.04vw,20px)] lg:font-semibold">
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
