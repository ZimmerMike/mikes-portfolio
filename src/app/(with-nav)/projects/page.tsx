import InfoCard from "@/components/InfoCard/InfoCard";

export default function Projects() {
  return (
    <main>
      <h1>Proyectos</h1>
      <section className="flex flex-col items-center mt-12">
        <InfoCard
          title="El titulo"
          subtitle="Subtitulo"
          period="17/06/2024 - Presente" />
      </section>
    </main>        
  );
}