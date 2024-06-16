import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter as mockRouter } from "next/navigation";
import { expect, test } from "vitest";

import { SearchInputText } from "./search-input-text";

const { replace } = mockRouter();

test("<SearchInputText />", async () => {
  const snapshot = render(
    <SearchInputText placeholder="text input placeholder" />,
  );

  const input = screen.getByPlaceholderText("text input placeholder");
  expect(input).toBeDefined();

  fireEvent.change(input, { target: { value: "search text" } });

  await waitFor(() =>
    expect(replace).toBeCalledWith("/detalhes?q=search+text"),
  );

  expect(snapshot).toMatchSnapshot();
});
