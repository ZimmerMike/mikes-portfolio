import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from 'react';
import GlowEffect from "@/ui/GlowEffect";
import PlayStationBackground from "@/ui/PlayStationBackground";

export default function WithNavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PlayStationBackground />
      <GlowEffect />
      <main className="flex relative z-10 pt-10 pb-20 md:py-20">
        <Navbar />
        <section className="h-screen w-screen md:w-2/3 md:px-12">{children}</section>
      </main>
    </>
  );
}