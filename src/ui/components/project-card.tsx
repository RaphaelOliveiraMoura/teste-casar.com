import { Project } from "@/domain/entities/project";

import { FavoriteButton } from "./favorite-button";
import { cn } from "../services/classname";

type ProjectCardProps = {
  project: Project;
};
const colorsMap = {
  c: "bg-cyan-300",
  "c++": "bg-cyan-600",
  "c#": "bg-cyan-800",
  go: "bg-pink-700",
  java: "bg-blue-300",
  javascript: "bg-[#F5DA79]",
  php: "bg-green-300",
  python: "bg-green-600",
  ruby: "bg-red-300",
  rust: "bg-red-600",
  scala: "bg-yellow-300",
  swift: "bg-yellow-600",
  typescript: "bg-[#3276C6]",
  html: "bg-[#FF4343]",
} as const;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex gap-4 rounded-sm border p-4">
      <div className="grid flex-1 gap-2">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="max-w-[700px]">{project.description}</p>

        <div className="flex flex-col gap-4 text-sm md:flex-row">
          {project.techs.map((tech) => (
            <div key={tech} className="flex items-center gap-1">
              <div
                className={cn(
                  "size-4 rounded-full",
                  colorsMap[tech.toLowerCase() as keyof typeof colorsMap] ||
                    "bg-black",
                )}
              ></div>
              <span>{tech}</span>
            </div>
          ))}

          <div>
            Updated on{" "}
            {project.updatedAt.toLocaleDateString(undefined, {
              dateStyle: "medium",
            })}
          </div>
        </div>
      </div>
      <div>
        <FavoriteButton project={project.toObject()} />
      </div>
    </article>
  );
}
