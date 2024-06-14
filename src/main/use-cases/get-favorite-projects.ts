import { GetFavoriteProjectsUseCase } from "@/domain/use-cases/get-favorite-projects";

import { projectRepository } from "../repositories";

export const getFavoriteProjects = new GetFavoriteProjectsUseCase(
  projectRepository,
);
