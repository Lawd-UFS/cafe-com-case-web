"use client";

import { MainButton } from "@/components/ui/MainButton";
import { TextureFilter } from "@/components/ui/TextureFilter";
import type { FaqItem } from "@/content/faq";
import { useId, useState } from "react";

type FaqCardProps = {
  item: FaqItem;
  defaultOpen?: boolean;
};

const colorConfig = {
  tomate: {
    bgOpen: "bg-tomate",
    svgFillOpen: "fill-tomate",
    svgFillHover: "fill-transparent group-hover:fill-tomate",
    textDefault: "text-areia",
    textHover: "group-hover:text-areia",
    textOpen: "text-areia",
    buttonClass: "!text-areia [&_span]:!text-tomate [&_span]:!text-sm",
    tilt: "rotate-[0.6deg]",
  },
  areia: {
    bgOpen: "bg-areia",
    svgFillOpen: "fill-areia",
    svgFillHover: "fill-transparent group-hover:fill-areia",
    textDefault: "text-areia",
    textHover: "group-hover:text-pepino",
    textOpen: "text-pepino",
    buttonClass: "!text-pepino [&_span]:!text-areia [&_span]:!text-sm",
    tilt: "-rotate-[0.8deg]",
  },
  cafe: {
    bgOpen: "bg-cafe",
    svgFillOpen: "fill-cafe",
    svgFillHover: "fill-transparent group-hover:fill-cafe",
    textDefault: "text-areia",
    textHover: "group-hover:text-areia",
    textOpen: "text-areia",
    buttonClass: "!text-areia [&_span]:!text-cafe [&_span]:!text-sm",
    tilt: "rotate-[0.8deg]",
  },
  azul: {
    bgOpen: "bg-azul",
    svgFillOpen: "fill-azul",
    svgFillHover: "fill-transparent group-hover:fill-azul",
    textDefault: "text-areia",
    textHover: "group-hover:text-areia",
    textOpen: "text-areia",
    buttonClass: "!text-areia [&_span]:!text-azul [&_span]:!text-sm",
    tilt: "-rotate-[0.6deg]",
  },
};

export function FaqCard({ item, defaultOpen = false }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uniqueId = useId().replace(/:/g, "");
  const filterIdOpen = `faq-open-${item.id}-${uniqueId}`;
  const filterIdClosed = `faq-closed-${item.id}-${uniqueId}`;
  const config = colorConfig[item.color];

  if (isOpen) {
    return (
      <article
        className={`relative z-20 w-full max-w-[420px] transition-transform duration-300 ${config.tilt}`}
      >
        <div className={`relative px-7 pt-7 pb-8 ${config.textOpen}`}>
          <svg
            aria-hidden
            viewBox="0 0 420 560"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-xl"
          >
            <defs>
              <TextureFilter id={filterIdOpen} radius={3.5} size={9} />
            </defs>
            <rect
              x="4"
              y="4"
              width="412"
              height="552"
              filter={`url(#${filterIdOpen})`}
              className={`stroke-areia stroke-[2.5] ${config.svgFillOpen}`}
            />
          </svg>

          {item.icon && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            >
              <span
                style={{
                  maskImage: `url(${item.icon})`,
                  WebkitMaskImage: `url(${item.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
                className="block size-full scale-[1.35] shrink-0 bg-cafe-escuro opacity-[0.08]"
              />
            </div>
          )}

          <div className="relative z-10 flex flex-col gap-5">
            <header className="flex items-start justify-between gap-4">
              <h3 className="font-alternates text-xl leading-tight font-bold italic">
                {item.question}
              </h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={`Fechar pergunta ${item.number}`}
                className="group flex size-8 shrink-0 items-center justify-center transition-transform hover:scale-110 active:scale-95"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-5 stroke-current stroke-[2.5]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </header>

            <div className="flex flex-col gap-4">
              {item.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-alternates text-[13px] leading-[1.4] font-medium opacity-95 md:text-[13.5px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <footer className="mt-2 flex justify-end">
              <MainButton
                href={item.action.url}
                className={`!h-10 !w-fit !px-6 ${config.buttonClass}`}
              >
                {item.action.label}
              </MainButton>
            </footer>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative w-full max-w-[420px]">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={false}
        className={`relative flex min-h-[170px] w-full flex-col justify-between overflow-visible p-6 text-left transition-colors duration-200 ${config.textDefault} ${config.textHover}`}
      >
        <svg
          aria-hidden
          viewBox="0 0 420 170"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
        >
          <defs>
            <TextureFilter id={filterIdClosed} radius={3.5} size={9} />
          </defs>
          <rect
            x="4"
            y="4"
            width="412"
            height="162"
            filter={`url(#${filterIdClosed})`}
            className={`stroke-areia stroke-[2.5] transition-colors duration-200 ${config.svgFillHover}`}
          />
        </svg>

        <h3 className="relative z-10 font-alternates text-lg leading-snug font-bold italic md:text-xl">
          {item.question}
        </h3>

        {item.icon && (
          <div className="relative z-10 flex justify-end">
            <span
              aria-hidden
              style={{
                maskImage: `url(${item.icon})`,
                WebkitMaskImage: `url(${item.icon})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
              className="block size-8 bg-current transition-colors duration-200 md:size-9"
            />
          </div>
        )}
      </button>
    </article>
  );
}
