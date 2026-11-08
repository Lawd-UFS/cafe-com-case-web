import Image from "next/image";

export function BeanPanel() {
  return (
    <div className="absolute top-[46vh] left-0 h-[118vh] w-[60vw]">
      <article className="absolute top-[18%] left-1/4 z-10 flex w-2/5 flex-col gap-10 text-damasco">
        <p className="font-nunito text-5xl font-black">
          mas a conversa vai muito além do que chega ao prato.
        </p>
        <p className="w-3/4 self-end text-left text-lg font-semibold">
          O conceito da edição convida a pensar: o que existe por trás de cada
          refeição? A partir desse questionamento, buscamos levar o público a
          entender o que acontece por trás de cada refeição, cada escolha e cada
          realidade.
        </p>
      </article>
      <Image
        src="/images/illustrations/brown-shape.png"
        alt=""
        width={1189}
        height={1174}
        className="h-full w-full max-w-none object-cover -translate-x-1/5 -rotate-8 zoom-[1.1]"
      />
    </div>
  );
}
