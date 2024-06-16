import { getFavoriteProjects } from "@/main/use-cases";
import { ListProjectsSection } from "@/ui/sections/list-projects-section";

export default async function Page() {
  const { projects } = await getFavoriteProjects.execute();

  return (
    <div>
      <h1 className="mb-8 text-center text-xl font-semibold text-primary">
        Meus Favoritos
      </h1>
      <div className="m-auto max-w-[800px]">
        <ListProjectsSection projects={projects} />
      </div>
    </div>
  );
}
