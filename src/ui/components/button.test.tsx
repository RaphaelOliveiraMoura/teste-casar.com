import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { Button } from "./button";

test("<Button />", () => {
  const snapshot = render(<Button>test button</Button>);
  expect(screen.getByRole("button", { name: "test button" })).toBeDefined();
  expect(snapshot).toMatchSnapshot();
});
