import { User } from "../entities/user";
import { IUserRepository } from "../repositories/user-repository";

export class GetUserDetailsUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.repository.getUserDetails(input.identifier);
    return user;
  }
}

type Input = {
  identifier: string;
};

type Output = {
  user: User;
} | null;
