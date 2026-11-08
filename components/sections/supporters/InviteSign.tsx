import { TextureFilter } from "@/components/ui/TextureFilter";
import { supporters } from "@/content/supporters";

type InviteSignProps = {
  className?: string;
};

export function InviteSign({ className = "" }: InviteSignProps) {
  return (
    <div
      className={`relative h-[10.072em] w-[19.228em] text-base md:text-[clamp(22px,1.667vw,32px)] ${className}`}
    >
      <svg
        aria-hidden
        viewBox="-8 -8 631.29 338.3"
        className="absolute top-[-0.25em] left-[-0.25em] h-[10.572em] w-[19.728em]"
      >
        <defs>
          <TextureFilter id="invite-sign-yellow" radius={6.2} size={7.58} />
          <TextureFilter id="invite-sign-blue" radius={4.7} size={16.1} />
        </defs>
        <path
          d="M72.02 89.37H593.89L615.29 295.91L81.96 322.3Z"
          filter="url(#invite-sign-yellow)"
          className="fill-amarelo"
        />
        <rect
          width="498.31"
          height="128.93"
          filter="url(#invite-sign-blue)"
          className="fill-azul"
        />
      </svg>

      <h3 className="absolute top-[0.786em] left-[1.276em] w-[13.215em] font-alternates leading-[1.194] font-bold italic">
        {supporters.invite.title}
      </h3>
      <div className="absolute top-[5.063em] left-[3.794em] h-[3.594em] w-[14.298em] -rotate-[1.85deg]">
        <p className="font-alternates text-[0.75em] leading-[1.194] font-semibold text-cafe">
          {supporters.invite.text}
        </p>
      </div>
    </div>
  );
}
