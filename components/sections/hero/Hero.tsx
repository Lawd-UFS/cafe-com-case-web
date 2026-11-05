export function Hero() {
  return (
    <section className="relative flex items-center h-screen w-screen bg-laranja">
      <div className="absolute top-0 left-0 flex h-full w-full">
        <div className="bg-pepino h-full w-1/6"></div>
        <div className="bg-cafe h-full w-2/7"></div>
      </div>
      <div className="absolute flex items-end bottom-0 h-1/3 w-full border-2">
        <div className="h-full w-1/4 bg-azul [clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)]"></div>
        <div className="absolute left-3/13 h-3/4 w-2/7 bg-tomate [clip-path:polygon(0_0,100%_3.5rem,100%_100%,0_100%)]"></div>
      </div>
      <div className="absolute w-6/7 h-6/13 bg-cenoura z-10 right-0"></div>
    </section>
  );
}
