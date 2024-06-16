import { cleanup, render, screen } from "@testing-library/react";
import { vi, expect, test, describe, beforeEach } from "vitest";

import * as useCases from "@/main/use-cases";

import Page from "./page";

vi.mock("@/main/use-cases", () => ({
  getUserDetails: {
    execute: vi.fn().mockReturnValue({
      user: {
        id: "1",
        name: "user test",
        description: "user description",
        imageUrl: "https://google.com",
      },
    }),
  },
  getUserProject: vi.fn().mockReturnValue({
    projects: [],
  }),
  getUserProjectRaw: vi.fn().mockReturnValue({
    projects: [],
  }),
}));

describe("/detalhes <Page />", () => {
  beforeEach(() => cleanup());

  test("should render data correctly", async () => {
    const ResolvedPage = await Page({ searchParams: { q: "test" } });
    render(ResolvedPage);

    expect(screen.getByText("user test")).toBeDefined();
    expect(screen.getByText("user description")).toBeDefined();

    expect(useCases.getUserDetails.execute).toHaveBeenCalledTimes(1);
    expect(useCases.getUserProject).toHaveBeenCalledTimes(1);
  });

  test("should render not found user", async () => {
    vi.spyOn(useCases.getUserDetails, "execute").mockResolvedValue(null);

    const ResolvedPage = await Page({ searchParams: { q: "test" } });
    render(ResolvedPage);

    expect(screen.queryByText("user test")).toBeFalsy();
    expect(screen.queryByText("user description")).toBeFalsy();
    expect(screen.getByText("Nenhum usuário encontrado")).toBeTruthy();

    expect(useCases.getUserDetails.execute).toHaveBeenCalledTimes(1);
  });
});
