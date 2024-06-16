import { vi } from "vitest";

import { Project, ProjectDto } from "@/domain/entities/project";
import { IFavoriteProjectRepository } from "@/domain/repositories/favorite-project-repository";

export class FavoriteProjectRepositoryMock
  implements IFavoriteProjectRepository
{
  constructor(private projects: ProjectDto[]) {}

  public getFavoriteProjectsFn = vi.fn();
  public favoriteProjectFn = vi.fn();
  public unFavoriteProjectFn = vi.fn();

  async getFavoriteProjects(): Promise<{ projects: Project[] }> {
    this.getFavoriteProjectsFn();
    return { projects: this.projects.map((p) => new Project(p)) };
  }

  async favoriteProject(project: Project): Promise<void> {
    this.favoriteProjectFn(project);
  }

  async unFavoriteProject(project: Project): Promise<void> {
    this.unFavoriteProjectFn(project);
  }
}
