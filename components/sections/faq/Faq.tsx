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
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-clip bg-pepino pt-28 pb-20 text-areia sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
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
            className="relative z-10 w-20 scale-125 object-contain sm:w-24 sm:scale-125 md:w-28 md:scale-125"
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

      <nav className="absolute top-6 right-8 z-40 md:top-8 md:right-12">
        <TextButton href={faq.backLink.href}>{faq.backLink.label}</TextButton>
      </nav>

      <div className="relative z-10 mx-auto flex w-full max-w-[1840px] flex-1 flex-col items-center justify-between gap-12 px-6 sm:px-10 lg:pl-12 xl:flex-row xl:items-center xl:gap-8 xl:pr-0 xl:pl-14 2xl:pl-16">
        <Reveal className="flex w-full flex-1 items-center justify-start xl:self-center">
          <div className="flex h-auto w-full max-w-[1068px] flex-col gap-0 sm:h-[620px] sm:flex-row xl:ml-5">
            <div className="flex flex-1 flex-col gap-0 sm:h-full">
              <FaqCard
                item={faq.items[0]}
                className="min-h-[170px] sm:h-full sm:flex-[46]"
              />
              <FaqCard
                item={faq.items[2]}
                className="min-h-[170px] sm:h-full sm:flex-[54]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-0 sm:h-full">
              <FaqCard
                item={faq.items[1]}
                className="min-h-[170px] sm:h-full sm:flex-[68]"
              />
              <FaqCard
                item={faq.items[3]}
                className="min-h-[170px] sm:h-full sm:flex-[32]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="w-full shrink-0 xl:w-auto">
          <aside
            aria-labelledby="faq-contacts-title"
            className="relative z-20 mx-auto flex min-h-[680px] w-full max-w-[634px] origin-bottom-right flex-col justify-between overflow-visible px-8 pt-10 pb-12 text-pepino sm:min-h-[740px] sm:px-12 md:px-14 xl:-mr-10 xl:min-h-[820px] xl:w-[634px] xl:max-w-none xl:rotate-[1.8deg] xl:px-14 xl:pt-14 xl:pb-16 2xl:-mr-6"
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

            <div className="relative z-10 flex w-full max-w-[396px] flex-col">
              <header className="flex flex-col">
                <h2 id="faq-contacts-title" className="text-pepino">
                  <ContactsLettering className="h-[95px] w-[228px] sm:h-[110px] sm:w-[264px] lg:h-[132px] lg:w-[316px]" />
                </h2>
              </header>

              <p className="mt-6 font-alternates text-[24px] leading-snug font-medium text-pepino italic">
                {faq.contacts.subtitle}
              </p>

              <p className="mt-3 font-sans text-[18px] leading-relaxed font-semibold text-pepino">
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
                      <span className="flex size-9 shrink-0 items-center justify-center text-pepino md:size-10">
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
                        className={`font-alternates text-[20px] font-semibold text-pepino not-italic ${contact.id === "email" ? "underline" : ""}`}
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
        className="pointer-events-none absolute -right-6 -bottom-6 z-10 flex -rotate-12 items-center justify-center overflow-visible px-10 py-5 sm:px-14 sm:py-7 md:-right-8 md:-bottom-8 md:px-16 md:py-8"
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
    </section>
  );
}
