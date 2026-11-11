import { useId } from "react";
import { ButtonOrLink, type ButtonOrLinkProps } from "./ButtonOrLink";

type MainButtonProps = ButtonOrLinkProps & {
  color?: "pepino" | "cafe";
};

const colors = {
  pepino: "text-pepino",
  cafe: "text-cafe",
};

export function MainButton({
  color = "pepino",
  className = "",
  children,
  ...props
}: MainButtonProps) {
  const filterId = `main-button-${useId().replace(/:/g, "")}`;

  return (
    <ButtonOrLink
      {...props}
      className={`group relative inline-flex h-9 min-w-[177px] shrink-0 items-center justify-center px-4 transition-colors duration-200 hover:text-tomate focus-visible:text-tomate md:h-[58px] md:min-w-[288px] md:px-8 ${colors[color]} ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 301.492 71.8633"
        preserveAspectRatio="none"
        className="absolute top-[-11.46%] left-[-2.33%] h-[122.92%] w-[104.65%] overflow-visible"
      >
        <defs>
          <filter
            id={filterId}
            x="0"
            y="0"
            width="301.492"
            height="71.8633"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.122"
              numOctaves={3}
              seed={562}
            />
            <feDisplacementMap
              in="SourceGraphic"
              scale="13.4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          d="M6.7 6.7H294.792V65.1633L6.7 64.1621V6.7Z"
          fill="currentColor"
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="relative font-alternates text-[15px] leading-[1.194] font-semibold text-cenoura md:text-2xl">
        {children}
      </span>
    </ButtonOrLink>
  );
}
