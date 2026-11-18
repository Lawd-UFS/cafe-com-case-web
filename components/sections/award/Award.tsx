import { MainButton } from "@/components/ui/MainButton";
import { MaskIcon } from "@/components/ui/MaskIcon";
import { Reveal } from "@/components/ui/Reveal";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { award } from "@/content/award";
import Image from "next/image";

export function Award() {
  return (
    <section
      id="award"
      aria-labelledby="award-title"
      className="relative isolate overflow-x-clip text-areia [--award-brown:192px] md:[--award-brown:307px] lg:[--award-brown:max(111px,8.229vw)]"
    >
      <div
        id="award-background"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-(--award-brown) bottom-0 -z-10 bg-cafe"
      >
        <div className="absolute inset-x-0 -top-3 h-6 bg-cafe filter-[url(#award-edge-texture)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-(--award-brown) bottom-0 z-20 bg-[url(/images/textures/sunflower-seeds.webp)] bg-size-[1198px_auto] bg-position-[0_calc(-756px_-_var(--award-brown))] opacity-[0.13] mix-blend-soft-light"
      />

      <div className="block md:[zoom:1.6] lg:hidden">
        <div className="relative mx-auto w-[91.8%] pt-0 pb-8">
          <svg
            aria-hidden
            viewBox="0 0 340 720"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full overflow-visible"
          >
            <defs>
              <TextureFilter
                id="award-card-mobile-texture"
                radius={4}
                size={8.5}
              />
            </defs>
            <rect
              x="2"
              y="0"
              width="336"
              height="100%"
              filter="url(#award-card-mobile-texture)"
              className="fill-areia"
            />
          </svg>

          <header className="relative z-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-[57px] -left-[6.89%] h-[231px] w-[113.78%] overflow-hidden bg-cafe [clip-path:polygon(0_5px,36.7%_21px,39.36%_23px,55.32%_49px,57.98%_51px,65.96%_52px,100%_53px,100%_144px,65.96%_211px,12.77%_229px,10.11%_230px,2.13%_205px,0_198px)]"
            >
              <Image
                src="/images/illustrations/brown-shape.png"
                alt=""
                width={1189}
                height={1174}
                sizes="700px"
                className="absolute -top-[180px] -left-[60px] w-[700px] max-w-none"
              />
            </div>

            <div className="relative z-10 flex items-start justify-between px-5 pt-5">
              <Reveal>
                <h2
                  id="award-title-mobile"
                  className="max-w-[210px] font-alternates text-[40px] leading-[0.95] font-black tracking-tight text-areia [filter:url(#award-title-texture)]"
                >
                  <span className="block">{award.title.first} </span>
                  <span className="block">{award.title.second}</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  aria-hidden
                  className="-mt-6 flex flex-col items-center gap-2 pr-1"
                >
                  <MaskIcon
                    src="/images/icons/cup.svg"
                    className="size-13 -scale-x-100 -rotate-6 bg-areia"
                  />
                  <MaskIcon
                    src="/images/icons/cup.svg"
                    className="size-13 -scale-x-100 rotate-12 bg-areia"
                  />
                  <MaskIcon
                    src="/images/icons/cup.svg"
                    className="mt-2 size-13 -rotate-6 bg-cafe"
                  />
                </div>
              </Reveal>
            </div>
          </header>

          <div className="relative z-10 px-7 pt-10 pb-8 text-cafe">
            <Reveal delay={0.15}>
              <div className="mb-6 flex items-start gap-2.5">
                <MaskIcon
                  src="/images/icons/brown-shape.svg"
                  className="mt-0.5 size-5 shrink-0 bg-cafe"
                />
                <div className="flex flex-col">
                  <p className="mb-4 font-alternates text-[16px] leading-snug font-medium text-cafe italic">
                    {award.subtitle}
                  </p>
                  <p className="mb-3 font-sans text-[12px] leading-[1.4] font-semibold text-cafe">
                    {award.firstParagraph}
                  </p>
                  <p className="font-sans text-[12px] leading-[1.4] font-semibold text-cafe">
                    {award.secondParagraph}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <footer className="flex justify-center md:[zoom:0.625]">
                <MainButton
                  color="cafe"
                  href={award.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {award.button.text}
                </MainButton>
              </footer>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto w-[91.8%] px-3 pt-6 pb-14">
            <p className="font-alternates text-[16px] leading-snug font-medium text-areia italic">
              {award.closingPhrase}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative hidden lg:block lg:award-zoom">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-25 [clip-path:inset(58px_-2000px_-2000px_-2000px)]"
        >
          <div className="absolute top-[128px] left-[3.75%] -mt-[63%] aspect-[555/630] w-[55.5%]">
            <Image
              src="/images/illustrations/brown-shape.png"
              alt=""
              width={1189}
              height={1174}
              className="h-full w-full max-w-none -translate-x-1/10 translate-y-[5%] scale-120 -rotate-8 zoom-[1.1] object-cover object-center"
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-[1920px] px-6 pb-32 md:pr-10 md:pb-44 md:pl-20 lg:pr-16 lg:pl-32">
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
              <Reveal delay={0.1} className="lg:-ml-10">
                <div
                  aria-hidden
                  className="mt-16 flex shrink-0 flex-col items-center gap-2 md:mt-24 md:gap-2.5 lg:mt-[150px] lg:gap-0.5"
                >
                  <Image
                    src="/images/illustrations/cup.png"
                    alt=""
                    width={100}
                    height={75}
                    className="w-[52px] object-contain md:w-[74px] lg:w-[104px]"
                  />
                  <Image
                    src="/images/illustrations/cup.png"
                    alt=""
                    width={100}
                    height={75}
                    className="w-[52px] -scale-x-100 object-contain md:w-[74px] lg:w-[104px]"
                  />
                  <Image
                    src="/images/illustrations/cup.png"
                    alt=""
                    width={100}
                    height={75}
                    className="w-[52px] object-contain md:w-[74px] lg:w-[104px]"
                  />
                </div>
              </Reveal>

              <div className="relative flex-1">
                <Reveal delay={0.15}>
                  <div className="relative px-8 pt-40 pb-14 text-cafe md:px-14 md:pt-48 md:pb-16 lg:px-16 lg:pt-61 lg:pb-15">
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
                        d="M 0,0 L 1200,0 L 1200,480 L 0,480 Z"
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
                      <Reveal
                        delay={0.2}
                        className="w-full flex-1 lg:max-w-[410px]"
                      >
                        <p className="font-sans text-base leading-[1.35] font-semibold text-cafe md:text-[20px]">
                          {award.firstParagraph}
                        </p>
                      </Reveal>

                      <Reveal
                        delay={0.25}
                        className="w-full flex-[1.35] lg:max-w-[570px]"
                      >
                        <p className="font-sans text-base leading-[1.35] font-semibold text-cafe md:text-[20px]">
                          {award.secondParagraph}
                        </p>
                      </Reveal>

                      <Reveal
                        delay={0.3}
                        className="flex shrink-0 items-start justify-center lg:justify-end"
                      >
                        <MainButton
                          color="cafe"
                          href={award.button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {award.button.text}
                        </MainButton>
                      </Reveal>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <Reveal delay={0.35}>
            <div className="mt-16 max-w-4xl md:mt-24">
              <p className="font-alternates text-xl leading-snug font-medium text-cenoura italic md:text-[32px]">
                {award.closingPhrase}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <svg aria-hidden className="absolute size-0">
        <TextureFilter id="award-edge-texture" radius={6.7} size={8.2} />
        <filter id="award-title-texture" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={1 / 29.4}
            numOctaves={3}
            seed={562}
            stitchTiles="stitch"
            width={8 * 29.4}
            height={8 * 29.4}
            result="noise"
          />
          <feTile in="noise" />
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
