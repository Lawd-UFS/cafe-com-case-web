import { FaqCard } from "@/components/sections/faq/FaqCard";
import {
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/sections/footer/ContactIcons";
import { ContactsLettering } from "@/components/ui/ContactsLettering";
import { FaqLettering } from "@/components/ui/FaqLettering";
import { Reveal } from "@/components/ui/Reveal";
import { TextButton } from "@/components/ui/TextButton";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { faq } from "@/content/faq";
import Image from "next/image";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-page-title"
      className="relative flex min-h-dvh w-full flex-col overflow-clip bg-pepino pb-16 text-areia lg:justify-center lg:pt-36 lg:pb-28"
    >
      <nav className="relative z-40 flex w-full justify-center pt-6 pb-4 lg:absolute lg:top-8 lg:right-12 lg:w-auto lg:p-0">
        <TextButton href={faq.backLink.href}>{faq.backLink.label}</TextButton>
      </nav>

      <header className="relative z-30 flex w-full items-stretch lg:absolute lg:top-0 lg:left-0 lg:w-auto lg:items-start">
        <div className="relative z-20 flex w-[45%] shrink-0 items-center justify-center px-6 py-3 sm:w-48 sm:px-10 sm:py-5 lg:w-auto">
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
            className="relative z-10 w-24 scale-115 object-contain sm:w-24 sm:scale-125 md:w-28 md:scale-125"
          />
        </div>

        <div className="relative z-10 -ml-6 flex flex-1 items-center justify-center py-3 pr-6 pl-8 sm:-ml-8 sm:py-5 sm:pr-12 sm:pl-12 lg:flex-none">
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
          <div className="relative z-10 h-9 w-24 text-pepino sm:h-10 sm:w-32">
            <h1 id="faq-page-title" className="sr-only">
              {faq.title}
            </h1>
            <FaqLettering />
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-[1840px] flex-1 flex-col items-center justify-between gap-10 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 lg:pr-0 lg:pl-12 xl:pl-14 2xl:pl-16">
        <Reveal className="flex w-full px-11 sm:px-14 lg:flex-1 lg:items-center lg:justify-start lg:self-center lg:px-0">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-0 sm:max-w-[400px] lg:mx-0 lg:ml-5 lg:h-[620px] lg:max-w-[1068px] lg:grid-cols-2 lg:grid-rows-[46fr_22fr_32fr]">
            <FaqCard
              item={faq.items[0]}
              className="min-h-[175px] lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:h-full"
            />
            <FaqCard
              item={faq.items[1]}
              className="min-h-[175px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full"
            />
            <FaqCard
              item={faq.items[2]}
              className="min-h-[190px] lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:h-full"
            />
            <FaqCard
              item={faq.items[3]}
              className="min-h-[165px] lg:col-start-2 lg:row-span-1 lg:row-start-3 lg:h-full"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="w-full shrink-0 pl-4 sm:px-8 lg:w-auto lg:px-0"
        >
          <aside
            aria-labelledby="faq-contacts-title"
            className="relative z-20 ml-auto flex min-h-[480px] w-full max-w-[500px] origin-bottom-right rotate-[1.8deg] flex-col justify-between overflow-visible px-8 pt-10 pb-20 text-pepino sm:mx-auto sm:min-h-[540px] sm:px-12 lg:mx-0 lg:-mr-10 lg:min-h-[760px] lg:w-[460px] lg:max-w-none lg:px-12 lg:pt-14 lg:pb-16 xl:min-h-[820px] xl:w-[634px] xl:px-14 2xl:-mr-6"
          >
            <svg
              aria-hidden
              viewBox="0 0 634 880"
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

            <div className="relative z-10 flex w-full max-w-[280px] flex-col sm:max-w-[340px] lg:max-w-[396px]">
              <header className="flex flex-col">
                <h2 id="faq-contacts-title" className="text-pepino">
                  <ContactsLettering className="h-[88px] w-[210px] sm:h-[110px] sm:w-[264px] lg:h-[132px] lg:w-[316px]" />
                </h2>
              </header>

              <p className="mt-5 font-alternates text-[16px] leading-snug font-medium text-pepino italic lg:mt-6 lg:text-[24px]">
                {faq.contacts.subtitle}
              </p>

              <p className="mt-3 font-sans text-[14px] leading-relaxed font-semibold text-pepino lg:text-[18px]">
                {faq.contacts.description}
              </p>

              <ul className="mt-6 flex flex-col gap-3.5 lg:mt-10 lg:gap-5">
                {faq.contacts.items.map((contact) => (
                  <li key={contact.id}>
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-80 lg:gap-3.5"
                    >
                      <span className="flex size-[35px] shrink-0 items-center justify-center text-pepino lg:size-10">
                        {contact.id === "instagram" && (
                          <InstagramIcon className="size-full" />
                        )}
                        {contact.id === "whatsapp" && (
                          <WhatsAppIcon className="size-full" />
                        )}
                        {contact.id === "email" && (
                          <MailIcon className="size-full" />
                        )}
                      </span>
                      <span
                        className={`font-alternates text-[14px] font-semibold text-pepino not-italic lg:text-[20px] ${contact.id === "email" ? "underline" : ""}`}
                      >
                        {contact.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-4 z-30 flex -rotate-12 items-center justify-center overflow-visible px-8 py-4 sm:px-14 sm:py-7 lg:-right-8 lg:-bottom-8 lg:z-10 lg:px-16 lg:py-8"
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

        <div className="relative z-10 size-20 sm:size-28 lg:size-36">
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
    </section>
  );
}
