import { User } from "../entities/user";
import { IUserRepository } from "../repositories/user-repository";

export class GetUserDetailsUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.repository.getUserDetails(input.id);
    return user;
  }
}

type Input = {
  id: string;
};

type Output = {
  user: User;
} | null;
