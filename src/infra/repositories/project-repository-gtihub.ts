import { Project } from "@/domain/entities/project";
import { IProjectRepository } from "@/domain/repositories/project-repository";

import { HttpClientServiceGithub } from "../services/http-client-service-github";

export class ProjectRepositoryCookies implements IProjectRepository {
  constructor(private readonly httpClient: HttpClientServiceGithub) {}

  async getProjectsByUser(id: string): Promise<{ projects: Project[] }> {
    const { data } =
      await this.httpClient.get<ListUserRepositoriesGithubResponse>(
        `/users/${id}/repos`,
      );

    return {
      projects: data.map(
        (repo) =>
          new Project({
            id: String(repo.id),
            description: repo.description,
            techs: repo.topics,
            title: repo.name,
            updatedAt: repo.updated_at,
          }),
      ),
    };
  }
}

type ListUserRepositoriesGithubResponse = {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: 1;
    avatar_url: string;
    url: string;
  };
  private: boolean;
  description: string;
  fork: boolean;
  language: null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  open_issues_count: number;
  topics: string[];
  visibility: "public";
  pushed_at: string;
  created_at: string;
  updated_at: string;
}[];
