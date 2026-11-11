import Image from "next/image";

import { edition } from "@/content/edition";

export function TablePanel() {
  return (
    <div className="relative w-full lg:absolute lg:-top-75 lg:-right-18 lg:bottom-11/21 lg:w-5/7">
      <aside className="relative flex h-full w-full items-center overflow-hidden py-10 pl-6 [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%)] lg:py-0 lg:pl-25 lg:[clip-path:polygon(0_0,100%_0,100%_100%,6rem_100%)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-pepino filter-[url(#edition-texture)] [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,6rem_100%)]"
        />
        <article className="relative flex flex-col gap-6 pr-4 text-damasco lg:w-4/7">
          <h3 className="font-alternates text-4xl font-black lg:text-5xl">
            {edition.tableTitle}
          </h3>
          <div className="grid grid-cols-1 gap-6 text-lg font-semibold md:grid-cols-2 lg:flex lg:gap-15 lg:text-xl">
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
        className="absolute right-0 bottom-0 hidden h-[80%] w-auto max-w-none translate-x-[8%] translate-y-[5%] lg:block"
      />
    </div>
  );
}
