import { Apoiadores } from "@/components/sections/apoiadores/Apoiadores";
import { Edicao } from "@/components/sections/edicao/Edicao";
import { Premio } from "@/components/sections/premio/Premio";
import { Rodape } from "@/components/sections/rodape/Rodape";
import { Topo } from "@/components/sections/topo/Topo";

export default function Home() {
  return (
    <>
      <main>
        <Topo />
        <Edicao />
        <Premio />
        <Apoiadores />
      </main>
      <Rodape />
    </>
  );
}
