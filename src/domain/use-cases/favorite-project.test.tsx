import { expect, test } from "vitest";

import { FavoriteProjectRepositoryMock } from "@/infra/repositories/favorite-project-repository-mock";

import { FavoriteProjectUseCase } from "./favorite-project";
import { Project } from "../entities/project";

test("FavoriteProjectUseCase", async () => {
  const project = {
    id: "1",
    title: "mock project",
    description: "project description",
    techs: ["JavaScript"],
    updatedAt: new Date().toISOString(),
    favorite: false,
  };

  const repository = new FavoriteProjectRepositoryMock([]);
  const usecase = new FavoriteProjectUseCase(repository);

  await usecase.execute({ project });

  expect(repository.favoriteProjectFn).toBeCalledWith(new Project(project));
});
