import { GetUserProjectsUseCase } from "@/domain/use-cases/get-user-projects";

import { projectRepository, favoriteProjectRepository } from "../repositories";

export const getUserProject = new GetUserProjectsUseCase(
  projectRepository,
  favoriteProjectRepository,
);
