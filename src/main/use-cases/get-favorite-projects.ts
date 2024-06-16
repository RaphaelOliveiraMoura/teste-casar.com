"use server";

import { GetFavoriteProjectsUseCase } from "@/domain/use-cases/get-favorite-projects";

import { favoriteProjectRepository } from "../repositories";

export const getFavoriteProjects = async () =>
  new GetFavoriteProjectsUseCase(favoriteProjectRepository).execute();
