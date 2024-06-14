import { Project } from "../entities/project";
import { ProjectRepository } from "../repositories/project-repository";

export class GetFavoriteProjectsUseCase {
  constructor(private readonly repository: ProjectRepository) {}

  async execute(): Promise<Output> {
    const favoriteProjects = await this.repository.getFavoriteProjects();
    return favoriteProjects;
  }
}

type Output = {
  projects: Project[];
};
