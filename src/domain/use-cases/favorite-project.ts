import { Project, ProjectDto } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";

export class FavoriteProjectUseCase {
  constructor(private readonly repository: IFavoriteProjectRepository) {}

  async execute(input: Input): Promise<void> {
    await this.repository.favoriteProject(new Project(input.project));
  }
}

export type Input = {
  project: ProjectDto;
};
