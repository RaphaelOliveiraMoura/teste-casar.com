import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { vi, expect, test, describe, beforeEach } from "vitest";

import { favoriteProject } from "@/main/use-cases/favorite-project";
import { unFavoriteProject } from "@/main/use-cases/un-favorite-project";

import { FavoriteButton } from "./favorite-button";

vi.mock("@/main/use-cases/favorite-project", () => ({
  favoriteProject: vi.fn(),
}));

vi.mock("@/main/use-cases/un-favorite-project", () => ({
  unFavoriteProject: vi.fn(),
}));

describe("<FavoriteButton />", () => {
  beforeEach(() => cleanup());

  const project = {
    id: "1",
    title: "mock project",
    description: "project description",
    techs: ["JavaScript"],
    updatedAt: new Date().toISOString(),
    favorite: false,
  };

  test("check if show add to favorite icon when not favorite", () => {
    render(<FavoriteButton project={{ ...project, favorite: false }} />);
    expect(
      screen.getByRole("button", { name: "Add as favorite" }),
    ).toBeDefined();
  });

  test("check if show remove from favorite icon when is favorite", () => {
    render(<FavoriteButton project={{ ...project, favorite: true }} />);
    expect(
      screen.getByRole("button", { name: "Remove from favorite" }),
    ).toBeDefined();
  });

  test("toggle favorite button", async () => {
    const projectToMatch = { ...project, favorite: false };
    render(<FavoriteButton project={projectToMatch} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(favoriteProject).toBeCalledWith({ project: projectToMatch });

    fireEvent.click(button);
    expect(unFavoriteProject).toBeCalledWith({ project: projectToMatch });
  });
});
