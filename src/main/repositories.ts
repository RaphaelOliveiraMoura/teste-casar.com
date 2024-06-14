import { ProjectRepositoryCookies } from "@/infra/repositories/project-repository-cookies";
import { UserRepositoryGithub } from "@/infra/repositories/user-repository-github";

import { cookiesService, httpClientService } from "./services";

export const userRepository = new UserRepositoryGithub(httpClientService);
export const projectRepository = new ProjectRepositoryCookies(cookiesService);
