import { vi } from "vitest";

vi.mock("react", async (importOriginal) => {
  const originalModule = await importOriginal<typeof import("react")>();
  return {
    ...originalModule,
    useOptimistic: originalModule.useState,
  };
});

vi.mock("next/navigation", async (importOriginal) => {
  const originalModule =
    await importOriginal<typeof import("next/navigation")>();

  const replace = vi.fn();

  return {
    ...originalModule,
    useRouter: vi.fn().mockReturnValue({ replace }),
    useSearchParams: vi.fn().mockReturnValue({ get: () => "" }),
  };
});
