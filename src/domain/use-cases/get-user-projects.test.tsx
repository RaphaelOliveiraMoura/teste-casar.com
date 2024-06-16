import { expect, test } from "vitest";

import { FavoriteProjectRepositoryMock } from "@/infra/repositories/favorite-project-repository-mock";
import { ProjectRepositoryMock } from "@/infra/repositories/project-repository-mock";

import { GetUserProjectsUseCase } from "./get-user-projects";

test("GetUserProjectsUseCase", async () => {
  const projectRepository = new ProjectRepositoryMock([
    {
      id: "1",
      title: "mock project",
      description: "project description",
      techs: ["JavaScript"],
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "mock project 2",
      description: "project description 2",
      techs: ["JavaScript"],
      updatedAt: new Date().toISOString(),
    },
  ]);
  const favoriteProjectRepository = new FavoriteProjectRepositoryMock([
    {
      id: "2",
      title: "mock project 2",
      description: "project description 2",
      techs: ["JavaScript"],
      updatedAt: new Date().toISOString(),
    },
  ]);
  const usecase = new GetUserProjectsUseCase(
    projectRepository,
    favoriteProjectRepository,
  );

  const result = await usecase.execute({ id: "id-1", page: 1 });

  expect(result.projects).toHaveLength(2);
  expect(result.projects[0].favorite).toEqual(false);
  expect(result.projects[1].favorite).toEqual(true);

  expect(projectRepository.getProjectsByUserFn).toBeCalledWith("id-1", 1);
});
