import Image from "next/image";

import { edition } from "@/content/edition";

export function BeanPanel() {
  return (
    <div className="relative w-full overflow-hidden lg:absolute lg:top-[30%] lg:left-0 lg:h-[70%] lg:w-[60%] lg:overflow-visible">
      <article className="relative z-10 flex flex-col gap-6 p-6 text-damasco lg:absolute lg:top-[15%] lg:right-[18%] lg:left-auto lg:w-[48%] lg:translate-x-[5%] lg:gap-[2.9vw] lg:p-0">
        <p className="font-alternates text-3xl font-black lg:text-[clamp(24px,2.5vw,48px)]">
          {edition.beanHighlight}
        </p>
        <p className="text-lg font-semibold lg:w-[67.5%] lg:self-end lg:text-left lg:text-[clamp(14px,1.04vw,20px)]">
          {edition.beanText}
        </p>
      </article>
      <Image
        src="/images/illustrations/brown-shape.png"
        alt=""
        width={1189}
        height={1174}
        className="h-72 w-full object-cover object-center lg:h-full lg:max-w-none lg:-translate-x-1/10 lg:translate-y-[5%] lg:scale-120 lg:-rotate-8 lg:zoom-[1.1]"
      />
    </div>
  );
}
