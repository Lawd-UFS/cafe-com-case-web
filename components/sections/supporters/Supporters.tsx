import Image from "next/image";

import { supporters } from "@/content/supporters";

import { InviteSign } from "./InviteSign";

export function Supporters() {
  return (
    <section
      id="supporters"
      aria-labelledby="supporters-title"
      className="relative overflow-x-clip bg-pepino text-areia"
    >
      <Image
        src="/images/illustrations/leaf-plate.png"
        alt=""
        width={1350}
        height={1350}
        sizes="(min-width: 768px) 50vw, 400px"
        className="pointer-events-none absolute top-[-53px] right-[-200px] z-10 w-[400px] max-w-none md:top-[max(-326px,-16.98vw)] md:right-[max(-279px,-14.53vw)] md:w-[min(960px,50vw)]"
      />

      <div className="relative mx-auto max-w-[360px] px-[26px] pt-6 pb-11 sm:max-w-[400px] md:max-w-[1920px] md:px-[min(206px,10.73vw)] md:pt-[154px] md:pb-[70px]">
        <div className="md:w-[min(992px,58vw)]">
          <h2
            id="supporters-title"
            className="max-w-[160px] font-alternates text-2xl leading-[1.194] font-black [filter:url(#supporters-title-texture)] md:max-w-none md:text-[clamp(36px,2.5vw,48px)]"
          >
            {supporters.title}
          </h2>
          <p className="mt-6 max-w-[207px] font-alternates text-base leading-[1.194] font-medium italic md:mt-4 md:max-w-none md:text-[clamp(24px,1.667vw,32px)]">
            {supporters.subtitle}
          </p>
          <div className="mt-5 grid max-w-[248px] gap-4 md:mt-[63px] md:max-w-none lg:grid-cols-2 lg:gap-x-[39px]">
            {supporters.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xs leading-[1.35] font-semibold md:text-[clamp(16px,1.042vw,20px)] lg:max-w-[430px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <InviteSign className="mt-12 md:mt-[116px] md:-ml-[13px]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[url(/images/textures/sunflower-seeds.png)] bg-size-[1198px_auto] bg-position-[0_-756px] opacity-[0.13] mix-blend-soft-light"
      />

      <svg aria-hidden className="absolute size-0">
        <filter id="supporters-title-texture" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={1 / 29.4}
            numOctaves={3}
            seed={562}
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale={6.6}
            xChannelSelector="R"
            yChannelSelector="G"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.3 0.45"
            numOctaves={2}
            seed={7}
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 30 0 0 0 -21.9"
            result="spots"
          />
          <feFlood className="[flood-color:var(--color-pepino)]" />
          <feComposite in2="spots" operator="in" />
          <feComposite in2="shape" operator="in" result="speckles" />
          <feMerge>
            <feMergeNode in="shape" />
            <feMergeNode in="speckles" />
          </feMerge>
        </filter>
      </svg>
    </section>
  );
}
