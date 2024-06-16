import { vi } from "vitest";

vi.mock("next/font/google", () => ({ Inter: () => ({ className: "" }) }));

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

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null;
  rootMargin: string = ``;
  thresholds: readonly number[] = [];

  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver;
