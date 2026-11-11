"use client";

import { MainButton } from "@/components/ui/MainButton";
import { TextureFilter } from "@/components/ui/TextureFilter";
import type { FaqItem } from "@/content/faq";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type FaqCardProps = {
  item: FaqItem;
  defaultOpen?: boolean;
};

const colorConfig = {
  tomate: {
    svgFillOpen: "fill-tomate",
    svgFillHover: "fill-transparent group-hover:fill-tomate",
    textDefault: "text-areia",
    textHover: "group-hover:text-amarelo",
    textOpen: "text-amarelo",
    buttonClass: "!text-amarelo hover:!text-amarelo [&_span]:!text-tomate",
    rotateDeg: -1.5,
  },
  cenoura: {
    svgFillOpen: "fill-cenoura",
    svgFillHover: "fill-transparent group-hover:fill-cenoura",
    textDefault: "text-areia",
    textHover: "group-hover:text-azul",
    textOpen: "text-azul",
    buttonClass: "!text-azul hover:!text-azul [&_span]:!text-cenoura",
    rotateDeg: -1.7,
  },
  cafe: {
    svgFillOpen: "fill-cafe",
    svgFillHover: "fill-transparent group-hover:fill-cafe",
    textDefault: "text-areia",
    textHover: "group-hover:text-cenoura",
    textOpen: "text-cenoura",
    buttonClass: "!text-cenoura hover:!text-cenoura [&_span]:!text-cafe",
    rotateDeg: 1.8,
  },
  azul: {
    svgFillOpen: "fill-azul",
    svgFillHover: "fill-transparent group-hover:fill-azul",
    textDefault: "text-areia",
    textHover: "group-hover:text-cenoura",
    textOpen: "text-cenoura",
    buttonClass: "!text-cenoura hover:!text-cenoura [&_span]:!text-azul",
    rotateDeg: 1.4,
  },
};

export function FaqCard({ item, defaultOpen = false }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const uniqueId = useId().replace(/:/g, "");
  const filterIdOpen = `faq-open-${item.id}-${uniqueId}`;
  const filterIdClosed = `faq-closed-${item.id}-${uniqueId}`;
  const config = colorConfig[item.color];

  useEffect(() => {
    if (defaultOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      setIsOpen(true);
    }
  }, [defaultOpen]);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  return (
    <>
      <article className="group relative w-full max-w-[420px]">
        <h3 className="w-full">
          <button
            type="button"
            onClick={openDialog}
            aria-expanded={isOpen}
            aria-controls={`faq-dialog-${item.id}`}
            className={`relative flex min-h-[190px] w-full flex-col justify-between overflow-visible p-6 text-left transition-colors duration-200 md:min-h-[220px] md:p-8 ${config.textDefault} ${config.textHover}`}
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

            <span className="relative z-10 font-alternates text-2xl leading-tight font-bold italic md:text-[32px]">
              {item.question}
            </span>

            {item.icon && (
              <span className="relative z-10 flex justify-end">
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
              </span>
            )}
          </button>
        </h3>
      </article>

      <dialog
        id={`faq-dialog-${item.id}`}
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeDialog();
          }
        }}
        className="fixed inset-0 z-50 m-auto max-h-[94dvh] max-w-[min(620px,calc(100vw-2rem))] overflow-visible bg-transparent p-0 outline-none backdrop:bg-pepino/80 backdrop:backdrop-blur-sm"
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 32, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: config.rotateDeg }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 300,
              mass: 0.8,
            }}
            className="relative w-full"
          >
            <div
              className={`relative px-8 pt-8 pb-10 md:px-12 md:pt-10 md:pb-12 ${config.textOpen}`}
            >
              <svg
                aria-hidden
                viewBox="0 0 620 680"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-2xl"
              >
                <defs>
                  <TextureFilter id={filterIdOpen} radius={4} size={8.5} />
                </defs>
                <rect
                  x="4"
                  y="4"
                  width="612"
                  height="672"
                  filter={`url(#${filterIdOpen})`}
                  className={`stroke-areia stroke-[2.5] ${config.svgFillOpen}`}
                />
              </svg>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/images/illustrations/brown-shape.png"
                  alt=""
                  width={600}
                  height={600}
                  className="size-[140%] max-w-none shrink-0 object-contain opacity-20"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-6 md:gap-8">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-alternates text-2xl leading-tight font-bold italic md:text-[32px]">
                    {item.question}
                  </h3>

                  <button
                    type="button"
                    onClick={closeDialog}
                    aria-label={`Fechar pergunta ${item.number}`}
                    className="group flex size-9 shrink-0 items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-6 stroke-current stroke-[2.5]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </header>

                <div className="flex flex-col gap-4 md:gap-5">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-sans text-base leading-[1.4] font-normal opacity-95 md:text-[18px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <footer className="mt-2 flex justify-end">
                  <MainButton
                    href={item.action.url}
                    target={
                      item.action.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.action.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`whitespace-nowrap ${config.buttonClass}`}
                  >
                    {item.action.label}
                  </MainButton>
                </footer>
              </div>
            </div>
          </motion.div>
        )}
      </dialog>
    </>
  );
}
