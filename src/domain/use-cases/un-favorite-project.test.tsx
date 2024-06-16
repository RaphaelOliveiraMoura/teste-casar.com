import { expect, test } from "vitest";

import { FavoriteProjectRepositoryMock } from "@/infra/repositories/favorite-project-repository-mock";

import { UnFavoriteProjectUseCase } from "./un-favorite-project";
import { Project } from "../entities/project";

test("UnFavoriteProjectUseCase", async () => {
  const project = {
    id: "1",
    title: "mock project",
    description: "project description",
    techs: ["JavaScript"],
    updatedAt: new Date().toISOString(),
    favorite: false,
  };

  const repository = new FavoriteProjectRepositoryMock([]);
  const usecase = new UnFavoriteProjectUseCase(repository);

  await usecase.execute({ project });

  expect(repository.unFavoriteProjectFn).toBeCalledWith(new Project(project));
});
