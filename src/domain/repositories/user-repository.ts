import { User } from "../entities/user";

export interface IUserRepository {
  getUserWithProjects: (identifier: string) => Promise<{ user: User } | null>;
}
