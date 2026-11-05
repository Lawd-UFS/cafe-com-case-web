import type { ComponentProps } from "react";

export function WideButton({
  className = "",
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={`relative z-60 w-full cursor-pointer bg-pepino px-6 py-4 text-center font-alternates text-2xl text-cenoura transition-opacity duration-150 ease-out hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}
