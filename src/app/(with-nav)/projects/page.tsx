import InfoCard from "@/components/InfoCard/InfoCard";
import { projects } from "@/core/constants/projects.constants";
import { Project } from "@/lib/models/Project";

export default async function Projects() {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  //console.log(await res.json())
  const projectsData: Project[] = projects;

  return (
    <main>
      <h1>Proyectos</h1>
      <section className="flex flex-col items-center mt-12 gap-10">
        {
          projectsData.map((project) => {
            return <InfoCard
              title={ project.Title }
              key={ project.Title.toString() }
              link={ project.LiveUrl }
              repoLink={ project.RepoUrl }
              icon="pi-code"
              description={ project.Description }
              tags={ project.Skills.map(sk => sk.Name) } />
            }
          )
        }
        
      </section>
    </main>        
  );
}