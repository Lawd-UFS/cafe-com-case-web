import type { ComponentProps } from "react";

import { TextureFilter } from "./TextureFilter";

export function WideButton({
  className = "",
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={`relative z-60 w-full cursor-pointer px-6 py-4 text-center font-alternates text-2xl text-cenoura transition-opacity duration-150 ease-out hover:opacity-90 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-pepino filter-[url(#wide-button-texture)]"
      />
      <span className="relative">{children}</span>
      <svg aria-hidden className="absolute size-0">
        <defs>
          <TextureFilter id="wide-button-texture" radius={5} size={14} />
        </defs>
      </svg>
    </button>
  );
}
