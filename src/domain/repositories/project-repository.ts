import { Project } from "../entities/project";

export interface IProjectRepository {
  getProjectsByUser: (identifier: string) => Promise<{ projects: Project[] }>;
}
