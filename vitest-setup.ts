import { vi } from "vitest";

vi.mock("react", async (importOriginal) => {
  const originalModule = await importOriginal<typeof import("react")>();
  return {
    ...originalModule,
    useOptimistic: originalModule.useState,
  };
});
