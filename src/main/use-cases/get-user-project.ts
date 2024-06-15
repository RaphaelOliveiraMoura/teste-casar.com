import { GetUserProjectsUseCase } from "@/domain/use-cases/get-user-projects";

import { projectRepository } from "../repositories";

export const getUserProject = new GetUserProjectsUseCase(projectRepository);
