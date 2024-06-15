import { IUserRepository } from "@/domain/repositories/user-repository";

import { HttpClientServiceGithub } from "../services/http-client-service-github";

export class UserRepositoryGithub implements IUserRepository {
  constructor(private readonly httpClient: HttpClientServiceGithub) {}

  async getUserDetails(identifier: string) {
    if (identifier !== "raphael") return null;

    return {
      user: {
        name: "Elliot Alderson",
        identifier: "@mr_robot",
        imageUrl: "",
        description:
          "Trabalha com segurança cibernética, experiencia em empresas multinacionais.",
      },
    };
  }
}
