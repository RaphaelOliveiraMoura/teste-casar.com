import { IUserRepository } from "@/domain/repositories/user-repository";

import { HttpClientServiceGithub } from "../services/http-client-service-github";

export class UserRepositoryGithub implements IUserRepository {
  constructor(private readonly httpClient: HttpClientServiceGithub) {}

  async getUserDetails(id: string) {
    const { data, status } = await this.httpClient.get<GetUserGithubResponse>(
      `/users/${id}`,
    );

    if (status === 404) return null;

    return {
      user: {
        name: data.name,
        id: data.login,
        imageUrl: data.avatar_url,
        description: data.bio,
      },
    };
  }
}

type GetUserGithubResponse = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};
