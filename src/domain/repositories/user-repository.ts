import { User } from "../entities/user";

export interface UserRepository {
  getUserWithProjects: (identifier: string) => Promise<{ user: User } | null>;
}
