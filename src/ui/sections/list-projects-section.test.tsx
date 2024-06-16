import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import { ListProjectsSection } from "./list-projects-section";

test("<ListProjectsSection />", async () => {
  const projects = [
    {
      id: "1",
      title: "mock project",
      description: "project description",
      techs: ["JavaScript"],
      updatedAt: new Date().toISOString(),
      favorite: false,
    },
  ];

  const loadMoreProject = vi.fn();

  const snapshot = render(
    <ListProjectsSection
      projects={projects}
      loadMoreProjects={loadMoreProject}
    />,
  );

  expect(screen.getByText(projects[0].title)).toBeDefined();
  expect(snapshot).toMatchSnapshot();
});
