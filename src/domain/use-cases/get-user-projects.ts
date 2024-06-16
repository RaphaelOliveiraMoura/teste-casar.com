import { Project } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";
import { IProjectRepository } from "../repositories/project-repository";

export class GetUserProjectsUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly favoriteProjectRepository: IFavoriteProjectRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const { projects } = await this.projectRepository.getProjectsByUser(
      input.id,
    );

    const { projects: favoriteProjects } =
      await this.favoriteProjectRepository.getFavoriteProjects();

    for (const project of projects) {
      if (favoriteProjects.some((p) => p.id === project.id)) {
        project.setFavorite(true);
      }
    }

    return { projects };
  }
}

type Input = {
  id: string;
};

type Output = {
  projects: Project[];
};
