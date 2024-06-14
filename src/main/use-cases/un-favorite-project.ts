import { UnFavoriteProjectUseCase } from "@/domain/use-cases/un-favorite-project";

import { projectRepository } from "../repositories";

export const unFavoriteProject = new UnFavoriteProjectUseCase(
  projectRepository,
);
