import { useId } from "react";

import { ButtonOrLink, type ButtonOrLinkProps } from "./ButtonOrLink";

export function BigButton({
  className = "",
  children,
  ...props
}: ButtonOrLinkProps) {
  const filterId = `big-button-${useId()}`;

  return (
    <ButtonOrLink
      {...props}
      className={`group relative inline-block h-[42px] w-[91px] shrink-0 text-areia transition-colors duration-200 hover:text-tomate focus-visible:text-tomate md:h-[86px] md:w-[188px] ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 193.21 92.0084"
        preserveAspectRatio="none"
        className="absolute top-[-3.01%] left-[-1.39%] h-[106.48%] w-[102.99%] overflow-visible"
      >
        <defs>
          <filter
            id={filterId}
            x="0"
            y="0"
            width="193.209"
            height="92.0084"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" dy="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.6996 0 0 0 0 0.3558 0 0 0 0 0.0243 0 0 0 0.66 0"
              result="shadow"
            />
            <feMerge result="shape">
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4167"
              numOctaves={3}
              seed={562}
            />
            <feDisplacementMap
              in="shape"
              scale="5.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          d="M2.6 11.8746L190.209 2.6L185.634 89.0084H2.6V11.8746Z"
          fill="currentColor"
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="absolute top-[33.5%] left-[18.68%] h-[47.39%] w-[44.71%] text-pepino transition-colors duration-200 group-hover:text-cenoura group-focus-visible:text-cenoura">
        {children}
      </span>
    </ButtonOrLink>
  );
}
