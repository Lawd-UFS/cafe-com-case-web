import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { TitleTexture } from "@/components/ui/TitleTexture";
import { supporters } from "@/content/supporters";

import { InviteSign } from "./InviteSign";

export function Supporters() {
  return (
    <section
      id="supporters"
      aria-labelledby="supporters-title"
      className="relative overflow-x-clip bg-pepino text-areia"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-3 h-6 bg-pepino filter-[url(#supporters-edge-texture)]"
      />
      <Reveal className="pointer-events-none absolute top-[-80px] right-[-163px] z-10 w-[327px] rotate-15 md:top-[max(-326px,-16.98vw)] md:right-[max(-279px,-14.53vw)] md:w-[min(960px,50vw)] md:rotate-0">
        <Image
          src="/images/illustrations/leaf-plate.png"
          alt=""
          width={1350}
          height={1350}
          sizes="(min-width: 768px) 50vw, 327px"
          className="h-auto w-full"
        />
      </Reveal>

      <div className="relative mx-auto max-w-[360px] px-[26px] pt-6 pb-11 sm:max-w-[400px] md:max-w-[1920px] md:px-[min(206px,10.73vw)] md:pt-[154px] md:pb-[70px]">
        <div className="md:w-[min(992px,58vw)]">
          <Reveal>
            <h2
              id="supporters-title"
              className="max-w-[160px] font-alternates text-2xl leading-[1.194] font-black [filter:url(#supporters-title-texture-mobile)] md:max-w-none md:text-[clamp(36px,2.5vw,48px)] md:[filter:url(#supporters-title-texture)]"
            >
              {supporters.title}
            </h2>
            <p className="mt-6 max-w-[207px] font-alternates text-base leading-[1.194] font-medium italic md:mt-4 md:max-w-none md:text-[clamp(24px,1.667vw,32px)]">
              {supporters.subtitle}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-5 grid max-w-[248px] gap-4 md:mt-[63px] md:max-w-none lg:grid-cols-2 lg:gap-x-[39px]"
          >
            {supporters.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xs leading-[1.35] font-semibold md:text-[clamp(16px,1.042vw,20px)] lg:max-w-[430px]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <InviteSign className="mt-[38px] -ml-2 md:mt-[116px] md:-ml-[13px]" />
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[url(/images/textures/sunflower-seeds.png)] bg-size-[1198px_auto] bg-position-[0_-756px] opacity-[0.13] mix-blend-soft-light"
      />

      <svg aria-hidden className="absolute size-0">
        <TextureFilter id="supporters-edge-texture" radius={6.7} size={8.2} />
        <TitleTexture
          id="supporters-title-texture-mobile"
          size={16.7}
          scale={3.75}
          speckles="0.53 0.79"
          color="var(--color-pepino)"
        />
        <TitleTexture
          id="supporters-title-texture"
          size={29.4}
          scale={6.6}
          speckles="0.3 0.45"
          color="var(--color-pepino)"
        />
      </svg>
    </section>
  );
}
