import Image from "next/image";

import { MainButton } from "@/components/ui/MainButton";
import { hero } from "@/content/hero";

export function ContentBand() {
  return (
    <div className="absolute right-0 z-60 flex min-h-[32rem] w-6/7 -translate-y-[calc(2.5rem+5%)]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cenoura [filter:url(#hero-panels-texture)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/textures/fava-beans.png')] bg-size-[28.75%_auto] bg-center bg-repeat opacity-[0.06]"></div>
      <div className="flex w-[30%] items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-full w-auto scale-110 object-contain"
        />
      </div>
      <article className="flex w-[28%] flex-col justify-between gap-8 px-10 py-16 text-pepino">
        <h1 className="text-3xl leading-snug font-medium">
          {hero.lead.before}
          <strong>{hero.lead.strong}</strong>
          {hero.lead.after}
        </h1>
        <p className="font-alternates text-2xl font-semibold italic">
          <span className="block text-left">{hero.tagline[0]}</span>
          <span className="block text-right">{hero.tagline[1]}</span>
        </p>
      </article>
      <article className="flex w-[24%] flex-col justify-between gap-8 px-10 py-16 text-pepino">
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
      <div className="relative flex w-[18%] items-start justify-center overflow-hidden px-4 py-16">
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
