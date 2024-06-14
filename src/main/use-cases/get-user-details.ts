import { GetUserDetailsUseCase } from "@/domain/use-cases/get-user-details";

import { userRepository } from "../repositories";

export const getUserDetails = new GetUserDetailsUseCase(userRepository);
