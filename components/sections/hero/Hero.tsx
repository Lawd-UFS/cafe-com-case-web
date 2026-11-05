import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex h-screen w-screen items-center overflow-hidden bg-laranja">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/textures/sunflower-seeds.png')] bg-contain opacity-15"></div>
      <div className="absolute top-0 left-0 flex h-full w-full">
        <div className="bg-pepino h-full w-1/6"></div>
        <div className="bg-cafe h-full w-2/7"></div>
      </div>
      <div className="absolute flex items-end bottom-0 h-1/3 w-full border-2">
        <div className="h-full w-1/4 bg-azul [clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)]"></div>
        <div className="absolute left-3/13 h-3/4 w-2/7 bg-tomate [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]"></div>
      </div>
      <div className="absolute right-0 flex h-6/13 w-6/7 bg-cenoura">
        <div className="flex w-[30%] items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Café com Case à Mesa"
            width={800}
            height={800}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="flex w-[28%] flex-col justify-between px-10 py-16 text-pepino">
          <p className="text-xl font-medium leading-snug">
            O Café com Case é o <strong>maior evento gratuito</strong> de
            Publicidade e Propaganda de Sergipe.
          </p>
          <p className="text-2xl font-semibold italic">
            <span className="block text-left">Ideias alimentam</span>
            <span className="block text-right">a transformação.</span>
          </p>
        </div>
        <div className="flex w-[24%] flex-col justify-between px-10 py-16 text-pepino">
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
            className="relative z-60 w-full bg-pepino px-6 py-4 text-center text-lg text-cenoura hover:opacity-90"
          >
            Conheça mais
          </a>
        </div>
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
    </section>
  );
}
