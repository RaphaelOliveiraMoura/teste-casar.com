import { vi } from "vitest";

import { Project, ProjectDto } from "@/domain/entities/project";
import { IProjectRepository } from "@/domain/repositories/project-repository";

export class ProjectRepositoryMock implements IProjectRepository {
  constructor(private projects: ProjectDto[]) {}

  public getProjectsByUserFn = vi.fn();

  async getProjectsByUser(
    id: string,
    page = 1,
  ): Promise<{ projects: Project[]; hasNextPage: boolean }> {
    this.getProjectsByUserFn(id, page);
    return {
      hasNextPage: false,
      projects: this.projects.map((p) => new Project(p)),
    };
  }
}
