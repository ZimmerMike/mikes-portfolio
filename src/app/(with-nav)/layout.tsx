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
        <section className="h-screen w-screen md:w-2/3 py-20 px-12 relative">{children}</section>
      </main>
    </>
  );
}