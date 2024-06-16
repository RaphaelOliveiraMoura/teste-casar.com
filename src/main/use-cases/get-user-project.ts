"use server";

import { ProjectDto } from "@/domain/entities/project";
import {
  GetUserProjectsUseCase,
  Input,
} from "@/domain/use-cases/get-user-projects";

import { projectRepository, favoriteProjectRepository } from "../repositories";

const useCase = new GetUserProjectsUseCase(
  projectRepository,
  favoriteProjectRepository,
);

export const getUserProject = (input: Input) => useCase.execute(input);

export const getUserProjectRaw = async (
  input: Input,
): Promise<{
  projects: ProjectDto[];
  hasNextPage: boolean;
}> => {
  const result = await useCase.execute(input);

  return {
    projects: result.projects.map((p) => p.toObject()),
    hasNextPage: result.hasNextPage,
  };
};
