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
        viewBox="0 0 10.363 19.163"
        className="h-[0.96em] w-[0.52em] shrink-0 rotate-90"
      >
        <path
          d="M2.2 9.588L10.075 17.463C10.2583 17.6463 10.35 17.8755 10.35 18.1505C10.35 18.4255 10.2583 18.663 10.075 18.863C9.875 19.063 9.6375 19.163 9.3625 19.163C9.0875 19.163 8.85 19.063 8.65 18.863L0.425 10.638C0.275 10.488 0.166667 10.3213 0.1 10.138C0.0333333 9.95467 0 9.77133 0 9.588C0 9.40467 0.0333333 9.22133 0.1 9.038C0.166667 8.85467 0.275 8.688 0.425 8.538L8.675 0.288C8.875 0.088 9.10833 -0.00783333 9.375 0.0005C9.64167 0.00883333 9.875 0.113 10.075 0.313C10.2583 0.513 10.3542 0.746333 10.3625 1.013C10.3708 1.27967 10.275 1.513 10.075 1.713L2.2 9.588Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </ButtonOrLink>
  );
}
