import { FavoriteProjectRepositoryCookies } from "@/infra/repositories/favorite-project-repository-cookies";
import { ProjectRepositoryCookies } from "@/infra/repositories/project-repository-gtihub";
import { UserRepositoryGithub } from "@/infra/repositories/user-repository-github";

import { cookiesService, httpClientGithubService } from "./services";

export const userRepository = new UserRepositoryGithub(httpClientGithubService);

export const projectRepository = new ProjectRepositoryCookies(
  httpClientGithubService,
);

export const favoriteProjectRepository = new FavoriteProjectRepositoryCookies(
  cookiesService,
);
