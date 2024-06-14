import { Project } from "@/domain/entities/project";
import { ProjectRepository } from "@/domain/repositories/project-repository";
import { CookiesService } from "@/domain/services/cookies-service";

export class ProjectRepositoryCookies implements ProjectRepository {
  private PROJECTS_COOKIE_KEY = "PROJECTS_COOKIE_KEY";

  constructor(private readonly cookies: CookiesService) {}

  async getFavoriteProjects(): Promise<{ projects: Project[] }> {
    const projectsCookie = await this.cookies.get(this.PROJECTS_COOKIE_KEY);
    if (!projectsCookie) return { projects: [] };

    const projects = JSON.parse(projectsCookie);
    return { projects };
  }

  async favoriteProject(project: Project): Promise<void> {
    const { projects } = await this.getFavoriteProjects();

    const alreadyFavorite = projects.find(({ id }) => id === project.id);
    if (alreadyFavorite) return;

    const updatedProjects = [...projects, project];

    await this.cookies.set(
      this.PROJECTS_COOKIE_KEY,
      JSON.stringify(updatedProjects),
    );
  }

  async unFavoriteProject(project: Project): Promise<void> {
    const { projects } = await this.getFavoriteProjects();

    const indexToRemove = projects.findIndex(({ id }) => id === project.id);
    if (indexToRemove < 0) return;

    projects.splice(indexToRemove, 1);

    await this.cookies.set(this.PROJECTS_COOKIE_KEY, JSON.stringify(projects));
  }
}
