import { User } from "../entities/user";
import { UserRepository } from "../repositories/user-repository";

export class GetUserDetailsUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.repository.getUserWithProjects(input.identifier);
    return user;
  }
}

type Input = {
  identifier: string;
};

type Output = {
  user: User;
} | null;
