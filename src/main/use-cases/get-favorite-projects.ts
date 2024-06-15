import { GetFavoriteProjectsUseCase } from "@/domain/use-cases/get-favorite-projects";

import { favoriteProjectRepository } from "../repositories";

export const getFavoriteProjects = new GetFavoriteProjectsUseCase(
  favoriteProjectRepository,
);
