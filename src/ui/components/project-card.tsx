import { Heart } from "lucide-react";

import { Project } from "@/domain/entities/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex gap-4 rounded-sm border p-4">
      <div className="grid flex-1 gap-2">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="max-w-[700px]">{project.description}</p>

        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="size-4 rounded-full bg-blue-500"></div>
            <span>Typescript</span>
          </div>

          <div>
            Updated on{" "}
            {project.updatedAt.toLocaleDateString(undefined, {
              dateStyle: "medium",
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-full border border-primary p-3">
          <Heart className="fill-primary text-primary" />
        </div>
      </div>
    </article>
  );
}
