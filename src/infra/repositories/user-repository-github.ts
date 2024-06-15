import { IUserRepository } from "@/domain/repositories/user-repository";

import { HttpClientServiceGithub } from "../services/http-client-service-github";

export class UserRepositoryGithub implements IUserRepository {
  constructor(private readonly httpClient: HttpClientServiceGithub) {}

  async getUserDetails(id: string) {
    if (id !== "raphael") return null;

    return {
      user: {
        name: "Elliot Alderson",
        id: "@mr_robot",
        imageUrl: "",
        description:
          "Trabalha com segurança cibernética, experiencia em empresas multinacionais.",
      },
    };
  }
}
