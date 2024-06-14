import { Project } from "../entities/project";
import { IProjectRepository } from "../repositories/project-repository";

export class GetFavoriteProjectsUseCase {
  constructor(private readonly repository: IProjectRepository) {}

  async execute(): Promise<Output> {
    const { projects } = await this.repository.getFavoriteProjects();
    return { projects };
  }
}

type Output = {
  projects: Project[];
};
