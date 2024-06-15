import { Project } from "../entities/project";

export interface IProjectRepository {
  getProjectsByUser: (id: string) => Promise<{ projects: Project[] }>;
}
