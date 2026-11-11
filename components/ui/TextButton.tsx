import { ButtonOrLink, type ButtonOrLinkProps } from "./ButtonOrLink";

export function TextButton({
  className = "",
  children,
  ...props
}: ButtonOrLinkProps) {
  return (
    <ButtonOrLink
      {...props}
      className={`inline-flex items-center gap-2 font-alternates text-base leading-[normal] font-semibold tracking-[-0.01em] text-cenoura transition-opacity duration-200 hover:opacity-50 focus-visible:opacity-50 md:text-xl ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 19.163 10.363"
        className="h-[0.52em] w-[0.96em] shrink-0"
      >
        <path
          d="M9.575 2.2L1.7 10.075C1.5167 10.2583 1.2875 10.35 1.0125 10.35C0.7375 10.35 0.5 10.2583 0.3 10.075C0.1 9.875 0 9.6375 0 9.3625C0 9.0875 0.1 8.85 0.3 8.65L8.525 0.425C8.675 0.275 8.8417 0.166667 9.025 0.1C9.20833 0.033333 9.39167 0 9.575 0C9.75833 0 9.94167 0.033333 10.125 0.1C10.30833 0.166667 10.475 0.275 10.625 0.425L18.875 8.675C19.075 8.875 19.170833 9.10833 19.1625 9.375C19.154167 9.64167 19.05 9.875 18.85 10.075C18.65 10.2583 18.416667 10.3542 18.15 10.3625C17.88333 10.3708 17.65 10.275 17.45 10.075L9.575 2.2Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </ButtonOrLink>
  );
}
