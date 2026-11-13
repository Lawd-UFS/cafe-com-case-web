import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="relative right-0 z-60 mx-auto flex min-h-[calc(100svh-9.5rem)] w-[calc(100%-5.75rem)] max-w-75 flex-col items-center justify-between gap-4 px-5 pt-7 pb-10 text-center sm:max-w-82.5 md:absolute md:mx-0 md:min-h-144 md:w-6/7 md:max-w-none md:-translate-y-[calc(2.5rem+5%)] md:flex-row md:items-stretch md:justify-normal md:gap-0 md:p-0 md:text-left lg:top-[13.7vw] lg:min-h-[27.6vw] lg:translate-y-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-areia filter-[url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[100%_auto] bg-center bg-repeat opacity-[0.06] md:bg-size-[28.75%_auto]"></div>
      <div className="flex w-full animate-hero-logo items-center justify-center md:w-[30%]">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-auto w-[92%] object-contain md:h-full md:w-auto md:scale-110 lg:h-[25vw]"
        />
      </div>
      <article className="contents text-pepino md:flex md:w-[28%] md:min-w-0 md:flex-col md:justify-between md:gap-8 md:px-6 md:py-12 lg:gap-0 lg:px-[2vw] lg:py-[3.8vw]">
        <h1 className="order-2 mt-1 animate-hero-item text-sm leading-snug font-medium [animation-delay:220ms] md:order-0 md:mt-0 md:text-2xl lg:text-[clamp(15px,1.37vw,26px)] lg:font-semibold">
          {hero.lead.before}
          <br className="md:hidden" />
          <strong className="font-bold md:font-alternates md:font-black">
            {hero.lead.strong}
          </strong>
          <br className="md:hidden" />
          <strong className="font-bold md:font-medium">
            {hero.lead.middle}
            {hero.lead.mobileStrong}
          </strong>{" "}
          e<br className="md:hidden" /> Propaganda de Sergipe.
        </h1>
        <p className="order-1 font-alternates text-lg leading-snug font-semibold italic md:order-0 md:text-xl lg:text-[clamp(17px,1.62vw,31px)]">
          <span className="block animate-hero-type [animation-delay:1100ms] md:text-left">
            {hero.tagline[0]}
          </span>
          <span className="block animate-hero-type [animation-delay:1750ms] md:text-right">
            {hero.tagline[1]}
          </span>
        </p>
      </article>
      <article className="contents text-sm leading-snug text-pepino md:flex md:w-[24%] md:min-w-0 md:flex-col md:items-stretch md:justify-between md:gap-8 md:px-6 md:py-12 lg:gap-[1.7vw] lg:px-[2vw] lg:py-[3.8vw] lg:text-[clamp(12px,0.94vw,18px)] lg:leading-[1.35]">
        <div className="contents md:block md:space-y-4">
          <p className="order-3 max-w-58.75 animate-hero-item font-semibold [animation-delay:320ms] md:order-0 md:max-w-none md:font-bold">
            {hero.description[0]}
          </p>
          <p className="order-4 max-w-58.75 animate-hero-item font-semibold [animation-delay:420ms] md:order-0 md:max-w-none md:font-bold">
            {hero.description[1].before}
            <em className="font-bold">{hero.description[1].em}</em>
            {hero.description[1].middle}
            <strong className="italic md:not-italic">
              {hero.description[1].strongLine1} <br className="md:hidden" />
              {hero.description[1].strongLine2}
            </strong>
          </p>
        </div>
        <MainButton
          href={hero.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="order-5 mt-2 animate-hero-item [animation-delay:520ms] md:order-0 md:mt-0 md:w-full lg:h-[clamp(40px,3vw,58px)] lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
        >
          {hero.cta}
        </MainButton>
      </article>
      <div className="pointer-events-none absolute top-[9%] right-[-19%] w-[52%] animate-hero-item [animation-delay:260ms] md:relative md:top-0 md:right-0 md:flex md:w-[18%] md:items-start md:justify-center md:overflow-hidden md:px-4 md:py-16 lg:px-4 lg:py-[2.4vw]">
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
