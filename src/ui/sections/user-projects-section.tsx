import { Project } from "@/domain/entities/project";

import { ProjectCard } from "../components/project-card";

type UserProjectsSectionProps = {
  projects: Project[];
};

export function UserProjectsSection({ projects }: UserProjectsSectionProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
