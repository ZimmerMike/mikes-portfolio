import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-evenly">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-[-2]">
        <source src="/media/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-[-1]" />
      <section className="flex flex-col gap-20 text-center justify-center w-3/4">
        <h1 className="text-5xl uppercase">¡Hola! Yo soy <span className="font-bold">Miguel Hernandez</span></h1>
        <h2 className="text-3xl">Desarrollador Frontend especializado en Angular y apasionado por los videojuegos.</h2>
      </section>
      <section className="flex flex-col justify-center w-[90%] absolute bottom-4 gap-4 text-center sm:flex-row sm:static">
        <Link href={'/projects'} className="bg-white text-blue-600 px-6 py-4 rounded-md uppercase">Ver proyectos</Link>
        <Link href={'/contact'} className="bg-blue-600 px-6 py-4 rounded-md uppercase">Contáctame</Link>
      </section>
    </main>
  );
}
