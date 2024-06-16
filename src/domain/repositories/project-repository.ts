import { Project } from "../entities/project";

export interface IProjectRepository {
  getProjectsByUser: (
    id: string,
    page?: number,
  ) => Promise<{ projects: Project[]; hasNextPage: boolean }>;
}
