'use client';

import { InfoCardProps } from "@/core/interfaces/info-card.interface";
import Chip from "../Chip/Chip";
import { useState } from "react";

export default function InfoCard(props: InfoCardProps) {
  const [expanded, setExpanded] = useState(false);

  const separator = <div className="h-0.5 bg-gradient-to-r from-[transparent] via-white/10 to-[transparent] w-[95%] my-4" />;

  return (
    <>
      <main className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center backdrop-blur-lg bg-[#0a0a0a]/50 border-4 border-white/5 w-[95%] h-fit p-6 lg:p-8 rounded-4xl">
            {/* Card header */}
            <header className="w-full">
              <i className={`text-3xl pi ${ props.icon }`} />
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
            { separator }
            {/* Card content */}
            <section className="w-full h-fit">
              <div className="w-full flex justify-center -mb-4">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all cursor-pointer">
                  <i className={`pi pi-chevron-down text-white transition-transform duration-300 ${ expanded ? 'rotate-180' : '' }`} />
                </button>
              </div>
              <div className={`w-full bg-white/5 rounded-2xl py-6 px-4 transition-all duration-300 ${
                expanded ? 'max-h-[400px] overflow-y-scroll' : 'max-h-[150px] overflow-hidden'
              }`}>
                <p className="text-justify text-white/80 whitespace-pre-line">{ props.description }</p>
              </div>
            </section>
            { separator }
            <section className="w-full h-fit">
              <div className="flex gap-2 flex-wrap justify-center">
                <Chip />
                <Chip />
                <Chip />
                <Chip />
                <Chip />
                <Chip />
                <Chip />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}