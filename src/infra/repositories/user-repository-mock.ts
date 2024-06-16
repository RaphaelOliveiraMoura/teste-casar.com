import { vi } from "vitest";

import { User } from "@/domain/entities/user";
import { IUserRepository } from "@/domain/repositories/user-repository";

export class UserRepositoryMock implements IUserRepository {
  constructor(private user: User) {}

  public getUserDetailsFn = vi.fn();

  async getUserDetails(id: string) {
    this.getUserDetailsFn(id);

    return { user: this.user };
  }
}
