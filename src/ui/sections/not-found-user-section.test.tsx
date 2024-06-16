import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { NotFoundUserSection } from "./not-found-user-section";

test("<NotFoundUserSection />", async () => {
  const snapshot = render(<NotFoundUserSection searchText="not found text" />);

  expect(screen.getByText(/not found text/gi)).toBeDefined();
  expect(snapshot).toMatchSnapshot();
});
