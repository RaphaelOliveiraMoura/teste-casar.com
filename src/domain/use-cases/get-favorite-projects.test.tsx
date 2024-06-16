import { expect, test } from "vitest";

import { FavoriteProjectRepositoryMock } from "@/infra/repositories/favorite-project-repository-mock";

import { GetFavoriteProjectsUseCase } from "./get-favorite-projects";

test("GetFavoriteProjectsUseCase", async () => {
  const repository = new FavoriteProjectRepositoryMock([
    {
      id: "1",
      title: "mock project",
      description: "project description",
      techs: ["JavaScript"],
      updatedAt: new Date().toISOString(),
      favorite: false,
    },
  ]);

  const usecase = new GetFavoriteProjectsUseCase(repository);

  const result = await usecase.execute();

  expect(result.projects).toHaveLength(1);

  expect(repository.getFavoriteProjectsFn).toReturnTimes(1);
});
