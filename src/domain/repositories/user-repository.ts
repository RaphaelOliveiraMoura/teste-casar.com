import { User } from "../entities/user";

export interface IUserRepository {
  getUserDetails: (identifier: string) => Promise<{ user: User } | null>;
}
