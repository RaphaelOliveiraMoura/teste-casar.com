import { Project } from "../entities/project";
import { IProjectRepository } from "../repositories/project-repository";

export class GetUserProjectsUseCase {
  constructor(private readonly repository: IProjectRepository) {}

  async execute(input: Input): Promise<Output> {
    const { projects } = await this.repository.getProjectsByUser(
      input.identifier,
    );
    return { projects };
  }
}

type Input = {
  identifier: string;
};

type Output = {
  projects: Project[];
};
