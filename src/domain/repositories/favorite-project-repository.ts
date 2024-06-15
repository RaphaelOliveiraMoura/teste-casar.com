import { Project } from "../entities/project";

export interface IFavoriteProjectRepository {
  getFavoriteProjects: () => Promise<{ projects: Project[] }>;

  favoriteProject: (project: Project) => Promise<void>;
  unFavoriteProject: (project: Project) => Promise<void>;
}
