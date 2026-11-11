import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="absolute right-0 z-60 grid min-h-128 w-full -translate-y-[calc(2.5rem+5%)] grid-cols-1 gap-6 px-6 py-8 sm:w-6/7 sm:grid-cols-2 sm:gap-8 sm:px-8 md:min-h-144 md:px-10 md:py-10 lg:flex lg:w-6/7 lg:gap-0 lg:px-0 lg:py-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cenoura filter-[url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[28.75%_auto] bg-center bg-repeat opacity-[0.06]"></div>
      <div className="col-span-1 flex h-32 items-center justify-center sm:col-span-2 sm:h-40 md:h-48 lg:col-span-1 lg:h-auto lg:w-[30%]">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-full w-auto scale-110 object-contain"
        />
      </div>
      <article className="flex min-w-0 flex-col justify-between gap-6 text-pepino sm:px-2 md:gap-8 lg:w-[28%] lg:px-10 lg:py-16">
        <h1 className="text-2xl leading-snug font-medium md:text-3xl">
          {hero.lead.before}
          <strong>{hero.lead.strong}</strong>
          {hero.lead.after}
        </h1>
        <p className="font-alternates text-xl font-semibold italic md:text-2xl">
          <span className="block text-left">{hero.tagline[0]}</span>
          <span className="block text-right">{hero.tagline[1]}</span>
        </p>
      </article>
      <article className="flex min-w-0 flex-col justify-between gap-6 text-sm text-pepino md:text-base lg:w-[24%] lg:gap-8 lg:px-10 lg:py-16">
        <div className="space-y-4">
          {hero.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-bold">
              {paragraph}
            </p>
          ))}
        </div>
        <MainButton
          href={hero.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {hero.cta}
        </MainButton>
      </article>
      <div className="relative hidden items-start justify-center overflow-hidden lg:flex lg:w-[18%] lg:px-4 lg:py-16">
        <Image
          src="/images/illustrations/kettle.png"
          alt=""
          width={400}
          height={400}
          className="h-[120%] w-auto max-w-none translate-x-[30%]"
        />
      </div>
    </div>
  );
}
