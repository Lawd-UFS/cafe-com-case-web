import Image from "next/image";

export function ContentBand() {
  return (
    <div className="absolute right-0 z-30 flex h-6/13 w-6/7 bg-cenoura">
      <div className="flex w-[30%] items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Café com Case à Mesa"
          width={800}
          height={800}
          className="h-full w-auto scale-110 object-contain"
        />
      </div>
      <article className="flex w-[28%] flex-col justify-between px-10 py-16 text-pepino">
        <p className="text-xl leading-snug font-medium">
          O Café com Case é o <strong>maior evento gratuito</strong> de
          Publicidade e Propaganda de Sergipe.
        </p>
        <p className="font-alternates text-2xl font-semibold italic">
          <span className="block text-left">Ideias alimentam</span>
          <span className="block text-right">a transformação.</span>
        </p>
      </article>
      <article className="flex w-[24%] flex-col justify-between px-10 py-16 text-pepino">
        <div className="space-y-4">
          <p className="font-bold">
            Com edições anuais, funcionamos como um ambiente coletivo para
            debater temas atuais da sociedade.
          </p>
          <p className="font-bold">
            O projeto busca estimular o aprendizado e fortalecer o{" "}
            <em>pensamento crítico</em>, unindo estudantes, profissionais e
            comunidade em um <strong> espaço de diálogo acessível</strong>.
          </p>
        </div>
        <a
          href="#faq"
          className="relative z-60 w-full bg-pepino px-6 py-4 text-center font-alternates text-2xl text-cenoura hover:opacity-90"
        >
          Conheça mais
        </a>
      </article>
      <div className="relative flex w-[18%] items-start justify-center overflow-hidden px-4 py-16">
        <Image
          src="/images/illustrations/kettle.png"
          alt=""
          width={400}
          height={400}
          className="h-[120%] w-auto max-w-none translate-x-[30%]"
        />
      </div>
    </div>
  );
}
