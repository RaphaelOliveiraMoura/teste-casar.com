import { Project } from "@/domain/entities/project";

import { ProjectCard } from "../components/project-card";

type ListProjectsSectionProps = {
  projects: Project[];
};

export function ListProjectsSection({ projects }: ListProjectsSectionProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
        {projects.length === 0 && (
          <p className="text-center">Nenhum repositório encontrado</p>
        )}
      </ul>
    </div>
  );
}
