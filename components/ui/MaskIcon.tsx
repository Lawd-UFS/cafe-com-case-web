type MaskIconProps = {
  src: string;
  className?: string;
};

export function MaskIcon({ src, className = "" }: MaskIconProps) {
  const mask = `url(${src})`;

  return (
    <span
      aria-hidden
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      className={`block mask-contain mask-center mask-no-repeat ${className}`}
    />
  );
}
