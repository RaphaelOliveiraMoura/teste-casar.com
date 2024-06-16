import { render, screen } from "@testing-library/react";
import { vi, expect, test } from "vitest";

import * as useCases from "@/main/use-cases";

import Page from "./page";

vi.mock("@/main/use-cases", () => ({
  getFavoriteProjects: vi.fn().mockReturnValue({
    projects: [],
  }),
}));

test("/favoritos <Page />", async () => {
  const ResolvedPage = await Page();
  render(ResolvedPage);

  expect(screen.getByText("Meus Favoritos")).toBeDefined();
  expect(useCases.getFavoriteProjects).toHaveBeenCalledTimes(1);
});
