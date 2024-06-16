import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { Project } from "@/domain/entities/project";

import { ProjectCard } from "./project-card";

test("<ProjectCard />", () => {
  const snapshot = render(
    <ProjectCard
      project={
        new Project({
          id: "1",
          title: "mock project",
          description: "project description",
          techs: ["JavaScript"],
          updatedAt: new Date().toISOString(),
          favorite: false,
        })
      }
    />,
  );

  expect(screen.getByText("mock project")).toBeDefined();
  expect(screen.getByText("project description")).toBeDefined();
  expect(screen.getByText("JavaScript")).toBeDefined();

  expect(snapshot).toMatchSnapshot();
});
