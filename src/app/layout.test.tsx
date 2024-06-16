import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Layout from "./layout";

test("<Layout />", async () => {
  render(<Layout>main data</Layout>);

  expect(screen.getByText("main data")).toBeDefined();
});
