export function Edition() {
  return (
    <section id="edition">
      <div className="flex w-full px-18 pt-24">
        <div className="flex min-h-[110vh] w-full bg-areia">
          <div className="flex flex-col items-center p-20 text-pepino">
            <span className="line- flex h-fit w-fit font-gluten text-[13.125rem] leading-none font-bold">
              13ª
            </span>
            <p className="font-alternates text-[5.25rem] leading-none font-black">
              Edição
            </p>
          </div>
          <div className="absolute top-[85%] right-0 z-10 h-full w-5/7 bg-pepino [clip-path:polygon(0_0,100%_0,100%_100%,6rem_100%)]"></div>
        </div>
      </div>
    </section>
  );
}
