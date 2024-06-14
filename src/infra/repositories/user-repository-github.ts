import { UserRepository } from "@/domain/repositories/user-repository";
import { HttpClientService } from "@/domain/services/http-client-service";

export class UserRepositoryGithub implements UserRepository {
  constructor(private readonly httpClient: HttpClientService) {}

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
