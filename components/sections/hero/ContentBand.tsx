import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="relative right-0 z-60 mx-auto flex min-h-[calc(100svh-9.5rem)] w-[calc(100%-5.75rem)] max-w-[300px] flex-col items-center justify-between px-6 pt-8 pb-9 text-center sm:max-w-[330px] md:absolute md:mx-0 md:min-h-144 md:w-6/7 md:max-w-none md:-translate-y-[calc(2.5rem+5%)] md:flex-row md:items-stretch md:justify-normal md:p-0 md:text-left lg:top-[13.7vw] lg:min-h-[27.6vw] lg:translate-y-0 lg:gap-0 lg:px-0 lg:py-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-areia filter-[url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[100%_auto] bg-center bg-repeat opacity-[0.06] md:bg-size-[28.75%_auto]"></div>
      <div className="flex w-full items-center justify-center md:w-[30%]">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-auto w-[80%] object-contain md:h-full md:w-auto md:scale-110 lg:h-[25vw]"
        />
      </div>
      <article className="mt-4 flex w-full min-w-0 flex-col-reverse gap-6 text-pepino md:mt-0 md:w-[28%] md:flex-col md:justify-between md:gap-8 md:px-6 md:py-12 lg:gap-0 lg:px-[2vw] lg:py-[3.8vw]">
        <h1 className="text-xs leading-snug font-medium md:text-2xl lg:text-[clamp(15px,1.37vw,26px)] lg:font-semibold">
          {hero.lead.before}
          <strong className="font-alternates font-black">
            {hero.lead.strong}
          </strong>
          <strong className="md:font-medium">
            {hero.lead.middle}
            {hero.lead.mobileStrong}
          </strong>
          {hero.lead.after}
        </h1>
        <p className="font-alternates text-base leading-snug font-semibold italic md:text-xl lg:text-[clamp(17px,1.62vw,31px)]">
          <span className="block md:text-left">{hero.tagline[0]}</span>
          <span className="block md:text-right">{hero.tagline[1]}</span>
        </p>
      </article>
      <article className="mt-4 flex w-full min-w-0 flex-col items-center justify-between gap-7 text-xs leading-snug text-pepino md:mt-0 md:w-[24%] md:items-stretch md:gap-8 md:px-6 md:py-12 md:text-sm lg:gap-[1.7vw] lg:px-[2vw] lg:py-[3.8vw] lg:text-[clamp(12px,0.94vw,18px)] lg:leading-[1.35]">
        <div className="space-y-4">
          <p className="font-semibold md:font-bold">{hero.description[0]}</p>
          <p className="font-semibold md:font-bold">
            {hero.description[1].before}
            <em className="font-bold">{hero.description[1].em}</em>
            {hero.description[1].middle}
            <strong className="italic md:not-italic">
              {hero.description[1].strong}
            </strong>
          </p>
        </div>
        <MainButton
          href={hero.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-full lg:h-[clamp(40px,3vw,58px)] lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
        >
          {hero.cta}
        </MainButton>
      </article>
      <div className="pointer-events-none absolute top-[9%] -right-[19%] w-[52%] md:relative md:top-0 md:right-0 md:flex md:w-[18%] md:items-start md:justify-center md:overflow-hidden md:px-4 md:py-16 lg:px-4 lg:py-[2.4vw]">
        <Image
          src="/images/illustrations/kettle.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full translate-x-[45%] md:h-[120%] md:w-auto md:max-w-none md:translate-x-[30%] lg:h-[22vw]"
        />
      </div>
    </div>
  );
}
