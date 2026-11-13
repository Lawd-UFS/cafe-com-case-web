"use client";

import { MainButton } from "@/components/ui/MainButton";
import { TextButton } from "@/components/ui/TextButton";
import { TextureFilter } from "@/components/ui/TextureFilter";
import type { FaqItem } from "@/content/faq";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

type FaqCardProps = {
  item: FaqItem;
  defaultOpen?: boolean;
  className?: string;
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
    watermarkClass: "bg-black/20",
  },
  cenoura: {
    svgFillOpen: "fill-cenoura",
    svgFillHover: "fill-transparent group-hover:fill-cenoura",
    textDefault: "text-areia",
    textHover: "group-hover:text-azul",
    textOpen: "text-azul",
    buttonClass: "!text-azul hover:!text-azul [&_span]:!text-cenoura",
    rotateDeg: -1.7,
    watermarkClass: "bg-black/20",
  },
  cafe: {
    svgFillOpen: "fill-cafe",
    svgFillHover: "fill-transparent group-hover:fill-cafe",
    textDefault: "text-areia",
    textHover: "group-hover:text-cenoura",
    textOpen: "text-cenoura",
    buttonClass: "!text-cenoura hover:!text-cenoura [&_span]:!text-cafe",
    rotateDeg: 1.8,
    watermarkClass: "bg-black/25",
  },
  azul: {
    svgFillOpen: "fill-azul",
    svgFillHover: "fill-transparent group-hover:fill-azul",
    textDefault: "text-areia",
    textHover: "group-hover:text-cenoura",
    textOpen: "text-cenoura",
    buttonClass: "!text-cenoura hover:!text-cenoura [&_span]:!text-azul",
    rotateDeg: 1.4,
    watermarkClass: "bg-black/25",
  },
};

