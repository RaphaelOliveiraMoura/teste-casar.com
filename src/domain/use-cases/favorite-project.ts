import { Project } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";

export class FavoriteProjectUseCase {
  constructor(private readonly repository: IFavoriteProjectRepository) {}

  async execute(input: Input): Promise<Output> {
    await this.repository.favoriteProject(input.project);
  }
}

type Input = {
  project: Project;
};

type Output = void;
