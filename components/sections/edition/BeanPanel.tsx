import Image from "next/image";

import { edition } from "@/content/edition";

export function BeanPanel() {
  return (
    <div className="relative w-full overflow-hidden lg:absolute lg:top-[30%] lg:left-0 lg:h-[70%] lg:w-[60%]">
      <article className="relative z-10 flex flex-col gap-6 p-6 text-damasco lg:absolute lg:top-[15%] lg:right-[18%] lg:left-auto lg:w-[42%] lg:gap-14 lg:p-0">
        <p className="font-alternates text-3xl font-black lg:text-5xl">
          {edition.beanHighlight}
        </p>
        <p className="text-lg font-semibold lg:w-3/4 lg:self-end lg:text-left">
          {edition.beanText}
        </p>
      </article>
      <Image
        src="/images/illustrations/brown-shape.png"
        alt=""
        width={1189}
        height={1174}
        className="h-72 w-full object-cover object-center lg:h-full lg:max-w-none lg:-translate-x-1/10 lg:scale-110 lg:-rotate-8 lg:zoom-[1.1]"
      />
    </div>
  );
}
