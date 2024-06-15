import { User } from "../entities/user";

export interface IUserRepository {
  getUserDetails: (id: string) => Promise<{ user: User } | null>;
}
