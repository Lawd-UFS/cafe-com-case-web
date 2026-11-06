import { WideButton } from "@/components/ui/WideButton";

import { BeanPanel } from "./BeanPanel";
import { TablePanel } from "./TablePanel";

export function Edition() {
  return (
    <section id="edition">
      <div className="flex w-full px-18 pt-24">
        <div className="relative left-1/2 flex min-h-[160vh] w-screen -translate-x-1/2 bg-areia pr-18 pb-26 overflow-b-clip">
          <div className="flex flex-col items-center p-20 text-pepino">
            <span className="line- flex h-fit w-fit font-gluten text-[13.125rem] leading-none font-bold">
              13ª
            </span>
            <p className="font-alternates text-[5.25rem] leading-none font-black">
              Edição
            </p>
          </div>
          <TablePanel />
          <BeanPanel />
          <article className="relative mt-10 ml-auto flex w-1/5 flex-col gap-8 self-end text-pepino">
            <p className="font-nunito text-[2.5rem] leading-tight font-medium italic">
              Aqui, quando falamos de
              <span className="font-extrabold">
                {" "}
                alimentação, o direito e a cultura{" "}
              </span>
              também entram na conversa.
            </p>
            <p className="max-w-5/6 text-xl font-medium">
              E não acaba por aqui! Descubra o que mais acontece no Café com
              Case.
            </p>
            <WideButton>Conheça mais</WideButton>
          </article>
        </div>
      </div>
    </section>
  );
}
