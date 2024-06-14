import { FavoriteProjectUseCase } from "@/domain/use-cases/favorite-project";

import { projectRepository } from "../repositories";

export const favoriteProject = new FavoriteProjectUseCase(projectRepository);
