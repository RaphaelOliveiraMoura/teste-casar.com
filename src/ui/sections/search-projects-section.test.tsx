import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { SearchProjectsSection } from "./search-projects-section";

test("<SearchProjectsSection />", async () => {
  const snapshot = render(<SearchProjectsSection />);

  expect(
    screen.getByText("Procure pelo Nome ou Nome de Usuário"),
  ).toBeDefined();

  expect(snapshot).toMatchSnapshot();
});
