import { expect, test } from "vitest";

import { UserRepositoryMock } from "@/infra/repositories/user-repository-mock";

import { GetUserDetailsUseCase } from "./get-user-details";

test("GetUserDetailsUseCase", async () => {
  const user = {
    id: "1",
    name: "user test",
    description: "user description",
    imageUrl: "https://google.com",
  };

  const repository = new UserRepositoryMock(user);

  const usecase = new GetUserDetailsUseCase(repository);

  const result = await usecase.execute({ id: "id-1" });

  expect(result).toEqual({ user });

  expect(repository.getUserDetailsFn).toBeCalledWith("id-1");
});
