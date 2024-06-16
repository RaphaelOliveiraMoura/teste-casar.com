"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";

import { Project, ProjectDto } from "@/domain/entities/project";

import { ProjectCard } from "../components/project-card";

type ListProjectsSectionProps = {
  projects: ProjectDto[];
  loadMoreProjects?: (
    page: number,
  ) => Promise<{ projects: ProjectDto[]; hasNextPage: boolean }>;
};

export function ListProjectsSection({
  projects: initialProjectsState,
  loadMoreProjects,
}: ListProjectsSectionProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const reachedLimitPages = useRef(!loadMoreProjects);

  const [projects, setProjects] = useState<ProjectDto[]>([]);

  useEffect(() => {
    setProjects(initialProjectsState);
    reachedLimitPages.current = false;
  }, [initialProjectsState]);

  const [isLoading, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState(2);

  const handleLoadMore = useCallback(async () => {
    if (reachedLimitPages.current || !loadMoreProjects) return;
    if (isLoading) return;

    startTransition(async () => {
      const { projects: newProjects, hasNextPage } =
        await loadMoreProjects(currentPage);
      setProjects((prev) => [...prev, ...newProjects]);
      reachedLimitPages.current = !hasNextPage;
    });

    setCurrentPage((prev) => prev + 1);
  }, [isLoading, loadMoreProjects, currentPage]);

  useEffect(() => {
    if (reachedLimitPages.current) return;

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        handleLoadMore();
      }
    });

    const ref = loaderRef.current;

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [handleLoadMore]);

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={new Project(project)} />
          </li>
        ))}
        {!isLoading && projects.length === 0 && (
          <p className="text-center">Nenhum repositório encontrado</p>
        )}
        <div ref={loaderRef}>
          {isLoading && <div className="text-center">carregando ...</div>}
        </div>
      </ul>
    </div>
  );
}
