"use server";

import {
  FavoriteProjectUseCase,
  Input,
} from "@/domain/use-cases/favorite-project";

import { favoriteProjectRepository } from "../repositories";

export const favoriteProject = (input: Input) =>
  new FavoriteProjectUseCase(favoriteProjectRepository).execute(input);
