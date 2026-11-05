import Image from "next/image";

export function TablePanel() {
  return (
    <div className="absolute top-[85%] right-0 z-10 h-full w-5/7 overflow-x-clip">
      <aside className="flex h-full w-full items-center overflow-hidden bg-pepino pl-25 [clip-path:polygon(0_0,100%_0,100%_100%,6rem_100%)]">
        <article className="flex w-4/7 flex-col gap-6 text-damasco">
          <h3 className="font-alternate text-5xl font-black">
            A mesa está posta
          </h3>
          <div className="flex gap-15 text-xl font-semibold">
            <p>
              Em sua 13ª edição, o Café com Case parte do Direito Humano à
              Alimentação Adequada para discutir como a comunicação constrói
              narrativas e sentidos sobre o acesso à alimentação.
            </p>
            <p>
              Em sua 13ª edição, o Café com Case parte do Direito Humano à
              Alimentação Adequada para discutir como a comunicação constrói
              narrativas e sentidos sobre o acesso à alimentação.
            </p>
          </div>
        </article>
      </aside>
      <Image
        src="/images/illustrations/cutlery.png"
        alt=""
        width={796}
        height={1178}
        className="absolute right-0 bottom-0 h-[90%] w-auto max-w-none translate-x-[8%] translate-y-[5%]"
      />
    </div>
  );
}
