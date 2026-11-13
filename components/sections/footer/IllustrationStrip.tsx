"use client";

import { useInView } from "motion/react";
import { getImageProps } from "next/image";
import { useRef } from "react";

import { TextureFilter } from "@/components/ui/TextureFilter";

type IllustrationProps = {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotate?: number;
  flip?: boolean;
};

function Illustration({
  name,
  x,
  y,
  width,
  height,
  rotate = 0,
  flip = false,
}: IllustrationProps) {
  const { src } = getImageProps({
    src: `/images/illustrations/${name}.png`,
    alt: "",
    width,
    height,
  }).props;

  return (
    <image
      href={src}
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        transformBox: "fill-box",
        transformOrigin: "center",
        rotate: `${rotate}deg`,
        scale: flip ? "-1 1" : "1",
      }}
    />
  );
}

type BlockProps = {
  x: number;
  width: number;
  step: number;
  shown: boolean;
  children: React.ReactNode;
};

function Block({ x, width, step, shown, children }: BlockProps) {
  return (
    <svg
      viewBox={`${x} 0 ${width} 280`}
      data-reveal={shown ? "in" : "pending"}
      className="anim-tilt absolute top-0 h-full overflow-visible will-change-[opacity,transform]"
      style={{
        left: `${x / 19.2}%`,
        width: `${width / 19.2}%`,
        animationDelay: `${step * 0.12}s`,
      }}
    >
      {children}
    </svg>
  );
}

type IllustrationStripProps = {
  className?: string;
};

export function IllustrationStrip({ className = "" }: IllustrationStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      aria-hidden
      className={`relative aspect-[1920/280] ${className}`}
    >
      <svg className="absolute size-0">
        <defs>
          <TextureFilter id="footer-strip-texture" radius={5.37} size={6.57} />
          <clipPath id="footer-kettle-crop">
            <rect x={1715.3} y={51.1} width={213.7} height={210.7} />
          </clipPath>
        </defs>
      </svg>

      <Block x={67} width={166} step={0} shown={shown}>
        <Illustration
          name="cashew"
          x={67.6}
          y={67.9}
          width={164.6}
          height={164.6}
          rotate={-24.1}
        />
      </Block>
      <Block x={701} width={267} step={2} shown={shown}>
        <path
          d="M701.35 41.46L967.74 8.62V270.66L701.35 256.14Z"
          filter="url(#footer-strip-texture)"
          className="fill-cafe"
        />
        <Illustration
          name="cup"
          x={736.4}
          y={35.2}
          width={214.5}
          height={214.5}
        />
      </Block>
      <Block x={271} width={431} step={1} shown={shown}>
        <path
          d="M701.26 43.16L271.39 32.5L298.79 256.34H701.26Z"
          filter="url(#footer-strip-texture)"
          className="fill-azul"
        />
        <Illustration
          name="fish"
          x={330.7}
          y={38.6}
          width={337.4}
          height={223.1}
        />
      </Block>
      <Block x={1668} width={291} step={5} shown={shown}>
        <path
          d="M1668.07 48.65H1958.84V267.93L1668.07 264.17Z"
          filter="url(#footer-strip-texture)"
          className="fill-laranja"
        />
        <g clipPath="url(#footer-kettle-crop)">
          <Illustration
            name="kettle"
            x={1715.3}
            y={58.45}
            width={406.7}
            height={406.7}
          />
        </g>
      </Block>
      <Block x={1285} width={431} step={4} shown={shown}>
        <path
          d="M1285.44 54.75L1715.31 44.09L1687.91 267.93H1285.44Z"
          filter="url(#footer-strip-texture)"
          className="fill-cafe"
        />
        <Illustration
          name="beans"
          x={1317.1}
          y={48.7}
          width={380.8}
          height={251.8}
          rotate={16.3}
        />
      </Block>
      <Block x={961} width={332} step={3} shown={shown}>
        <path
          d="M961.05 9.33L1292.59 52.95V267.93H961.05Z"
          filter="url(#footer-strip-texture)"
          className="fill-tomate"
        />
        <Illustration
          name="pot"
          x={1009.8}
          y={77}
          width={264.2}
          height={174.8}
          flip
        />
      </Block>
    </div>
  );
}
