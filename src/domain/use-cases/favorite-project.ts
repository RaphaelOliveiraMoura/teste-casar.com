import { Project } from "../entities/project";
import { ProjectRepository } from "../repositories/project-repository";

export class FavoriteProjectUseCase {
  constructor(private readonly repository: ProjectRepository) {}

  async execute(input: Input): Promise<Output> {
    await this.repository.favoriteProject(input.project);
  }
}

type Input = {
  project: Project;
};

type Output = void;
