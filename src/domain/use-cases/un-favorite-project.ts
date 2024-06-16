import { Project, ProjectDto } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";

export class UnFavoriteProjectUseCase {
  constructor(private readonly repository: IFavoriteProjectRepository) {}

  async execute(input: Input): Promise<void> {
    await this.repository.unFavoriteProject(new Project(input.project));
  }
}

export type Input = {
  project: ProjectDto;
};
