type TitleTextureProps = {
  id: string;
  size: number;
  scale: number;
  speckles: string;
  color: string;
};

export function TitleTexture({
  id,
  size,
  scale,
  speckles,
  color,
}: TitleTextureProps) {
  return (
    <filter id={id} colorInterpolationFilters="sRGB">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={1 / size}
        numOctaves={3}
        seed={562}
        stitchTiles="stitch"
        width={8 * size}
        height={8 * size}
        result="noise"
      />
      <feTile in="noise" />
      <feDisplacementMap
        in="SourceGraphic"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="G"
        result="shape"
      />
      <feTurbulence
        type="fractalNoise"
        baseFrequency={speckles}
        numOctaves={2}
        seed={7}
      />
      <feColorMatrix
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 30 0 0 0 -21.9"
        result="spots"
      />
      <feFlood style={{ floodColor: color }} />
      <feComposite in2="spots" operator="in" />
      <feComposite in2="shape" operator="in" result="speckles" />
      <feMerge>
        <feMergeNode in="shape" />
        <feMergeNode in="speckles" />
      </feMerge>
    </filter>
  );
}
