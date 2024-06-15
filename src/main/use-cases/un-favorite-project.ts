import { UnFavoriteProjectUseCase } from "@/domain/use-cases/un-favorite-project";

import { favoriteProjectRepository } from "../repositories";

export const unFavoriteProject = new UnFavoriteProjectUseCase(
  favoriteProjectRepository,
);
