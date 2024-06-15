import { FavoriteProjectUseCase } from "@/domain/use-cases/favorite-project";

import { favoriteProjectRepository } from "../repositories";

export const favoriteProject = new FavoriteProjectUseCase(
  favoriteProjectRepository,
);
