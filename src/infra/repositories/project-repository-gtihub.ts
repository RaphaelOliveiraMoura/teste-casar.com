import { Project } from "@/domain/entities/project";
import { IProjectRepository } from "@/domain/repositories/project-repository";

import { HttpClientServiceGithub } from "../services/http-client-service-github";

export class ProjectRepositoryCookies implements IProjectRepository {
  constructor(private readonly httpClient: HttpClientServiceGithub) {}

  async getProjectsByUser(): Promise<{ projects: Project[] }> {
    return { projects: [] };
  }
}
