import { Project } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";

export class GetFavoriteProjectsUseCase {
  constructor(private readonly repository: IFavoriteProjectRepository) {}

  async execute(): Promise<Output> {
    const { projects } = await this.repository.getFavoriteProjects();
    return { projects };
  }
}

type Output = {
  projects: Project[];
};
