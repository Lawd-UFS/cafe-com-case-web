import Image from "next/image";

import { edition } from "@/content/edition";

export function TablePanel() {
  return (
    <div className="absolute -top-[23.6vw] -right-[4.1vw] z-20 w-[70%] lg:top-[-15.6vw] lg:right-[-3.75vw] lg:bottom-11/21 lg:w-5/7">
      <aside className="relative flex h-full w-full items-center overflow-hidden pt-[26.7vw] pr-[5.1vw] pb-[32.8vw] pl-[7.2vw] [clip-path:polygon(0_0,100%_0,100%_100%,4.1vw_100%)] lg:py-0 lg:pr-0 lg:pl-[5.2vw] lg:[clip-path:polygon(0_0,100%_0,100%_100%,5vw_100%)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-pepino filter-[url(#edition-texture)] [clip-path:polygon(0_0,100%_0,100%_100%,4.1vw_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,5vw_100%)]"
        />
        <article className="relative flex flex-col gap-[5.1vw] text-damasco lg:w-1/2 lg:gap-6 lg:pr-4">
          <h3 className="font-alternates text-[7.2vw] leading-[1.08] font-black lg:text-[clamp(24px,2.5vw,48px)]">
            {edition.tableTitle}
          </h3>
          <div className="flex flex-col gap-[4.1vw] text-[3.1vw] leading-[1.35] font-medium lg:flex-row lg:gap-[3.1vw] lg:text-[clamp(14px,1.04vw,20px)] lg:font-semibold">
            {edition.tableParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </aside>
      <Image
        src="/images/illustrations/cutlery.png"
        alt=""
        width={796}
        height={1178}
        className="pointer-events-none absolute -right-[2vw] -bottom-[2vw] h-[39vw] w-auto max-w-none translate-x-[10%] lg:right-0 lg:bottom-0 lg:h-[50vw] lg:translate-x-[8%] lg:translate-y-[5%]"
      />
    </div>
  );
}
