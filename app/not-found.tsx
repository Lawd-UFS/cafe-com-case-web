import { MainButton } from "@/components/ui/MainButton";
import { Reveal } from "@/components/ui/Reveal";
import { TextureFilter } from "@/components/ui/TextureFilter";
import { notFoundContent } from "@/content/not-found";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: notFoundContent.metaTitle,
  },
};

export default function NotFound() {
  return (
    <main
      id="not-found"
      className="relative flex min-h-dvh w-full flex-col overflow-clip bg-cenoura text-cafe"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[url(/images/textures/sunflower-seeds.webp)] bg-size-[1198px_auto] opacity-[0.13] mix-blend-soft-light"
      />

      <header className="relative z-10 w-full">
        <div className="relative mx-auto flex w-full max-w-[920px] items-center justify-center px-6 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
          <svg
            aria-hidden
            viewBox="0 0 920 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 -top-4 h-[calc(100%+1rem)] w-full overflow-visible drop-shadow-md"
          >
            <defs>
              <TextureFilter
                id="not-found-top-panel-texture"
                radius={4}
                size={8.5}
              />
            </defs>
            <polygon
              points="0,0 920,0 920,175 620,210 240,185 0,205"
              filter="url(#not-found-top-panel-texture)"
              className="fill-areia"
            />
          </svg>

          <Reveal>
            <Link
              href={notFoundContent.button.href}
              className="relative z-10 block transition-opacity duration-200 hover:opacity-85"
            >
              <Image
                src="/images/logo.png"
                alt={notFoundContent.logoAlt}
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-44 object-contain sm:w-52 lg:w-64"
              />
            </Link>
          </Reveal>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-[680px] flex-1 flex-col items-center justify-center px-6 pt-8 pb-16 text-center sm:px-10 lg:pb-24">
        <Reveal>
          <p className="font-alternates text-[72px] leading-none font-black tracking-tight text-cafe sm:text-[96px] lg:text-[128px]">
            {notFoundContent.code}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 font-alternates text-[28px] leading-tight font-bold text-cafe italic sm:text-[36px] lg:text-[44px]">
            {notFoundContent.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-[460px] font-sans text-[15px] leading-relaxed font-semibold text-cafe sm:text-[17px] lg:text-[18px]">
            {notFoundContent.description}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 lg:mt-10">
          <MainButton
            color="cafe"
            href={notFoundContent.button.href}
            className="whitespace-nowrap"
          >
            {notFoundContent.button.label}
          </MainButton>
        </Reveal>
      </div>
    </main>
  );
}
