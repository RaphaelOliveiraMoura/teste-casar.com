import { Project } from "../entities/project";
import { IFavoriteProjectRepository } from "../repositories/favorite-project-repository";
import { IProjectRepository } from "../repositories/project-repository";

export class GetUserProjectsUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly favoriteProjectRepository: IFavoriteProjectRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const { projects, hasNextPage } =
      await this.projectRepository.getProjectsByUser(input.id, input.page);

    const { projects: favoriteProjects } =
      await this.favoriteProjectRepository.getFavoriteProjects();

    for (const project of projects) {
      if (favoriteProjects.some((p) => p.id === project.id)) {
        project.setFavorite(true);
      }
    }

    return { projects, hasNextPage };
  }
}

export type Input = {
  id: string;
  page?: number;
};

type Output = {
  projects: Project[];
  hasNextPage: boolean;
};
