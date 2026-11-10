import { MainButton } from "@/components/ui/MainButton";
import { Reveal } from "@/components/ui/Reveal";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { award } from "@/content/award";
import Image from "next/image";

export function Award() {
  return (
    <section
      id="award"
      aria-labelledby="award-title"
      className="relative overflow-x-clip bg-cafe pb-32 text-areia md:pb-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 bg-[url(/images/textures/sunflower-seeds.png)] bg-size-[1198px_auto] bg-position-[0_-756px] opacity-[0.13] mix-blend-soft-light"
      />

      <div className="relative z-10 mx-auto max-w-[1920px] px-6 md:pr-10 md:pl-20 lg:pr-16 lg:pl-32">
        <div className="relative -mt-16 md:-mt-24 lg:-mt-32">
          <div className="relative z-30 mb-[-55px] pl-24 sm:pl-32 md:mb-[-80px] md:pl-44 lg:pl-56">
            <Reveal>
              <h2
                id="award-title"
                className="font-alternates text-[36px] leading-[1.05] font-black tracking-tight text-areia [filter:url(#award-title-texture)] sm:text-[48px] md:text-[80px]"
              >
                <span className="block">{award.title.first} </span>
                <span className="block">{award.title.second}</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex items-start gap-4 md:gap-8 lg:gap-10">
            <Reveal delay={0.1}>
              <div
                aria-hidden
                className="mt-16 flex shrink-0 flex-col items-center gap-2 md:mt-24 md:gap-2.5 lg:mt-28 lg:gap-3"
              >
                <Image
                  src="/images/illustrations/cup.png"
                  alt=""
                  width={100}
                  height={75}
                  className="w-[52px] object-contain md:w-[74px] lg:w-[90px]"
                />
                <Image
                  src="/images/illustrations/cup.png"
                  alt=""
                  width={100}
                  height={75}
                  className="w-[52px] -scale-x-100 object-contain md:w-[74px] lg:w-[90px]"
                />
                <Image
                  src="/images/illustrations/cup.png"
                  alt=""
                  width={100}
                  height={75}
                  className="w-[52px] object-contain md:w-[74px] lg:w-[90px]"
                />
              </div>
            </Reveal>

            <div className="relative flex-1">
              <Reveal delay={0.15}>
                <div className="relative px-8 pt-40 pb-14 text-cafe md:px-14 md:pt-48 md:pb-16 lg:px-16 lg:pt-56 lg:pb-20">
                  <svg
                    aria-hidden
                    viewBox="0 0 1200 480"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-xl"
                  >
                    <defs>
                      <TextureFilter
                        id="award-card-texture"
                        radius={4.5}
                        size={8.5}
                      />
                    </defs>
                    <path
                      d="M 0,90 L 320,185 L 580,0 L 1200,0 L 1200,480 L 0,480 Z"
                      filter="url(#award-card-texture)"
                      className="fill-amarelo"
                    />
                  </svg>

                  <Image
                    src="/images/illustrations/brown-shape.png"
                    alt=""
                    width={130}
                    height={130}
                    className="pointer-events-none absolute top-4 right-5 z-20 w-20 object-contain md:top-6 md:right-8 md:w-24 lg:w-28"
                  />

                  <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:gap-7 lg:flex-row lg:items-start lg:gap-8 xl:gap-8">
                    <p className="w-full flex-1 font-sans text-base leading-[1.35] font-semibold text-cafe md:text-[20px] lg:max-w-[410px]">
                      {award.firstParagraph}
                    </p>

                    <p className="w-full flex-[1.35] font-sans text-base leading-[1.35] font-semibold text-cafe md:text-[20px] lg:max-w-[570px]">
                      {award.secondParagraph}
                    </p>

                    <div className="flex shrink-0 items-start justify-center lg:justify-end">
                      <MainButton
                        color="cafe"
                        href={award.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {award.button.text}
                      </MainButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-16 max-w-4xl md:mt-24">
            <p className="font-alternates text-xl leading-snug font-medium text-cenoura italic md:text-[32px]">
              {award.closingPhrase}
            </p>
          </div>
        </Reveal>
      </div>

      <svg aria-hidden className="absolute size-0">
        <filter id="award-title-texture" colorInterpolationFilters="sRGB">
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
          <feFlood className="[flood-color:var(--color-cafe)]" />
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
