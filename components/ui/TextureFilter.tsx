type TextureFilterProps = {
  id: string;
  radius: number;
  size: number;
};

export function TextureFilter({ id, radius, size }: TextureFilterProps) {
  return (
    <filter id={id} colorInterpolationFilters="sRGB">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={1 / size}
        numOctaves={3}
        seed={562}
      />
      <feDisplacementMap
        in="SourceGraphic"
        scale={radius * 2}
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  );
}
