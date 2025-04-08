import { InfoCardProps } from "@/core/interfaces/info-card.interface";

export default function InfoCard(props: InfoCardProps) {

  const separator = <span className="border-1 border-white/10 w-[95%] h-[1px] my-4" />;

  return (
    <>
      <main className="container">
        <div className="flex flex-col items-center md:bg-[#0a0a0a]/50 backdrop-blur-sm md:border-4 md:border-white/5 w-full h-fit p-8 rounded-4xl">
          <header className="w-full py-2 px-4">
            <div className="grid grid-cols-2 items-center">
              <div className="flex flex-col gap-1 row-span-2">
                <span className="text-2xl font-bold uppercase">{ props.title }</span>
                <span>{ props.subtitle }</span>
              </div>
              <div className="place-self-end">
                <span>{ props.period }</span>
              </div>
            </div>
          </header>
          {separator}
          <section className="w-full py-2 px-4 h-[80px]">

          </section>
          {separator}
          <section className="w-full h-[500px] bg-white/5 rounded-2xl">
            
          </section>
        </div>
      </main>
    </>
  )
}