function FadeScroll({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canGoUp, setCanGoUp] = useState(false);
  const [canGoDown, setCanGoDown] = useState(false);

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const update = () => {
      const { scrollTop, clientHeight, scrollHeight } = scroller;
      setCanGoUp(scrollTop > 1);
      setCanGoDown(scrollTop + clientHeight < scrollHeight - 1);
    };

    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    for (const child of scroller.children) observer.observe(child);
    scroller.addEventListener("scroll", update);

    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", update);
    };
  }, []);

  const mask =
    canGoUp || canGoDown
      ? `linear-gradient(${canGoUp ? "transparent" : "#000"}, #000 1.5rem, #000 calc(100% - 3rem), ${canGoDown ? "transparent" : "#000"})`
      : undefined;

  const scrollMore = () => {
    const scroller = ref.current;
    if (canGoDown) scroller?.scrollBy({ top: scroller.clientHeight * 0.7 });
    else scroller?.scrollTo({ top: 0 });
  };

  return (
    <div className={`relative flex min-h-0 flex-col ${className}`}>
      <div
        ref={ref}
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="min-h-0 [scrollbar-width:none] overflow-y-auto overscroll-contain scroll-smooth [overflow-anchor:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {(canGoUp || canGoDown) && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onMouseDown={(event) => event.preventDefault()}
          onClick={scrollMore}
          className={`absolute -right-6 bottom-0 size-5 opacity-50 transition-opacity hover:opacity-100 lg:-right-8 lg:size-6 ${canGoDown ? "" : "rotate-180"}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-full fill-none stroke-current stroke-2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function FaqCard({
  item,
  defaultOpen = false,
  className = "",
}: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showMore, setShowMore] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const moreTitleRef = useRef<HTMLHeadingElement>(null);

  const uniqueId = useId().replace(/:/g, "");
  const headingId = `faq-title-${item.id}-${uniqueId}`;
  const moreTitleId = `faq-more-title-${item.id}-${uniqueId}`;
  const filterIdOpen = `faq-open-${item.id}-${uniqueId}`;
  const filterIdMore = `faq-more-${item.id}-${uniqueId}`;
  const filterIdClosed = `faq-closed-${item.id}-${uniqueId}`;
  const config = colorConfig[item.color];
  const more = "questions" in item.action ? item.action : null;

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

  const resetPaper = () => {
    setShowMore(false);
    setOpenQuestion(null);
  };

  const flipToMore = () => {
    setShowMore(true);
    requestAnimationFrame(() =>
      moreTitleRef.current?.focus({ preventScroll: true }),
    );
  };

  const flipToFront = () => {
    resetPaper();
    requestAnimationFrame(() =>
      frontRef.current
        ?.querySelector<HTMLElement>("[data-faq-more]")
        ?.focus({ preventScroll: true }),
    );
  };

  return (
    <>
      <article className={`group relative flex w-full flex-col ${className}`}>
        <h3 className="h-full w-full">
          <button
            type="button"
            onClick={openDialog}
            aria-expanded={isOpen}
            aria-controls={`faq-dialog-${item.id}`}
            className={`relative flex h-full w-full flex-col justify-between overflow-visible p-6 text-left transition-colors duration-200 sm:p-7 lg:p-8 ${config.textDefault} ${config.textHover}`}
          >
            <svg
              aria-hidden
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 size-full overflow-visible"
            >
              <defs>
                <TextureFilter id={filterIdClosed} radius={3.5} size={9} />
              </defs>
              <rect
                x="2"
                y="2"
                width="496"
                height="296"
                filter={`url(#${filterIdClosed})`}
                className={`stroke-areia stroke-[1.2] transition-colors duration-200 ${config.svgFillHover}`}
              />
            </svg>

            <span className="relative z-10 font-alternates text-[20px] leading-tight font-bold italic lg:text-[32px]">
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
                  className="block size-8 bg-current transition-colors duration-200 lg:size-9"
                />
              </span>
            )}
          </button>
        </h3>
      </article>

      <dialog
        id={`faq-dialog-${item.id}`}
        ref={dialogRef}
        aria-labelledby={showMore ? moreTitleId : headingId}
        onClose={() => {
          setIsOpen(false);
          resetPaper();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeDialog();
          }
        }}
        className="fixed inset-0 z-50 m-auto max-h-[94dvh] w-full max-w-[min(374px,calc(100vw-2.5rem))] overflow-visible bg-transparent p-0 outline-none perspective-distant backdrop:bg-[#1C1F1C]/85 backdrop:backdrop-blur-xs lg:max-w-[520px]"
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 32, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: config.rotateDeg,
              rotateY: showMore ? 180 : 0,
            }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 300,
              mass: 0.8,
              rotateY: {
                type: "tween",
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
              },
            }}
            className="relative grid w-full transform-3d"
          >
            <div
              ref={frontRef}
              inert={showMore}
              className={`relative flex max-h-[94dvh] flex-col self-center px-7 pt-8 pb-9 transition-opacity duration-300 [grid-area:1/1] backface-hidden lg:px-10 lg:pt-10 lg:pb-12 ${config.textOpen} ${showMore ? "opacity-0" : ""}`}
            >
              <svg
                aria-hidden
                viewBox="0 0 520 680"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-2xl will-change-transform"
              >
                <defs>
                  <TextureFilter id={filterIdOpen} radius={4} size={8.5} />
                </defs>
                <rect
                  x="4"
                  y="4"
                  width="512"
                  height="672"
                  filter={`url(#${filterIdOpen})`}
                  className={`stroke-areia stroke-[2.5] ${config.svgFillOpen}`}
                />
              </svg>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
              >
                <span
                  style={{
                    maskImage: "url(/images/illustrations/brown-shape.png)",
                    WebkitMaskImage:
                      "url(/images/illustrations/brown-shape.png)",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                  className={`block size-full shrink-0 scale-[1.5] ${config.watermarkClass}`}
                />
              </div>

              <div className="relative z-10 flex min-h-0 flex-col gap-5 lg:gap-8">
                <header className="flex items-start justify-between gap-4">
                  <h3
                    id={headingId}
                    className="font-alternates text-[24px] leading-tight font-bold italic lg:text-[32px]"
                  >
                    {item.question}
                  </h3>

                  <button
                    type="button"
                    onClick={closeDialog}
                    aria-label={`Fechar pergunta ${item.number}`}
                    className="group flex size-8 shrink-0 items-center justify-center transition-transform hover:scale-110 active:scale-95 lg:size-9"
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

                <FadeScroll className="mx-auto w-full max-w-[300px] lg:max-w-[370px]">
                  <div className="flex flex-col gap-3.5 lg:gap-5">
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-sans text-[14px] leading-[1.4] font-semibold opacity-95 lg:text-[18px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeScroll>

                <footer className="mt-2 flex justify-center lg:justify-end">
                  {"url" in item.action ? (
                    <MainButton
                      href={item.action.url}
                      target={
                        item.action.url.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.action.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`whitespace-nowrap [&_span]:text-[17px] [&_span]:font-semibold lg:[&_span]:text-2xl ${config.buttonClass}`}
                    >
                      {item.action.label}
                    </MainButton>
                  ) : (
                    <MainButton
                      data-faq-more
                      onClick={flipToMore}
                      className={`whitespace-nowrap [&_span]:text-[17px] [&_span]:font-semibold lg:[&_span]:text-2xl ${config.buttonClass}`}
                    >
                      {item.action.label}
                    </MainButton>
                  )}
                </footer>
              </div>
            </div>

            {more && (
              <div
                inert={!showMore}
                className={`relative flex max-h-[94dvh] rotate-y-180 flex-col self-center px-7 pt-8 pb-9 transition-opacity duration-300 [grid-area:1/1] backface-hidden lg:px-10 lg:pt-10 lg:pb-12 ${config.textOpen} ${showMore ? "" : "opacity-0"}`}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 520 680"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-2xl will-change-transform"
                >
                  <defs>
                    <TextureFilter id={filterIdMore} radius={4} size={8.5} />
                  </defs>
                  <rect
                    x="4"
                    y="4"
                    width="512"
                    height="672"
                    filter={`url(#${filterIdMore})`}
                    className={`stroke-areia stroke-[2.5] ${config.svgFillOpen}`}
                  />
                </svg>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
                >
                  <span
                    style={{
                      maskImage: "url(/images/illustrations/brown-shape.png)",
                      WebkitMaskImage:
                        "url(/images/illustrations/brown-shape.png)",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                    className={`block size-full shrink-0 -scale-x-150 scale-y-150 ${config.watermarkClass}`}
                  />
                </div>

                <header className="relative z-10 flex items-center justify-between gap-4">
                  <TextButton onClick={flipToFront} className="!text-current">
                    Voltar
                  </TextButton>

                  <button
                    type="button"
                    onClick={closeDialog}
                    aria-label={`Fechar pergunta ${item.number}`}
                    className="group flex size-8 shrink-0 items-center justify-center transition-transform hover:scale-110 active:scale-95 lg:size-9"
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

                <FadeScroll className="z-10 mt-4 lg:mt-6">
                  <h3
                    id={moreTitleId}
                    ref={moreTitleRef}
                    tabIndex={-1}
                    className="font-alternates text-[24px] leading-tight font-bold italic outline-none lg:text-[32px]"
                  >
                    {more.title}
                  </h3>

                  <ul className="mt-4 lg:mt-6">
                    {more.questions.map((question) => {
                      const isActive = openQuestion === question.id;
                      const answerId = `${moreTitleId}-${question.id}`;

                      return (
                        <li
                          key={question.id}
                          className="scroll-mt-6 scroll-mb-12 border-t-[1.5px] border-current/40 last:border-b-[1.5px]"
                        >
                          <h4>
                            <button
                              type="button"
                              aria-expanded={isActive}
                              aria-controls={answerId}
                              onClick={() =>
                                setOpenQuestion(isActive ? null : question.id)
                              }
                              className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left font-alternates text-[16px] leading-snug font-bold italic transition-opacity duration-200 hover:opacity-75 lg:text-[20px]"
                            >
                              <span>{question.question}</span>
                              <span
                                aria-hidden
                                className="shrink-0 text-[26px] leading-none not-italic"
                              >
                                {isActive ? "−" : "+"}
                              </span>
                            </button>
                          </h4>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                id={answerId}
                                variants={{
                                  open: { height: "auto", opacity: 1 },
                                  closed: { height: 0, opacity: 0 },
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onAnimationComplete={(variant) =>
                                  variant === "open" &&
                                  document
                                    .getElementById(answerId)
                                    ?.parentElement?.scrollIntoView({
                                      block: "nearest",
                                    })
                                }
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-3 pb-5 lg:gap-4">
                                  {question.paragraphs.map((paragraph) => (
                                    <p
                                      key={paragraph}
                                      className="font-sans text-[14px] leading-[1.4] font-semibold opacity-95 lg:text-[18px]"
                                    >
                                      {paragraph}
                                    </p>
                                  ))}

                                  {question.action && (
                                    <MainButton
                                      href={question.action.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`mt-1 self-center whitespace-nowrap md:!h-11 md:!min-w-0 md:!px-6 lg:self-end [&_span]:text-[17px] [&_span]:font-semibold md:[&_span]:text-lg ${config.buttonClass}`}
                                    >
                                      {question.action.label}
                                    </MainButton>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </ul>
                </FadeScroll>
              </div>
            )}
          </motion.div>
        )}
      </dialog>
    </>
  );
}
