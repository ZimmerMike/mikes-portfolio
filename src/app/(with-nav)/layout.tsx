import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from 'react';

export default function WithNavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex">
        <Navbar />
        <section className="h-screen w-screen md:w-2/3 py-20 px-12">{children}</section>
      </main>
    </>
  );
}