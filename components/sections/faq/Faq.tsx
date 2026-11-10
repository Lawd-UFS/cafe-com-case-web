import { FaqLettering } from "@/components/ui/FaqLettering";
import { Reveal } from "@/components/ui/Reveal";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { faq } from "@/content/faq";
import Image from "next/image";
import Link from "next/link";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-page-title"
      className="relative h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-pepino text-areia"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[url(/images/textures/sunflower-seeds.png)] bg-size-[1198px_auto] bg-position-[0_-756px] opacity-[0.13] mix-blend-soft-light"
      />

      <header className="absolute top-0 left-0 z-30 flex items-start">
        <div className="relative z-20 flex items-center justify-center px-7 py-4 sm:px-10 sm:py-5">
          <svg
            aria-hidden
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-md"
          >
            <defs>
              <TextureFilter
                id="faq-header-brown-texture"
                radius={3}
                size={8}
              />
            </defs>
            <polygon
              points="0,0 170,0 200,100 0,100"
              filter="url(#faq-header-brown-texture)"
              className="fill-cafe"
            />
          </svg>
          <Image
            src="/images/illustrations/beans.png"
            alt=""
            width={120}
            height={85}
            className="relative z-10 w-20 object-contain sm:w-24 md:w-28"
          />
        </div>

        <div className="relative z-10 -ml-7 flex items-center justify-center py-4 pr-8 pl-10 sm:-ml-8 sm:py-5 sm:pr-12 sm:pl-12">
          <svg
            aria-hidden
            viewBox="0 0 240 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full overflow-visible"
          >
            <defs>
              <TextureFilter
                id="faq-header-yellow-texture"
                radius={3.5}
                size={8.5}
              />
            </defs>
            <rect
              width="100%"
              height="100%"
              filter="url(#faq-header-yellow-texture)"
              className="fill-amarelo"
            />
          </svg>
          <div className="relative z-10 h-8 w-24 text-pepino sm:h-10 sm:w-32">
            <h1 id="faq-page-title" className="sr-only">
              {faq.title}
            </h1>
            <FaqLettering />
          </div>
        </div>
      </header>

      <nav className="absolute top-5 right-8 z-30 md:top-6 md:right-12">
        <Link
          href={faq.backLink.href}
          className="group inline-flex items-center gap-1.5 font-alternates text-sm font-bold text-areia transition-opacity duration-200 hover:opacity-75 md:text-base"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="size-3.5 fill-none stroke-current stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10L8 5L13 10" />
          </svg>
          <span>{faq.backLink.label}</span>
        </Link>
      </nav>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 pt-20 pb-6 md:px-10 lg:pr-[520px] xl:pr-[580px]">
        <Reveal className="flex size-full max-h-[620px] max-w-[940px] items-center justify-center">
          <div className="flex h-full w-full flex-row gap-0">
            <div className="flex h-full flex-1 flex-col gap-0">
              <article className="relative flex flex-[46] flex-col justify-between overflow-visible p-6 text-left md:p-8">
                <svg
                  aria-hidden
                  viewBox="0 0 470 280"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                >
                  <defs>
                    <TextureFilter id="faq-bento-1" radius={3.5} size={8.5} />
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="466"
                    height="276"
                    fill="transparent"
                    filter="url(#faq-bento-1)"
                    className="stroke-areia stroke-[1.8]"
                  />
                </svg>

                <h3 className="relative z-10 font-alternates text-base leading-snug font-bold text-areia italic sm:text-lg md:text-xl">
                  {faq.items[0].question}
                </h3>

                <div className="relative z-10 flex justify-end">
                  <Image
                    src="/images/illustrations/cup.png"
                    alt=""
                    width={48}
                    height={48}
                    className="size-7 object-contain sm:size-8 md:size-9"
                  />
                </div>
              </article>

              <article className="relative flex flex-[54] flex-col justify-between overflow-visible p-6 text-left md:p-8">
                <svg
                  aria-hidden
                  viewBox="0 0 470 340"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                >
                  <defs>
                    <TextureFilter id="faq-bento-3" radius={3.5} size={8.5} />
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="466"
                    height="336"
                    fill="transparent"
                    filter="url(#faq-bento-3)"
                    className="stroke-areia stroke-[1.8]"
                  />
                </svg>

                <h3 className="relative z-10 font-alternates text-base leading-snug font-bold text-areia italic sm:text-lg md:text-xl">
                  {faq.items[2].question}
                </h3>

                <div className="relative z-10 flex justify-end">
                  <Image
                    src="/images/illustrations/beans.png"
                    alt=""
                    width={48}
                    height={48}
                    className="size-7 object-contain sm:size-8 md:size-9"
                  />
                </div>
              </article>
            </div>

            <div className="flex h-full flex-1 flex-col gap-0">
              <article className="relative flex flex-[68] flex-col justify-between overflow-visible p-6 text-left md:p-8">
                <svg
                  aria-hidden
                  viewBox="0 0 470 420"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                >
                  <defs>
                    <TextureFilter id="faq-bento-2" radius={3.5} size={8.5} />
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="466"
                    height="416"
                    fill="transparent"
                    filter="url(#faq-bento-2)"
                    className="stroke-areia stroke-[1.8]"
                  />
                </svg>

                <h3 className="relative z-10 font-alternates text-base leading-snug font-bold text-areia italic sm:text-lg md:text-xl">
                  {faq.items[1].question}
                </h3>

                <div className="relative z-10 flex justify-end">
                  <Image
                    src="/images/illustrations/cutlery.png"
                    alt=""
                    width={48}
                    height={48}
                    className="size-7 object-contain sm:size-8 md:size-9"
                  />
                </div>
              </article>

              <article className="relative flex flex-[32] flex-col justify-between overflow-visible p-6 text-left md:p-8">
                <svg
                  aria-hidden
                  viewBox="0 0 470 200"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible"
                >
                  <defs>
                    <TextureFilter id="faq-bento-4" radius={3.5} size={8.5} />
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="466"
                    height="196"
                    fill="transparent"
                    filter="url(#faq-bento-4)"
                    className="stroke-areia stroke-[1.8]"
                  />
                </svg>

                <h3 className="relative z-10 font-alternates text-base leading-snug font-bold text-areia italic sm:text-lg md:text-xl">
                  {faq.items[3].question}
                </h3>

                <div className="relative z-10 flex justify-end">
                  <Image
                    src="/images/illustrations/beans.png"
                    alt=""
                    width={48}
                    height={48}
                    className="size-6 object-contain opacity-80 sm:size-7"
                  />
                </div>
              </article>
            </div>
          </div>
        </Reveal>
      </div>

      <aside
        aria-labelledby="faq-contacts-title"
        className="absolute top-16 right-0 bottom-20 z-20 flex w-[400px] origin-top-right -rotate-[1.4deg] flex-col justify-between overflow-visible px-8 pt-10 pb-12 text-pepino md:w-[460px] md:px-12 md:pt-12 md:pb-14 lg:w-[500px] lg:px-14 xl:w-[540px]"
      >
        <svg
          aria-hidden
          viewBox="0 0 540 820"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-2xl"
        >
          <defs>
            <TextureFilter
              id="faq-contacts-board-texture"
              radius={4.5}
              size={8.5}
            />
          </defs>
          <rect
            width="100%"
            height="100%"
            filter="url(#faq-contacts-board-texture)"
            className="fill-amarelo"
          />
        </svg>

        <div className="relative z-10 flex flex-col">
          <h2
            id="faq-contacts-title"
            className="font-alternates text-[34px] leading-[1.05] font-black text-pepino [filter:url(#contacts-title-texture)] sm:text-4xl md:text-[46px] lg:text-[52px]"
          >
            <span className="block">{faq.contacts.title.first}</span>
            <span className="block">{faq.contacts.title.second}</span>
          </h2>

          <p className="mt-6 font-alternates text-base leading-snug font-bold text-pepino italic md:text-lg">
            {faq.contacts.subtitle}
          </p>

          <p className="mt-3 max-w-xs font-alternates text-xs leading-relaxed font-semibold text-pepino md:text-sm">
            {faq.contacts.description}
          </p>

          <ul className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5">
            {faq.contacts.items.map((contact) => (
              <li key={contact.id}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 transition-opacity duration-200 hover:opacity-80"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-pepino text-amarelo shadow-md md:size-10">
                    {contact.id === "instagram" && (
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5 fill-none stroke-current stroke-[2.2]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                    {contact.id === "whatsapp" && (
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5 fill-current"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    )}
                    {contact.id === "email" && (
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5 fill-none stroke-current stroke-[2.2]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    )}
                  </span>
                  <span className="font-alternates text-sm font-normal text-pepino italic md:text-base">
                    {contact.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -bottom-6 z-30 flex items-center justify-center overflow-visible px-10 py-5 sm:px-14 sm:py-7 md:-right-8 md:-bottom-8 md:px-16 md:py-8"
      >
        <svg
          viewBox="0 0 320 180"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full overflow-visible"
        >
          <defs>
            <TextureFilter id="faq-bottom-orange-texture" radius={4} size={8} />
          </defs>
          <rect
            width="100%"
            height="100%"
            filter="url(#faq-bottom-orange-texture)"
            className="fill-laranja"
          />
        </svg>

        <div className="relative z-10 size-24 sm:size-28 md:size-36">
          <span
            style={{
              maskImage: "url(/images/illustrations/kettle.png)",
              WebkitMaskImage: "url(/images/illustrations/kettle.png)",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
            className="block size-full bg-tomate"
          />
        </div>
      </div>

      <svg aria-hidden className="absolute size-0">
        <filter id="contacts-title-texture" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={1 / 29.4}
            numOctaves={3}
            seed={562}
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale={5.5}
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
          <feFlood className="[flood-color:var(--color-amarelo)]" />
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
