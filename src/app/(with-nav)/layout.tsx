import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from 'react';
import GlowEffect from "@/ui/GlowEffect";
import PlayStationBackground from "@/ui/PlayStationBackground";

export default function WithNavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PlayStationBackground />
      <GlowEffect />
      <main className="flex relative z-10">
        <Navbar />
        <section className="h-screen w-screen lg:w-2/3 lg:px-12 lg:py-20 pt-10 pb-20 overflow-y-scroll">{children}</section>
      </main>
    </>
  );
}