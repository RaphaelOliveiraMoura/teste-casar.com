import { Project } from "../entities/project";

export interface ProjectRepository {
  getFavoriteProjects: () => Promise<{ projects: Project[] }>;

  favoriteProject: (project: Project) => Promise<void>;
  unFavoriteProject: (project: Project) => Promise<void>;
}
