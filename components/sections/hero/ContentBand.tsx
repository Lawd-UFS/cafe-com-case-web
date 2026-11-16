import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="relative right-0 z-60 mx-auto flex min-h-[calc(100svh-9.5rem)] w-[calc(100%-5.75rem)] max-w-75 flex-col items-center justify-between gap-4 px-5 pt-7 pb-10 text-center sm:max-w-82.5 md:min-h-[calc(100svh-11.5rem)] md:max-w-120 md:gap-5 md:px-10 md:pt-10 md:pb-12 lg:absolute lg:top-[13.7vw] lg:mx-0 lg:min-h-[27.6vw] lg:w-6/7 lg:max-w-none lg:translate-y-0 lg:flex-row lg:items-stretch lg:justify-normal lg:gap-0 lg:p-0 lg:text-left">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-areia filter-[url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[100%_auto] bg-center bg-repeat opacity-[0.06] lg:bg-size-[28.75%_auto]"></div>
      <div className="flex w-full animate-hero-logo items-center justify-center lg:w-[30%]">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-auto w-[92%] object-contain md:w-[60%] lg:h-[25vw] lg:w-auto lg:scale-110"
        />
      </div>
      <article className="contents text-pepino lg:flex lg:w-[28%] lg:min-w-0 lg:flex-col lg:justify-between lg:gap-0 lg:px-[2vw] lg:py-[3.8vw]">
        <h1 className="order-2 mt-1 animate-hero-item text-sm leading-snug font-medium [animation-delay:220ms] md:text-[22px] lg:order-0 lg:mt-0 lg:text-[clamp(15px,1.37vw,26px)] lg:font-semibold">
          {hero.lead.before}
          <br className="lg:hidden" />
          <strong className="font-bold lg:font-alternates lg:font-black">
            {hero.lead.strong}
          </strong>
          <br className="lg:hidden" />
          <strong className="font-bold lg:font-medium">
            {hero.lead.middle}
            {hero.lead.mobileStrong}
          </strong>{" "}
          e<br className="lg:hidden" /> Propaganda de Sergipe.
        </h1>
        <p className="order-1 font-alternates text-lg leading-snug font-semibold italic md:text-[29px] lg:order-0 lg:text-[clamp(17px,1.62vw,31px)]">
          <span className="block animate-hero-type [animation-delay:1100ms] lg:text-left">
            {hero.tagline[0]}
          </span>
          <span className="block animate-hero-type [animation-delay:1750ms] lg:text-right">
            {hero.tagline[1]}
          </span>
        </p>
      </article>
      <article className="contents text-sm leading-snug text-pepino md:text-[22px] lg:flex lg:w-[24%] lg:min-w-0 lg:flex-col lg:items-stretch lg:justify-between lg:gap-[1.7vw] lg:px-[2vw] lg:py-[3.8vw] lg:text-[clamp(12px,0.94vw,18px)] lg:leading-[1.35]">
        <div className="contents lg:block lg:space-y-4">
          <p className="order-3 max-w-58.75 animate-hero-item font-semibold [animation-delay:320ms] md:max-w-none lg:order-0 lg:max-w-none lg:font-bold">
            {hero.description[0]}
          </p>
          <p className="order-4 max-w-58.75 animate-hero-item font-semibold [animation-delay:420ms] md:max-w-none lg:order-0 lg:max-w-none lg:font-bold">
            {hero.description[1].before}
            <em className="font-bold">{hero.description[1].em}</em>
            {hero.description[1].middle}
            <strong className="italic lg:not-italic">
              {hero.description[1].strongLine1} <br className="lg:hidden" />
              {hero.description[1].strongLine2}
            </strong>
          </p>
        </div>
        <MainButton
          href={hero.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="order-5 mt-2 animate-hero-item [animation-delay:520ms] lg:order-0 lg:mt-0 lg:h-[clamp(40px,3vw,58px)] lg:w-full lg:min-w-[clamp(160px,15vw,288px)] lg:px-[1.6vw] lg:[&>span]:text-[clamp(16px,1.25vw,24px)]"
        >
          {hero.cta}
        </MainButton>
      </article>
      <div className="pointer-events-none absolute top-[9%] right-[-19%] w-[52%] animate-hero-item [animation-delay:260ms] lg:relative lg:top-0 lg:right-0 lg:flex lg:w-[18%] lg:items-start lg:justify-center lg:overflow-hidden lg:px-4 lg:py-[2.4vw]">
        <Image
          src="/images/illustrations/kettle.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full translate-x-[45%] lg:h-[22vw] lg:w-auto lg:max-w-none lg:translate-x-[30%]"
        />
      </div>
    </div>
  );
}
