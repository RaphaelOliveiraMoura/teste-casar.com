import { Project } from "./project";

export interface User {
  identifier: string;
  name: string;
  description: string;
  imageUrl: string;

  projects: Project[];
}
