import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Template from "./template";

test("<Template />", async () => {
  render(<Template>template data</Template>);

  expect(screen.getByText("template data")).toBeDefined();
  expect(screen.getByText("Favoritos")).toBeDefined();
  expect(screen.getByPlaceholderText("Buscar usuário")).toBeDefined();
});
