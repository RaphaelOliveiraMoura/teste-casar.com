import { IUserRepository } from "@/domain/repositories/user-repository";
import { IHttpClientService } from "@/domain/services/http-client-service";

export class UserRepositoryGithub implements IUserRepository {
  constructor(private readonly httpClient: IHttpClientService) {}

  async getUserWithProjects(identifier: string) {
    if (identifier !== "raphael") return null;

    return {
      user: {
        name: "Elliot Alderson",
        identifier: "@mr_robot",
        imageUrl: "",
        description:
          "Trabalha com segurança cibernética, experiencia em empresas multinacionais.",
        projects: [],
      },
    };
  }
}
