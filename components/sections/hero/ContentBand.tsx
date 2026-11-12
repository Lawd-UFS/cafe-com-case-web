import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="absolute right-0 z-60 grid min-h-128 w-full -translate-y-[calc(2.5rem+5%)] grid-cols-1 gap-6 px-6 py-8 sm:w-6/7 sm:grid-cols-2 sm:gap-8 sm:px-8 md:min-h-144 md:px-10 md:py-10 lg:top-[13.7vw] lg:flex lg:min-h-[27.6vw] lg:w-6/7 lg:translate-y-0 lg:gap-0 lg:px-0 lg:py-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-areia filter-[url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[28.75%_auto] bg-center bg-repeat opacity-[0.06]"></div>
      <div className="col-span-1 flex h-32 items-center justify-center sm:col-span-2 sm:h-40 md:h-48 lg:col-span-1 lg:h-auto lg:w-[30%]">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-full w-auto scale-110 object-contain lg:h-[25vw]"
        />
      </div>
      <article className="flex min-w-0 flex-col justify-between gap-6 text-pepino sm:px-2 md:gap-8 lg:w-[28%] lg:px-[2vw] lg:py-[3.8vw]">
        <h1 className="text-2xl leading-snug font-semibold md:text-3xl lg:text-[clamp(15px,1.37vw,26px)]">
          {hero.lead.before}
          <strong className="font-alternates font-black">
            {hero.lead.strong}
          </strong>
          {hero.lead.after}
        </h1>
        <p className="font-alternates text-xl font-semibold italic md:text-2xl lg:text-[clamp(17px,1.62vw,31px)]">
          <span className="block text-left">{hero.tagline[0]}</span>
          <span className="block text-right">{hero.tagline[1]}</span>
        </p>
      </article>
      <article className="flex min-w-0 flex-col justify-between gap-6 text-sm text-pepino md:text-base lg:w-[24%] lg:gap-[1.7vw] lg:px-[2vw] lg:py-[3.8vw] lg:text-[clamp(12px,0.94vw,18px)] lg:leading-[1.35]">
        <div className="space-y-4">
          {hero.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-semibold">
              {paragraph}
            </p>
          ))}
        </div>
        <MainButton
          href={hero.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:h-[clamp(40px,3vw,58px)] lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
        >
          {hero.cta}
        </MainButton>
      </article>
      <div className="relative hidden items-start justify-center overflow-hidden lg:flex lg:w-[18%] lg:px-4 lg:py-[2.4vw]">
        <Image
          src="/images/illustrations/kettle.png"
          alt=""
          width={400}
          height={400}
          className="h-[120%] w-auto max-w-none translate-x-[30%] lg:h-[22vw]"
        />
      </div>
    </div>
  );
}
