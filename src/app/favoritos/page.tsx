import { getFavoriteProjects } from "@/main/use-cases";
import { ListProjectsSection } from "@/ui/sections/list-projects-section";

export default async function Page() {
  const { projects } = await getFavoriteProjects();

  return (
    <div>
      <h1 className="mb-8 text-center text-xl font-semibold text-primary">
        Meus Favoritos
      </h1>
      <div className="m-auto max-w-[800px]">
        <ListProjectsSection projects={projects.map((p) => p.toObject())} />
      </div>
    </div>
  );
}
