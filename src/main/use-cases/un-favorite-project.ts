"use server";

import {
  UnFavoriteProjectUseCase,
  Input,
} from "@/domain/use-cases/un-favorite-project";

import { favoriteProjectRepository } from "../repositories";

export const unFavoriteProject = (input: Input) =>
  new UnFavoriteProjectUseCase(favoriteProjectRepository).execute(input);
