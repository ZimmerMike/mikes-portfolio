import { InfoCardProps } from "@/core/interfaces/info-card.interface";
import Chip from "../Chip/Chip";
import Link from "next/link";

export default function InfoCard(props: InfoCardProps) {

  const separator = <div className="h-0.5 bg-gradient-to-r from-[transparent] via-white/10 to-[transparent] w-[95%] my-4" />;

  return (
    <>
      <main className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center backdrop-blur-lg bg-[#0a0a0a]/50 border-4 border-white/5 w-[95%] max-w-3xl h-fit p-6 lg:p-8 rounded-4xl">
            {/* Card header */}
            <header className="w-full">
              <i className={`text-3xl pi ${ props.icon }`} />
              <div className="flex flex-col gap-1">
                  <span className="text-2xl text-center font-bold uppercase">{ props.title }</span>
                  <span>{ props.subtitle }</span>
                  <div className="flex gap-2 mt-4">
                    { props.repoLink &&
                      <Link
                        className="flex gap-2 items-center duration-300 px-4 py-2 rounded-sm hover:bg-white/10"
                        href={ props.repoLink ?? '' }
                        target="_blank">
                        <i className={`text-lg pi pi-github`} />
                        GitHub
                      </Link>
                    }
                    { props.link &&
                      <Link
                        className="flex gap-2 items-center duration-300 px-4 py-2 rounded-sm hover:bg-white/10"
                        href={ props.link ?? '' }
                        target="_blank">
                        <i className={`text-lg pi pi-external-link`} />
                        Despliegue
                      </Link>
                    }
                  </div>
              </div>
              <div className="float-right text-xs">
                <span>{ props.period }</span>
              </div>
            </header>
            { separator }
            {/* Card content */}
            <section className="w-full h-fit">
              <div className={ 'w-full bg-white/5 rounded-2xl py-6 px-8 transition-all duration-300 max-h-fit' }>
                <p className="text-justify text-white/80 whitespace-pre-line">{ props.description }</p>
              </div>
            </section>
            { separator }
            <section className="w-full h-fit">
              <div className="flex gap-4 flex-wrap justify-center">
                { props.tags?.map(tg => <Chip tag={tg} key={tg} />) }
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}